import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        const diff = Math.floor(Math.random() * 25) + 15;
        return Math.min(prev + diff, 100);
      });
    }, 180);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-[#050505] z-[999999] flex flex-col justify-between p-8 md:p-14 select-none"
        >
          {/* Top Label */}
          <div className="flex items-center justify-between text-xs font-mono text-[#A1A1AA]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF2A2A] animate-pulse"></span>
              <span className="tracking-widest uppercase text-white font-semibold">STUDIO // JAGADESHVARAN</span>
            </div>
            <span className="tracking-widest">MERN STACK ARCHITECT</span>
          </div>

          {/* Center Brand Title */}
          <div className="flex flex-col items-center justify-center my-auto">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                className="font-space text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-white uppercase text-center"
              >
                JAGADESH<span className="text-[#FF2A2A]">VARAN</span>
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="font-mono text-xs md:text-sm text-[#71717A] tracking-[0.3em] uppercase mt-3"
            >
              CREATIVE DEVELOPER & ARCHITECT
            </motion.p>
          </div>

          {/* Bottom Progress Bar & Percentage */}
          <div className="w-full max-w-xl mx-auto flex flex-col gap-3">
            <div className="flex justify-between items-center text-xs font-mono text-[#A1A1AA]">
              <span className="text-[#71717A]">// LOADING EXPERIENCE</span>
              <span className="text-white font-bold">{progress}%</span>
            </div>
            <div className="w-full h-1 bg-[#27272A] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#FF2A2A] shadow-[0_0_12px_#FF2A2A]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.2 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;