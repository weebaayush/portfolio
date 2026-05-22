import { motion } from 'framer-motion';
import { Mail, Globe, MessageSquare, ArrowRight, Sparkles, Code, FileText, MapPin, GraduationCap } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { revealBlur, fadeInUp, staggerContainer } from '../utils/animations';

const socialLinks = [
  { icon: <Code size={24} />, href: 'https://github.com/AayushGautam', label: 'GitHub' },
  { icon: <Mail size={24} />, href: 'mailto:hello@aayushgautam.dev', label: 'Email' },
  { icon: <MessageSquare size={24} />, href: '#', label: 'Discord' },
];

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-24">
      {/* World-Class Background System - Restrained & Cinematic */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Soft Multi-layered Lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[150%] bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08)_0%,transparent_60%)]" />
        
        {/* Ambient Slow-Moving Diffused Orbs */}
        <motion.div 
          animate={{ 
            x: [0, 80, 0],
            y: [0, 40, 0],
            opacity: [0.08, 0.15, 0.08]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[10%] w-[60%] h-[60%] bg-accent/15 blur-[200px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            x: [0, -60, 0],
            y: [0, -30, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[0%] right-[5%] w-[60%] h-[60%] bg-blue-900/10 blur-[200px] rounded-full" 
        />

        {/* Minimal Technical Architecture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_80%,transparent_100%)]" />
        
        {/* Horizontal Intentional Lines */}
        <div className="absolute top-[15%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute bottom-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <Container className="relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="whileInView"
          className="flex flex-col items-center text-center"
        >
          {/* Real Identity Badge Cluster */}
          <motion.div
            variants={fadeInUp}
            className="mb-12 flex flex-wrap justify-center gap-4"
          >
            <div className="px-6 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-3xl text-accent text-[9px] font-black uppercase tracking-[0.4em] flex items-center gap-3 shadow-2xl">
              <Sparkles size={12} className="text-accent" />
              <span>Full-Stack Engineer</span>
            </div>
            <div className="px-6 py-2 rounded-full border border-white/5 bg-white/[0.01] backdrop-blur-3xl text-secondary text-[9px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
              <MapPin size={12} className="text-secondary/40" />
              <span>Mumbai, India</span>
            </div>
          </motion.div>

          {/* Master Headline */}
          <div className="relative mb-10">
            <motion.h1
              variants={revealBlur}
              className="text-[3.5rem] md:text-[8rem] lg:text-[11rem] font-black tracking-[-0.07em] text-reveal leading-[0.8] pb-4"
            >
              Aayush Gautam<span className="text-accent italic opacity-80">.</span>
            </motion.h1>
            <motion.div 
              variants={fadeInUp}
              className="mt-6 flex flex-col gap-2"
            >
               <span className="text-2xl md:text-5xl font-black tracking-tight text-primary/80">
                Building <span className="text-accent italic">Scalable</span> Digital Systems.
              </span>
            </motion.div>
          </div>

          {/* Agency-Grade Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-2xl text-secondary max-w-3xl mb-16 leading-relaxed font-semibold tracking-tight text-balance opacity-70"
          >
            Specializing in production-grade 
            <span className="text-primary/90"> backend architectures </span> 
            and <span className="text-primary/90"> premium interactive frontends. </span>
            Currently engineering the future at KC College.
          </motion.p>

          {/* Professional Action Grid */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-24 w-full max-w-4xl px-4"
          >
            <button className="group relative bg-primary text-background py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <span className="relative flex items-center justify-center gap-3">
                View Archive <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
              </span>
            </button>
            
            <button className="px-8 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] border border-border/40 hover:bg-muted/30 transition-all active:scale-95 flex items-center justify-center gap-3 text-secondary hover:text-primary">
              Let's Connect
            </button>

            <button className="px-8 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] border border-border/40 hover:bg-muted/30 transition-all active:scale-95 flex items-center justify-center gap-3 text-secondary hover:text-primary group">
              <FileText size={16} className="group-hover:text-accent transition-colors" />
              Technical CV
            </button>

            <button className="px-8 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] border border-border/40 hover:bg-muted/30 transition-all active:scale-95 flex items-center justify-center gap-3 text-secondary hover:text-primary group">
              <Code size={16} className="group-hover:text-accent transition-colors" />
              Codebase
            </button>
          </motion.div>

          {/* Trajectory Indicators */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center items-center gap-10 md:gap-16 text-[9px] font-black uppercase tracking-[0.5em] text-secondary/30"
          >
            <div className="flex items-center gap-3 group cursor-default">
              <GraduationCap size={16} className="text-accent/40 group-hover:text-accent transition-colors" />
              <span className="group-hover:text-secondary/50 transition-colors">KC College • CS 2026</span>
            </div>
            <div className="hidden md:block h-3 w-[1px] bg-border/20" />
            <div className="flex items-center gap-3 group cursor-default">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/30 group-hover:bg-green-500 animate-pulse transition-colors" />
              <span className="group-hover:text-secondary/50 transition-colors">Available for Global Roles</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Cinematic Navigation Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent/30 to-transparent relative overflow-hidden rounded-full">
          <motion.div
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/4 bg-white/40"
          />
        </div>
      </motion.div>
    </section>
  );
};
