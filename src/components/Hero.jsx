import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Pause, Terminal, Code2, Sparkles } from 'lucide-react';
import heroVideo from '../assets/hero video/Developer_introduces_self_and_sk…_202606051918.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen overflow-hidden bg-[#050505] flex flex-col justify-between pt-28 md:pt-36 pb-12 px-6 md:px-12 bg-tech-grid"
    >
      {/* Background Ambient Video Layer (Subtle Low Opacity) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          loop
          playsInline
          className="w-full h-full object-cover opacity-20 filter grayscale contrast-125"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]/90" />
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[#FF2A2A]/10 rounded-full blur-[160px]" />
      </div>

      {/* Top Studio Metadata Tag */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono text-[#71717A] mb-8">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <Terminal className="w-3.5 h-3.5 text-[#FF2A2A]" />
          <span className="text-[#A1A1AA]">SYS.LOCATION:</span>
          <span className="text-white font-medium">INDIA // GLOBAL CLIENTS</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden sm:flex items-center gap-2"
        >
          <span className="text-[#A1A1AA]">CORE:</span>
          <span className="text-white font-medium">MERN • FULL-STACK • AI ENGINES</span>
        </motion.div>
      </div>

      {/* Center Main Stage / Large Typography */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end my-auto">
        
        {/* Left Column: Huge Headline & Editorial Intro */}
        <div className="lg:col-span-8 flex flex-col items-start">
          
          {/* Studio Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#27272A] text-[11px] font-mono tracking-wider uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF2A2A] shadow-[0_0_8px_#FF2A2A]" />
            <span className="text-[#A1A1AA]">JAGADESHVARAN //</span>
            <span className="text-white font-semibold">CREATIVE DEVELOPER</span>
          </motion.div>

          {/* Main Giant Studio Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="font-space font-bold tracking-tighter uppercase leading-[0.9] select-none"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]">
              <span className="text-white block">MERN STACK</span>
              <span className="text-stroke-white hover:text-[#FF2A2A] hover:[-webkit-text-stroke:0px] transition-all duration-500 block mt-1">
                DEVELOPER<span className="text-[#FF2A2A] [-webkit-text-stroke:0px]">.</span>
              </span>
            </h1>
          </motion.div>

          {/* Supporting Bio Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-inter text-sm sm:text-base md:text-lg text-[#A1A1AA] max-w-2xl mt-6 leading-relaxed font-normal"
          >
            I engineer performant database architectures, high-converting e-commerce platforms, and immersive digital web experiences using React, Node.js, MongoDB, and modern AI automation.
          </motion.p>

          {/* Dual Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mt-8 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="font-space group px-7 py-3.5 rounded-full bg-[#FF2A2A] text-white text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(255,42,42,0.35)] hover:shadow-[0_0_40px_rgba(255,42,42,0.6)] flex items-center gap-2 text-center"
            >
              <span>VIEW MY WORK</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#contact"
              className="font-space px-7 py-3.5 rounded-full bg-[#111111] hover:bg-white text-[#FFFFFF] hover:text-black border border-[#27272A] hover:border-white text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 text-center"
            >
              <span>LET'S WORK TOGETHER</span>
            </a>
          </motion.div>

        </div>

        {/* Right Column: Floating Interactive Reel Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end mt-6 lg:mt-0"
        >
          <div 
            onClick={toggleVideo}
            className="group relative bg-[#111111]/90 hover:bg-[#161616] border border-[#27272A] hover:border-[#FF2A2A]/60 rounded-3xl p-4 sm:p-5 backdrop-blur-xl transition-all duration-500 cursor-pointer shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(255,42,42,0.15)] max-w-sm w-full"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF2A2A] animate-ping" />
                <span className="text-[11px] font-mono font-bold tracking-wider text-white uppercase">
                  STUDIO SHOWREEL
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#71717A]">
                {isPlaying ? "PLAYING" : "PAUSED"}
              </span>
            </div>

            {/* Thumbnail Preview Area */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-[#27272A]">
              <video
                src={heroVideo}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                muted
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#FF2A2A] group-hover:scale-110 text-white flex items-center justify-center shadow-[0_0_25px_rgba(255,42,42,0.8)] transition-transform duration-300">
                  {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                </div>
              </div>
            </div>

            {/* Reel Caption */}
            <div className="flex items-center justify-between mt-3 text-xs font-mono text-[#A1A1AA]">
              <span>Click to {isPlaying ? "Pause" : "Play Reel"}</span>
              <span className="text-white font-medium">01:14 HD</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Bottom Technical Status Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-[#27272A]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#71717A]">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <span className="text-[#FF2A2A]">01 //</span> HIGH SCALE APIS
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#FF2A2A]">02 //</span> REACT & NEXT.JS
          </span>
          <span className="hidden md:flex items-center gap-2">
            <span className="text-[#FF2A2A]">03 //</span> CLOUD & SECURITY
          </span>
        </div>

        <div className="text-[#A1A1AA] flex items-center gap-2">
          <span>SCROLL TO EXPLORE</span>
          <span className="text-[#FF2A2A] animate-bounce">↓</span>
        </div>
      </div>

    </section>
  );
};

export default Hero;