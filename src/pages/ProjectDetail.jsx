import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "../components/Layout";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-advance the slider
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating && project?.images?.length > 1) {
        goToSlide((currentSlide + 1) % project.images.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating, project]);

  const goToSlide = (slideIndex) => {
    if (currentSlide === slideIndex || isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(slideIndex);
    setTimeout(() => setIsAnimating(false), 500); // Match this with CSS transition time
  };

  const nextSlide = () => {
    if (project?.images?.length > 1) {
      goToSlide((currentSlide + 1) % project.images.length);
    }
  };

  const prevSlide = () => {
    if (project?.images?.length > 1) {
      goToSlide((currentSlide - 1 + project.images.length) % project.images.length);
    }
  };

  if (!project) {
    return (
      <Layout>
        <div className="max-w-6xl mx-auto text-center py-8 px-4 md:py-12">
          <h1 className="text-xl md:text-2xl font-bold text-forest-900 mb-4">
            Project not found
          </h1>
          <Link
            to="/projects"
            className="text-forest-600 hover:text-forest-700"
          >
            Back to projects
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-1 md:px-6">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-forest-600 hover:text-forest-700 mb-4 md:mb-8"
        >
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
          <span>Back to projects</span>
        </Link>

        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xs overflow-hidden">
          {/* Modern image slider */}
          <div className="relative aspect-video overflow-hidden">
            {/* Images */}
            <div className="relative h-full">
              {project.images?.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    index === currentSlide
                      ? "opacity-100 z-10 translate-x-0"
                      : index < currentSlide
                        ? "opacity-0 -translate-x-full"
                        : "opacity-0 translate-x-full"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            {project.images?.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-forest-700/40 hover:bg-forest-700/60 text-white rounded-full p-1 md:p-2 backdrop-blur-sm transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-forest-700/40 hover:bg-forest-700/60 text-white rounded-full p-1 md:p-2 backdrop-blur-sm transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>

                {/* Slide indicators */}
                <div className="absolute bottom-2 md:bottom-4 left-0 right-0 z-20 flex justify-center gap-1 md:gap-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all ${
                        index === currentSlide
                          ? "bg-white scale-125"
                          : "bg-white/50 hover:bg-white/70"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="p-4 md:p-8">
            <div className="flex items-start justify-between gap-2 md:gap-4 mb-4 md:mb-6">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-forest-900 tracking-tight">
                {project.title}
              </h1>
              <div className="flex gap-2 md:gap-3 flex-shrink-0">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 md:p-2 text-forest-600 hover:text-forest-700 hover:bg-forest-50 rounded-lg transition-colors"
                  >
                    <Github className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 md:p-2 text-forest-600 hover:text-forest-700 hover:bg-forest-50 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                )}
              </div>
            </div>

            <div className="prose prose-forest max-w-none mb-4 md:mb-6">
              <p className="text-base md:text-lg text-forest-700 mb-3 md:mb-4">
                {project.description}
              </p>
              <h2 className="text-lg md:text-xl font-semibold text-forest-900 mb-2 md:mb-3 tracking-tight">
                Key Features
              </h2>
              <ul className="list-disc list-inside space-y-1 md:space-y-2 text-sm md:text-base text-forest-700">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5 md:gap-2 mt-4 md:mt-6">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 md:px-3 py-0.5 md:py-1 bg-sage-100 text-forest-700 rounded-full text-xs md:text-sm font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
