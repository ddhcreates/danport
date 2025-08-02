'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, ArrowRight, Code, Brain, Palette, BarChart3, PenTool, Globe, Github, Linkedin, Mail, Star, Quote } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'work', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "GPT Automations",
      description: "Custom AI workflows that work while you're sleeping"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "AI-Powered Dashboards",
      description: "Data visualizations that tell compelling stories"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Website Design & Fixes",
      description: "Digital experiences that convert and delight"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Presentation Storytelling",
      description: "Decks that captivate and convince stakeholders"
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Creative Writing & Copy",
      description: "Words that move hearts and minds"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Solutions",
      description: "Bespoke tools tailored to your unique needs"
    }
  ];

  const projects = [
    {
      title: "AI Sales Dashboard",
      description: "Real-time analytics platform with predictive insights for e-commerce growth",
      tech: "GPT-4, React, D3.js",
      image: "🎯"
    },
    {
      title: "Content Automation Suite",
      description: "End-to-end content generation system for social media campaigns",
      tech: "OpenAI API, Python, Zapier",
      image: "🚀"
    },
    {
      title: "Interactive Brand Story",
      description: "Immersive web experience showcasing company evolution and values",
      tech: "Next.js, Framer Motion, GSAP",
      image: "✨"
    },
    {
      title: "Custom GPT Chatbot",
      description: "Industry-specific AI assistant for customer support automation",
      tech: "GPT-4, Langchain, React",
      image: "🤖"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-md border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dan
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Work', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors hover:text-blue-600 ${activeSection === item.toLowerCase() ? 'text-blue-600 font-medium' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-900' : 'bg-white'} border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="px-4 py-2 space-y-2">
              {['Home', 'About', 'Services', 'Work', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 hover:text-blue-600"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <div className="inline-block p-4 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Code className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            I build tools and tell stories.
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From custom GPT automations to creative decks and data dashboards—I help you move faster, think clearer, and look good doing it.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('work')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>View My Work</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 ${darkMode ? 'hover:text-white' : ''}`}
            >
              Start a Project
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm Dan, a creative technologist who dreams in spreadsheets, writes in metaphors, and codes in React. I blend generative AI with practical tools to help clients build smarter, faster, and with more heart.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Based in India, working globally</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Fluent in GPT, Google Sheets, and storytelling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Strong in strategy, design, and delivery</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                    <div className="text-6xl">🚀</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                  <Star className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            What I Can Do for You
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer ${
                  darkMode 
                    ? 'bg-gray-800/50 hover:bg-gray-800 border border-gray-700' 
                    : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="mb-4 text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className={`py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Recent Work
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  darkMode 
                    ? 'bg-gray-800 border border-gray-700' 
                    : 'bg-white border border-gray-200'
                }`}
              >
                <div className="text-4xl mb-4">{project.image}</div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.split(', ').map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-2 transition-colors">
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Kind Words
          </h2>
          <div className={`p-12 rounded-2xl text-center ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
            <Quote className="w-12 h-12 mx-auto mb-6 text-blue-600" />
            <p className="text-lg italic text-gray-600 dark:text-gray-300 mb-8">
              "Coming soon - testimonials from amazing clients who've trusted me with their vision."
            </p>
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 text-lg">
            Tell me what you're building—or dreaming of—and I'll help you get there.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h3 className="text-xl font-semibold mb-6">Ready to Start?</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:dan@example.com?subject=New Project Inquiry&body=Hi Dan, I'd like to discuss a project with you..."
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Email</span>
                </a>
                
                <div className="text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Or reach out on your preferred platform:</p>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href="#" className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <a href="mailto:dan@example.com" className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                    <Mail className="w-5 h-5" />
                    <span>dan@example.com</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
              
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h4 className="font-semibold mb-2">Quick Response Promise</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  I typically respond within 24 hours. For urgent projects, feel free to mention it in your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                Dan
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                © 2025 Dan. Built with quiet fire.
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:dan@example.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}