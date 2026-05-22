import { motion } from 'framer-motion';
import { Mail, Globe, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { revealBlur, fadeInUp, staggerContainer } from '../utils/animations';

const socialLinks = [
  { icon: <Mail size={24} />, href: '#', label: 'Email' },
  { icon: <Globe size={24} />, href: '#', label: 'Website' },
  { icon: <MessageSquare size={24} />, href: '#', label: 'Discord' },
];

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* World-Class Background System */}
      <div className="absolute inset-0 z-0">
        {/* Deep Gradient Radial */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[120%] bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.18)_0%,transparent_60%)]" />
        
        {/* Moving Spotlight Orbs */}
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

        {/* Premium Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_60%,transparent_100%)]" />
      </div>

      <Container className="relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="whileInView"
          className="flex flex-col items-center text-center"
        >
          {/* Advanced Badge */}
          <motion.div
            variants={fadeInUp}
            className="mb-12 px-8 py-2.5 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-3xl text-accent text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-4 shadow-[0_0_40px_rgba(59,130,246,0.2)]"
          >
            <Sparkles size={14} className="animate-spin-slow" />
            <span>Available for innovative partnerships</span>
          </motion.div>

          {/* SaaS Style Headline */}
          <motion.h1
            variants={revealBlur}
            className="text-7xl md:text-[9rem] lg:text-[11.5rem] font-black tracking-[-0.06em] mb-12 text-gradient leading-[0.85] pb-6"
          >
            Engineering <br />
            <span className="text-accent italic drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">Perfection.</span>
          </motion.h1>

          {/* Subheadline with high legibility */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-3xl text-secondary max-w-4xl mb-20 leading-relaxed font-semibold tracking-tight"
          >
            I architect high-performance digital ecosystems where 
            <span className="text-primary"> superior engineering </span> 
            meets <span className="text-primary"> visionary design.</span>
          </motion.p>

          {/* Premium Call to Actions */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-10 mb-24"
          >
            <button className="group relative bg-primary text-background px-14 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.1)]">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <span className="relative flex items-center gap-4">
                Start a Project <ArrowRight size={22} className="group-hover:translate-x-3 transition-transform duration-500" />
              </span>
            </button>
            <button className="px-14 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs border border-border/60 hover:bg-muted/50 transition-all active:scale-95 flex items-center gap-4 text-secondary hover:text-primary">
              View Showcase
            </button>
          </motion.div>

          {/* Elegant Social Cluster */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-14"
          >
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                aria-label={social.label}
                className="text-secondary/60 hover:text-accent transition-all duration-500 transform hover:scale-150 hover:-translate-y-2"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      {/* Modern Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase font-black tracking-[0.6em] text-secondary/40">Scroll to explore</span>
        <div className="w-[1.5px] h-20 bg-gradient-to-b from-accent/50 to-transparent relative overflow-hidden rounded-full">
          <motion.div
            animate={{
              y: [0, 80, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 w-full h-1/4 bg-white shadow-[0_0_15px_#fff]"
          />
        </div>
      </motion.div>
    </section>
  );
};
