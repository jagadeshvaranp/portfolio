import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  Code,
  Database,
  Server,
  Terminal,
  ChevronDown,
  Moon,
  Sun,
  Sparkles,
  GraduationCap, // Added
  Briefcase, // Added
} from "lucide-react";
import image from "./assets/jaga.jpg";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Dark mode toggle
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const personalInfo = {
    name: "Jagadeshvaran",
    role: "MERN Stack Developer",
    email: "jagadesperumal@gmail.com",
    phone: "+91 6374562170",
    website: "jagadesh.info",
    about:
      "Full-stack engineer dedicated to the complete software development lifecycle. Expertise spans advanced React patterns for intuitive UIs, robust backend logic with Node.js/Express, and data modeling with MongoDB. Committed to writing clean, maintainable code and implementing best practices in security, authentication, and cloud deployment.",
  };

  const skills = [
    {
      category: "Frontend",
      icon: <Code className="w-6 h-6" />,
      items: ["React.js", "Redux", "Tailwind CSS", "JavaScript (ES6+)"],
    },
    {
      category: "Backend",
      icon: <Server className="w-6 h-6" />,
      items: ["Node.js", "Express.js", "REST APIs", "JWT"],
    },
    {
      category: "Databases",
      icon: <Database className="w-6 h-6" />,
      items: ["MongoDB", "MySQL"],
    },
    {
      category: "DevOps & Tools",
      icon: <Terminal className="w-6 h-6" />,
      items: ["Postman", "AWS", "GitHub", "EC2/S3 Basics"],
    },
  ];

  const projects = [
    {
      title: "Inventory Pro - Smart Stock Management",
      tech: "MERN Stack",
      description:
        "Designed and developed a full-stack inventory management application with real-time stock tracking and automated quantity updates. Implemented complete product and inventory CRUD workflows, secure RESTful APIs with authentication.",
      live: "https://inventory.jagadesh.info",
      code: "https://github.com/jagadeshvaranp/Management",
    },
    {
      title: "TaskLoop - Workflow Management",
      tech: "MERN Stack",
      description:
        "Developed a full-stack workflow management platform featuring Kanban-style task boards, intelligent task prioritization, and team performance analytics. Built to support active users with high availability.",
      live: "https://taskloop.app",
      code: "https://github.com/jagadeshvaranp/taskmanager",
    },
  ];

const experience = [
  {
    company: "JSpiders",
    role: "MERN Stack Developer Intern",
    duration: "Jun 2025 - Dec 2025",
    description:
      "Successfully completed a MERN Stack internship with hands-on experience in building full-stack web applications. Worked on CRUD operations, user authentication, and RESTful API development. Improved skills in JavaScript, MongoDB, Express.js, React.js, Git/GitHub, and Postman, with practical exposure to database design and AWS EC2 deployment.",
  },
];


  const education = [
    {
      degree: "B.E. Computer Science & Engineering",

      duration: "2021 - 2025",

      // description: "Studied web technologies, database management systems, and core computer science principles, with hands-on exposure to software development."
    },
  ];

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
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div
        className={`min-h-screen font-sans transition-colors duration-500 ${isDark ? "dark bg-slate-950" : "bg-gradient-to-br from-slate-50 to-indigo-50"}`}
      >
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="fixed top-20 right-6 z-50 p-3 bg-white/10 dark:bg-white/20 backdrop-blur-xl rounded-full shadow-2xl border border-white/20 hover:scale-110 transition-all"
          aria-label="Toggle dark mode"
        >
          {isDark ? (
            <Sun className="w-6 h-6 text-yellow-400" />
          ) : (
            <Moon className="w-6 h-6 text-indigo-600" />
          )}
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
                  jagadesh
                </span>
              </div>

              <div className="hidden lg:flex items-center gap-10">
                {["About", "Skills", "Projects", "Experience", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-all hover:scale-105"
                    >
                      {item}
                    </a>
                  ),
                )}
                <a
                  href="#contact"
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-xl hover:shadow-indigo-500/50 transform hover:scale-105 transition-all flex items-center gap-2"
                >
                  <Sparkles size={18} /> Hire Me
                </a>
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-slate-700 dark:text-slate-300"
              >
                {isMenuOpen ? (
                  <X className="w-8 h-8" />
                ) : (
                  <Menu className="w-8 h-8" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800">
              <div className="px-6 py-6 space-y-4">
                {["About", "Skills", "Projects", "Experience", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-lg font-medium hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      {item}
                    </a>
                  ),
                )}
              </div>
            </div>
          )}
        </nav>

        {/* HERO SECTION */}
        <section id="about" className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                    {personalInfo.name}
                  </span>
                </h1>
                <p className="text-2xl lg:text-3xl mt-4 text-slate-600 dark:text-slate-300 font-light flex items-center gap-1 min-h-[40px]">
                  {personalInfo.role}
                  {/* Blinking Cursor */}
                  <span className="w-1 h-8 bg-indigo-600 dark:bg-indigo-400 animate-pulse"></span>
                </p>
              </div>

              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                {personalInfo.about}
              </p>

              <div className="flex flex-wrap gap-6">
                <a
                  href="#projects"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-bold shadow-2xl hover:shadow-purple-600/50 transform hover:-translate-y-1 transition-all"
                >
                  Explore Projects
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 dark:text-white dark:border-white rounded-full font-bold hover:bg-indigo-600 hover:text-white transition-all"
                >
                  Let's Talk
                </a>
              </div>

              <div className="flex gap-8 text-slate-600 dark:text-slate-400">
                <a
                  href="https://github.com/jagadeshvaranp"
                  className="hover:text-indigo-600 transform hover:scale-125 transition-all"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://linkedin.com/in/-jagadeshvaran-p"
                  className="hover:text-indigo-600 transform hover:scale-125 transition-all"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-indigo-600 transform hover:scale-125 transition-all"
                >
                  <Mail size={28} />
                </a>
              </div>
            </div>

            {/* Hero Image */}

            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-dashed border-indigo-300 dark:border-indigo-700 animate-[spin_10s_linear_infinite]"></div>

                <div className="absolute inset-4 rounded-full border-2 border-transparent border-t-purple-500 border-r-purple-500 opacity-70 animate-[spin_8s_linear_infinite_reverse]"></div>

                <div className="absolute inset-0 rounded-full bg-indigo-500/10 blur-2xl animate-pulse"></div>

                <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl z-10">
                  <img
                    src={image}
                    alt="Jagadeshvaran P"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* 5. Floating Decoration Badge (Optional) */}
                <div className="absolute -bottom-2 bg-white dark:bg-slate-800 px-6 py-2 rounded-full shadow-xl border border-indigo-100 dark:border-indigo-900 z-20 animate-bounce">
                  <span className="font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Open to Work
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-20">
            <ChevronDown className="mx-auto text-indigo-600 animate-bounce w-10 h-10" />
          </div>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          className="py-24 px-6 bg-white/50 dark:bg-slate-900/50"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Technical Arsenal
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl hover:shadow-2xl border border-white/20 hover:border-indigo-500/50 transition-all hover:-translate-y-4"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                      {skill.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {skill.items.map((item, j) => (
                      <span
                        key={j}
                        className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold border border-indigo-100 dark:border-indigo-800/50 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white transition-colors duration-300 cursor-default"
                      >
                        {item}
                      </span>
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
                <div
                  key={i}
                  className="group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 hover:-translate-y-6 border border-slate-200 dark:border-slate-700"
                >
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
                      <a
                        href={proj.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-indigo-600 font-medium hover:underline"
                      >
                        <Github size={20} /> View Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION */}
        <section
          id="experience"
          className="py-24 px-6 bg-slate-50/50 dark:bg-slate-900/50"
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Experience Column */}
            <div>
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400">
                  <Briefcase size={32} />
                </div>
                <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Experience
                </h2>
              </div>
              <div className="space-y-8">
                {experience.map((exp, i) => (
                  <div
                    key={i}
                    className="relative pl-8 border-l-2 border-indigo-200 dark:border-indigo-900/50 space-y-2"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-white dark:ring-slate-900" />
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-shadow">
                      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                        {exp.role}
                      </h3>
                      <div className="flex justify-between items-center mt-2 mb-4 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                        <span>{exp.company}</span>
                        <span className="bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full text-xs">
                          {exp.duration}
                        </span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Column */}
            <div>
              {/* Header Section */}
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400">
                  <GraduationCap size={32} />
                </div>
                <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Education
                </h2>
              </div>

              {/* Timeline List */}
              <div className="space-y-8">
                {education?.map((edu, i) => (
                  <div
                    key={edu.id || i} // Better to use a unique ID if available
                    className="relative pl-8 border-l-2 border-purple-200 dark:border-purple-900/50"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-600 ring-4 ring-white dark:ring-slate-900" />

                    {/* Card Content */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-shadow space-y-2">
                      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                        {edu.degree}
                      </h3>

                      <div className="flex justify-between items-center mt-2 mb-4 text-sm font-semibold text-purple-600 dark:text-purple-400">
                        <span>{edu.institution}</span>
                        <span className="bg-purple-50 dark:bg-purple-900/30 px-3 py-1 rounded-full text-xs">
                          {edu.duration}
                        </span>
                      </div>

                      {edu.grade && (
                        <div className="mb-3 inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold rounded-md">
                          {edu.grade}
                        </div>
                      )}

                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="py-32 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl font-extrabold mb-8">
              Let's Build Together
            </h2>
            <p className="text-xl text-white/80 mb-12">
              Currently open for Full-Time MERN Stack roles
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
              <a
                href={`mailto:${personalInfo.email}`}
                className="px-10 py-5 bg-white text-indigo-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all flex items-center justify-center gap-3"
              >
                <Mail size={24} /> {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="px-10 py-5 border-2 border-white/50 backdrop-blur-xl rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3"
              >
                <Phone size={24} /> {personalInfo.phone}
              </a>
            </div>

            <div className="flex justify-center gap-8 opacity-70">
              <a
                href="https://github.com/jagadeshvaranp"
                className="hover:text-white hover:opacity-100 transition-all"
              >
                <Github size={32} />
              </a>
              <a
                href="https://linkedin.com/in/-jagadeshvaran-p"
                className="hover:text-white hover:opacity-100 transition-all"
              >
                <Linkedin size={32} />
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Gradient Animation Style */}
      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
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
