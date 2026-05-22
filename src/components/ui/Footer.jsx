import { Container } from './Container';
import { motion } from 'framer-motion';
import { Code, Link, Share2, Command } from 'lucide-react';

const socialLinks = [
  { icon: <Code size={20} />, href: "https://github.com/weebaayush", label: "GitHub" },
  { icon: <Link size={20} />, href: "https://www.linkedin.com/in/weebaayush/", label: "LinkedIn" },
  { icon: <Share2 size={20} />, href: "https://x.com/weebaayushh", label: "Twitter" },
];

export const Footer = () => {
  return (
    <footer className="py-32 border-t border-border bg-background relative overflow-hidden">
      {/* Background Micro-Grid */}
      <div className="absolute inset-0 opacity-[0.01] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-24 relative z-10">
          {/* Brand Engine */}
          <div className="flex flex-col gap-10 max-w-md">
            <div className="text-5xl font-black tracking-[-0.1em] text-primary group cursor-default">
              AAYUSH<span className="text-accent group-hover:animate-pulse transition-all">.</span>
            </div>
            <p className="text-xl font-bold text-secondary/60 leading-relaxed tracking-tight text-balance">
              Pioneering high-availability digital systems. Building the next generation of architectural excellence.
            </p>
            <div className="flex gap-8">
              {socialLinks.map((social, i) => (
                <motion.a 
                  key={i} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.25, y: -5, color: "var(--color-accent)" }}
                  className="text-secondary/40 transition-all duration-500"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Architecture Mapping */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-20 lg:gap-32">
            <div className="flex flex-col gap-10">
              <p className="text-[11px] font-black uppercase tracking-[0.6em] text-accent/80">Navigation</p>
              <nav className="flex flex-col gap-6 text-[13px] font-black uppercase tracking-[0.25em] text-secondary/60">
                <a href="#about" className="hover:text-primary transition-all hover:translate-x-2">About</a>
                <a href="#projects" className="hover:text-primary transition-all hover:translate-x-2">Portfolio</a>
                <a href="#experience" className="hover:text-primary transition-all hover:translate-x-2">Experience</a>
                <a href="#contact" className="hover:text-primary transition-all hover:translate-x-2">Contact</a>
              </nav>
            </div>
            <div className="flex flex-col gap-10">
              <p className="text-[11px] font-black uppercase tracking-[0.6em] text-accent/80">Domain</p>
              <div className="flex flex-col gap-6 text-[13px] font-black uppercase tracking-[0.25em] text-secondary/40">
                <span className="cursor-default">System Design</span>
                <span className="cursor-default">Backend Logic</span>
                <span className="cursor-default">API Engineering</span>
                <span className="cursor-default">UI Architecture</span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col gap-10">
              <p className="text-[11px] font-black uppercase tracking-[0.6em] text-accent/80">Resources</p>
              <div className="flex flex-col gap-6 text-[13px] font-black uppercase tracking-[0.25em] text-secondary/60">
                <a href="https://github.com/weebaayush" target="_blank" className="hover:text-primary transition-all hover:translate-x-2">GitHub</a>
                <a href="https://www.linkedin.com/in/weebaayush/" target="_blank" className="hover:text-primary transition-all hover:translate-x-2">LinkedIn</a>
                <a href="#" className="hover:text-primary transition-all hover:translate-x-2">Resume Archive</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* The Agency Signature */}
        <div className="mt-40 pt-16 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.5em] text-secondary/20">
            <a href="#" className="hover:text-secondary/40 transition-colors">Digital Standards</a>
            <a href="#" className="hover:text-secondary/40 transition-colors">Privacy Protocol</a>
          </div>
          <motion.div 
            animate={{ opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-5 text-[10px] font-black uppercase tracking-[0.8em] text-secondary/40"
          >
            <Command size={16} strokeWidth={2.5} />
            ARCHITECTING THE FUTURE
          </motion.div>
          <div className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary/20">
            © {new Date().getFullYear()} AAYUSH GAUTAM — THE STANDARD
          </div>
        </div>
      </Container>
    </footer>
  );
};
