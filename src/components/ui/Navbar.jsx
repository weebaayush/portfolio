import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Container } from './Container';
import { cn } from '../../utils/cn';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out',
        isScrolled ? 'py-4' : 'py-10'
      )}
    >
      <Container>
        <div
          className={cn(
            'relative flex items-center justify-between px-8 py-3 rounded-full transition-all duration-700 border',
            isScrolled 
              ? 'bg-muted/10 backdrop-blur-2xl border-border/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
              : 'bg-transparent border-transparent'
          )}
        >
          {/* Logo */}
          <motion.a
            href="#hero"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-[-0.06em] text-primary group"
          >
            AAYUSH<span className="text-accent group-hover:animate-pulse transition-all">.</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            <ul className="flex items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <a
                    href={link.href}
                    className="text-[11px] uppercase tracking-[0.3em] font-black text-secondary hover:text-primary transition-all duration-500 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent transition-all duration-500 group-hover:w-full rounded-full shadow-[0_0_10px_var(--color-accent)]" />
                  </a>
                </motion.li>
              ))}
            </ul>
            
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-background text-[10px] font-black uppercase tracking-[0.2em] px-7 py-2.5 rounded-full transition-all duration-500"
            >
              Contact
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary p-2 hover:bg-muted/50 rounded-full transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            className="absolute top-full left-0 right-0 mt-4 px-6 md:hidden"
          >
            <div className="bg-background/95 backdrop-blur-3xl border border-border/50 rounded-[2.5rem] p-10 shadow-2xl">
              <ul className="flex flex-col gap-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-black text-secondary hover:text-accent tracking-tight transition-colors block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li>
                  <button className="w-full bg-primary text-background font-black uppercase tracking-widest py-5 rounded-2xl mt-4">
                    Get Started
                  </button>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
