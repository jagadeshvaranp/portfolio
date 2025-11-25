import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, ExternalLink, Code, Database, Server, Cpu } from 'lucide-react';
import profileImg from './assets/jaga.jpg'; // Ensure your photo is in src/assets/ folder

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Data extracted from your resume
  const personalInfo = {
    name: "Jagadeshvaran P",
    role: "MERN Stack Developer",
    email: "jagadeshvaranperumal@gmail.com",
    phone: "+91 6374562170",
    location: "Salem, Tamil Nadu",
    linkedin: "https://www.linkedin.com/in/-jagadeshvaran-p",
    github: "https://github.com/jagadeshvaranp",
    about: "Motivated MERN Stack Developer with proficiency in MongoDB, Express.js, React.js, and Node.js. Seeking an opportunity to contribute to innovative web projects, apply strong problem-solving skills, and deliver scalable solutions."
  };

  const skills = [
    { name: "React.js", category: "Frontend", icon: <Code size={20} /> },
    { name: "Node.js", category: "Backend", icon: <Server size={20} /> },
    { name: "Express.js", category: "Backend", icon: <Server size={20} /> },
    { name: "MongoDB", category: "Database", icon: <Database size={20} /> },
    { name: "MySQL", category: "Database", icon: <Database size={20} /> },
    { name: "HTML/CSS", category: "Frontend", icon: <Code size={20} /> },
    { name: "Java", category: "Language", icon: <Cpu size={20} /> },
    { name: "Spring Boot", category: "Backend", icon: <Server size={20} /> },
  ];

  const projects = [
    {
      title: "TaskLoop",
      subtitle: "Web-Based Workflow Management System",
      tech: ["React.js", "Node.js", "Express", "MySQL", "JWT"],
      description: "A workflow management system with role-based access control (Admin, Manager, Employee). Features task assignment, progress tracking, and deadline reminders to improve team collaboration.",
      link: "#" // Add actual GitHub link if available
    },
    {
      title: "TechWorm",
      subtitle: "AI Agricultural Chatbot",
      tech: ["AI", "NLP", "Mistral-7B", "Flask", "React"],
      description: "Multilingual AI-powered chatbot assisting farmers. Integrated LangChain and Hugging Face for context-aware responses, pest detection via image upload, and soil testing advisory.",
      link: "#"
    }
  ];

  const experience = [
    {
      role: "Artificial Intelligence Intern",
      company: "Asia University, Taiwan (Remote)",
      date: "Aug 2023 - Sep 2023",
      points: [
        "Gained exposure to Machine Learning concepts and problem-solving methods.",
        "Worked on mini projects involving data analysis and AI-based decision making.",
        "Improved skills in team collaboration and research."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-teal-500 selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-teal-400">Jagades.info</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-200 hover:text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 hover:text-teal-400"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
         
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{personalInfo.name}</h1>
          <h3 className="text-2xl md:text-3xl text-slate-400 mb-6">{personalInfo.role}</h3>
          <p className="text-slate-400 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            {personalInfo.about}
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-3 border border-slate-700 rounded-full hover:border-teal-400 hover:text-teal-400 transition-all">
              <Github size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-3 border border-slate-700 rounded-full hover:border-teal-400 hover:text-teal-400 transition-all">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="px-6 py-3 bg-teal-500 text-slate-900 font-bold rounded hover:bg-teal-400 transition-colors">
              Hire Me
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-70   md:w-80 md:h-80">
            <div className="absolute inset-0 border-2 border-teal-400 rounded-lg transform translate-x-4 translate-y-4"></div>
            <img 
              src={profileImg} 
              alt="Profile" 
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
            <span className="text-teal-400 mr-2">01.</span> Skills & Tools
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg hover:-translate-y-2 transition-transform duration-300 border border-slate-700 hover:border-teal-400 group">
                <div className="text-teal-400 mb-3 group-hover:text-white transition-colors">{skill.icon}</div>
                <h3 className="text-lg font-medium text-slate-200">{skill.name}</h3>
                <p className="text-sm text-slate-500">{skill.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
          <span className="text-teal-400 mr-2">02.</span> Experience
        </h2>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-lg border-l-4 border-teal-400">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <span className="text-teal-400 font-mono text-sm">{exp.date}</span>
              </div>
              <h4 className="text-lg text-slate-400 mb-4">{exp.company}</h4>
              <ul className="list-disc list-inside space-y-2 text-slate-400">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
            <span className="text-teal-400 mr-2">03.</span> Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700 hover:border-teal-400 transition-colors">
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-teal-400 text-sm font-mono mb-4">{project.subtitle}</p>
                    </div>
                    <a href={project.link} className="text-slate-400 hover:text-teal-400">
                      <ExternalLink size={24} />
                    </a>
                  </div>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-900 text-teal-400 rounded-full text-xs font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-teal-400 font-mono text-lg mb-4">04. What's Next?</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h1>
        <p className="text-slate-400 text-lg mb-8">
          I am currently looking for full-time opportunities as a MERN Stack Developer. 
          Whether you have a question or just want to say hi, my inbox is always open!
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <div className="flex items-center justify-center gap-2 text-slate-300">
                <Mail size={18} className="text-teal-400" />
                {personalInfo.email}
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-300">
                <Phone size={18} className="text-teal-400" />
                {personalInfo.phone}
            </div>
        </div>

        <a 
          href={`mailto:${personalInfo.email}`}
          className="inline-block px-8 py-4 border border-teal-400 text-teal-400 rounded hover:bg-teal-400/10 transition-colors font-mono"
        >
          Say Hello
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm bg-slate-900 border-t border-slate-800">
        <p>Designed & Built by {personalInfo.name}</p>
      </footer>
    </div>
  );
};

export default App;