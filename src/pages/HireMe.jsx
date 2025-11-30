import React, { useState } from "react";
import {
  BarChart2,
  Database,
  Link2,
  FileText,
  Smartphone as MobileIcon,
  Search,
  Users,
  Layers,
  Globe2,
  Users2,
  Linkedin,
  Github,
  Instagram,
  CheckCircle,
  ArrowRight,
  Mail,
  CheckCircle2,
  X,
} from "lucide-react";
import Layout from "../components/Layout";

export default function HireMe() {
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Google Apps Script endpoint
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbydMF9Z1Rt5252ynjFVCZk9oUv_Vhau94bs8SCXOtZZylD-kVTAymlMEAdJ2wostiMH/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      requestType: form.requestType.value,
      subject: form.subject.value,
      message: form.message.value,
    };
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (err) {
      // ignore error for now
    }
    form.reset();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000); // Hide after 5 seconds
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout>
      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right duration-300">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-xl shadow-lg border border-green-400/20 flex items-center gap-3 min-w-80">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm">Message Sent Successfully!</p>
              <p className="text-green-100 text-xs">Thank you for reaching out. I'll get back to you soon.</p>
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
      
      {/* Removed header section */}
        {/* Services */}
        <div className="mb-12 mt-16 rounded-3xl p-1 bg-gradient-to-br from-[#e0f7fa] via-[#f3e8ff] to-[#e0f2fe] shadow-lg">
          <div className="bg-white rounded-3xl p-10">
            <h2 className="text-3xl font-extrabold text-forest-900 mb-10 text-center tracking-tight drop-shadow-lg">Services I Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-[#e0f7fa]/60 to-[#f3e8ff]/60 rounded-3xl p-8 shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
              <BarChart2 className="w-8 h-8 text-[#00C2CB] mb-3 drop-shadow" />
              <h3 className="text-lg font-semibold text-forest-900 mb-2">
                Data Analysis & Visualisation
              </h3>
              <p className="text-forest-700">
                I transform raw data into actionable insights with advanced analytics and engaging visuals, making trends easy to understand and decisions easier to make.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#e0f7fa]/60 to-[#f3e8ff]/60 rounded-3xl p-8 shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
              <Database className="w-8 h-8 text-[#00C2CB] mb-3 drop-shadow" />
              <h3 className="text-lg font-semibold text-forest-900 mb-2">
                Web Scraping & Data Extraction
              </h3>
              <p className="text-forest-700">
                I automate data collection from websites and online sources, delivering clean, structured datasets that save time and support smarter decisions.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#e0f7fa]/60 to-[#f3e8ff]/60 rounded-3xl p-8 shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
              <Link2 className="w-8 h-8 text-[#00C2CB] mb-3 drop-shadow" />
              <h3 className="text-lg font-semibold text-forest-900 mb-2">
                API Integration
              </h3>
              <p className="text-forest-700">
                I connect applications with APIs to enable seamless data exchange, automation, and enhanced functionality tailored to your needs.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#e0f7fa]/60 to-[#f3e8ff]/60 rounded-3xl p-8 shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
              <FileText className="w-8 h-8 text-[#00C2CB] mb-3 drop-shadow" />
              <h3 className="text-lg font-semibold text-forest-900 mb-2">
                Academic Writing
              </h3>
              <p className="text-forest-700">
                I create well-researched, original academic content, including reports, essays, and documentation, tailored to meet scholarly standards.
              </p>
            </div>
          </div>
        </div>

        {/* Team Services */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-forest-900 mb-4">Team Solutions</h2>
          <p className="text-forest-700 mb-6">
            For more extensive projects requiring specialized expertise, I have a talented team of professionals ready to tackle:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 justify-center">
            <div className="bg-gradient-to-br from-[#e0f7fa]/60 to-[#f3e8ff]/60 rounded-3xl p-8 shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
              <Layers className="w-8 h-8 text-[#00C2CB] mb-3 drop-shadow" />
              <h3 className="text-lg font-semibold text-forest-900 mb-2">
                App Development
              </h3>
              <p className="text-forest-700">
                Native and cross-platform mobile applications for iOS and Android, with seamless user experiences and powerful functionality.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#e0f7fa]/60 to-[#f3e8ff]/60 rounded-3xl p-8 shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
              <Globe2 className="w-8 h-8 text-[#00C2CB] mb-3 drop-shadow" />
              <h3 className="text-lg font-semibold text-forest-900 mb-2">
                SEO Services
              </h3>
              <p className="text-forest-700">
                Comprehensive search engine optimization to improve visibility, increase organic traffic, and boost your digital presence.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#e0f7fa]/60 to-[#f3e8ff]/60 rounded-3xl p-8 shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
              <Users2 className="w-8 h-8 text-[#00C2CB] mb-3 drop-shadow" />
              <h3 className="text-lg font-semibold text-forest-900 mb-2">
                Full-Stack Teams
              </h3>
              <p className="text-forest-700">
                Scalable team solutions for enterprise-level projects requiring multiple specialists working in coordination.
              </p>
            </div>
          </div>
          <div className="bg-sage-100 rounded-3xl p-6 border border-forest-200 mt-8">
            <p className="text-forest-800 text-center">
              Need specialized services? <span className="font-medium">Contact me directly</span> to discuss how our team can help with your larger projects.
            </p>
          </div>
        </div>

        {/* Get In Touch Section */}
        <section className="pt-10 pb-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-5xl font-extrabold text-center mb-4 text-black" style={{lineHeight:1.1}}>Get In Touch</h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Have a project or questions? Fill out the form and I’ll respond promptly.<br />
              Whether you want to discuss an idea, or simply connect, I’m here to help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow p-8">
                <h3 className="text-2xl font-bold mb-6 text-black">Send a Message</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium mb-1 text-black">Full Name *</label>
                      <input name="name" type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00C2CB] placeholder-gray-500 text-black" placeholder="Your full name" required />
                    </div>
                    <div>
                      <label className="block font-medium mb-1 text-black">Email Address *</label>
                      <input name="email" type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00C2CB] placeholder-gray-500 text-black" placeholder="your.email@example.com" required />
                    </div>
                  </div>
                  <div>
                    <label className="block font-medium mb-1 text-black">Request Type *</label>
                    <select name="requestType" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00C2CB] text-black bg-white placeholder-gray-400 select-placeholder" required>
                      <option value="" disabled selected style={{color:'#e5e7eb'}}>Select request type</option>
                      <option value="Consulting Request">Consulting Request</option>
                      <option value="Speaking Request">Speaking Request</option>
                      <option value="Collaboration Request">Collaboration Request</option>
                    </select>
                    <style>{`
                      .select-placeholder option.option-placeholder {
                        color: #a3a3a3 !important;
                        font-weight: 400;
                      }
                      .select-placeholder:invalid {
                        color: #a3a3a3 !important;
                      }
                    `}</style>
                    <span className="block text-xs mt-1 text-gray-400">Please select the type of request</span>
                  </div>
                  <div>
                    <label className="block font-medium mb-1 text-black">Subject *</label>
                    <input name="subject" type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00C2CB] placeholder-gray-500 text-black" placeholder="What's this about?" required />
                  </div>
                  <div>
                    <label className="block font-medium mb-1 text-black">Message *</label>
                    <textarea name="message" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00C2CB] placeholder-gray-500 text-black" rows="5" placeholder="Tell me more about your project or what you'd like to discuss..." required></textarea>
                  </div>
                  <button type="submit" className="w-full bg-[#0288d1] text-white font-semibold py-3 rounded-lg hover:bg-[#0277bd] transition-colors flex items-center justify-center gap-2">
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                </form>
              </div>
              {/* Contact Info */}
              <div className="bg-white rounded-2xl shadow p-8">
                <h3 className="text-2xl font-bold mb-6 text-black">Contact Information</h3>
                <div className="space-y-8">
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-600 shadow-lg hover:scale-110 transition-transform duration-200">
                      <Mail className="w-7 h-7 text-white drop-shadow-lg" />
                    </span>
                    <div>
                      <div className="font-semibold">Email</div>
                      <a href="mailto:sheryarahmed1422@gmail.com" className="text-blue-600 hover:underline">sheryarahmed1422@gmail.com</a>
                      <div className="text-gray-500 text-sm">Send me an email for detailed discussions</div>
                    </div>
                  </div>
                  {/* LinkedIn */}
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 via-sky-400 to-blue-700 shadow-lg hover:scale-110 transition-transform duration-200">
                      <Linkedin className="w-7 h-7 text-white drop-shadow-lg" />
                    </span>
                    <div>
                      <div className="font-semibold">LinkedIn</div>
                      <a href="https://www.linkedin.com/in/sheryar-ahmed-khan-658b8a27a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/sheryarkhan</a>
                      <div className="text-gray-500 text-sm">Connect with me professionally</div>
                    </div>
                  </div>
                  {/* GitHub */}
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-gray-700 via-gray-900 to-black shadow-lg hover:scale-110 transition-transform duration-200">
                      <Github className="w-7 h-7 text-white drop-shadow-lg" />
                    </span>
                    <div>
                      <div className="font-semibold">GitHub</div>
                      <a href="https://github.com/sheryarkhan758?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/sheryar758</a>
                      <div className="text-gray-500 text-sm">Check out my code and work</div>
                    </div>
                  </div>
                  {/* Instagram */}
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 via-fuchsia-500 to-orange-400 shadow-lg hover:scale-110 transition-transform duration-200">
                      <Instagram className="w-7 h-7 text-white drop-shadow-lg" />
                    </span>
                    <div>
                      <div className="font-semibold">Instagram</div>
                      <a href="https://www.instagram.com/sheryar._.khan786?igsh=bDc3ZHAzdmFlNDY=" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">instagram.com/sheryarkhan</a>
                      <div className="text-gray-500 text-sm">Follow me for updates and fun</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        

          
        {/* Approach */}
        <div className="bg-gradient-to-r from-forest-600 to-forest-800 rounded-3xl p-6 shadow-md overflow-hidden relative mb-12">
          <h2 className="text-2xl font-semibold text-sage-100 mb-4">My Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-sage-100 mt-1" />
              <div>
                <h4 className="text-sage-100 font-medium mb-1">Collaborative Process</h4>
                <p className="text-sage-200">
                  I believe in working closely with clients throughout the development process, ensuring your vision is realized.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-sage-100 mt-1" />
              <div>
                <h4 className="text-sage-100 font-medium mb-1">Sustainable Development</h4>
                <p className="text-sage-200">
                  Clean, maintainable code that grows with your business and adapts to changing requirements.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-sage-100 mt-1" />
              <div>
                <h4 className="text-sage-100 font-medium mb-1">Nature-Inspired Design</h4>
                <p className="text-sage-200">
                  Bringing organic aesthetics to digital interfaces for more engaging, human-centered experiences.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-sage-100 mt-1" />
              <div>
                <h4 className="text-sage-100 font-medium mb-1">Ongoing Support</h4>
                <p className="text-sage-200">
                  Your project doesn't end at launch. I provide maintenance and support to ensure continued success.
                </p>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-forest-500/20 rounded-full"></div>
          <div className="absolute top-10 right-20 w-6 h-6 bg-sage-100/20 rounded-full animate-ping"></div>
        </div>

        {/* Contact Section - Gmail API Integration placeholder */}
        {/* <div className="bg-white rounded-3xl p-8 shadow-md mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <Mail className="w-12 h-12 text-forest-600 mb-4 mx-auto" />
            <h2 className="text-2xl font-bold text-forest-900 mb-3">Contact Me</h2>
            <p className="text-forest-700 mb-6">
              Direct email integration coming soon! You'll be able to contact me directly from this page.
              In the meantime, please reach out to me at:
            </p>
            <a 
              href="mailto:mmaaz990ahmad@gmail.com" 
              className="inline-flex items-center gap-2 bg-forest-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-forest-700 transition-colors"
            >
              mmaaz990ahmad@gmail.com
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div> */}

        {/* FAQ Section */}
        <div className="max-w-6xl mx-auto mt-12">
          <h2 className="text-2xl font-bold text-forest-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-6 shadow-xs hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-forest-900 mb-2">
                How do we start working together?
              </h3>
              <p className="text-forest-700">
                After you contact me, we'll schedule a consultation call to discuss your project in detail. If we're a good fit, I'll provide a proposal outlining scope, timeline, and cost.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-6 shadow-xs hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-forest-900 mb-2">
                What's your typical turnaround time?
              </h3>
              <p className="text-forest-700">
                It depends on project complexity. Small websites may take 2-3 weeks, while complex applications can take 1-3 months. I'll provide a detailed timeline in my proposal.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-6 shadow-xs hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-forest-900 mb-2">
                Do you provide ongoing support?
              </h3>
              <p className="text-forest-700">
                Yes! I offer maintenance packages to keep your site secure, up-to-date, and running smoothly. We can discuss these options once your project is nearing completion.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-6 shadow-xs hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-forest-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-forest-700">
                I accept bank transfers, Binance payments, and major payment methods. For projects, I typically require a 50% deposit upfront, with the remainder due upon completion.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-forest-600 to-forest-700 rounded-3xl p-8 shadow-md mt-12 relative overflow-hidden">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold text-sage-100 mb-4">Ready to get started?</h2>
              <p className="text-sage-200 mb-6">
                Whether you need my individual expertise or the power of our full team, let's create something amazing together. Reach out directly at sheryarahmed1422@gmail.com.
              </p>
              <a 
                href="mailto:sheryarahmed1422@gmail.com" 
                className="inline-flex items-center gap-2 bg-white text-forest-700 hover:bg-[#00C2CB] hover:text-black px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Email Me Directly
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-forest-500/20 rounded-full"></div>
            <div className="absolute top-12 right-40 w-8 h-8 bg-sage-100/20 rounded-full animate-ping" style={{animationDelay: "0.5s"}}></div>
            <div className="absolute bottom-20 left-32 w-6 h-6 bg-sage-100/30 rounded-full animate-ping" style={{animationDelay: "1.5s"}}></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}