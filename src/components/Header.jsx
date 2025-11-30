import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, FolderKanban, Menu, X, Linkedin, Github, Instagram } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Auto-hide header on scroll
  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = () => {
      // Show header when mouse moves
      setIsHeaderVisible(true);
      
      // Clear existing timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      // Hide header again after 3 seconds of no mouse movement (only if scrolled down)
      timeoutId = setTimeout(() => {
        if (window.scrollY > 100) {
          setIsHeaderVisible(false);
        }
      }, 3000);
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [lastScrollY]);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-[#1e293b] shadow-lg z-50 !rounded-none transition-transform duration-300 ${
      isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
    }`} style={{borderRadius: '0px !important', borderTopLeftRadius: '0px !important', borderTopRightRadius: '0px !important'}}>
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Left side - Brand and Social Icons */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              className="text-xl font-light text-white font-display tracking-wide hover:text-[#00C2CB] transition-colors duration-300"
              onClick={e => {
                if (location.pathname === "/") {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  e.preventDefault();
                }
              }}
            >
              SHERYAR.CO
            </Link>
            
            {/* Social Media Icons */}
            <div className="hidden md:flex items-center space-x-2">
              <a
                href="https://www.linkedin.com/in/sheryar-ahmed-khan-658b8a27a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 bg-gradient-to-r from-blue-600 to-blue-700 rounded-md flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transform hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-blue-500/15"
              >
                <Linkedin className="w-3.5 h-3.5 text-white" />
              </a>
              <a
                href="https://github.com/sheryarkhan758"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 bg-gradient-to-r from-gray-700 to-gray-800 rounded-md flex items-center justify-center hover:from-gray-800 hover:to-gray-900 transform hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-gray-500/15"
              >
                <Github className="w-3.5 h-3.5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/sheryar._.khan786?igsh=bDc3ZHAzdmFlNDY="
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-md flex items-center justify-center hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 transform hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-pink-500/15"
              >
                <Instagram className="w-3.5 h-3.5 text-white" />
              </a>
            </div>
          </div>

          {/* Center - Main Navigation (Desktop only) */}
          <div className="hidden md:flex gap-4 absolute left-1/2 transform -translate-x-1/2">
            <Link
              to="/"
              className={`px-2 py-1 text-white font-medium transition-all duration-300 hover:text-[#00C2CB] relative ${
                location.pathname === "/"
                  ? "text-[#00C2CB] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#00C2CB]"
                  : "hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[#00C2CB] hover:after:transition-all hover:after:duration-300"
              }`}
              onClick={e => {
                if (location.pathname === "/") {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  e.preventDefault();
                }
              }}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`px-2 py-1 text-white font-medium transition-all duration-300 hover:text-[#00C2CB] relative ${
                location.pathname.includes("/projects")
                  ? "text-[#00C2CB] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#00C2CB]"
                  : "hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[#00C2CB] hover:after:transition-all hover:after:duration-300"
              }`}
              onClick={() => {
                if (location.pathname !== '/projects') {
                  window.scrollTo(0, 0);
                }
              }}
            >
              Projects
            </Link>
            <Link
              to="/events"
              className={`px-2 py-1 text-white font-medium transition-all duration-300 hover:text-[#00C2CB] relative ${
                location.pathname === "/events"
                  ? "text-[#00C2CB] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#00C2CB]"
                  : "hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[#00C2CB] hover:after:transition-all hover:after:duration-300"
              }`}
              onClick={e => {
                if (location.pathname === "/events") {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  e.preventDefault();
                }
              }}
            >
              Events
            </Link>
            <Link
              to="/certificates"
              className={`px-2 py-1 text-white font-medium transition-all duration-300 hover:text-[#00C2CB] relative ${
                location.pathname === "/certificates"
                  ? "text-[#00C2CB] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#00C2CB]"
                  : "hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 after:w-full hover:after:h-0.5 hover:after:bg-[#00C2CB] hover:after:transition-all hover:after:duration-300"
              }`}
              onClick={e => {
                if (location.pathname === "/certificates") {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  e.preventDefault();
                }
              }}
            >
              Certificates
            </Link>
          </div>

          {/* Right side - Contact Button and Mobile Menu */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-lg text-white hover:bg-gray-700 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Contact Button */}
            <div className="hidden md:flex">
              <Link
                to="/hire-me"
                className="px-4 py-1 text-white border border-[#00C2CB] rounded-full hover:bg-[#00C2CB] hover:text-black transition-all duration-300 font-medium"
                onClick={e => {
                  if (location.pathname === "/hire-me") {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    e.preventDefault();
                  }
                }}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2 border-t border-gray-700 pt-4 animate-fadeIn">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className={`px-4 py-3 text-white font-medium transition-colors ${
                  location.pathname === "/"
                    ? "text-[#00C2CB] bg-gray-800"
                    : "hover:text-[#00C2CB] hover:bg-gray-800"
                }`}
                onClick={e => {
                  if (location.pathname === "/") {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    e.preventDefault();
                  }
                }}
              >
                Home
              </Link>
              <Link
                to="/projects"
                className={`px-4 py-3 text-white font-medium transition-colors ${
                  location.pathname.includes("/projects")
                    ? "text-[#00C2CB] bg-gray-800"
                    : "hover:text-[#00C2CB] hover:bg-gray-800"
                }`}
                onClick={e => {
                  if (location.pathname === "/projects" || location.pathname.startsWith("/projects/")) {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    e.preventDefault();
                  }
                }}
              >
                Projects
              </Link>
              <Link
                to="/events"
                className={`px-4 py-3 text-white font-medium transition-colors ${
                  location.pathname === "/events"
                    ? "text-[#00C2CB] bg-gray-800"
                    : "hover:text-[#00C2CB] hover:bg-gray-800"
                }`}
                onClick={e => {
                  if (location.pathname === "/events") {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    e.preventDefault();
                  }
                }}
              >
                Events
              </Link>
              <Link
                to="/certificates"
                className={`px-4 py-3 text-white font-medium transition-colors ${
                  location.pathname === "/certificates"
                    ? "text-[#00C2CB] bg-gray-800"
                    : "hover:text-[#00C2CB] hover:bg-gray-800"
                }`}
                onClick={e => {
                  if (location.pathname === "/certificates") {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    e.preventDefault();
                  }
                }}
              >
                Certificates
              </Link>
              <Link
                to="/hire-me"
                className="mx-4 mt-2 px-6 py-3 text-center text-white border border-[#00C2CB] rounded-full hover:bg-[#00C2CB] hover:text-black transition-all duration-300 font-medium"
                onClick={e => {
                  if (location.pathname === "/hire-me") {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    e.preventDefault();
                  }
                }}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
