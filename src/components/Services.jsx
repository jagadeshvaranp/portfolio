import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  ShoppingBag, 
  Layers, 
  Cpu, 
  Gauge, 
  Briefcase, 
  GraduationCap, 
  ArrowUpRight,
  CheckCircle2,
  Terminal
} from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('services');

  const servicesList = [
    {
      number: "01",
      icon: Code2,
      title: "MERN Stack Development",
      subtitle: "Custom Web Architectures & Endpoints",
      description: "End-to-end full stack engineering using React, Node.js, Express, and MongoDB. Building resilient RESTful APIs, microservices, and database aggregation pipelines.",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "JWT Auth"]
    },
    {
      number: "02",
      icon: ShoppingBag,
      title: "E-Commerce & Brand Stores",
      subtitle: "High-Conversion Digital Boutiques",
      description: "Custom digital storefronts designed for fashion labels, bridal ateliers, and streetwear brands with custom product lookbooks, dynamic carts, and WhatsApp checkout.",
      tags: ["Dynamic Carts", "Inventory Aggregation", "Framer Motion", "Stripe / Razorpay", "SEO"]
    },
    {
      number: "03",
      icon: Layers,
      title: "Modern Frontend Engineering",
      subtitle: "60fps Interactive User Interfaces",
      description: "Crafting fluid, visually captivating, and accessible web experiences with state-of-the-art animations, responsive layouts, and modern design systems.",
      tags: ["React 19", "Tailwind CSS", "Framer Motion", "Vite", "Responsive Design"]
    },
    {
      number: "04",
      icon: Cpu,
      title: "AI Automation & Cloud Operations",
      subtitle: "Intelligent Workflows & Storage",
      description: "Integrating AI models, automated pipeline scripts, and AWS S3 bucket assets with pre-signed URLs for frictionless and secure cloud data handling.",
      tags: ["AWS S3", "AI APIs", "Cloud Deployments", "Vercel", "Role-Based Access"]
    },
    {
      number: "05",
      icon: Gauge,
      title: "Performance & SEO Optimization",
      subtitle: "Speed, Security & Discovery",
      description: "Auditing and optimizing existing web applications for lightning-fast Core Web Vitals, sub-second load times, structured data, and top search rankings.",
      tags: ["Core Web Vitals", "Lighthouse 95+", "Schema.org", "Bundle Optimization"]
    }
  ];

  const experienceList = [
    {
      number: "EXP // 01",
      icon: Briefcase,
      role: "MERN Stack Developer",
      company: "AUC Ventures Pvt Ltd",
      period: "Nov 2025 - June 2026",
      location: "Namakkal, India",
      points: [
        "Engineered and maintained production-ready, full-stack web applications utilizing the MERN ecosystem to ensure scalable performance.",
        "Designed resilient database schemas and optimized API endpoints to streamline web application performance and minimize load latencies.",
        "Demonstrated high sincerity, diligence, and active professional collaboration across cross-functional product teams."
      ],
      techTags: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Mongoose"]
    },
    {
      number: "EXP // 02",
      icon: Briefcase,
      role: "MERN Stack Developer - Internship",
      company: "JSpiders",
      period: "June 2025 - Dec 2025",
      location: "Bengaluru / India",
      points: [
        "Developed and deployed scalable full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
        "Engineered secure RESTful APIs and implemented JWT-based authentication systems for user data protection.",
        "Collaborated with the engineering team to build interactive dashboards and optimize database queries within Agile sprints."
      ],
      techTags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Git & GitHub"]
    },
    {
      number: "EDU // 01",
      icon: GraduationCap,
      role: "B.E. in Computer Science & Engineering",
      company: "Paavai Engineering College",
      period: "2021 - 2025",
      location: "Namakkal, India",
      points: [
        "Specialized in Database Management Systems, System Architectures, Algorithms, and Software Engineering methodologies.",
        "Graduated with practical engineering experience and core full-stack foundations."
      ],
      techTags: ["Computer Science", "Database Engineering", "Data Structures", "Web Technologies"]
    }
  ];

  return (
    <section 
      id="experience" 
      className="bg-[#050505] text-white pt-28 pb-36 px-6 md:px-12 w-full relative overflow-hidden border-t border-[#27272A] bg-tech-grid"
    >
      {/* Huge Background Watermark: SERVICES */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none select-none z-0">
        <span className="font-bebas text-[20vw] leading-none text-white/[0.03] uppercase tracking-tighter">
          SERVICES
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF2A2A] shadow-[0_0_8px_#FF2A2A]" />
              <span className="font-mono text-xs text-[#FF2A2A] tracking-widest uppercase font-semibold">
                // 02. CAPABILITIES & CAREER TRACK
              </span>
            </div>
            <h2 className="font-space text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Services & <span className="text-[#FF2A2A]">Track Record</span>.
            </h2>
          </div>

          {/* Toggle Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-[#111111] border border-[#27272A] self-start md:self-auto">
            <button
              onClick={() => setActiveTab('services')}
              className={`font-space px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'services' 
                  ? 'bg-[#FF2A2A] text-white shadow-[0_0_15px_rgba(255,42,42,0.4)]' 
                  : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              Studio Services
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`font-space px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'experience' 
                  ? 'bg-[#FF2A2A] text-white shadow-[0_0_15px_rgba(255,42,42,0.4)]' 
                  : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              Experience & Education
            </button>
          </div>
        </div>

        {/* Content Showcase */}
        <AnimatePresence mode="wait">
          {activeTab === 'services' ? (
            <motion.div
              key="services-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {servicesList.map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <div
                    key={idx}
                    className="group bg-[#111111] border border-[#27272A] hover:border-[#FF2A2A]/50 rounded-3xl p-7 flex flex-col justify-between hover:bg-[#141414] transition-all duration-500 shadow-[0_15px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(255,42,42,0.12)]"
                  >
                    <div>
                      {/* Card Header: Number & Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono text-sm font-bold text-[#FF2A2A] bg-[#FF2A2A]/10 border border-[#FF2A2A]/20 px-3 py-1 rounded-full">
                          {srv.number}
                        </span>
                        <div className="w-10 h-10 rounded-2xl bg-[#18181B] border border-[#27272A] group-hover:border-[#FF2A2A]/40 flex items-center justify-center text-[#A1A1AA] group-hover:text-white group-hover:bg-[#FF2A2A] transition-all duration-300">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="font-space text-xl font-bold text-white group-hover:text-[#FF2A2A] transition-colors mb-1">
                        {srv.title}
                      </h3>
                      <p className="font-mono text-[11px] text-[#A1A1AA] uppercase tracking-wider mb-4">
                        {srv.subtitle}
                      </p>

                      {/* Description */}
                      <p className="font-inter text-xs sm:text-sm text-[#71717A] group-hover:text-[#A1A1AA] leading-relaxed mb-6 transition-colors">
                        {srv.description}
                      </p>
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#27272A]">
                      {srv.tags.map((tag, tagIdx) => (
                        <span 
                          key={tagIdx}
                          className="font-mono text-[10px] px-2.5 py-1 rounded-lg bg-[#18181B] border border-[#27272A] text-[#A1A1AA] group-hover:text-white group-hover:border-[#3F3F46] transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="experience-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-6 max-w-4xl mx-auto"
            >
              {experienceList.map((exp, idx) => {
                const Icon = exp.icon;
                return (
                  <div
                    key={idx}
                    className="group bg-[#111111] border border-[#27272A] hover:border-[#FF2A2A]/50 rounded-3xl p-6 sm:p-8 hover:bg-[#141414] transition-all duration-500 shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#18181B] border border-[#27272A] group-hover:border-[#FF2A2A] flex items-center justify-center text-[#FF2A2A] shrink-0 transition-colors">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-space text-xl font-bold text-white group-hover:text-[#FF2A2A] transition-colors">
                            {exp.role}
                          </h3>
                          <p className="font-inter text-sm font-semibold text-[#A1A1AA] mt-0.5">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:items-end">
                        <span className="font-mono text-xs font-bold text-[#FF2A2A] bg-[#FF2A2A]/10 border border-[#FF2A2A]/20 px-3 py-1 rounded-full w-fit">
                          {exp.number}
                        </span>
                        <span className="font-mono text-[11px] text-[#71717A] mt-2">
                          {exp.period} • {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2.5 mb-6 pl-1 font-inter text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                      {exp.points.map((pt, ptIdx) => (
                        <li key={ptIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A2A] mt-2 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#27272A]">
                      {exp.techTags.map((tech, techIdx) => (
                        <span 
                          key={techIdx}
                          className="font-mono text-[10px] px-2.5 py-1 rounded-lg bg-[#18181B] border border-[#27272A] text-[#A1A1AA]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Services;