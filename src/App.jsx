import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Database,
  Server,
  Terminal,
  ChevronDown,
  Moon,
  Sun,
  Sparkles
} from 'lucide-react';
import image from "./assets/jaga.jpg";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Dark mode toggle
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const personalInfo = {
    name: "Jagadeshvaran",
    role: "MERN Stack Developer",
    email: "jagadesperumal@gmail.com",
    phone: "+91 6374562170",
    website: "jagadesh.info",
    about: "Result-oriented MERN Stack Developer (2025 Graduate) skilled in building scalable web applications using MongoDB, Express.js, React.js, and Node.js. Experienced in full-stack development, API design, authentication, cloud deployment, and AI-integrated chatbot systems.",
    education: "Bachelor of Engineering in Computer Science and Engineering - May 2025"
  };

  const skills = [
    { category: "Frontend", icon: <Code className="w-6 h-6" />, items: ["React.js", "Redux", "Tailwind css", "javascript(es6+)"] },
    { category: "Backend", icon: <Server className="w-6 h-6" />, items: ["Node.js", "Express.js", "Rest APIS", "JWT"]},
    { category: "Databases", icon: <Database className="w-6 h-6" />, items: ["MongoDB", "mySQL"], level: 85 },
    { category: "DevOps & Tools", icon: <Terminal className="w-6 h-6" />, items: ["Postman", "AWS", "GitHub", "EC2/S3 Basics"] }
  ];

  const projects = [
    {
      title: "Inventory Pro - Enterprise Dashboard",
      tech: "MERN + Redux Toolkit + Chart.js",
      description: "Architected a real-time inventory system handling 10,000+ SKUs with predictive analytics, reducing stock discrepancies by 65%. Features RBAC, WebSocket updates & PDF reporting.",
      live: "https://inventory.jagadesh.info",
      code: "https://github.com/jagadeshvaranp/inventory-pro"
    },
    {
      title: "TaskLoop - AI-Powered Workflow",
      tech: "React + Node.js + Socket.io + MySQL",
      description: "Full-stack SaaS platform with Kanban boards, AI task prioritization, team analytics, and Slack integration. Served 500+ active users with 99.9% uptime.",
      live: "https://taskloop.app",
      code: "https://github.com/jagadeshvaranp/taskloop"
    }
  ];

  const experience = [{
    company: "QSpiders",
    role: "MERN Stack Developer Intern",
    duration: "Jun 2024 - Dec 2024",
    description: "Built production-grade applications using MERN stack. Implemented microservices, OAuth 2.0, and deployed on AWS EC2 with Nginx reverse proxy."
  }];

  return (
    <>
      {/* Subtle Particle Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-purple-900" />
        <div className="absolute inset-0 opacity-30">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-indigo-400 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className={`min-h-screen font-sans transition-colors duration-500 ${isDark ? 'dark bg-slate-950' : 'bg-gradient-to-br from-slate-50 to-indigo-50'}`}>
        
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="fixed top-20 right-6 z-50 p-3 bg-white/10 dark:bg-white/20 backdrop-blur-xl rounded-full shadow-2xl border border-white/20 hover:scale-110 transition-all"
          aria-label="Toggle dark mode"
        >
          {isDark ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-indigo-600" />}
        </button>

        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl border-b border-white/20 shadow-xl z-40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold shadow-2xl">
                  J
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  jagadesh.info
                </span>
              </div>

              <div className="hidden lg:flex items-center gap-10">
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-all hover:scale-105"
                  >
                    {item}
                  </a>
                ))}
                <a href="#contact" className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-xl hover:shadow-indigo-500/50 transform hover:scale-105 transition-all flex items-center gap-2">
                  <Sparkles size={18} /> Hire Me
                </a>
              </div>

              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-slate-700 dark:text-slate-300">
                {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800">
              <div className="px-6 py-6 space-y-4">
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* HERO SECTION */}
        <section id="about" className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
                    <br />
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                    {personalInfo.name}
                  </span>
                </h1>
                <p className="text-2xl lg:text-3xl mt-4 text-slate-600 dark:text-slate-300 font-light">
                  {personalInfo.role}
                </p>
              </div>

              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                {personalInfo.about}
              </p>

              <div className="flex flex-wrap gap-6">
                <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-bold shadow-2xl hover:shadow-purple-600/50 transform hover:-translate-y-1 transition-all">
                  Explore Projects
                </a>
                <a href="#contact" className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 dark:text-white dark:border-white rounded-full font-bold hover:bg-indigo-600 hover:text-white transition-all">
                  Let's Talk
                </a>
              </div>

              <div className="flex gap-8 text-slate-600 dark:text-slate-400">
                <a href="https://github.com/jagadeshvaranp" className="hover:text-indigo-600 transform hover:scale-125 transition-all"><Github size={28} /></a>
                <a href="https://linkedin.com/in/-jagadeshvaran-p" className="hover:text-indigo-600 transform hover:scale-125 transition-all"><Linkedin size={28} /></a>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-indigo-600 transform hover:scale-125 transition-all"><Mail size={28} /></a>
              </div>
            </div>


            

            {/* Hero Image */}
             <div className="w-64 h-80 md:w-110  md:h-110 relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl ml-30 opacity-20 animate-pulse"></div>
            <img 
              src={image} 
              alt="Jagadeshvaran P" 
              className="relative w-full h-full object-cover rounded-full border-4 ml-30 border-slate-700/50 shadow-2xl"
            />
            
          </div>
        </div>






          <div className="text-center mt-20">
            <ChevronDown className="mx-auto text-indigo-600 animate-bounce w-10 h-10" />
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-24 px-6 bg-white/50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Technical Arsenal
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, i) => (
                <div key={i} className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl hover:shadow-2xl border border-white/20 hover:border-indigo-500/50 transition-all hover:-translate-y-4">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white shadow-lg">
                      {skill.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{skill.category}</h3>
                  </div>
                  <div className="space-y-4">
                    {skill.items.map((item, j) => (
                      <div key={j}>
                        <div className="flex justify-between mb-2 text-gray-50">
                          <span className="text-lg font-bold ">{item}</span>
                   
                        </div>
                       
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              {projects.map((proj, i) => (
                <div key={i} className="group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 hover:-translate-y-6 border border-slate-200 dark:border-slate-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="p-10 relative z-10">
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/50 px-4 py-2 rounded-full inline-block mb-6">
                      {proj.tech}
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                      {proj.description}
                    </p>
                    <div className="flex gap-6">
                      <a href={proj.code} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-indigo-600 font-medium">
                        <Github size={20} /> Code
                      </a>
                      {/* <a href={proj.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-indigo-600 font-bold">
                        Live Demo <ExternalLink size={18} />
                      </a> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION */}
        <section id="experience" className="py-24 px-6 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Experience
              </h2>
              {experience.map((exp, i) => (
                <div key={i} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
                  <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{exp.role}</h3>
                  <p className="text-lg font-semibold mt-2">{exp.company} • {exp.duration}</p>
                  <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Education
              </h2>
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-1 rounded-3xl">
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-10 text-center">
                  <h3 className="text-3xl font-bold">B.E. Computer Science</h3>
                  <p className="text-xl mt-4 text-slate-600 dark:text-slate-300">Graduating May 2025</p>
                  {/* <div className="mt-8 inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-bold shadow-xl">
                    CGPA: 8.9/10
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-32 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl font-extrabold mb-8">Let's Build Together</h2>
            <p className="text-xl text-white/80 mb-12">Currently open for Full-Time MERN Stack roles</p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
              <a href={`mailto:${personalInfo.email}`} className="px-10 py-5 bg-white text-indigo-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all flex items-center justify-center gap-3">
                <Mail size={24} /> {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} className="px-10 py-5 border-2 border-white/50 backdrop-blur-xl rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                <Phone size={24} /> {personalInfo.phone}
              </a>
            </div>

            <p className="text-white/60">© 2025 Jagadeshvaran P • Built with React & Tailwind</p>
          </div>
        </section>
      </div>

      {/* Gradient Text Animation */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease infinite;
        }
      `}</style>
    </>
  );
};

export default Portfolio;