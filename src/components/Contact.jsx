import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    permission: false
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'success'
  const [lastAction, setLastAction] = useState(''); // 'whatsapp' | 'email'

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      alert("Please enter your name.");
      return false;
    }
    if (!formData.email.trim()) {
      alert("Please enter your email address.");
      return false;
    }
    if (!formData.message.trim()) {
      alert("Please enter your message or project details.");
      return false;
    }
    return true;
  };

  // 1. Send via WhatsApp (+91 6374562170)
  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formattedText = 
`*NEW INQUIRY FROM PORTFOLIO* 🚀
━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
💼 *Project Type:* ${formData.subject || 'Full-Stack Web Development'}
━━━━━━━━━━━━━━━━━━━━
📝 *Message:*
${formData.message}
━━━━━━━━━━━━━━━━━━━━
_Sent via jagadeshvaran.dev_`;

    const encodedText = encodeURIComponent(formattedText);
    window.open(`https://wa.me/916374562170?text=${encodedText}`, '_blank');
    
    setLastAction('whatsapp');
    setStatus('success');
  };

  // 2. Send via Email (jagadeshvaranperumal@gmail.com)
  const handleSendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const subject = encodeURIComponent(
      formData.subject ? `[Portfolio Inquiry] ${formData.subject} - ${formData.name}` : `Project Inquiry from ${formData.name}`
    );

    const body = encodeURIComponent(
`Hi Jagadesh,

My Name: ${formData.name}
My Email: ${formData.email}
Project / Role Type: ${formData.subject || 'MERN Stack Web Development'}

Project Details & Requirements:
${formData.message}

Looking forward to connecting!
Best regards,
${formData.name}`
    );

    window.location.href = `mailto:jagadeshvaranperumal@gmail.com?subject=${subject}&body=${body}`;

    setLastAction('email');
    setStatus('success');
  };

  const handleReset = () => {
    setStatus('idle');
    setFormData({ name: '', email: '', subject: '', message: '', permission: false });
  };

  return (
    <section 
      ref={ref} 
      id="contact" 
      className="bg-[#0A0A0A] w-full min-h-screen relative overflow-hidden flex flex-col justify-center pt-28 pb-32 px-6 md:px-12 border-t border-[#27272A] bg-tech-grid"
    >
      {/* Huge Background Watermark: CONTACT */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center overflow-hidden pointer-events-none select-none z-0"
      >
        <span 
          className="font-bebas text-[28vw] leading-none text-transparent text-stroke-muted uppercase tracking-tighter"
        >
          CONTACT
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#FF2A2A] shadow-[0_0_8px_#FF2A2A]" />
          <span className="font-mono text-xs text-[#FF2A2A] tracking-widest uppercase font-semibold">
            // 04. GET IN TOUCH & COLLABORATE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info & Big Typography */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <h2 className="font-space text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white uppercase leading-[0.95] mb-6">
              LET'S BUILD <br />
              <span className="text-[#FF2A2A]">SOMETHING</span> <br />
              <span className="text-stroke-white">GREAT.</span>
            </h2>

            <p className="font-inter text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-10 max-w-md">
              Have an idea for a scalable web application, high-converting e-commerce boutique, or full-stack MERN engine? Let's connect directly.
            </p>

            {/* Direct Contact Cards */}
            <div className="flex flex-col gap-4 w-full">
              <a 
                href="https://wa.me/916374562170?text=Hi%20Jagadesh!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-[#111111] border border-[#27272A] hover:border-[#25D366]/60 flex items-center justify-between transition-all duration-300 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#18181B] flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-[#71717A] uppercase">INSTANT WHATSAPP</p>
                    <p className="font-space text-xs sm:text-sm font-bold text-white group-hover:text-[#25D366] transition-colors">
                      +91 6374562170 (Chat Now)
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#71717A] group-hover:text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a 
                href="mailto:jagadeshvaranperumal@gmail.com"
                className="group p-4 rounded-2xl bg-[#111111] border border-[#27272A] hover:border-[#FF2A2A]/50 flex items-center justify-between transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#18181B] flex items-center justify-center text-[#FF2A2A] group-hover:bg-[#FF2A2A] group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-[#71717A] uppercase">DIRECT EMAIL</p>
                    <p className="font-space text-xs sm:text-sm font-bold text-white group-hover:text-[#FF2A2A] transition-colors truncate max-w-[200px] sm:max-w-none">
                      jagadeshvaranperumal@gmail.com
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#71717A] group-hover:text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <div className="p-4 rounded-2xl bg-[#111111] border border-[#27272A] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#18181B] flex items-center justify-center text-[#FF2A2A]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-[#71717A] uppercase">LOCATION</p>
                  <p className="font-space text-xs sm:text-sm font-bold text-white">
                    Namakkal / Tamil Nadu, India (Worldwide Remote)
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Studio Form Container */}
          <div className="lg:col-span-7">
            <div className="bg-[#111111] border border-[#27272A] rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative">
              
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#27272A]">
                <div>
                  <h3 className="font-space text-2xl font-bold text-white uppercase">
                    SEND INQUIRY
                  </h3>
                  <p className="font-mono text-xs text-[#71717A] mt-1">
                    INSTANT WHATSAPP OR DIRECT EMAIL DISPATCH
                  </p>
                </div>
                <span className="w-3 h-3 rounded-full bg-[#FF2A2A] animate-pulse" />
              </div>

              {/* SUCCESS CONFIRMATION STATE */}
              <AnimatePresence>
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-10 flex flex-col items-center text-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-space text-2xl font-bold text-white">
                      Inquiry Dispatched!
                    </h4>
                    <p className="font-inter text-sm text-[#A1A1AA] max-w-md leading-relaxed">
                      {lastAction === 'whatsapp' 
                        ? "Your pre-formatted message was opened in WhatsApp. Click send in your chat to start talking immediately!" 
                        : "Your email client was opened with the pre-filled inquiry. Click send to deliver it directly to my inbox."}
                    </p>
                    
                    <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
                      <button
                        onClick={handleReset}
                        className="font-space px-6 py-3 rounded-full bg-[#18181B] hover:bg-[#27272A] text-white text-xs font-bold uppercase tracking-wider transition-colors border border-[#27272A]"
                      >
                        Send Another Inquiry
                      </button>

                      <a
                        href="https://wa.me/916374562170"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-space px-6 py-3 rounded-full bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.4)]"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <form className="flex flex-col gap-6">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name Input */}
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-xs text-[#A1A1AA] uppercase tracking-wider">
                          Your Name <span className="text-[#FF2A2A]">*</span>
                        </label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Jagadesh / Company Name" 
                          className="w-full bg-[#18181B] border border-[#27272A] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#FF2A2A] transition-colors placeholder-[#71717A] font-inter font-normal"
                        />
                      </div>

                      {/* Email Input */}
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-xs text-[#A1A1AA] uppercase tracking-wider">
                          Email Address <span className="text-[#FF2A2A]">*</span>
                        </label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="client@example.com" 
                          className="w-full bg-[#18181B] border border-[#27272A] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#FF2A2A] transition-colors placeholder-[#71717A] font-inter font-normal"
                        />
                      </div>
                    </div>

                    {/* Subject / Service Selection */}
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs text-[#A1A1AA] uppercase tracking-wider">
                        Project Type or Role
                      </label>
                      <input 
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. MERN Full-Stack App / E-commerce Store / Freelance Contract" 
                        className="w-full bg-[#18181B] border border-[#27272A] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#FF2A2A] transition-colors placeholder-[#71717A] font-inter font-normal"
                      />
                    </div>

                    {/* Message Textarea */}
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs text-[#A1A1AA] uppercase tracking-wider">
                        Project Details & Scope <span className="text-[#FF2A2A]">*</span>
                      </label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Describe your vision, timeline, key features, or any questions..." 
                        className="w-full bg-[#18181B] border border-[#27272A] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#FF2A2A] transition-colors placeholder-[#71717A] font-inter font-normal resize-none"
                      />
                    </div>

                    {/* Dual Action Buttons Header */}
                    <div className="pt-4 border-t border-[#27272A]">
                      <p className="font-mono text-[11px] text-[#71717A] uppercase mb-4 text-center sm:text-left">
                        // CHOOSE HOW YOU'D LIKE TO CONNECT:
                      </p>

                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full">
                        
                        {/* Primary Button: WhatsApp Direct */}
                        <button 
                          type="button" 
                          onClick={handleSendWhatsApp}
                          className="font-space group flex-1 px-6 py-4 rounded-2xl bg-[#25D366] hover:bg-emerald-400 text-white hover:text-black font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_0_20px_rgba(37,211,102,0.35)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transform hover:scale-[1.02] cursor-pointer"
                        >
                          <MessageSquare className="w-4 h-4 fill-current" />
                          <span>Send via WhatsApp</span>
                        </button>

                        {/* Secondary Button: Email Direct */}
                        <button 
                          type="button" 
                          onClick={handleSendEmail}
                          className="font-space group flex-1 px-6 py-4 rounded-2xl bg-[#FF2A2A] hover:bg-white text-white hover:text-black font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_0_20px_rgba(255,42,42,0.35)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transform hover:scale-[1.02] cursor-pointer"
                        >
                          <Mail className="w-4 h-4" />
                          <span>Send via Email</span>
                        </button>

                      </div>

                      <div className="flex items-center justify-center sm:justify-start gap-2 mt-4 text-[11px] font-mono text-[#71717A]">
                        <Sparkles className="w-3 h-3 text-[#FF2A2A]" />
                        <span>Instant delivery • 100% direct communication with Jagadesh</span>
                      </div>
                    </div>

                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;