import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Cpu, Layout, Server, Database } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "TaskLoop Workflow Management System",
    subtitle: "Featured Deployment",
    description: "A high-performance task management ecosystem that streamlines team coordination through automated status transitions and secure cloud assets.",
    techTags: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "AWS S3", "Tailwind CSS", "Vercel"],
    highlights: [
      "Real-time data synchronization using React & Redux Toolkit for state management.",
      "Engineered status updates with custom hooks triggered by checklist completion logic.",
      "Integrated AWS S3 SDK with pre-signed URLs to guarantee secure file uploads.",
      "Tailwind CSS & Framer Motion UI offering a fluid, mobile-first 60fps experience."
    ],
    icon: Layout,
    github: "https://github.com",
    demo: "https://vercel.com",
    badge: "Active Production"
  },
  {
    id: 2,
    title: "Inventory Management System",
    subtitle: "Production Application",
    description: "An enterprise-grade inventory tracker built to handle large product catalogs with sub-millisecond querying and secure role access.",
    techTags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Chart.js", "Axios", "Vercel"],
    highlights: [
      "Handles 1,000+ entries using MongoDB Indexing & Aggregation Pipelines.",
      "Centralized error handling and loader feedback using custom Axios Interceptors.",
      "Stateless JWT-based authentication enforcing strict Role-Based Access Control.",
      "Real-time visual data reporting and alerts powered by Chart.js graphs."
    ],
    icon: Database,
    github: "https://github.com",
    demo: "https://vercel.com",
    badge: "Enterprise Ready"
  }
];

const Projects = () => {
  return (
    <section 
      id="projects" 
      className="bg-[#0c0c0c] text-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-gray-900 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]"
    >
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-800/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center gap-16">
        
        {/* Header Title */}
        <div data-aos="fade-up" className="w-full max-w-2xl text-center">
          <div className="inline-block border border-gray-800 rounded-full px-5 py-1.5 text-xs text-gray-400 font-mono tracking-widest uppercase mb-6 bg-black/40">
            Selected Creations
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white">
            Projects & <span className="text-[#ff2a2a]">Deployments</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-medium max-w-xl mx-auto">
            A showcase of engineered applications, highlighting modern stack selections and technical performance indicators.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="group relative bg-[#121212]/90 border border-gray-800/80 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between hover:border-[#ff2a2a]/40 hover:bg-[#151515]/95 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_rgba(255,42,42,0.1)]"
              >
                {/* Top Card Info */}
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#ff2a2a]/10 border border-[#ff2a2a]/20 flex items-center justify-center text-[#ff2a2a] group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-gray-800 bg-black/40 text-gray-400">
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-black mb-2 tracking-tight group-hover:text-[#ff2a2a] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6 font-mono">
                    {project.subtitle}
                  </h4>

                  <p className="text-sm text-gray-400 leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <h5 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">
                    Key Implementations
                  </h5>
                  <ul className="text-xs md:text-sm leading-relaxed space-y-3 mb-8 list-none">
                    {project.highlights.map((li, highlightIdx) => (
                      <li key={highlightIdx} className="flex items-start gap-2.5 text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a] mt-2 shrink-0"></span>
                        <span className="text-justify">{li}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags & CTA Links */}
                <div>
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-900">
                    {project.techTags.map((tech, techIdx) => (
                      <span 
                        key={techIdx} 
                        className="text-[9px] md:text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-black/60 border border-gray-800 text-gray-400 group-hover:border-gray-700/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-8 pt-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-850 text-xs font-bold uppercase tracking-wider bg-black/40 hover:bg-[#ff2a2a] hover:border-transparent hover:text-white transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-850 text-xs font-bold uppercase tracking-wider bg-black/40 hover:bg-white hover:text-black hover:border-transparent transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
