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
  Workflow
} from 'lucide-react';

import frenchClubImg from '../assets/projects/french_club.png';
import maisondorImg from '../assets/projects/maisondor.png';
import jeevisImg from '../assets/projects/jeevis_creations.png';
import taskloopImg from '../assets/projects/taskloop.png';

const projects = [
  {
    id: 1,
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
    badgeColor: "bg-red-500/10 text-red-400 border-red-500/30",
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
  { key: "all", label: "All Projects" },
  { key: "client", label: "Client Work" },
  { key: "fullstack", label: "Full Stack MERN" }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section 
      id="projects" 
      className="bg-[#0c0c0c] text-white pt-28 pb-36 px-4 sm:px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-gray-900 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]"
    >
      {/* Decorative Glow Ambient Circles */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 -right-20 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-600/5 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Header Title Section */}
        <div data-aos="fade-up" className="w-full max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2 border border-red-500/20 rounded-full px-4 py-1.5 text-xs text-red-400 font-mono tracking-widest uppercase mb-6 bg-red-500/5 backdrop-blur-md shadow-[0_0_15px_rgba(255,42,42,0.1)]">
            <Sparkles className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            <span>Client Work & Deployments</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight mb-5 text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a2a] via-[#ff6b6b] to-white">Creations</span> & Projects
          </h2>
          
          <p className="text-gray-400 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            Real-world client solutions, full-stack MERN architectures, and high-performance web applications built with precision engineering and modern UX.
          </p>

          {/* Quick Metrics Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs text-gray-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>3+ Active Client Deployments</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs text-gray-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span>Full Stack MERN</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs text-gray-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>High-Performance 60fps UX</span>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div data-aos="fade-up" data-aos-delay="100" className="flex items-center justify-center gap-2 p-1.5 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl mb-14">
          {categories.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive ? "text-white" : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ff2a2a] to-[#cc1111] shadow-[0_0_20px_rgba(255,42,42,0.4)]"
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
                  className="group relative bg-[#111111]/90 border border-white/10 rounded-[1.75rem] md:rounded-[2rem] overflow-hidden flex flex-col justify-between hover:border-[#ff2a2a]/50 hover:bg-[#141414] transition-all duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_rgba(255,42,42,0.15)]"
                >
                  {/* Subtle Red Top-Glow Gradient */}
                  <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#ff2a2a]/15 rounded-full blur-[70px] pointer-events-none group-hover:bg-[#ff2a2a]/25 transition-all duration-500" />

                  {/* ─────────────────────────────────────────────────────────────
                      UPPER SECTION: REAL WEBSITE BROWSER MOCKUP & LIVE PREVIEW
                     ───────────────────────────────────────────────────────────── */}
                  <div className="p-3 sm:p-4 pb-0">
                    <div className="bg-[#080808] border border-white/10 rounded-2xl overflow-hidden shadow-inner group-hover:border-white/20 transition-colors duration-500">
                      
                      {/* Browser Window Header Bar */}
                      <div className="px-4 py-3 bg-[#0d0d0d] border-b border-white/5 flex items-center justify-between gap-3 select-none">
                        
                        {/* Traffic Lights (macOS dots) */}
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-[#ff5f56]/90 border border-[#e0443e]/40 shadow-sm" />
                          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/90 border border-[#dea123]/40 shadow-sm" />
                          <span className="w-3 h-3 rounded-full bg-[#27c93f]/90 border border-[#1aab29]/40 shadow-sm" />
                        </div>

                        {/* URL Search Bar */}
                        <div className="flex-1 max-w-[320px] mx-auto bg-black/60 border border-white/10 rounded-lg px-3 py-1 flex items-center justify-between text-[11px] text-gray-400 font-mono">
                          <div className="flex items-center gap-1.5 truncate">
                            <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                            <span className="text-gray-500 hidden sm:inline">https://</span>
                            <span className="text-gray-200 truncate">{project.domain}</span>
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
                          className="w-7 h-7 rounded-lg bg-white/5 hover:bg-[#ff2a2a] flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>

                      {/* Interactive Website Preview Viewport */}
                      <div className="relative h-52 sm:h-64 md:h-72 w-full overflow-hidden bg-black/80">
                        <img 
                          src={project.image} 
                          alt={`${project.title} live website screenshot`}
                          className="w-full h-full object-cover object-top transform transition-transform duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                        />

                        {/* Overlay with Quick Action on Card Hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600/90 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-md shadow-[0_0_25px_rgba(255,42,42,0.6)] transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 hover:bg-red-500 hover:scale-105"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Visit Live Website</span>
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* ─────────────────────────────────────────────────────────────
                      LOWER SECTION: PROJECT DETAILS, HIGHLIGHTS, TECH & ACTIONS
                     ───────────────────────────────────────────────────────────── */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                    <div>
                      {/* Category Badge & Icon */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-xl bg-[#ff2a2a]/10 border border-[#ff2a2a]/20 flex items-center justify-center text-[#ff2a2a]">
                            <TypeIcon className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-mono font-bold tracking-wider text-gray-300 uppercase">
                            {project.categoryLabel}
                          </span>
                        </div>

                        <span className={`text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${project.badgeColor}`}>
                          {project.badge}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-1 group-hover:text-[#ff2a2a] transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <h4 className="text-xs font-bold uppercase tracking-widest text-[#ff2a2a]/80 mb-4 font-mono">
                        {project.subtitle}
                      </h4>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6 font-normal">
                        {project.description}
                      </p>

                      {/* Key Features / Implementations */}
                      <div className="mb-6 bg-black/40 border border-white/5 rounded-2xl p-4 sm:p-5">
                        <h5 className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-300 mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#ff2a2a]" />
                          Key Architectural Highlights
                        </h5>
                        <ul className="space-y-2.5 list-none">
                          {project.highlights.map((li, highlightIdx) => (
                            <li key={highlightIdx} className="flex items-start gap-2.5 text-xs text-gray-400 leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a] mt-1.5 shrink-0 shadow-[0_0_6px_#ff2a2a]" />
                              <span>{li}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tech Stack Tags & CTA Buttons */}
                    <div>
                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-4 border-t border-white/10 mb-6">
                        {project.techTags.map((tech, techIdx) => (
                          <span 
                            key={techIdx} 
                            className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-gray-300 hover:border-gray-600 transition-colors"
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
                          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#ff2a2a] to-[#d61e1e] text-white hover:from-white hover:to-white hover:text-black shadow-[0_4px_20px_rgba(255,42,42,0.3)] hover:shadow-[0_6px_25px_rgba(255,255,255,0.4)] transition-all duration-300 cursor-pointer"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>

                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/15 text-xs font-bold uppercase tracking-wider bg-white/[0.03] text-gray-300 hover:bg-white/10 hover:border-white/30 hover:text-white transition-all duration-300"
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
        <div data-aos="fade-up" className="mt-16 w-full max-w-4xl p-6 md:p-8 rounded-3xl bg-gradient-to-r from-red-950/30 via-black to-red-950/20 border border-red-500/20 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="text-lg md:text-xl font-bold text-white mb-1">
              Have a custom project or client vision in mind?
            </h4>
            <p className="text-xs md:text-sm text-gray-400">
              Let's engineer tailored MERN full-stack architectures and high-converting modern web applications.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-[#ff2a2a] hover:text-white transition-all duration-300 shadow-lg"
          >
            Start a Conversation
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
