import React, { useState } from "react";
import { 
  Award, 
  Sparkles, 
  Code, 
  BarChart3, 
  Shield, 
  GraduationCap, 
  Star, 
  Building, 
  CheckCircle, 
  ExternalLink,
  BookOpen,
  Briefcase,
  CheckCircle2,
  X
} from "lucide-react";
import Layout from "../components/Layout";

export default function Certificates() {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  // Add debugging to check if component is rendering
  console.log("Certificates component is rendering");

  // Function to handle PDF viewing
  const openPDF = (pdfPath) => {
    window.open(pdfPath, '_blank');
  };

  // Function to scroll to specific section
  const scrollToSection = (sectionId) => {
    console.log('Scrolling to section:', sectionId); // Debug log
    const element = document.getElementById(sectionId);
    if (element) {
      console.log('Element found:', element); // Debug log
      // Get the element's position and subtract header height
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - 100; // Account for fixed header
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      console.log('Element not found for ID:', sectionId); // Debug log
    }
  };

  // Technical & Professional Certifications
  const cloudTechnicalCertificates = [
    {
      title: "AI Workshop Certificate",
      issuer: "MAAZ ALI NADEEM",
      date: "2024",
      credentialId: "AI-WS-2024-001",
      category: "Artificial Intelligence",
      description: "Comprehensive workshop covering AI fundamentals, machine learning, and practical applications.",
      verificationLink: "/certificates/AI Workshop Certificate MAAZ ALI NADEEM.pdf",
      featured: true,
      skills: ["AI", "Machine Learning", "Data Science", "Python"],
      validUntil: "Lifetime",
    },
    {
      title: "Blockchain Workshop Organizing Certificate",
      issuer: "Blockchain Organization",
      date: "2024",
      credentialId: "BC-ORG-2024-002",
      category: "Blockchain",
      description: "Certificate for organizing and managing blockchain technology workshops and educational events.",
      verificationLink: "/certificates/BLOCKCHAIN WORKSHOP Organizing Certificate.pdf",
      featured: true,
      skills: ["Blockchain", "Event Management", "Education", "Leadership"],
      validUntil: "Lifetime",
    },
    {
      title: "Data Analysis in Excel",
      issuer: "Microsoft",
      date: "2023",
      credentialId: "DA-EX-2023-003",
      category: "Data Analysis",
      description: "Advanced Excel certification covering data analysis, visualization, and business intelligence.",
      verificationLink: "/certificates/Data Analysis in excel.pdf",
      featured: false,
      skills: ["Excel", "Data Analysis", "Business Intelligence", "Visualization"],
      validUntil: "Lifetime",
    },
    {
      title: "Introduction to MySQL",
      issuer: "Database Institute",
      date: "2023",
      credentialId: "MY-SQL-2023-004",
      category: "Database",
      description: "Foundational MySQL certification covering database design, queries, and administration.",
      verificationLink: "/certificates/introduction to mysql.pdf",
      featured: false,
      skills: ["MySQL", "Database Design", "SQL", "Data Management"],
      validUntil: "Lifetime",
    },
    {
      title: "Udemy AI Certificate",
      issuer: "Udemy",
      date: "2023",
      credentialId: "UD-AI-2023-005",
      category: "Artificial Intelligence",
      description: "Comprehensive AI course covering machine learning algorithms and practical implementations.",
      verificationLink: "/certificates/Udemy Al certificate.pdf",
      featured: false,
      skills: ["AI", "Machine Learning", "Deep Learning", "Python"],
      validUntil: "Lifetime",
    },
  ];

  // Professional & Career Development Certifications
  const businessManagementCertificates = [
    {
      title: "CODSOFT Completion Certificate",
      issuer: "CODSOFT",
      date: "2024",
      credentialId: "CS-COMP-2024-001",
      category: "Software Development",
      description: "Completion certificate for software development internship program covering full-stack development.",
      verificationLink: "/certificates/CODSOFT COMPLETIPN CERTIFICATE.pdf",
      featured: true,
      skills: ["Full Stack Development", "Project Management", "Team Collaboration"],
      validUntil: "Lifetime",
    },
    {
      title: "CODSOFT Offer Letter",
      issuer: "CODSOFT",
      date: "2024",
      credentialId: "CS-OFFER-2024-001",
      category: "Career Achievement",
      description: "Official offer letter for software development internship position at CODSOFT.",
      verificationLink: "/certificates/CODSOFT OFFER LETTER.pdf",
      featured: true,
      skills: ["Professional Development", "Software Engineering"],
      validUntil: "Lifetime",
    },
    {
      title: "Tecno Hacks Offer Letter",
      issuer: "Tecno Hacks",
      date: "2024",
      credentialId: "TH-OFFER-2024-002",
      category: "Career Achievement",
      description: "Official offer letter for technology position at Tecno Hacks organization.",
      verificationLink: "/certificates/Tecno HAcks Offer Letter.pdf",
      featured: false,
      skills: ["Technology", "Innovation", "Problem Solving"],
      validUntil: "Lifetime",
    },
    {
      title: "Letter of Recommendation",
      issuer: "Professional Reference",
      date: "2024",
      credentialId: "LOR-2024-003",
      category: "Professional Reference",
      description: "Professional letter of recommendation highlighting technical skills and work performance.",
      verificationLink: "/certificates/Black and White Modern New Job Letter of Recommendation.pdf",
      featured: false,
      skills: ["Professional Excellence", "Leadership", "Technical Skills"],
      validUntil: "Lifetime",
    },
  ];

  // Academic & Extracurricular Certifications
  const academicOnlineCertificates = [
    {
      title: "Microsoft Student Ambassador Certificate (Alpha)",
      issuer: "Microsoft",
      date: "2024",
      credentialId: "MSA-ALPHA-2024-001",
      category: "Student Leadership",
      description: "Microsoft Student Ambassador program certification recognizing leadership in technology education.",
      verificationLink: "/certificates/Microsoft Student Ambassador Certificate Alpha.pdf",
      featured: true,
      skills: ["Leadership", "Community Building", "Microsoft Technologies", "Education"],
      validUntil: "Lifetime",
    },
    {
      title: "Microsoft Student Ambassador Certificate (Beta)",
      issuer: "Microsoft",
      date: "2024",
      credentialId: "MSA-BETA-2024-002",
      category: "Student Leadership",
      description: "Advanced Microsoft Student Ambassador certification for continued excellence in technical leadership.",
      verificationLink: "/certificates/Sheryar Microsoft  Ambassador Certificate Beta.pdf",
      featured: true,
      skills: ["Advanced Leadership", "Technical Mentoring", "Event Management", "Azure"],
      validUntil: "Lifetime",
    },
    {
      title: "Coding Competition Organizing Certificate (CodeBuzz)",
      issuer: "CodeBuzz",
      date: "2024",
      credentialId: "CC-ORG-2024-003",
      category: "Event Management",
      description: "Certificate for organizing and managing competitive programming events and coding competitions.",
      verificationLink: "/certificates/CODING COMPETITION ORGANIZING CERTIFICATE(codebuzz).pdf",
      featured: false,
      skills: ["Event Organization", "Programming", "Team Management", "Competition Planning"],
      validUntil: "Lifetime",
    },
    {
      title: "Coding Competition Participation Certificate",
      issuer: "Competition Authority",
      date: "2024",
      credentialId: "CC-PART-2024-004",
      category: "Programming Competition",
      description: "Participation certificate for competitive programming events demonstrating coding skills.",
      verificationLink: "/certificates/Coding Competition PARTICIPATION CERTIFICATE.pdf",
      featured: false,
      skills: ["Competitive Programming", "Algorithm Design", "Problem Solving", "Time Management"],
      validUntil: "Lifetime",
    },
    {
      title: "INNOVATE MEGA-Event Volunteer Certificate",
      issuer: "INNOVATE Organization",
      date: "2024",
      credentialId: "INV-VOL-2024-005",
      category: "Volunteer Service",
      description: "Volunteer service certificate for contributing to INNOVATE mega technology event.",
      verificationLink: "/certificates/INNOVATE MEGA-Event Volunteer Certificate.pdf",
      featured: false,
      skills: ["Volunteer Service", "Event Support", "Community Service", "Teamwork"],
      validUntil: "Lifetime",
    },
    {
      title: "GitHub Greetings Card",
      issuer: "GitHub",
      date: "2024",
      credentialId: "GH-GREET-2024-006",
      category: "Open Source",
      description: "Recognition from GitHub for contributions to open source projects and community engagement.",
      verificationLink: "/certificates/GIT-HUB Greetings card.pdf",
      featured: false,
      skills: ["Open Source", "Version Control", "Collaboration", "Git"],
      validUntil: "Lifetime",
    },
    {
      title: "GDGoC-IIUI 2024-2025 CO-LEAD",
      issuer: "Google Developer Groups on Campus - IIUI",
      date: "2024-2025",
      credentialId: "GDGOC-COLEAD-2024-007",
      category: "Leadership Position",
      description: "Co-Lead certificate for Google Developer Groups on Campus at International Islamic University Islamabad for the academic year 2024-2025.",
      verificationLink: "/certificates/6.png",
      featured: true,
      skills: ["Community Leadership", "Event Management", "Google Technologies", "Team Coordination"],
      validUntil: "2025",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setEmail("");
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000); // Hide after 5 seconds
      window.scrollTo({ top: 0, behavior: "smooth" });
      console.log("Email submitted:", email);
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Artificial Intelligence":
      case "Database":
      case "Data Analysis":
        return <BarChart3 className="w-5 h-5" />;
      case "Blockchain":
      case "Software Development":
        return <Code className="w-5 h-5" />;
      case "Career Achievement":
      case "Professional Reference":
        return <Briefcase className="w-5 h-5" />;
      case "Student Leadership":
      case "Event Management":
      case "Programming Competition":
      case "Volunteer Service":
      case "Open Source":
        return <GraduationCap className="w-5 h-5" />;
      default:
        return <Award className="w-5 h-5" />;
    }
  };

  const getCategoryColors = (category) => {
    switch (category) {
      case "Artificial Intelligence":
      case "Database":
      case "Data Analysis":
      case "Blockchain":
      case "Software Development":
        return {
          bg: "bg-cyan-50",
          text: "text-cyan-600",
          border: "border-cyan-200",
          gradient: "bg-gradient-to-r from-cyan-500 to-cyan-600"
        };
      case "Career Achievement":
      case "Professional Reference":
        return {
          bg: "bg-purple-50",
          text: "text-purple-600",
          border: "border-purple-200",
          gradient: "bg-gradient-to-r from-purple-500 to-purple-600"
        };
      case "Student Leadership":
      case "Event Management":
      case "Programming Competition":
      case "Volunteer Service":
      case "Open Source":
        return {
          bg: "bg-indigo-50",
          text: "text-indigo-600",
          border: "border-indigo-200",
          gradient: "bg-gradient-to-r from-indigo-500 to-indigo-600"
        };
      default:
        return {
          bg: "bg-gray-50",
          text: "text-gray-600",
          border: "border-gray-200",
          gradient: "bg-gradient-to-r from-gray-500 to-gray-600"
        };
    }
  };

  const renderCertificateSection = (certificates, title, icon, description, sectionId) => (
    <section id={sectionId} className="mb-16 relative">
      {/* Section background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-48 h-48 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="p-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl shadow-md">
            {icon}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{title}</h2>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">{description}</p>
        <div className="w-24 h-0.5 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 mx-auto mt-5 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert, index) => {
          const colors = getCategoryColors(cert.category);
          return (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-[#e0f7fa]/40 to-[#f3e8ff]/40 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border transform hover:scale-105 hover:-translate-y-1 group overflow-hidden ${
                cert.featured ? colors.border : "border-gray-200"
              }`}
            >
              {/* Background decoration for featured certificates */}
              {cert.featured && (
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-yellow-100 to-orange-100 rounded-full blur-2xl opacity-20"></div>
              )}
              
              {/* Background hover effect */}
              <div className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 ${colors.bg} rounded-lg shadow-sm`}>
                      {getCategoryIcon(cert.category)}
                    </div>
                    <span className={`px-3 py-1.5 ${colors.bg} ${colors.text} text-xs font-semibold rounded-full border ${colors.border}`}>
                      {cert.category}
                    </span>
                  </div>
                  {cert.featured && (
                    <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-md animate-pulse">
                      <Star className="w-3 h-3 fill-current" />
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <div className="p-1 bg-gray-100 rounded-lg">
                    <Building className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-medium">{cert.issuer}</span>
                </div>

                <p className="text-gray-600 mb-5 leading-relaxed text-sm">
                  {cert.description}
                </p>

                <div className="space-y-2 mb-5 text-sm bg-gray-50 p-3 rounded-lg border">
                  <div className="flex justify-between text-gray-600">
                    <span className="font-medium">Issued:</span>
                    <span className="font-semibold text-gray-800">{cert.date}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span className="font-medium">Valid Until:</span>
                    <span className="font-semibold text-gray-800">{cert.validUntil}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span className="font-medium">Credential ID:</span>
                    <span className="font-mono text-xs bg-white px-2 py-1 rounded border">{cert.credentialId}</span>
                  </div>
                </div>

                <div className="mb-5">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-xs font-medium rounded-full border shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 text-xs font-medium rounded-full border border-orange-200 shadow-sm">
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-semibold">Verified</span>
                  </div>
                  <button
                    onClick={() => openPDF(cert.verificationLink)}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-blue-500/25 transform hover:scale-105"
                  >
                    <ExternalLink className="w-3 h-3" />
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );

  return (
    <Layout>
      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right duration-300">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-4 rounded-xl shadow-lg border border-blue-400/20 flex items-center gap-3 min-w-80">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm">Subscribed Successfully!</p>
              <p className="text-blue-100 text-xs">You'll be notified of new certifications. Welcome aboard!</p>
            </div>
            <button 
              onClick={() => setShowSuccess(false)}
              className="w-6 h-6 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
      
      {/* Add a unique identifier to ensure this is the certificates page */}
      <div className="certificates-page min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Header with Gradient Border Wrapper */}
          <div className="mb-12 mt-8 rounded-3xl p-1 bg-gradient-to-br from-[#e0f7fa] via-[#f3e8ff] to-[#e0f2fe] shadow-lg">
            <div className="bg-white rounded-3xl p-10">
              <header className="text-center mb-16 relative">
                {/* Enhanced Background decoration */}
                <div className="absolute inset-0 -z-10">
                  <div className="absolute top-10 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                  <div className="absolute top-20 right-1/4 w-56 h-56 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-3xl opacity-50 animate-pulse delay-1000"></div>
                  <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full blur-3xl opacity-30 animate-pulse delay-500"></div>
                </div>
                
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00C2CB]/10 to-blue-100 px-4 py-2 rounded-full text-[#00C2CB] font-medium mb-6 shadow-sm border border-[#00C2CB]/20">
                  <Award className="w-5 h-5" />
                  Professional Certifications
                </div>
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent mb-4 mt-6">
                  Certifications & Credentials
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
                  A comprehensive collection of my professional certifications, technical credentials, and academic achievements that showcase my commitment to continuous learning and excellence.
                </p>
                
                {/* Overview Stats with Navigation - Enhanced with Gradient Backgrounds */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-12">
                  <button
                    onClick={() => {
                      console.log('Technical & AI button clicked');
                      scrollToSection('technical-ai-section');
                    }}
                    className="relative bg-gradient-to-br from-[#e0f7fa]/60 to-[#f3e8ff]/60 rounded-xl p-6 shadow-md border border-[#00C2CB]/20 hover:shadow-xl hover:border-[#00C2CB]/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer group overflow-hidden"
                  >
                    {/* Enhanced Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00C2CB]/5 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00C2CB] to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-md">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#00C2CB] transition-colors duration-300 mb-2">Technical & AI</h3>
                      <p className="text-gray-600 text-base mb-3">{cloudTechnicalCertificates.length} Certifications</p>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-[#00C2CB] to-blue-600 mx-auto rounded-full group-hover:w-16 transition-all duration-300"></div>
                      <p className="text-xs text-[#00C2CB] mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 font-medium">Click to explore →</p>
                    </div>
                  </button>
                  
                  <button
                    onClick={() => {
                      console.log('Professional & Career button clicked');
                      scrollToSection('professional-career-section');
                    }}
                    className="relative bg-gradient-to-br from-[#e0f7fa]/60 to-[#f3e8ff]/60 rounded-xl p-6 shadow-md border border-purple-200 hover:shadow-xl hover:border-purple-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer group overflow-hidden"
                  >
                    {/* Enhanced Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-md">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300 mb-2">Professional & Career</h3>
                      <p className="text-gray-600 text-base mb-3">{businessManagementCertificates.length} Certifications</p>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full group-hover:w-16 transition-all duration-300"></div>
                      <p className="text-xs text-purple-600 mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 font-medium">Click to explore →</p>
                    </div>
                  </button>
                  
                  <button
                    onClick={() => {
                      console.log('Academic & Leadership button clicked');
                      scrollToSection('academic-leadership-section');
                    }}
                    className="relative bg-gradient-to-br from-[#e0f7fa]/60 to-[#f3e8ff]/60 rounded-xl p-6 shadow-md border border-indigo-200 hover:shadow-xl hover:border-indigo-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer group overflow-hidden"
                  >
                    {/* Enhanced Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-md">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 mb-2">Academic & Leadership</h3>
                      <p className="text-gray-600 text-base mb-3">{academicOnlineCertificates.length} Certifications</p>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-indigo-600 to-blue-600 mx-auto rounded-full group-hover:w-16 transition-all duration-300"></div>
                      <p className="text-xs text-indigo-600 mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 font-medium">Click to explore →</p>
                    </div>
                  </button>
                </div>
              </header>
            </div>
          </div>

          {/* Technical & AI Certifications */}
          {renderCertificateSection(
            cloudTechnicalCertificates,
            "Technical & AI Certifications",
            <Code className="w-8 h-8 text-[#00C2CB]" />,
            "Artificial Intelligence, data analysis, and technical development certifications",
            "technical-ai-section"
          )}

          {/* Professional & Career Development Certifications */}
          {renderCertificateSection(
            businessManagementCertificates,
            "Professional & Career Development Certifications",
            <Briefcase className="w-8 h-8 text-purple-600" />,
            "Professional achievements, internships, and career development credentials",
            "professional-career-section"
          )}

          {/* Academic & Leadership Certifications */}
          {renderCertificateSection(
            academicOnlineCertificates,
            "Academic & Leadership Certifications",
            <BookOpen className="w-8 h-8 text-indigo-600" />,
            "Student leadership, academic achievements, and community involvement certifications",
            "academic-leadership-section"
          )}

          {/* Newsletter Signup with Gradient Border */}
          <div className="rounded-3xl p-1 bg-gradient-to-br from-[#e0f7fa] via-[#f3e8ff] to-[#e0f2fe] shadow-lg mt-16">
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-center shadow-xl">
              {/* Animated background elements */}
              <div className="absolute inset-0">
                <div className="absolute top-8 left-8 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-8 right-8 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full text-white font-semibold mb-6 border border-white/20 shadow-md">
                  <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
                  Stay Updated
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6">
                  Get Notified of New Certifications
                </h2>
                <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Be the first to know when I earn new certifications and credentials. Join our community of{" "}
                  <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-bold text-xl">
                    10,000+ professionals
                  </span>{" "}
                  who stay ahead in their careers.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-5 py-3 rounded-lg border-0 focus:outline-none focus:ring-4 focus:ring-blue-400/50 text-gray-900 font-medium placeholder-gray-500 bg-white/95 backdrop-blur-sm shadow-md"
                  />
                  <button
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:from-blue-600 hover:via-blue-700 hover:to-purple-700 transition-all duration-300 whitespace-nowrap shadow-md hover:shadow-blue-500/25 transform hover:scale-105 border border-blue-400/20"
                  >
                    Subscribe Now
                  </button>
                </div>
                <p className="text-gray-300 text-sm mt-6 flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  No spam, unsubscribe anytime • 100% free forever • SSL secured
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
