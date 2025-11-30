import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import { projects } from '../data/projects';

export default function Projects() {
  // Function to truncate text to roughly 2 lines (about 100-120 characters)
  const truncateDescription = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <Layout>
      <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-indigo-100/15 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-sky-100/15 to-cyan-100/10 rounded-full translate-y-40 -translate-x-40"></div>
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-400/30 rounded-full animate-ping"></div>
          <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-indigo-400/40 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-sky-400/30 rounded-full animate-pulse delay-700"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              Portfolio
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#203654] to-blue-600 bg-clip-text text-transparent mb-6">
              My Projects
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A collection of data analysis, web scraping, and automation projects that showcase my expertise in transforming raw data into actionable insights.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200/60 relative overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Subtle background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full -translate-y-16 translate-x-16 opacity-60"></div>
                
                <div className="relative z-10">
                  <div className="aspect-video rounded-xl overflow-hidden mb-6">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-900 leading-tight">{project.title}</h2>
                    <ArrowRight className="w-5 h-5 text-[#00C2CB] group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{truncateDescription(project.description)}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}