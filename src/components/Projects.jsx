import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Lock, 
  Globe, 
  ArrowUpRight,
  ShoppingBag,
  Palette,
  Workflow,
  Terminal,
  Code2
} from 'lucide-react';

import frenchClubImg from '../assets/projects/french_club.png';
import maisondorImg from '../assets/projects/maisondor.png';
import jeevisImg from '../assets/projects/jeevis_creations.png';
import taskloopImg from '../assets/projects/taskloop.png';
import egoisteImg from '../assets/projects/egoiste.png';

const projects = [
  {
    id: 1,
    title: "Egoiste",
    subtitle: "Luxury Menswear & Timeless Classics",
    category: "client",
    categoryLabel: "Flagship E-Commerce",
    typeIcon: ShoppingBag,
    image: egoisteImg,
    domain: "new-dres-shop.vercel.app",
    demo: "https://new-dres-shop.vercel.app/",
    github: "https://github.com",
    badge: "Featured Flagship Demo",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    description: "An editorial-grade luxury menswear web store inspired by European tailoring and country club heritage. Features curated seasonal lookbooks, a stateful slide-over shopping bag, quick-view customization modals, and smooth dark/light theme dynamics.",
    highlights: [
      "Stateful cart drawer architecture backed by persistent storage with dynamic pricing & item management.",
      "Interactive product quick-view modal with real-time color swatches, size selectors, and fabric specifications.",
      "Multi-collection filtering across Court & Country, Heritage Tailoring, and The Clubhouse Edit.",
      "Editorial aesthetics with Cormorant Garamond typography, 60fps micro-interactions, and fluid theme switching."
    ],
    techTags: ["React.js", "Tailwind CSS", "Framer Motion", "Lucide Icons", "Vite", "Vercel"]
  },
  {
    id: 2,
    title: "French Club",
    subtitle: "Premium Streetwear & Menswear Platform",
    category: "client",
    categoryLabel: "Client Project",
    typeIcon: ShoppingBag,
    image: frenchClubImg,
    domain: "french-club-neon.vercel.app",
    demo: "https://french-club-neon.vercel.app/",
    github: "https://github.com",
    badge: "Live Client Work",
    badgeColor: "bg-[#FF2A2A]/10 text-[#FF2A2A] border-[#FF2A2A]/30",
    description: "A high-conversion e-commerce brand store engineered for a premier menswear & streetwear label in Namakkal. Designed with a sleek dark aesthetic, dynamic product catalogs, size/fit selectors, and an interactive shopping bag workflow.",
    highlights: [
      "Custom MERN stack foundation with optimized MongoDB product aggregations for instant category filtering.",
      "Stateful shopping cart & checkout flow with real-time UI feedback and toast notifications.",
      "Fluid 60fps micro-interactions and smooth page transitions powered by Framer Motion & Tailwind CSS.",
      "High-resolution interactive product gallery with responsive multi-device support."
    ],
    techTags: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Framer Motion", "Vercel"]
  },
  {
    id: 3,
    title: "MAISON D'OR",
    subtitle: "Haute Couture & Luxury Bridal Boutique",
    category: "client",
    categoryLabel: "Client Project",
    typeIcon: Sparkles,
    image: maisondorImg,
    domain: "wwwmaisondorcom.vercel.app",
    demo: "https://wwwmaisondorcom.vercel.app/",
    github: "https://github.com",
    badge: "Live Client Work",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    description: "An opulent digital boutique crafted for a luxury bridal atelier. Features royal aesthetic typography, curated lookbooks for bridal lehengas & Banarasi silks, bespoke inquiry booking, and high-touch interactive styling showcases.",
    highlights: [
      "Luxury editorial aesthetic with bespoke typography, gold metallic gradients, and glassmorphic UI.",
      "Interactive bridal collection catalog with intuitive filtering and direct custom inquiry handling.",
      "Optimized asset loading delivering fast performance for high-definition 4K fashion photography.",
      "Seamless responsive navigation tailored for luxury clientele across mobile and desktop."
    ],
    techTags: ["React.js", "Tailwind CSS", "Framer Motion", "Lucide Icons", "Vite", "Vercel"]
  },
  {
    id: 4,
    title: "Jeevi's Creations",
    subtitle: "Bridal Saree Pre-Pleating & Mehndi Studio",
    category: "client",
    categoryLabel: "Client Project",
    typeIcon: Palette,
    image: jeevisImg,
    domain: "fastiondesign-j3hq.vercel.app",
    demo: "https://fastiondesign-j3hq.vercel.app/#saree",
    github: "https://github.com",
    badge: "Live Client Work",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    description: "A client-facing digital showcase and appointment booking platform for bridal saree draping, one-minute pre-pleating services, and intricate organic henna artistry with direct WhatsApp booking and service cost estimation.",
    highlights: [
      "One-click appointment inquiry integration tailored for seamless wedding season bookings.",
      "Interactive visual lookbook for bridal mehndi packages, box-fold saree draping styles, and rates.",
      "Engaging micro-interactions with custom animated service cards and customer testimonials.",
      "Ultra-fast SEO-optimized landing architecture built for local bridal discovery."
    ],
    techTags: ["React.js", "Tailwind CSS", "Modern UI/UX", "Lucide Icons", "Vercel"]
  },
  {
    id: 5,
    title: "TaskLoop",
    subtitle: "Enterprise Workflow & Task Management",
    category: "fullstack",
    categoryLabel: "Full Stack SaaS",
    typeIcon: Workflow,
    image: taskloopImg,
    domain: "taskloop-ivory.vercel.app",
    demo: "https://taskloop-ivory.vercel.app/login",
    github: "https://github.com",
    badge: "Production SaaS",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    description: "A high-performance task management ecosystem that streamlines team coordination through automated status transitions, cloud asset storage, and real-time sprint tracking dashboards.",
    highlights: [
      "Real-time data synchronization using React & Redux Toolkit for complex multi-board state management.",
      "Engineered automated status transitions with custom hooks triggered by checklist completion logic.",
      "Integrated AWS S3 SDK with pre-signed URLs to guarantee secure cloud file uploads.",
      "Stateless JWT-based authentication enforcing strict Role-Based Access Control (RBAC)."
    ],
    techTags: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "AWS S3", "Tailwind CSS"]
  }
];

const categories = [
  { key: "all", label: "ALL WORK" },
  { key: "client", label: "CLIENT DEPLOYMENTS" },
  { key: "fullstack", label: "FULL STACK MERN" }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section 
      id="projects" 
      className="bg-[#050505] text-white pt-28 pb-36 px-4 sm:px-6 md:px-12 w-full relative overflow-hidden border-t border-[#27272A] bg-tech-grid"
    >
      {/* Huge Background Watermark: WORK */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none select-none z-0">
        <span className="font-bebas text-[22vw] leading-none text-white/[0.03] uppercase tracking-tighter">
          WORK
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Header Title Section */}
        <div className="w-full max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2 border border-[#FF2A2A]/30 rounded-full px-4 py-1.5 text-xs text-[#FF2A2A] font-mono tracking-widest uppercase mb-6 bg-[#FF2A2A]/5 backdrop-blur-md shadow-[0_0_15px_rgba(255,42,42,0.1)]">
            <span className="w-2 h-2 rounded-full bg-[#FF2A2A] animate-pulse" />
            <span>// 03. SELECTED CLIENT & FULL-STACK WORK</span>
          </div>

          <h2 className="font-space text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5 text-white">
            Featured <span className="text-[#FF2A2A]">Projects</span>.
          </h2>
          
          <p className="font-inter text-[#A1A1AA] text-sm md:text-base font-normal max-w-2xl mx-auto leading-relaxed">
            Real-world client web applications, e-commerce brand platforms, and robust MERN stack architectures engineered for scale and speed.
          </p>

          {/* Quick Metrics Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#27272A] text-xs text-[#A1A1AA] font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-white font-medium">4+ Live Work & Demos</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#27272A] text-xs text-[#A1A1AA] font-mono">
              <span className="w-2 h-2 rounded-full bg-[#FF2A2A]" />
              <span className="text-white font-medium">Full Stack MERN Architecture</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#27272A] text-xs text-[#A1A1AA] font-mono">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-white font-medium">60fps Motion Design</span>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 p-1.5 rounded-full bg-[#111111] border border-[#27272A] backdrop-blur-xl mb-14">
          {categories.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-5 py-2 rounded-full text-xs font-space font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  isActive ? "text-white" : "text-[#71717A] hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 rounded-full bg-[#FF2A2A] shadow-[0_0_20px_rgba(255,42,42,0.4)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 w-full"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const TypeIcon = project.typeIcon || Layers;

              return (
                <motion.div 
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative bg-[#111111] border border-[#27272A] rounded-3xl overflow-hidden flex flex-col justify-between hover:border-[#FF2A2A]/50 hover:bg-[#141414] transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_25px_60px_rgba(255,42,42,0.15)]"
                >
                  {/* Subtle Red Top-Glow Gradient */}
                  <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#FF2A2A]/10 rounded-full blur-[70px] pointer-events-none group-hover:bg-[#FF2A2A]/20 transition-all duration-500" />

                  {/* Upper Section: Browser Window Frame */}
                  <div className="p-3 sm:p-4 pb-0">
                    <div className="bg-[#050505] border border-[#27272A] rounded-2xl overflow-hidden group-hover:border-[#3F3F46] transition-colors duration-500">
                      
                      {/* Browser Window Header Bar */}
                      <div className="px-4 py-3 bg-[#0A0A0A] border-b border-[#27272A] flex items-center justify-between gap-3 select-none">
                        
                        {/* Traffic Lights (macOS dots) */}
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FF2A2A]/80 shadow-sm" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 shadow-sm" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 shadow-sm" />
                        </div>

                        {/* URL Search Bar */}
                        <div className="flex-1 max-w-[320px] mx-auto bg-[#111111] border border-[#27272A] rounded-lg px-3 py-1 flex items-center justify-between text-[11px] font-mono">
                          <div className="flex items-center gap-1.5 truncate">
                            <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                            <span className="text-[#71717A] hidden sm:inline">https://</span>
                            <span className="text-[#A1A1AA] truncate">{project.domain}</span>
                          </div>
                          <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold tracking-wider uppercase shrink-0 pl-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Live
                          </span>
                        </div>

                        {/* Direct External Link Icon */}
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          title="Visit live website"
                          className="w-7 h-7 rounded-lg bg-[#18181B] hover:bg-[#FF2A2A] flex items-center justify-center text-[#A1A1AA] hover:text-white transition-colors duration-300"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>

                      {/* Interactive Website Preview Viewport */}
                      <div className="relative h-56 sm:h-64 md:h-72 w-full overflow-hidden bg-black">
                        <img 
                          src={project.image} 
                          alt={`${project.title} live website screenshot`}
                          className="w-full h-full object-cover object-top transform transition-transform duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                        />

                        {/* Overlay with Quick Action on Card Hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-space flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF2A2A] text-white font-bold text-xs uppercase tracking-wider backdrop-blur-md shadow-[0_0_25px_rgba(255,42,42,0.6)] transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Visit Live Website</span>
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Lower Section: Project Details, Highlights, Tech & Actions */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                    <div>
                      {/* Category Badge & Icon */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-[#FF2A2A]/10 border border-[#FF2A2A]/20 flex items-center justify-center text-[#FF2A2A]">
                            <TypeIcon className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-mono font-bold tracking-wider text-[#A1A1AA] uppercase">
                            {project.categoryLabel}
                          </span>
                        </div>

                        <span className={`text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${project.badgeColor}`}>
                          {project.badge}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="font-space text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1 group-hover:text-[#FF2A2A] transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A1A1AA] mb-4">
                        {project.subtitle}
                      </h4>

                      {/* Description */}
                      <p className="font-inter text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-6 font-normal">
                        {project.description}
                      </p>

                      {/* Key Features / Implementations */}
                      <div className="mb-6 bg-[#0A0A0A] border border-[#27272A] rounded-2xl p-4 sm:p-5">
                        <h5 className="text-[11px] font-mono font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF2A2A]" />
                          Key Architectural Highlights
                        </h5>
                        <ul className="space-y-2.5 list-none">
                          {project.highlights.map((li, highlightIdx) => (
                            <li key={highlightIdx} className="flex items-start gap-2.5 font-inter text-xs text-[#A1A1AA] leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A2A] mt-1.5 shrink-0 shadow-[0_0_6px_#FF2A2A]" />
                              <span>{li}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tech Stack Tags & CTA Buttons */}
                    <div>
                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-4 border-t border-[#27272A] mb-6">
                        {project.techTags.map((tech, techIdx) => (
                          <span 
                            key={techIdx} 
                            className="font-mono text-[10px] font-medium px-2.5 py-1 rounded-lg bg-[#18181B] border border-[#27272A] text-[#A1A1AA] hover:text-white hover:border-[#3F3F46] transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* CTA Action Buttons */}
                      <div className="flex items-center gap-3">
                        <a 
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-space flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#FF2A2A] hover:bg-white text-white hover:text-black shadow-[0_0_20px_rgba(255,42,42,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300 cursor-pointer"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>

                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-space flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-[#27272A] hover:border-white text-xs font-bold uppercase tracking-wider bg-[#18181B] text-[#A1A1AA] hover:text-white transition-all duration-300"
                        >
                          <Github className="w-4 h-4" />
                          <span>Repository</span>
                        </a>
                      </div>
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner Callout */}
        <div className="mt-16 w-full max-w-4xl p-8 rounded-3xl bg-[#111111] border border-[#27272A] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
          <div>
            <h4 className="font-space text-lg md:text-xl font-bold text-white mb-1">
              Have a custom project or client vision in mind?
            </h4>
            <p className="font-inter text-xs md:text-sm text-[#A1A1AA]">
              Let's engineer tailored MERN full-stack architectures and high-converting modern web applications.
            </p>
          </div>
          <a
            href="#contact"
            className="font-space shrink-0 px-6 py-3 rounded-full bg-[#FF2A2A] hover:bg-white text-white hover:text-black text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(255,42,42,0.4)]"
          >
            Start a Conversation
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
