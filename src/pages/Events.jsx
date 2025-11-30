import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Award, ChevronRight, Code, Terminal, Laptop, X, CheckCircle, ChevronLeft } from 'lucide-react';
import Layout from '../components/Layout';
import { events } from '../data/events';

// Import community logos
import mlsaLogo from "../assets/MLSA ISB.jpg";
import gdgLogo from "../assets/GDG.png";
import devConnectLogo from "../assets/DevConnect.jpg";
import gdgEmiratesLogo from "../assets/GDG Emirates.webp";

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalSlideIndex, setModalSlideIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToModalSlide = (slideIndex) => {
    if (modalSlideIndex === slideIndex || isAnimating) return;
    setIsAnimating(true);
    setModalSlideIndex(slideIndex);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Reset modal slide index when opening a new event
  useEffect(() => {
    setModalSlideIndex(0);
    setIsAnimating(false);
  }, [selectedEvent]);

  const goToSlide = (eventId, slideIndex) => {
    if (getEventSlideState(eventId) === slideIndex || isAnimating) return;
    setIsAnimating(true);
    setEventSlideState(eventId, slideIndex);
    setTimeout(() => setIsAnimating(false), 500); // Match this with CSS transition time
  };

  const nextSlide = (eventId, totalSlides) => {
    if (totalSlides > 1) {
      const currentSlide = getEventSlideState(eventId);
      goToSlide(eventId, (currentSlide + 1) % totalSlides);
    }
  };

  const prevSlide = (eventId, totalSlides) => {
    if (totalSlides > 1) {
      const currentSlide = getEventSlideState(eventId);
      goToSlide(eventId, (currentSlide - 1 + totalSlides) % totalSlides);
    }
  };

  return (
    <Layout>
      {/* Community Leadership Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-indigo-100/15 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-sky-100/15 to-cyan-100/10 rounded-full translate-y-40 -translate-x-40"></div>
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-400/30 rounded-full animate-ping"></div>
          <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-indigo-400/40 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-sky-400/30 rounded-full animate-pulse delay-700"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 pt-8 pb-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              Leadership & Community
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#203654] to-blue-600 bg-clip-text text-transparent mb-6">
              Community Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Building bridges between technology and community, fostering collaboration and knowledge sharing across diverse platforms and organizations.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Microsoft Learn Student Ambassadors Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200/60 relative overflow-hidden hover:shadow-xl transition-all duration-300 group">
              {/* Subtle background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full -translate-y-16 translate-x-16 opacity-60"></div>
              
              <div className="relative z-10 flex gap-6">
                {/* Left side - Logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-200">
                    <img 
                      src={mlsaLogo} 
                      alt="MLSA Logo" 
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>
                
                {/* Right side - Content */}
                <div className="flex-1 min-w-0">
                  {/* Category tag */}
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-xs font-medium mb-3">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    Microsoft Technologies
                  </div>
                  
                  {/* Organization and role */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 leading-tight">
                    Microsoft Learn Student Ambassadors
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">Islamabad Chapter</p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">General Secretary</span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Leading Pakistan's largest Microsoft student community, driving innovation and technology adoption across universities.
                  </p>
                  
                  {/* Details */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex gap-6 text-xs text-gray-500">
                      <span>
                        <span className="font-medium text-gray-700">Since:</span> 2025
                      </span>
                      <span>
                        <span className="font-medium text-gray-700">Status:</span> Active
                      </span>
                    </div>
                    
                    {/* Verification badge */}
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      <span className="text-emerald-600 text-xs font-medium">Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Developer Groups Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200/60 relative overflow-hidden hover:shadow-xl transition-all duration-300 group">
              {/* Subtle background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-50 to-slate-50 rounded-full -translate-y-16 translate-x-16 opacity-60"></div>
              
              <div className="relative z-10 flex gap-6">
                {/* Left side - Logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-200">
                    <img 
                      src={gdgLogo} 
                      alt="GDG Logo" 
                      className="w-15 h-15 object-contain"
                    />
                  </div>
                </div>
                
                {/* Right side - Content */}
                <div className="flex-1 min-w-0">
                  {/* Category tag */}
                  <div className="inline-flex items-center gap-2 bg-gray-50 text-gray-700 px-3 py-1 rounded-lg text-xs font-medium mb-3">
                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                    Google Technologies
                  </div>
                  
                  {/* Organization and role */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 leading-tight">
                    Google Developer Groups
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">International Islamic University Islamabad</p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">Co-Lead</span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Driving innovation in our university's official Google developer community, fostering technical excellence and collaboration.
                  </p>
                  
                  {/* Details */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex gap-6 text-xs text-gray-500">
                      <span>
                        <span className="font-medium text-gray-700">Since:</span> 2024
                      </span>
                      <span>
                        <span className="font-medium text-gray-700">Status:</span> Completed
                      </span>
                    </div>
                    
                    {/* Verification badge */}
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      <span className="text-emerald-600 text-xs font-medium">Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dev Connect Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200/60 relative overflow-hidden hover:shadow-xl transition-all duration-300 group">
              {/* Subtle background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-stone-50 to-gray-50 rounded-full -translate-y-16 translate-x-16 opacity-60"></div>
              
              <div className="relative z-10 flex gap-6">
                {/* Left side - Logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-200">
                    <img 
                      src={devConnectLogo} 
                      alt="Dev Connect Logo" 
                      className="w-15 h-15 object-contain"
                    />
                  </div>
                </div>
                
                {/* Right side - Content */}
                <div className="flex-1 min-w-0">
                  {/* Category tag */}
                  <div className="inline-flex items-center gap-2 bg-stone-50 text-stone-700 px-3 py-1 rounded-lg text-xs font-medium mb-3">
                    <div className="w-1.5 h-1.5 bg-stone-500 rounded-full"></div>
                    Entrepreneurship
                  </div>
                  
                  {/* Organization and role */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 leading-tight">
                    Dev Connect
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">Developer Community Platform</p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">Founder & CEO</span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Founded and scaled a thriving developer community platform, connecting tech professionals and fostering innovation through collaborative initiatives and knowledge sharing.
                  </p>
                  
                  {/* Details */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex gap-6 text-xs text-gray-500">
                      <span>
                        <span className="font-medium text-gray-700">Since:</span> 2023
                      </span>
                      <span>
                        <span className="font-medium text-gray-700">Status:</span> Ongoing
                      </span>
                    </div>
                    
                    {/* Verification badge */}
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      <span className="text-emerald-600 text-xs font-medium">Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* GDG Cloud Emirates Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200/60 relative overflow-hidden hover:shadow-xl transition-all duration-300 group">
              {/* Subtle background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full -translate-y-16 translate-x-16 opacity-60"></div>
              
              <div className="relative z-10 flex gap-6">
                {/* Left side - Logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-200">
                    <img 
                      src={gdgEmiratesLogo} 
                      alt="GDG Cloud Emirates Logo" 
                      className="w-15 h-15 object-contain"
                    />
                  </div>
                </div>
                
                {/* Right side - Content */}
                <div className="flex-1 min-w-0">
                  {/* Category tag */}
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-xs font-medium mb-3">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    Cloud Technologies
                  </div>
                  
                  {/* Organization and role */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 leading-tight">
                    Google Developer Groups Cloud
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">Emirates Chapter</p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">Social Media Manager</span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Managed social media strategy and content creation for the Emirates cloud developer community, driving engagement and knowledge sharing.
                  </p>
                  
                  {/* Details */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex gap-6 text-xs text-gray-500">
                      <span>
                        <span className="font-medium text-gray-700">Period:</span> 2024
                      </span>
                      <span>
                        <span className="font-medium text-gray-700">Status:</span> Completed
                      </span>
                    </div>
                    
                    {/* Verification badge */}
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      <span className="text-emerald-600 text-xs font-medium">Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-forest-900 mb-3">Events & Workshops</h1>
          <p className="text-base text-forest-600 max-w-2xl mx-auto">Sharing knowledge and building communities through interactive sessions and workshops.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden flex flex-col"
            >
              <div className="flex flex-col">
                {/* Image Section */}
                <div className="relative w-full rounded-t-xl overflow-hidden">
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-3 py-1.5 bg-[#00C2CB]/90 text-white text-sm font-medium rounded-full backdrop-blur-sm">
                      {event.title.includes('VS Code Dev Day') || event.title.includes('BuildWithAI') || event.title.includes('Tech Leap 2024') || event.title.includes('E-Mustaqbil') ? 'Event' : 'Workshop'}
                    </span>
                  </div>
                  <img 
                    src={event.images && event.images.length > 0 ? event.images[0].src : event.image} 
                    alt={event.title}
                    className={`w-full h-72 ${
                      event.title.includes('BuildWithAI') ? 'object-contain object-[center_bottom]' : 
                      event.title.includes('Sprint to Imagine Cup IAMSCIENCE') ? 'object-cover object-[50%_40%]' :
                      event.title.includes('Sprint to Imagine Cup FJWU') ? 'object-cover object-[50%_60%]' :
                      'object-cover object-center'
                    }`}
                  />
                </div>
                
                {/* Content Section */}
                <div className="p-6 flex flex-col">
                  <h2 className="text-xl font-bold text-forest-900 mb-3">{event.title}</h2>
                  
                  <div className="flex flex-wrap items-center gap-4 text-forest-600 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{event.institution.name}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      <span className="text-sm">{event.role.title}</span>
                    </div>
                  </div>
                  
                  <p className="text-forest-700 text-sm mb-6">{event.description}</p>
                  
                  <button
                    onClick={() => setSelectedEvent(event.id)}
                    className="px-6 py-2 bg-[#00C2CB] text-white rounded-full flex items-center gap-2 hover:bg-[#00A8B0] transition-colors shadow-sm self-start mt-auto"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {event.id === selectedEvent && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedEvent(null)}>
                  <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col relative" onClick={e => e.stopPropagation()}>
                    {/* Close button - now always visible at the top */}
                    <button 
                      onClick={() => setSelectedEvent(null)}
                      className="absolute top-4 right-4 z-50 w-8 h-8 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/30 transition-colors"
                    >
                      <X className="w-5 h-5 text-white" />
                    </button>

                    {/* Scrollable content */}
                    <div className="overflow-y-auto flex-1 custom-scrollbar">
                      {/* Event Title & Basic Info - Sticky at top */}
                      <div className="sticky top-0 z-10 bg-white border-b">
                        <div className="p-6">
                          <h2 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h2>
                          <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-2 text-gray-600">
                              <Calendar className="w-5 h-5" />
                              <span>{event.date ? (event.date.full || `${event.date.season} ${event.date.year}`) : "Date TBA"}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <MapPin className="w-5 h-5" />
                              <span>{event.institution.name}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Main Content */}
                      <div className="p-6">
                        {/* Event Image */}
                        <div className="relative rounded-xl overflow-hidden mb-6">
                          <img 
                            src={event.images && event.images.length > 0 ? event.images[0].src : event.image} 
                            alt={event.title}
                            className="w-full aspect-video object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="px-4 py-2 bg-[#00C2CB] text-white text-sm font-medium rounded-full backdrop-blur-sm">
                              Workshop
                            </span>
                          </div>
                        </div>

                        {/* About This Event */}
                        <div className="mb-8">
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">About This Event</h3>
                          <p className="text-gray-600 leading-relaxed">{event.longDescription || event.description}</p>
                        </div>

                        {/* Topics */}
                        {event.topics && event.topics.length > 0 && (
                          <div className="mb-8">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Topics Covered</h3>
                            <div className="flex flex-wrap gap-2">
                              {event.topics.map((topic, index) => (
                                <div key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
                                  {typeof topic === 'string' ? topic : topic.name}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Modern image slider */}
                        {event.images && event.images.length > 0 && (
                          <div className="relative aspect-video overflow-hidden mb-8 rounded-xl">
                            {/* Images */}
                            <div className="relative h-full">
                              {event.images.map((img, index) => (
                                <div
                                  key={index}
                                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                                    index === modalSlideIndex
                                      ? "opacity-100 z-10 translate-x-0"
                                      : index < modalSlideIndex
                                        ? "opacity-0 -translate-x-full"
                                        : "opacity-0 translate-x-full"
                                  }`}
                                >
                                  <img
                                    src={img.src}
                                    alt={img.alt || `${event.title} - Image ${index + 1}`}
                                    className="w-full h-full object-contain bg-gray-100"
                                  />
                                  {img.caption && (
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
                                      {img.caption}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>

                            {/* Navigation arrows */}
                            {event.images.length > 1 && (
                              <>
                                <button
                                  onClick={() => {
                                    const nextIndex = (modalSlideIndex - 1 + event.images.length) % event.images.length;
                                    goToModalSlide(nextIndex);
                                  }}
                                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 hover:bg-black/30 flex items-center justify-center text-white backdrop-blur-sm z-20 transition-all"
                                >
                                  <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                  onClick={() => {
                                    const nextIndex = (modalSlideIndex + 1) % event.images.length;
                                    goToModalSlide(nextIndex);
                                  }}
                                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 hover:bg-black/30 flex items-center justify-center text-white backdrop-blur-sm z-20 transition-all"
                                >
                                  <ChevronRight className="w-6 h-6" />
                                </button>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                  {event.images.map((_, index) => (
                                    <button
                                      key={index}
                                      onClick={() => goToModalSlide(index)}
                                      className={`w-2 h-2 rounded-full transition-all ${
                                        index === modalSlideIndex
                                          ? "bg-white scale-125"
                                          : "bg-white/50 hover:bg-white/75"
                                      }`}
                                    />
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        )}

                        {/* Highlights */}
                        {event.highlights && event.highlights.length > 0 && (
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Highlights</h3>
                            <ul className="space-y-3">
                              {event.highlights.map((highlight, index) => (
                                <li key={index} className="flex items-start gap-3">
                                  <div className="mt-1.5">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                  </div>
                                  <span className="text-gray-600">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}