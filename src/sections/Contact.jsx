import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { Mail, ArrowUpRight, Send, Share2, Link, Code, Sparkles } from 'lucide-react';
import { staggerContainer, fadeInUp, scaleIn } from '../utils/animations';

const socialLinks = [
  { 
    icon: <Code size={24} strokeWidth={2.5} />, 
    href: "https://github.com/weebaayush", 
    label: "GitHub",
    handle: "@weebaayush"
  },
  { 
    icon: <Link size={24} strokeWidth={2.5} />, 
    href: "https://www.linkedin.com/in/weebaayush/", 
    label: "LinkedIn",
    handle: "in/weebaayush"
  },
  { 
    icon: <Share2 size={24} strokeWidth={2.5} />, 
    href: "https://x.com/weebaayushh", 
    label: "X / Twitter",
    handle: "@weebaayushh" 
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-accent/5 blur-[200px] rounded-full" 
        />
      </div>

      <Container>
        <div className="relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center max-w-5xl mx-auto mb-32"
          >
            <motion.div 
              variants={fadeInUp}
              className="flex items-center justify-center gap-4 text-accent font-black mb-12 uppercase tracking-[0.6em] text-[10px]"
            >
              <Sparkles size={20} className="animate-spin-slow" />
              <span>The Next Chapter</span>
            </motion.div>
            <motion.h2 
              variants={fadeInUp}
              className="text-[4.5rem] md:text-[10rem] font-black tracking-[-0.08em] mb-12 leading-[0.8] text-reveal"
            >
              Let's Build <br />
              <span className="text-accent italic">Exceptional.</span>
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-2xl md:text-4xl text-secondary/70 leading-relaxed font-bold max-w-4xl mx-auto tracking-tight text-balance"
            >
              Available for high-impact roles, backend-heavy systems, 
              and production-scale full-stack development.
            </motion.p>
          </motion.div>

          {/* High-End Contact System */}
          <motion.div
            variants={scaleIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="glow-card group">
              <div className="relative p-12 md:p-24 overflow-hidden">
                {/* Advanced Tech Pattern */}
                <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                  <div>
                    <h3 className="text-5xl md:text-7xl font-black tracking-[-0.07em] mb-12 text-primary leading-[0.9]">
                      Ready for <br /> Velocity.
                    </h3>
                    <div className="space-y-12">
                      <a 
                        href="mailto:ayushgautam0000@gmail.com"
                        className="flex items-center gap-10 group/link"
                      >
                        <div className="p-8 rounded-[2.5rem] bg-accent/5 border border-accent/20 text-accent group-hover/link:bg-accent group-hover/link:text-background transition-all duration-700 shadow-2xl shadow-accent/10 group-hover/link:scale-110 group-hover/link:rotate-6">
                          <Mail size={44} strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-[12px] font-black uppercase tracking-[0.5em] text-secondary/40 mb-3">Direct Channel</p>
                          <p className="text-2xl md:text-3xl font-black text-primary group-hover/link:text-accent transition-all duration-500 tracking-tighter">ayushgautam0000@gmail.com</p>
                        </div>
                      </a>
                      
                      <div className="pt-12 border-t border-border/30">
                        <p className="text-[12px] font-black uppercase tracking-[0.5em] text-secondary/40 mb-10">Social Ecosystem</p>
                        <div className="flex flex-col gap-8">
                          {socialLinks.map((social, i) => (
                            <motion.a 
                              key={i} 
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ x: 15, color: "var(--color-accent)" }}
                              className="flex items-center gap-6 text-secondary transition-all duration-700 group/social"
                              aria-label={social.label}
                            >
                              <div className="p-4 rounded-2xl border border-border/40 bg-muted/5 group-hover/social:border-accent/40 group-hover/social:bg-accent/5 transition-all shadow-xl">
                                {social.icon}
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[11px] font-black uppercase tracking-[0.3em] opacity-30">{social.label}</span>
                                <span className="text-lg font-black tracking-tight text-primary group-hover/social:text-accent transition-colors">{social.handle}</span>
                              </div>
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-8">
                    <button 
                      onClick={() => window.location.href = 'mailto:ayushgautam0000@gmail.com'}
                      className="btn-primary py-12 rounded-[2.5rem]"
                    >
                      <div className="btn-glow" />
                      <span className="relative flex items-center justify-center gap-6 text-xl">
                        Initiate Discussion <Send size={32} className="group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform duration-700 ease-[cubic-bezier(0.21,0.47,0.32,0.98)]" />
                      </span>
                    </button>
                    <button 
                      onClick={() => window.open('#', '_blank')}
                      className="btn-secondary py-12 rounded-[2.5rem] text-xl gap-6"
                    >
                      System Architecture CV <ArrowUpRight size={32} strokeWidth={2.5} />
                    </button>
                    <div className="flex items-center justify-center gap-5 text-[11px] font-black uppercase tracking-[0.6em] text-secondary/30 mt-8">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                      Global Connectivity Active
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
