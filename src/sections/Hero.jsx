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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* World-Class Background System */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[120%] bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.18)_0%,transparent_60%)]" />
        <motion.div 
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-accent/20 blur-[180px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1.3, 1, 1.3],
            opacity: [0.1, 0.3, 0.1],
            x: [0, -80, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[180px] rounded-full" 
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_60%,transparent_100%)]" />
      </div>

      <Container className="relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="whileInView"
          className="flex flex-col items-center text-center"
        >
          {/* Real Identity Badge */}
          <motion.div
            variants={fadeInUp}
            className="mb-10 flex flex-wrap justify-center gap-4"
          >
            <div className="px-6 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-3xl text-accent text-[9px] font-black uppercase tracking-[0.4em] flex items-center gap-3 shadow-[0_0_40px_rgba(59,130,246,0.15)]">
              <Sparkles size={12} className="animate-spin-slow" />
              <span>Full-Stack Developer</span>
            </div>
            <div className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-3xl text-secondary text-[9px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
              <MapPin size={12} />
              <span>Mumbai, India</span>
            </div>
          </motion.div>

          {/* Real Name & Role Headline */}
          <motion.h1
            variants={revealBlur}
            className="text-6xl md:text-[8rem] lg:text-[10rem] font-black tracking-[-0.06em] mb-10 text-gradient leading-[0.85] pb-4"
          >
            Aayush Gautam<span className="text-accent">.</span>
          </motion.h1>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-black tracking-tight mb-12 text-primary/90"
          >
            Building <span className="text-accent italic">Scalable</span> Digital Experiences.
          </motion.h2>

          {/* Technical Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-2xl text-secondary max-w-4xl mb-16 leading-relaxed font-semibold tracking-tight"
          >
            Full-stack engineer specializing in 
            <span className="text-primary"> production-grade backend systems </span> 
            and <span className="text-primary"> premium interactive frontends. </span>
            Currently pursuing B.E. CE at KC College (3rd Year).
          </motion.p>

          {/* Strategic Call to Actions */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 w-full max-w-5xl"
          >
            <button className="group relative bg-primary text-background py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <span className="relative flex items-center justify-center gap-3">
                View Projects <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
            
            <button className="px-8 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] border border-border/60 hover:bg-muted/50 transition-all active:scale-95 flex items-center justify-center gap-3 text-secondary hover:text-primary">
              Contact Me
            </button>

            <button className="px-8 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] border border-border/60 hover:bg-muted/50 transition-all active:scale-95 flex items-center justify-center gap-3 text-secondary hover:text-primary">
              <FileText size={16} />
              Resume
            </button>

            <button className="px-8 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] border border-border/60 hover:bg-muted/50 transition-all active:scale-95 flex items-center justify-center gap-3 text-secondary hover:text-primary">
              <Code size={16} />
              GitHub
            </button>
          </motion.div>

          {/* Footer of Hero */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-secondary/40"
          >
            <div className="flex items-center gap-3">
              <GraduationCap size={16} className="text-accent" />
              <span>KC College • 3rd Year</span>
            </div>
            <div className="h-4 w-[1px] bg-border/50 hidden md:block" />
            <div className="hidden md:flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Open for Jobs & Freelance</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Modern Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1.5px] h-16 bg-gradient-to-b from-accent/50 to-transparent relative overflow-hidden rounded-full">
          <motion.div
            animate={{ y: [0, 64, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/4 bg-white shadow-[0_0_15px_#fff]"
          />
        </div>
      </motion.div>
    </section>
  );
};
