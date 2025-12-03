import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import "../assets/image-optimization.css";

// Import weapon images
// weapon1 removed (Weapons 1.jpg deleted)
import weapon2 from "../assets/Weapons 2.jpg";
import weapon3 from "../assets/Weapons 3.jpg";
import weapon4 from "../assets/Weapons 4.jpg";
import weapon5 from "../assets/weapons 5.jpg";

// Import bird images
import bird1 from "../assets/1 Birds.jpg";
import bird2 from "../assets/2 Birds.jpg";
import bird3 from "../assets/3 Birds.jpg";
import bird4 from "../assets/4 Birds.jpg";
import bird5 from "../assets/5 Birds.jpg";
// bird6/7 removed (6 Birds.jpg, 7 Birds.jpg deleted)

// Import pet images
import pet1 from "../assets/Pet 1.jpg";
// pet2 removed (Pet 2.jpg deleted)
import pet3 from "../assets/Pet 3.jpg";
import pet4 from "../assets/Pet 4.jpg";
import pet5 from "../assets/Pet 5.jpg";
import pet6 from "../assets/Pet 6.jpg";
// pet7 removed (Pet 7.jpg deleted)

// Import photography images
import viewGallery1 from "../assets/View Gallery.jpg";
import viewGallery2 from "../assets/View Gallery (2).jpg";
import viewGallery3 from "../assets/View Gallery (3).jpg";
import viewGallery4 from "../assets/View Gallery (4).jpg";
import viewGallery5 from "../assets/View Gallery (5).jpg";
import viewGallery6 from "../assets/View Gallery (6).jpg";
import viewGallery7 from "../assets/View Gallery (7).jpg";
import viewGallery8 from "../assets/View Gallery (8).jpg";
import viewGallery9 from "../assets/View Gallery (9).jpg";
import viewGallery10 from "../assets/View Gallery (10).jpg";
import aboutMain from "../assets/Aboutmain.jpg";

export default function Home() {
  // Preload critical images
  useEffect(() => {
    const preloadImages = [aboutMain, viewGallery1];
    preloadImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  const [showPhotoGallery, setShowPhotoGallery] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [showWeaponGallery, setShowWeaponGallery] = useState(false);
  const [selectedWeapon, setSelectedWeapon] = useState(0);
  const [showBirdGallery, setShowBirdGallery] = useState(false);
  const [selectedBird, setSelectedBird] = useState(0);
  const [showPetGallery, setShowPetGallery] = useState(false);
  const [selectedPet, setSelectedPet] = useState(0);

  // Photography gallery images
  const photographyImages = [
    viewGallery1,
    viewGallery2,
    viewGallery3,
    viewGallery4,
    viewGallery5,
    viewGallery6,
    viewGallery7,
    viewGallery8,
    viewGallery9,
    viewGallery10
  ];

  // Weapon gallery images
  const weaponImages = [
    weapon2,
    weapon3,
    weapon4,
    weapon5
  ];

  // Bird gallery images
  const birdImages = [
    bird1,
    bird2,
    bird3,
    bird4,
    bird5
  ];

  // Pet gallery images
  const petImages = [
    pet1,
    pet3,
    pet4,
    pet5,
    pet6
  ];

  const openPhotoGallery = () => {
    setShowPhotoGallery(true);
    setSelectedPhoto(0);
  };

  const closePhotoGallery = () => {
    setShowPhotoGallery(false);
  };

  const nextPhoto = () => {
    setSelectedPhoto((prev) => (prev + 1) % photographyImages.length);
  };

  const prevPhoto = () => {
    setSelectedPhoto((prev) => (prev - 1 + photographyImages.length) % photographyImages.length);
  };

  const openWeaponGallery = () => {
    setShowWeaponGallery(true);
    setSelectedWeapon(0);
  };

  const closeWeaponGallery = () => {
    setShowWeaponGallery(false);
  };

  const nextWeapon = () => {
    setSelectedWeapon((prev) => (prev + 1) % weaponImages.length);
  };

  const prevWeapon = () => {
    setSelectedWeapon((prev) => (prev - 1 + weaponImages.length) % weaponImages.length);
  };

  const openBirdGallery = () => {
    setShowBirdGallery(true);
    setSelectedBird(0);
  };

  const closeBirdGallery = () => {
    setShowBirdGallery(false);
  };

  const nextBird = () => {
    setSelectedBird((prev) => (prev + 1) % birdImages.length);
  };

  const prevBird = () => {
    setSelectedBird((prev) => (prev - 1 + birdImages.length) % birdImages.length);
  };

  const openPetGallery = () => {
    setShowPetGallery(true);
    setSelectedPet(0);
  };

  const closePetGallery = () => {
    setShowPetGallery(false);
  };

  const nextPet = () => {
    setSelectedPet((prev) => (prev + 1) % petImages.length);
  };

  const prevPet = () => {
    setSelectedPet((prev) => (prev - 1 + petImages.length) % petImages.length);
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
        
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Content */}
            <div className="space-y-6">
              {/* Greeting and intro */}
              <div className="text-left">
                <div className="inline-flex items-center gap-2 bg-[#00C2CB]/10 text-[#0e3758] px-4 py-2 rounded-full text-lg font-medium mb-8">
                  <span className="text-2xl">👋</span>
                  Hey there!
                </div>
                
                <h1 className="text-4xl md:text-6xl mb-4">
                   <span className="text-[#203654]">I'm Sheryar Khan</span>
                </h1>
                <p className="text-xl md:text-2xl font-light mb-8">
                  <span className="text-sky-600">Data & Community Leader</span>
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-800 text-lg leading-relaxed">
                  I'm Sheryar Ahmed Khan, a dedicated <span className="text-sky-600">Data Specialist</span> with expertise in data analysis, visualisation, extraction, web scraping, and academic writing. With hands-on experience across multiple industries and platforms, I excel at automating data workflows and delivering compelling, customised solutions tailored to diverse business needs.
                </p>
                
                <p className="text-gray-800 text-lg leading-relaxed">
                  In addition to my technical skills, I have served as a Teaching Assistant for <span className="text-sky-600">Linear Algebra</span>, supporting students in mastering challenging mathematical concepts and problem-solving techniques. Currently, I hold the position of <span className="text-sky-600">Joint Secretary</span> at <span className="text-sky-600">MLSA Islamabad</span>, where I contribute to community building and fostering collaboration among tech enthusiasts. I also managed the digital presence of <span className="text-sky-600">GDG Emirates</span> as a Social Media Manager, enhancing their online engagement and outreach.
                </p>
                <p className="text-gray-800 text-lg leading-relaxed">
Beyond my core responsibilities, I am an active community leader, co-leading the <span className="text-sky-600">Google Developer Groups on Campus at IIUI</span>. I organise impactful tech events designed to bring professionals and students together to learn, share knowledge, and innovate. My work is characterised by a commitment to quality, precision, and making a meaningful difference in every project I undertake.
                </p>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="flex justify-center lg:justify-center mt-32">
              <img 
                src={aboutMain} 
                alt="Sheryar Khan - Data Analyst" 
                className="w-80 h-96 md:w-96 md:h-[500px] object-cover rounded-2xl shadow-lg hero-image responsive-image"
                loading="eager"
                fetchpriority="high"
              />
            </div>
          </div>


        </div>
      </section>

      {/* Technical Arsenal Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/10 to-indigo-100/5 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-100/10 to-sky-100/5 rounded-full translate-y-40 -translate-x-40"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#00C2CB]/10 text-[#0e3758] px-6 py-3 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-[#00C2CB] rounded-full animate-pulse"></div>
              Skills & Technologies
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#203654] mb-6">
              Technical Arsenal
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A dynamic ecosystem of technologies I've mastered to build innovative solutions
            </p>
            <div className="flex justify-center mt-8 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-1 bg-[#00C2CB] rounded-full"></div>
                <div className="w-2 h-2 bg-[#00C2CB]/70 rounded-full"></div>
                <div className="w-16 h-1 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Frontend Technologies */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#203654] text-center mb-8">Frontend</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {/* React */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/60 relative overflow-hidden hover:shadow-xl transition-all duration-300 group text-center">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-full -translate-y-8 translate-x-8 opacity-60"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#203654]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.56-.465-.467-.92-.992-1.36-1.56z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">React</h4>
                </div>
              </div>

              {/* Tailwind CSS */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/60 relative overflow-hidden hover:shadow-xl transition-all duration-300 group text-center">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#00C2CB]/10 to-[#00C2CB]/5 rounded-full -translate-y-8 translate-x-8 opacity-60"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 bg-[#00C2CB]/10 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#00C2CB]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Tailwind</h4>
                </div>
              </div>

              {/* JavaScript */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/60 relative overflow-hidden hover:shadow-xl transition-all duration-300 group text-center">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-full -translate-y-8 translate-x-8 opacity-60"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-[#203654] rounded flex items-center justify-center">
                      <span className="text-black font-bold text-xs">JS</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">JavaScript</h4>
                </div>
              </div>

              {/* HTML/CSS */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/60 relative overflow-hidden hover:shadow-xl transition-all duration-300 group text-center">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-50 to-red-50 rounded-full -translate-y-8 translate-x-8 opacity-60"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 bg-orange-100 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">HTML/CSS</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Backend Technologies */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#203654] text-center mb-8">Backend</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {/* Python */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/60 relative overflow-hidden hover:shadow-xl transition-all duration-300 group text-center">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-full -translate-y-8 translate-x-8 opacity-60"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#203654]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Python</h4>
                </div>
              </div>

              {/* Node.js */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/60 relative overflow-hidden hover:shadow-xl transition-all duration-300 group text-center">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-full -translate-y-8 translate-x-8 opacity-60"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#203654]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Node.js</h4>
                </div>
              </div>

              {/* FastAPI */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/60 relative overflow-hidden hover:shadow-xl transition-all duration-300 group text-center">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#00C2CB]/10 to-[#00C2CB]/5 rounded-full -translate-y-8 translate-x-8 opacity-60"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 bg-[#00C2CB]/10 rounded-xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-[#00C2CB] rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">API</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">FastAPI</h4>
                </div>
              </div>

              {/* MySQL */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/60 relative overflow-hidden hover:shadow-xl transition-all duration-300 group text-center">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-full -translate-y-8 translate-x-8 opacity-60"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#203654]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.274.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H.085c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.438 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zM12.325 18.695h-.926c-.044-1.28-.075-2.35-.075-3.264 0-.928.03-1.98.075-3.156h.926c-.044 1.176-.074 2.228-.074 3.156 0 .915.03 1.984.074 3.264zm1.542 0h-.926c-.044-1.28-.075-2.35-.075-3.264 0-.928.03-1.98.075-3.156h.926c-.044 1.176-.074 2.228-.074 3.156 0 .915.03 1.984.074 3.264zm2.69.025c-.287-.218-.407-.602-.36-1.15.047-.548.25-.93.61-1.147.18-.108.404-.162.672-.162.387 0 .692.134.914.403.223.27.335.628.335 1.075 0 .448-.112.81-.335 1.087-.223.277-.527.416-.914.416-.387 0-.692-.14-.914-.416-.112-.137-.167-.302-.167-.497 0-.195.055-.36.167-.497.112-.137.273-.205.483-.205.21 0 .371.068.483.205.112.137.167.302.167.497h-.335c0-.135-.045-.25-.135-.345-.09-.095-.202-.142-.335-.142-.195 0-.347.083-.456.25-.108.167-.162.39-.162.67 0 .28.054.503.162.67.109.167.261.25.456.25.133 0 .245-.047.335-.142.09-.095.135-.21.135-.345h.335c0 .195-.055.36-.167.497-.112.137-.273.205-.483.205z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">MySQL</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Data Science & Analytics */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#203654] text-center mb-8">Data Science</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
              {/* Pandas */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/60 relative overflow-hidden hover:shadow-xl transition-all duration-300 group text-center">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-full -translate-y-8 translate-x-8 opacity-60"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-[#203654] rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">🐼</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Pandas</h4>
                </div>
              </div>

              {/* NumPy */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/60 relative overflow-hidden hover:shadow-xl transition-all duration-300 group text-center">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-full -translate-y-8 translate-x-8 opacity-60"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-[#203654] rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">Np</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">NumPy</h4>
                </div>
              </div>

              {/* Matplotlib */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/60 relative overflow-hidden hover:shadow-xl transition-all duration-300 group text-center">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#00C2CB]/10 to-[#00C2CB]/5 rounded-full -translate-y-8 translate-x-8 opacity-60"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 bg-[#00C2CB]/10 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#00C2CB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Matplotlib</h4>
                </div>
              </div>

              {/* Seaborn */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/60 relative overflow-hidden hover:shadow-xl transition-all duration-300 group text-center">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#00C2CB]/10 to-[#00C2CB]/5 rounded-full -translate-y-8 translate-x-8 opacity-60"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 bg-[#00C2CB]/10 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#00C2CB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Seaborn</h4>
                </div>
              </div>

              {/* Scikit-learn */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/60 relative overflow-hidden hover:shadow-xl transition-all duration-300 group text-center">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-full -translate-y-8 translate-x-8 opacity-60"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-[#203654] rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">SK</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Scikit-learn</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Tools & Platforms */}
          <div>
            <h3 className="text-2xl font-bold text-[#203654] text-center mb-8">Tools & Platforms</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {/* Git */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/60 relative overflow-hidden hover:shadow-xl transition-all duration-300 group text-center">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-full -translate-y-8 translate-x-8 opacity-60"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#203654]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Git</h4>
                </div>
              </div>

              {/* Tableau */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/60 relative overflow-hidden hover:shadow-xl transition-all duration-300 group text-center">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#00C2CB]/10 to-[#00C2CB]/5 rounded-full -translate-y-8 translate-x-8 opacity-60"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 bg-[#00C2CB]/10 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#00C2CB]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.654 2.307L7.689 4.683v2.336L11.654 4.683v2.336L7.689 9.395v4.713l3.965-2.377V14.067l-3.965 2.377v2.336l3.965-2.377v2.337L7.689 20.717H7.69v-.019l-.923.554-1.576-.917v-5.607l-1.576-.917 1.576-.917V8.253l1.576-.917-1.576-.917V.812l1.576-.917.923.554V2.307L11.654 0v2.307zM12 5.504l3.965 2.376v2.337L12 8.841v2.336l3.965 2.376v2.337L12 14.514v2.337l3.965 2.376v2.337L12 20.188V22.5l-3.965-2.376v-2.337L12 20.188v-2.337l-3.965-2.376v-4.713L12 8.841V6.504L8.035 4.168V1.831L12 4.207v1.297zm4.689 2.863v4.713l3.965 2.377v-2.337L16.689 11.743V9.406l3.965-2.376V4.693L16.689 7.07v1.297zm0 9.426V22.5l3.965-2.376v-2.337L16.689 19.164v-1.371z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Tableau</h4>
                </div>
              </div>

              {/* VS Code */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/60 relative overflow-hidden hover:shadow-xl transition-all duration-300 group text-center">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-full -translate-y-8 translate-x-8 opacity-60"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#203654]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">VS Code</h4>
                </div>
              </div>

              {/* Jupyter */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/60 relative overflow-hidden hover:shadow-xl transition-all duration-300 group text-center">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-full -translate-y-8 translate-x-8 opacity-60"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#203654]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.157 22.201A1.784 1.799 0 0 1 5.374 20.4A1.784 1.799 0 0 1 7.157 18.6a1.784 1.799 0 0 1 1.784 1.8A1.784 1.799 0 0 1 7.157 22.201zM16.842 1.8A1.784 1.799 0 0 1 18.626 3.6A1.784 1.799 0 0 1 16.842 5.4A1.784 1.799 0 0 1 15.058 3.6A1.784 1.799 0 0 1 16.842 1.8zM7.157 1.8A1.784 1.799 0 0 1 8.941 3.6A1.784 1.799 0 0 1 7.157 5.4A1.784 1.799 0 0 1 5.374 3.6A1.784 1.799 0 0 1 7.157 1.8zM12 14.711a2.745 2.767 0 0 1-2.742-2.767A2.745 2.767 0 0 1 12 9.178a2.745 2.767 0 0 1 2.742 2.766A2.745 2.767 0 0 1 12 14.711z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Jupyter</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-100/20 to-pink-100/15 rounded-full -translate-y-32 -translate-x-32"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-blue-100/15 to-indigo-100/10 rounded-full translate-y-40 translate-x-40"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-6 py-3 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
              Personal Side
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
              Beyond Work
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              When I'm not coding or leading communities, here's what keeps me inspired, energized, and connected to the world around me.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Photography */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Photography</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Capturing moments and exploring creativity through the lens. Love experimenting with different perspectives and natural lighting.
              </p>
              <button 
                onClick={openPhotoGallery}
                className="w-full bg-purple-50 hover:bg-purple-100 text-purple-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Gallery
              </button>
            </div>

            {/* Weapons Passion */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Weapons Enthusiast</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Passionate about military history, tactical gear, and weapon mechanics. Fascinated by engineering precision and historical significance.
              </p>
              <button 
                onClick={openWeaponGallery}
                className="w-full bg-red-50 hover:bg-red-100 text-red-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Collection
              </button>
            </div>

            {/* Birds Fancier */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3V1m10 20a4 4 0 004-4V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4zM17 3V1" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Birds Fancier</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Avian enthusiast who appreciates the beauty and intelligence of birds. Enjoy observing their behaviors and learning about different species.
              </p>
              <button 
                onClick={openBirdGallery}
                className="w-full bg-sky-50 hover:bg-sky-100 text-sky-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Birds
              </button>
            </div>

            {/* Pets Lover */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Pets Lover</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Devoted animal lover who finds joy and companionship in pets. Believe in the therapeutic and emotional benefits of animal companionship.
              </p>
              <button 
                onClick={openPetGallery}
                className="w-full bg-amber-50 hover:bg-amber-100 text-amber-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Pets
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Gallery Modal */}
      {showPhotoGallery && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close button */}
            <button
              onClick={closePhotoGallery}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Main image */}
            <div className="relative">
              <img
                src={photographyImages[selectedPhoto]}
                alt={`Photography ${selectedPhoto + 1}`}
                className="w-full h-[70vh] object-contain rounded-lg"
                loading="lazy"
              />
              
              {/* Navigation arrows */}
              {photographyImages.length > 1 && (
                <>
                  <button
                    onClick={prevPhoto}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    </button>
                </>
              )}
            </div>

            {/* Image counter */}
            <div className="text-center mt-4">
              <span className="text-white/80 text-sm">
                {selectedPhoto + 1} of {photographyImages.length}
              </span>
            </div>

            {/* Thumbnail navigation */}
            {photographyImages.length > 1 && (
              <div className="flex justify-center gap-2 mt-4 overflow-x-auto">
                {photographyImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPhoto(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      selectedPhoto === index 
                        ? 'border-purple-500 scale-110' 
                        : 'border-transparent hover:border-white/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Weapon Gallery Modal */}
      {showWeaponGallery && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="max-w-6xl w-full max-h-[90vh] overflow-auto">
            {/* Close button */}
            <button
              onClick={closeWeaponGallery}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Main image */}
            <div className="relative">
              <img
                src={weaponImages[selectedWeapon]}
                alt={`Weapon ${selectedWeapon + 1}`}
                className="w-full h-[70vh] object-contain rounded-lg"
                loading="lazy"
              />
              
              {/* Navigation arrows */}
              {weaponImages.length > 1 && (
                <>
                  <button
                    onClick={prevWeapon}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextWeapon}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Image counter */}
            <div className="text-center mt-4">
              <span className="text-white/80 text-sm">
                {selectedWeapon + 1} of {weaponImages.length}
              </span>
            </div>

            {/* Thumbnail navigation */}
            {weaponImages.length > 1 && (
              <div className="flex justify-center gap-2 mt-4 overflow-x-auto">
                {weaponImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedWeapon(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      selectedWeapon === index 
                        ? 'border-red-500 scale-110' 
                        : 'border-transparent hover:border-white/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Weapon Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Bird Gallery Modal */}
      {showBirdGallery && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="max-w-6xl w-full max-h-[90vh] overflow-auto">
            {/* Close button */}
            <button
              onClick={closeBirdGallery}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Main image */}
            <div className="relative">
              <img
                src={birdImages[selectedBird]}
                alt={`Bird ${selectedBird + 1}`}
                className="w-full h-[70vh] object-contain rounded-lg"
                loading="lazy"
              />
              
              {/* Navigation arrows */}
              {birdImages.length > 1 && (
                <>
                  <button
                    onClick={prevBird}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextBird}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Image counter */}
            <div className="text-center mt-4">
              <span className="text-white/80 text-sm">
                {selectedBird + 1} of {birdImages.length}
              </span>
            </div>

            {/* Thumbnail navigation */}
            {birdImages.length > 1 && (
              <div className="flex justify-center gap-2 mt-4 overflow-x-auto">
                {birdImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedBird(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      selectedBird === index 
                        ? 'border-sky-500 scale-110' 
                        : 'border-transparent hover:border-white/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Bird Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Pet Gallery Modal */}
      {showPetGallery && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="max-w-6xl w-full max-h-[90vh] overflow-auto">
            {/* Close button */}
            <button
              onClick={closePetGallery}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Main image */}
            <div className="relative">
              <img
                src={petImages[selectedPet]}
                alt={`Pet ${selectedPet + 1}`}
                className="w-full h-[70vh] object-contain rounded-lg"
                loading="lazy"
              />
              
              {/* Navigation arrows */}
              {petImages.length > 1 && (
                <>
                  <button
                    onClick={prevPet}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextPet}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Image counter */}
            <div className="text-center mt-4">
              <span className="text-white/80 text-sm">
                {selectedPet + 1} of {petImages.length}
              </span>
            </div>

            {/* Thumbnail navigation */}
            {petImages.length > 1 && (
              <div className="flex justify-center gap-2 mt-4 overflow-x-auto">
                {petImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPet(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      selectedPet === index 
                        ? 'border-amber-500 scale-110' 
                        : 'border-transparent hover:border-white/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Pet Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
}