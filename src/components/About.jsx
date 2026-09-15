import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Zap, Database, Terminal, Sparkles } from 'lucide-react';
import stackImage from '../assets/about/image.png';
import reactImage from '../assets/about/react.png';
import nodeImage from '../assets/about/node.png';
import mongoImage from '../assets/about/mongodb.png';
import expressImage from '../assets/about/express.svg';
import awsImage from '../assets/about/aws.svg';
import mysqlImage from '../assets/about/mysql.svg';

const About = () => {
  const stats = [
    { label: "Live Client & Demo Work", value: "04+", desc: "Namakkal, Salem & Global" },
    { label: "Core Tech Specialization", value: "MERN", desc: "Full Stack Architect" },
    { label: "Code Delivery", value: "100%", desc: "Production Performance" },
    { label: "Cloud & Database", value: "99.9%", desc: "MongoDB & AWS S3" }
  ];

  const techStack = [
    { name: "React.js", img: reactImage, category: "Frontend" },
    { name: "Node.js", img: nodeImage, category: "Backend" },
    { name: "MongoDB", img: mongoImage, category: "Database" },
    { name: "Express.js", img: expressImage, category: "REST API" },
    { name: "AWS Cloud", img: awsImage, category: "Cloud S3" },
    { name: "MySQL", img: mysqlImage, category: "Relational" }
  ];

  return (
    <section 
      id="about" 
      className="bg-[#0A0A0A] text-white pt-28 pb-36 px-6 md:px-12 w-full relative overflow-hidden border-t border-[#27272A]"
    >
      {/* Huge Background Watermark: ABOUT */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none select-none z-0">
        <span className="font-bebas text-[22vw] leading-none text-white/[0.03] uppercase tracking-tighter">
          ABOUT
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Tag Indicator */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#FF2A2A] shadow-[0_0_8px_#FF2A2A]" />
          <span className="font-mono text-xs text-[#FF2A2A] tracking-widest uppercase font-semibold">
            // 01. ABOUT ME & VISION
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: ID Badge Card Container */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[320px]">
              
              {/* Lanyard Top Strap */}
              <div className="absolute -top-24 left-1/2 w-3 h-28 bg-[#18181B] transform -translate-x-1/2 shadow-inner z-0 border-x border-[#27272A]"></div>
              
              {/* Lanyard Metallic Clip with Red Accent */}
              <div className="absolute -top-4 left-1/2 w-8 h-10 bg-gradient-to-b from-[#3F3F46] to-[#18181B] rounded-md border border-[#52525B] transform -translate-x-1/2 z-10 shadow-lg flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#FF2A2A] shadow-[0_0_8px_#FF2A2A]" />
              </div>

              {/* ID Badge Card */}
              <motion.div 
                whileHover={{ rotate: 0, scale: 1.02 }}
                initial={{ rotate: -2 }}
                transition={{ duration: 0.4 }}
                className="bg-[#111111] border border-[#27272A] rounded-3xl p-5 shadow-[0_25px_50px_rgba(0,0,0,0.8)] relative z-20 hover:border-[#FF2A2A]/50 transition-colors duration-500"
              >
                {/* Badge Top Notch Hole */}
                <div className="w-16 h-3 bg-[#0A0A0A] rounded-full mx-auto mb-4 border border-[#27272A] flex items-center justify-center">
                  <div className="w-8 h-1 bg-[#18181B] rounded-full" />
                </div>

                {/* Profile Image Frame */}
                <div className="w-full aspect-[3/4] overflow-hidden rounded-2xl bg-[#18181B] border border-[#27272A] relative group">
                  <img 
                    src={stackImage} 
                    alt="JAGADESHVARAN P" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                  />
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#050505]/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="font-space text-xs font-bold text-white uppercase">JAGADESHVARAN P</p>
                      <p className="font-mono text-[9px] text-[#A1A1AA]">ID: DEV-2026-MERN</p>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>

                {/* Badge Footer Tech Tag */}
                <div className="mt-4 pt-3 border-t border-[#27272A] flex items-center justify-between text-[10px] font-mono text-[#71717A]">
                  <span>AUTHENTICATED CREATIVE</span>
                  <span className="text-white font-semibold">VERIFIED</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Editorial Content, Bio & Statistics */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Engineering high-impact web architectures with <span className="text-[#FF2A2A]">creative precision</span>.
            </h2>

            <div className="font-inter text-sm sm:text-base text-[#A1A1AA] space-y-4 leading-relaxed font-normal">
              <p>
                Hi, I'm <strong className="text-white font-semibold uppercase font-space tracking-wide">Jagadeshvaran P</strong>, a dedicated <span className="text-white font-medium underline decoration-[#FF2A2A] decoration-2 underline-offset-4">MERN Stack Developer & Digital Architect</span> focused on crafting high-performance, functional, and deeply scalable web solutions.
              </p>
              <p>
                I specialize in designing secure RESTful API backends, optimizing cloud databases for high concurrency, and delivering clean, responsive, 60fps user interfaces for modern businesses and visionary brands.
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mt-8 pt-8 border-t border-[#27272A]">
              {stats.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#111111] border border-[#27272A] p-4 rounded-2xl hover:border-[#FF2A2A]/40 transition-colors"
                >
                  <p className="font-space text-2xl sm:text-3xl font-bold text-[#FF2A2A]">{item.value}</p>
                  <p className="font-space text-xs font-semibold text-white mt-1 uppercase">{item.label}</p>
                  <p className="font-mono text-[10px] text-[#71717A] mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Technology Stack Grid */}
            <div className="w-full mt-10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#71717A] tracking-wider uppercase">
                  // CORE PRODUCTION TECHNOLOGIES
                </span>
                <span className="font-mono text-[10px] text-[#FF2A2A] uppercase">6 TOOLS LOADED</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 w-full">
                {techStack.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4, borderColor: "#FF2A2A" }}
                    className="bg-[#111111] border border-[#27272A] rounded-2xl p-3 flex flex-col items-center justify-center gap-2 group transition-all duration-300"
                  >
                    <div className="w-10 h-10 flex items-center justify-center">
                      <img 
                        src={tech.img} 
                        alt={tech.name} 
                        className="max-h-8 max-w-8 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
                      />
                    </div>
                    <div className="text-center">
                      <p className="font-space text-[11px] font-bold text-white group-hover:text-[#FF2A2A] transition-colors">{tech.name}</p>
                      <p className="font-mono text-[9px] text-[#71717A]">{tech.category}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;