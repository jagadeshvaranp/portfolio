import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'SERVICES', href: '#experience', id: 'experience' },
    { name: 'WORK', href: '#projects', id: 'projects' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#050505]/85 backdrop-blur-xl border-b border-[#27272A]/70 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Left Side: Name Branding with Studio Dot */}
        <a 
          href="#home" 
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF2A2A] shadow-[0_0_8px_#FF2A2A] animate-pulse" />
          <span className="font-space text-white text-base md:text-lg font-bold tracking-wider uppercase group-hover:text-[#FF2A2A] transition-colors duration-300">
            JAGADESH<span className="text-[#A1A1AA] group-hover:text-white transition-colors">VARAN</span>
          </span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a 
                key={item.name} 
                href={item.href}
                className={`font-space text-xs font-semibold tracking-widest uppercase transition-all duration-300 relative py-1 ${
                  isActive ? 'text-white' : 'text-[#A1A1AA] hover:text-white'
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.span 
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FF2A2A] rounded-full shadow-[0_0_8px_#FF2A2A]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Side: CTA & Status Badge */}
        <div className="hidden md:flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#27272A] text-[10px] font-mono text-[#A1A1AA]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-white font-medium">AVAILABLE FOR WORK</span>
          </div>

          <a 
            href="#contact" 
            className="font-space px-5 py-2 rounded-full bg-[#FF2A2A] hover:bg-white text-white hover:text-black text-xs font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,42,42,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="w-10 h-10 rounded-full bg-[#111111] border border-[#27272A] text-white flex items-center justify-center focus:outline-none hover:border-[#FF2A2A] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0A0A0A]/95 border-b border-[#27272A] backdrop-blur-2xl px-6 py-6"
          >
            <div className="flex flex-col space-y-4">
              <div className="pb-2 mb-2 border-b border-[#27272A]/40 flex items-center justify-between text-xs font-mono text-[#71717A]">
                <span>// STUDIO NAVIGATION</span>
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> AVAILABLE
                </span>
              </div>
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-space text-lg font-bold tracking-wider text-white hover:text-[#FF2A2A] py-1 transition-colors flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <span className="text-xs font-mono text-[#71717A]">↗</span>
                </a>
              ))}
              <div className="pt-4 border-t border-[#27272A]">
                <a 
                  href="#contact" 
                  onClick={() => setIsOpen(false)} 
                  className="font-space block w-full py-3 rounded-xl bg-[#FF2A2A] text-white font-bold text-center text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(255,42,42,0.4)]"
                >
                  Hire Me / Collaborate
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;