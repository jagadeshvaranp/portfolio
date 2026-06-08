import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

const TagCard = ({ number, title, subTitle, textList, techTags, className, aosDelay, aosType, pathLength, containerRef }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;
    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const cardTopRelativeToContainer = cardRect.top - containerRect.top;
    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerRect.height;
    
    setIsActive(lineTipY >= triggerY);
  });

  return (
    <div 
      ref={ref}
      data-aos={aosType || "fade-up"} 
      data-aos-delay={aosDelay}
      className={`w-full max-w-2xl rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.01] transition-all duration-700 z-10 ${className} ${
        isActive ? 'bg-[#ff2a2a] border-red-400 shadow-[0_20px_50px_rgba(255,42,42,0.25)]' : 'bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.04)]'
      }`}
    >
      <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 border border-gray-300 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20"></div>
      </div>
      
      <div className={`w-full h-full rounded-[1.5rem] mt-8 p-6 md:p-8 flex flex-col justify-between transition-colors duration-700 ${
        isActive ? 'bg-red-900/40' : 'bg-[#f4f4f4]'
      }`}>
        <div>
          <div className="flex justify-between items-start mb-3">
            <h3 className={`text-xl md:text-2xl font-black tracking-tight transition-colors duration-700 ${isActive ? 'text-white' : 'text-gray-900'}`}>
              {title}
            </h3>
            <span className={`text-xs font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-md transition-colors ${isActive ? 'bg-white/10 text-red-200' : 'bg-gray-200 text-gray-600'}`}>
              {number}
            </span>
          </div>
          
          <h4 className={`text-sm font-bold uppercase tracking-wider mb-4 transition-colors ${isActive ? 'text-red-300' : 'text-[#ff2a2a]'}`}>
            {subTitle}
          </h4>
          
          <ul className={`text-xs md:text-sm leading-relaxed space-y-2 list-disc list-inside marker:text-red-500 transition-colors ${isActive ? 'text-red-100' : 'text-gray-600'}`}>
            {textList.map((li, idx) => (
              <li key={idx} className="pl-1 text-justify">{li}</li>
            ))}
          </ul>
        </div>

        {techTags && (
          <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-gray-300/20">
            {techTags.map((tech, idx) => (
              <span key={idx} className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded transition-colors ${isActive ? 'bg-white/20 text-white' : 'bg-gray-300/50 text-gray-700'}`}>
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Services = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  return (
    <section 
      id="experience"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative flex flex-col items-center gap-16">
        
        {/* Header Title */}
        <div data-aos="fade-up" className="w-full max-w-2xl z-20 text-center">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 shadow-sm bg-white">
            History & Portfolio
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Professional Track & Experience
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-medium max-w-xl mx-auto">
            From architecture to optimization, these milestones outline full-stack deliveries and engineered products.
          </p>
        </div>

        {/* Timeline Path Line (Desktop & Mobile Unified Center Line) */}
        <div className="absolute top-[280px] bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-[80%] pointer-events-none z-0 hidden md:block">
          <svg className="w-full h-full" viewBox="0 0 2 100" preserveAspectRatio="none">
            <path d="M 1,0 L 1,100" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4 4" />
            <motion.path d="M 1,0 L 1,100" fill="none" stroke="black" strokeWidth="2" strokeDasharray="4 4" style={{ pathLength }} />
          </svg>
        </div>

        {/* Unified Linear Cards Layout stack */}
        <div className="flex flex-col gap-12 w-full items-center relative z-10">
          
          <TagCard 
            number="EXP 01"
            title="MERN Stack Developer"
            subTitle="AUC Ventures Pvt Ltd | Nov 2025 - June 2026"
            textList={[
              "Engineered and maintained production-ready, full-stack web applications utilizing the MERN ecosystem to ensure scalable performance.",
              "Carried out assigned development duties diligently, demonstrating good conduct, high sincerity, and active professional collaboration across cross-functional teams.",
              "Designed resilient database schemas and optimized API endpoints to streamline web application performance and minimize load latencies."
            ]}
            techTags={["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Mongoose"]}
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard 
            number="EXP 02"
            title="MERN Stack Developer - Internship"
            subTitle="JSpiders | June 2025 - Dec 2025"
            textList={[
              "Developed and deployed scalable full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
              "Engineered secure RESTful APIs and implemented JWT-based authentication systems for user data protection.",
              "Collaborated with the development team to design interactive dashboards and optimize database queries.",
              "Utilized Git and GitHub for version control and participated in Agile workflows to ensure timely project delivery."
            ]}
            techTags={["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Git & GitHub"]}
            pathLength={pathLength}
            containerRef={containerRef}
          />


          {/* Education Block Integration */}
          <TagCard 
            number="EDU"
            title="B.E. in Computer Science & Engineering"
            subTitle="Paavai Engineering College | 2021 - 2025"
            textList={[
              "Academic Focus: Computer Architecture, Database Design, System Architecture, Algorithms & Complex Systems Engineering.",
              "Graduated from Namakkal, India."
            ]}
            techTags={["Computer Science", "Software Engineering"]}
            pathLength={pathLength}
            containerRef={containerRef}
          />

        </div>
      </div>
    </section>
  );
};

export default Services;