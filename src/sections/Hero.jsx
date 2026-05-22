import { motion } from 'framer-motion';
import { Mail, ArrowRight, Sparkles, Code, FileText, MapPin, GraduationCap } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Magnetic } from '../components/ui/Magnetic';
import { revealBlur, fadeInUp, staggerContainer } from '../utils/animations';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-24">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Soft Multi-layered Lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[150%] bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.04)_0%,transparent_70%)]" />
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.06)_0%,transparent_60%)]" />
        
        {/* Ambient Slow-Moving Diffused Orbs */}
        <motion.div 
          animate={{ 
            x: [0, 80, 0],
            y: [0, 40, 0],
            opacity: [0.06, 0.12, 0.06]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-5%] left-[5%] w-[50%] h-[50%] bg-accent/15 blur-[180px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            x: [0, -60, 0],
            y: [0, -20, 0],
            opacity: [0.04, 0.08, 0.04]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[5%] right-[5%] w-[50%] h-[50%] bg-blue-900/10 blur-[180px] rounded-full" 
        />

        {/* Minimal Technical Architecture - Subtle Animation */}
        <motion.div 
          animate={{ 
            backgroundPosition: ["0px 0px", "64px 64px"],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" 
        />

        {/* Subtle Particle System (Restrained) */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0,
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%" 
              }}
              animate={{ 
                opacity: [0, 0.15, 0],
                y: ["-10%", "110%"],
                x: (Math.random() * 100) + (Math.random() * 10 - 5) + "%"
              }}
              transition={{ 
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "linear"
              }}
              className="absolute w-[1px] h-[1px] bg-white rounded-full blur-[0.5px]"
            />
          ))}
        </div>

        {/* Horizontal Intentional Lines */}
        <div className="absolute top-[15%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute bottom-[25%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <Container className="relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="whileInView"
          className="flex flex-col items-center text-center"
        >
          {/* Identity Badge Cluster */}
          <motion.div
            variants={fadeInUp}
            className="mb-14 flex flex-wrap justify-center gap-4"
          >
            <div className="px-7 py-2.5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-3xl text-accent text-[9px] font-black uppercase tracking-[0.4em] flex items-center gap-3 shadow-2xl">
              <Sparkles size={12} className="text-accent animate-pulse" />
              <span>Full-Stack Engineer</span>
            </div>
            <div className="px-7 py-2.5 rounded-full border border-white/5 bg-white/[0.01] backdrop-blur-3xl text-secondary/60 text-[9px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
              <MapPin size={12} className="text-secondary/40" />
              <span>Mumbai, India</span>
            </div>
          </motion.div>

          {/* Master Headline */}
          <div className="relative mb-12">
            <motion.h1
              variants={revealBlur}
              className="text-[4rem] md:text-[9rem] lg:text-[12rem] font-black tracking-[-0.08em] pb-6"
            >
              Aayush Gautam<span className="text-accent italic opacity-70">.</span>
            </motion.h1>
            <motion.div 
              variants={fadeInUp}
              className="mt-4"
            >
               <span className="text-2xl md:text-5xl lg:text-6xl font-black tracking-tighter text-primary/80">
                Building <span className="text-accent italic">Scalable</span> Digital Systems.
              </span>
            </motion.div>
          </div>

          {/* SaaS Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-2xl lg:text-3xl text-secondary/70 max-w-4xl mb-20 leading-relaxed font-semibold tracking-tight text-balance"
          >
            Specializing in production-grade 
            <span className="text-primary/90"> backend architectures </span> 
            and <span className="text-primary/90"> premium interactive frontends. </span>
            Currently engineering the future at KC College.
          </motion.p>

          {/* Action Grid with Magnetic Buttons */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 mb-24 w-full max-w-5xl px-4"
          >
            <Magnetic>
              <button className="btn-primary w-full">
                <div className="btn-glow" />
                <span className="relative flex items-center justify-center gap-4">
                  View Archive <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
                </span>
              </button>
            </Magnetic>
            
            <Magnetic strength={0.15}>
              <button className="btn-secondary w-full">
                Let's Connect
              </button>
            </Magnetic>

            <Magnetic strength={0.15}>
              <button className="btn-secondary w-full flex items-center justify-center gap-4 group">
                <FileText size={18} className="group-hover:text-accent transition-colors" />
                Technical CV
              </button>
            </Magnetic>

            <Magnetic strength={0.15}>
              <button className="btn-secondary w-full flex items-center justify-center gap-4 group">
                <Code size={18} className="group-hover:text-accent transition-colors" />
                Codebase
              </button>
            </Magnetic>
          </motion.div>

          {/* Trajectory Indicators */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center items-center gap-12 md:gap-20 text-[10px] font-black uppercase tracking-[0.5em] text-secondary/30"
          >
            <div className="flex items-center gap-4 group cursor-default">
              <GraduationCap size={18} className="text-accent/30 group-hover:text-accent transition-colors" />
              <span className="group-hover:text-secondary/50 transition-colors">KC College • CS 2026</span>
            </div>
            <div className="hidden md:block h-4 w-[1px] bg-border/20" />
            <div className="flex items-center gap-4 group cursor-default">
              <div className="w-2 h-2 rounded-full bg-green-500/20 group-hover:bg-green-500 animate-pulse transition-colors" />
              <span className="group-hover:text-secondary/50 transition-colors">Available for Global Roles</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Navigation Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1.5px] h-16 bg-gradient-to-b from-accent/20 to-transparent relative overflow-hidden rounded-full">
          <motion.div
            animate={{ y: [0, 64, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/4 bg-white/30 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          />
        </div>
      </motion.div>
    </section>
  );
};
