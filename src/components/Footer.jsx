import React from 'react';
import { Linkedin, Github, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1e293b] text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300">&copy; 2025 by Sheryar Khan. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-2">
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
      </div>
    </footer>
  );
};

export default Footer;
