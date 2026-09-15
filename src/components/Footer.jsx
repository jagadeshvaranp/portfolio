import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-[#A1A1AA] pt-20 pb-12 px-6 md:px-12 w-full border-t border-[#27272A] flex flex-col justify-between relative overflow-hidden">
      
      {/* Top Metadata Row */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-8 pb-16 border-b border-[#27272A]/50 font-mono text-xs">
        
        {/* Column 1: Core Specialization */}
        <div className="flex flex-col gap-2">
          <span className="text-white font-bold tracking-wider uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A2A]" />
            MERN / AI / WEB / CREATIVE
          </span>
          <p className="text-[#71717A] text-[11px] leading-relaxed">
            Scalable backend architectures, responsive interfaces, and custom digital boutiques.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="flex flex-col gap-2">
          <span className="text-white font-bold tracking-wider uppercase">SITEMAP</span>
          <div className="flex flex-col gap-1 text-[11px]">
            <a href="#about" className="hover:text-[#FF2A2A] transition-colors">// ABOUT ME</a>
            <a href="#experience" className="hover:text-[#FF2A2A] transition-colors">// SERVICES & TRACK</a>
            <a href="#projects" className="hover:text-[#FF2A2A] transition-colors">// SELECTED WORK</a>
            <a href="#contact" className="hover:text-[#FF2A2A] transition-colors">// INITIATE CONTACT</a>
          </div>
        </div>

        {/* Column 3: Live Deployments */}
        <div className="flex flex-col gap-2">
          <span className="text-white font-bold tracking-wider uppercase">FEATURED DEPLOYS</span>
          <div className="flex flex-col gap-1 text-[11px]">
            <a href="https://new-dres-shop.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              • Egoiste (Luxury Menswear)
            </a>
            <a href="https://french-club-neon.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              • French Club (Streetwear)
            </a>
            <a href="https://wwwmaisondorcom.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              • MAISON D'OR (Haute Couture)
            </a>
            <a href="https://fastiondesign-j3hq.vercel.app/#saree" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              • Jeevi's Creations (Bridal Studio)
            </a>
          </div>
        </div>

        {/* Column 4: Status & Back To Top */}
        <div className="flex flex-col justify-between items-start md:items-end gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white font-bold text-[11px] uppercase tracking-wider">
              ONLINE // GLOBAL CLIENTS
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111] border border-[#27272A] text-white hover:border-[#FF2A2A] hover:bg-[#FF2A2A] transition-all duration-300 text-[11px]"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 transform group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>

      {/* Middle Brand Display Watermark */}
      <div className="w-full flex justify-center items-center py-16 md:py-20 select-none overflow-hidden">
        <h2 className="font-space text-[12vw] leading-none font-bold tracking-tighter uppercase text-white/10 hover:text-white/20 transition-colors duration-500 text-center">
          JAGADESH<span className="text-[#FF2A2A]/40 hover:text-[#FF2A2A] transition-colors">VARAN</span>
        </h2>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="max-w-7xl mx-auto w-full pt-8 border-t border-[#27272A]/40 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-[#71717A]">
        <div>
          &copy; {new Date().getFullYear()} JAGADESHVARAN P // ALL RIGHTS RESERVED
        </div>

        <div className="flex items-center gap-4 text-[#A1A1AA]">
          <a href="mailto:jagadeshvaranperumal@gmail.com" className="hover:text-[#FF2A2A] transition-colors">
            jagadeshvaranperumal@gmail.com
          </a>
          <span>•</span>
          <span>Namakkal, India</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;