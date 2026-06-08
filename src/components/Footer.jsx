import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p>Full-Stack Web Architectures</p>
          <p>MongoDB • Express • React • Node</p>
          <p>Cloud Integration & Security</p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <p>Production Experience</p>
          <a href="#projects" className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1">View Deployments</a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <p>Open for Roles & Projects</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[14vw] leading-none font-sans font-black tracking-tighter lowercase select-none text-[#f4f4f4] w-full text-center">
          jagadeshvaran
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">Get In Touch</a>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} JAGADESHVARAN P | Engineered using React & Tailwind
          </p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:jagadeshvaranperumal@gmail.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">jagadeshvaranperumal@gmail.com</a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <span className="text-slate-500">Based in India</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;