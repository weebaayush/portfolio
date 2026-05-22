import { Container } from './Container';
import { motion } from 'framer-motion';
import { Globe, Code, Link, Share2, Command } from 'lucide-react';

const socialLinks = [
  { icon: <Code size={22} />, href: "#", label: "GitHub" },
  { icon: <Link size={22} />, href: "#", label: "LinkedIn" },
  { icon: <Share2 size={22} />, href: "#", label: "Twitter" },
];

export const Footer = () => {
  return (
    <footer className="py-32 border-t border-border bg-background relative overflow-hidden">
      {/* Background Micro-Grid */}
      <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-24 relative z-10">
          {/* Brand Engine */}
          <div className="flex flex-col gap-8 max-w-sm">
            <div className="text-4xl font-black tracking-[-0.08em] text-primary group cursor-default">
              AYUSH<span className="text-accent group-hover:animate-pulse">.</span>
            </div>
            <p className="text-lg font-semibold text-secondary leading-relaxed tracking-tight">
              A precision engineering studio dedicated to building the next generation of world-class digital systems.
            </p>
            <div className="flex gap-6">
              {socialLinks.map((social, i) => (
                <motion.a 
                  key={i} 
                  href={social.href}
                  whileHover={{ scale: 1.2, color: "var(--color-primary)" }}
                  className="text-secondary transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Architecture Mapping */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 lg:gap-24">
            <div className="flex flex-col gap-8">
              <p className="text-[11px] font-black uppercase tracking-[0.6em] text-accent">Navigation</p>
              <nav className="flex flex-col gap-5 text-[13px] font-black uppercase tracking-[0.2em] text-secondary">
                <a href="#about" className="hover:text-primary transition-all hover:translate-x-2">About</a>
                <a href="#projects" className="hover:text-primary transition-all hover:translate-x-2">Portfolio</a>
                <a href="#experience" className="hover:text-primary transition-all hover:translate-x-2">Experience</a>
                <a href="#contact" className="hover:text-primary transition-all hover:translate-x-2">Contact</a>
              </nav>
            </div>
            <div className="flex flex-col gap-8">
              <p className="text-[11px] font-black uppercase tracking-[0.6em] text-accent">Expertise</p>
              <div className="flex flex-col gap-5 text-[13px] font-black uppercase tracking-[0.2em] text-secondary">
                <span className="cursor-default">Architecture</span>
                <span className="cursor-default">Engineering</span>
                <span className="cursor-default">Visual Design</span>
                <span className="cursor-default">Strategy</span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col gap-8">
              <p className="text-[11px] font-black uppercase tracking-[0.6em] text-accent">Connect</p>
              <div className="flex flex-col gap-5 text-[13px] font-black uppercase tracking-[0.2em] text-secondary">
                <a href="#" className="hover:text-primary transition-all hover:translate-x-2">LinkedIn</a>
                <a href="#" className="hover:text-primary transition-all hover:translate-x-2">Twitter</a>
                <a href="#" className="hover:text-primary transition-all hover:translate-x-2">Read.cv</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* The Agency Signature */}
        <div className="mt-32 pt-12 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-secondary/40">
            <a href="#" className="hover:text-secondary transition-colors">Legal Archive</a>
            <a href="#" className="hover:text-secondary transition-colors">Privacy Standard</a>
          </div>
          <motion.div 
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.6em] text-secondary/60"
          >
            <Command size={14} />
            BUILDING THE FUTURE • PIXEL BY PIXEL
          </motion.div>
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary/40">
            © {new Date().getFullYear()} AYUSH.DEV — THE STANDARD
          </div>
        </div>
      </Container>
    </footer>
  );
};
