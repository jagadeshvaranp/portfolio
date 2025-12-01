import React, { useState } from 'react';
import profileImg from './assets/jaga.jpg'
import { 
  Menu, X, Github, Linkedin, Mail, ExternalLink, 
  Code, Database, Server, Cpu, Globe, BookOpen, Award, Terminal, Sparkles 
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const personalInfo = {
    name: "Jagadeshvaran",
    role: "MERN Stack Developer",
    email: "jagadeshvaranperumal@gmail.com",
    phone: "+91 6374562170",
    location: "Salem, TN",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    website: "jagadesh.info",
    about: "Result-oriented MERN Stack Developer (2025 Graduate) skilled in building scalable web applications using MongoDB, Express.js, React.js, and Node.js. Experienced in full-stack development, API design, authentication, cloud deployment, and AI-integrated chatbot systems."
  };

  const skills = [
    { name: "React.js & Redux", category: "Frontend", icon: <Code size={20} /> },
    { name: "Node.js & Express", category: "Backend", icon: <Server size={20} /> },
    { name: "MongoDB", category: "Database", icon: <Database size={20} /> },
    { name: "MySQL", category: "Database", icon: <Database size={20} /> },
    { name: "Tailwind CSS", category: "Frontend", icon: <Code size={20} /> },
    { name: "AWS (EC2/S3)", category: "Cloud", icon: <Globe size={20} /> },
    { name: "REST APIs & JWT", category: "Backend", icon: <Server size={20} /> },
    { name: "Mistral-7B / AI", category: "AI Integration", icon: <Cpu size={20} /> },
  ];

  const projects = [
    {
      title: "Inventory Management System",
      subtitle: "MERN Stack | Live Project",
      tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
      description: "Architected a full-stack inventory dashboard managing 1,000+ product entries. Features secure REST APIs, JWT Authentication for RBAC, and automated low-stock alerts, reducing manual checking time by 40%.",
      link: "https://dev.imraninnovations.co.in",
      isLive: true
    },
    {
      title: "TechWorm AI Assistant",
      subtitle: "AI Agricultural Chatbot",
      tech: ["React", "Flask", "Mistral-7B", "LangChain", "Vector Embeddings"],
      description: "Developed a multilingual AI chatbot using Mistral-7B and Vector Embeddings for agricultural queries. Integrated a Flask AI microservice with a React frontend, optimized for low-bandwidth regions.",
      link: "#",
      isLive: false
    },
    {
      title: "TaskLoop",
      subtitle: "Workflow Management System",
      tech: ["React", "Node.js", "MySQL", "RBAC"],
      description: "Built a secure workflow platform with 3-level Role-Based Access Control (Admin, Manager, Employee). Implemented real-time updates, reducing project delays by 30%.",
      link: "#",
      isLive: false
    }
  ];

  const experience = [
    {
      role: "Artificial Intelligence Intern",
      company: "Asia University, Taiwan (Remote)",
      date: "Aug 2023 - Sep 2023",
      points: [
        "Collaborated with international research teams to implement predictive modeling algorithms on large datasets.",
        "Developed mini AI projects involving decision-making logic and documented technical solutions.",
      ]
    }
  ];

  const education = {
    college: "Paavai Engineering College",
    degree: "B.E. Computer Science and Engineering",
    cgpa: "CGPA: 6.7/10",
    year: "May 2025"
  };

  const certifications = [
    "Full Stack Web Development (MERN)",
    "React Native Mobile Application Development - INFYREC"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-slate-200 font-sans selection:bg-purple-500 selection:text-white relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/40 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-purple-500/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to from-purple-400 to-pink-400 font-mono tracking-wider flex items-center gap-2">
              {personalInfo.website}
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-purple-500/10 relative group">
                    <span className="absolute inset-0 border border-purple-500/0 group-hover:border-purple-500/50 rounded-md transition-all"></span>
                    {item}  
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-200 hover:text-white p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/60 backdrop-blur-xl border-b border-purple-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-500/20 hover:text-purple-400"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 min-h-screen justify-center">
        <div className="flex-1 text-center md:text-left space-y-6">
          <div>
            <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-tight">
              {personalInfo.name}
              
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-500 mt-2">
              I build scalable web solutions.
            </h2>
          </div>
          <p className="text-slate-300 text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
            {personalInfo.about}
          </p>
          <div className="flex gap-4 justify-center md:justify-start items-center pt-4">
             <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:-translate-y-1">
              View Work
            </a>
            <a href="#contact" className="px-8 py-3 border-2 border-purple-500 text-purple-400 font-bold rounded-lg hover:bg-purple-500/10 transition-all">
              Contact Me
            </a>
          </div>
        </div>
        
        {/* Profile Image Area */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl transform rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-indigo-500 to-purple-500 rounded-2xl transform -rotate-6 group-hover:-rotate-3 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl group-hover:bg-transparent transition-colors z-10"></div>
            <img src={profileImg} alt="Profile" className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl shadow-purple-500/50 z-20 border-4 border-purple-500/20" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 bg-black/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mr-2 font-mono text-2xl">01.</span> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">Technical Expertise</span>
            <span className="h-px bg-gradient-to-r from-purple-500/50 to-transparent flex-grow ml-4"></span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl hover:-translate-y-2 transition-all duration-300 border border-purple-500/20 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20 group backdrop-blur-sm">
                <div className="text-purple-400 mb-3 group-hover:text-pink-400 transition-colors group-hover:scale-110 transform duration-300">{skill.icon}</div>
                <h3 className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors">{skill.name}</h3>
                <p className="text-xs text-purple-400/70 font-mono mt-1">{skill.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mr-2 font-mono text-2xl">02.</span> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">Featured Projects</span>
          <span className="h-px bg-gradient-to-r from-purple-500/50 to-transparent flex-grow ml-4"></span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-purple-500/20 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all group flex flex-col h-full relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="p-6 flex-grow flex flex-col relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl text-purple-400 group-hover:scale-110 transition-transform">
                    <Terminal size={24} />
                  </div>
                  <div className="flex gap-3">
                    {project.isLive && (
                        <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors" title="Live Project">
                          <ExternalLink size={20} />
                        </a>
                    )}
                    <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all mb-2">{project.title}</h3>
                <p className="text-purple-400 text-xs font-mono mb-4">{project.subtitle}</p>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-500/10 text-purple-300 text-xs font-mono rounded-full border border-purple-500/20 hover:border-purple-400/50 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mr-2 font-mono text-2xl">03.</span> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">Experience</span>
          <span className="h-px bg-gradient-to-r from-purple-500/50 to-transparent flex-grow ml-4"></span>
        </h2>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm p-8 rounded-2xl border-l-4 border-purple-500 hover:border-pink-500 hover:bg-slate-800/50 transition-all shadow-lg hover:shadow-purple-500/10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">{exp.role}</h3>
                <span className="text-purple-400 font-mono text-sm bg-purple-400/10 px-4 py-2 rounded-full border border-purple-500/20">{exp.date}</span>
              </div>
              <h4 className="text-lg text-slate-300 mb-6 font-medium flex items-center gap-2">
                 <Globe size={16} className="text-purple-400" /> {exp.company}
              </h4>
              <ul className="space-y-3">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start text-slate-300 text-sm">
                    <span className="text-purple-400 mr-3 mt-1 text-lg">▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="relative py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="grid md:grid-cols-2 gap-12">
            <div>
                 <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                    <BookOpen className="text-purple-400 mr-2" size={20} /> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">Education</span>
                 </h3>
                 <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/50 transition-all shadow-lg hover:shadow-purple-500/10">
                    <h4 className="text-lg text-white font-bold">{education.degree}</h4>
                    <p className="text-purple-400 font-mono text-sm mt-1">{education.college}</p>
                    <div className="flex justify-between mt-4 text-slate-300 text-sm">
                        <span>{education.year}</span>
                        <span className="text-purple-400">{education.cgpa}</span>
                    </div>
                 </div>
            </div>

            <div>
                 <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                    <Award className="text-purple-400 mr-2" size={20} /> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">Certifications</span>
                 </h3>
                 <div className="space-y-4">
                    {certifications.map((cert, index) => (
                        <div key={index} className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm p-4 rounded-xl border border-purple-500/20 flex items-center hover:border-purple-400/50 transition-all shadow-lg hover:shadow-purple-500/10 group">
                            <span className="text-purple-400 mr-3 group-hover:text-pink-400 transition-colors text-lg">▸</span>
                            <span className="text-slate-300 text-sm group-hover:text-white transition-colors">{cert}</span>
                        </div>
                    ))}
                 </div>
            </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 max-w-2xl mx-auto px-4 text-center">
        <p className="text-purple-400 font-mono mb-4">04. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 mb-6">Get In Touch</h2>
        <p className="text-slate-300 text-lg mb-12 leading-relaxed">
          I am currently looking for full-time opportunities as a MERN Stack Developer. 
          Whether you have a question or just want to say hi, my inbox is always open!
        </p>
        
        <div className="flex justify-center gap-6 mb-12">
           <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-slate-300 hover:text-purple-400 transition-colors bg-purple-500/10 px-4 py-2 rounded-lg border border-purple-500/20">
             <Mail size={20} /> {personalInfo.email}
           </a>
        </div>

        <a 
          href={`mailto:${personalInfo.email}`}
          className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all font-mono font-medium transform hover:-translate-y-1"
        >
          Say Hello
        </a>
      </section>

      {/* Footer */}
      <footer className="relative py-6 text-center text-slate-400 text-xs font-mono bg-black/40 backdrop-blur-xl border-t border-purple-500/20">
        <p className="mb-2">Designed & Built by {personalInfo.name}</p>
        <div className="flex justify-center gap-6 mt-4">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors"><Github size={18}/></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors"><Linkedin size={18}/></a>
        </div>
      </footer>
    </div>
  );
};

export default App;