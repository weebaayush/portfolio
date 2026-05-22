import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { Mail, MessageSquare, ArrowUpRight, Send, Globe, Share2, Link, Code, Sparkles } from 'lucide-react';
import { staggerContainer, fadeInUp, scaleIn } from '../utils/animations';

const socialLinks = [
  { icon: <Code size={22} />, href: "#", label: "GitHub" },
  { icon: <Link size={22} />, href: "#", label: "LinkedIn" },
  { icon: <Share2 size={22} />, href: "#", label: "Twitter" },
  { icon: <Globe size={22} />, href: "#", label: "Website" },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-48 bg-background relative overflow-hidden">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
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
              className="flex items-center justify-center gap-4 text-accent font-black mb-10 uppercase tracking-[0.6em] text-[10px]"
            >
              <Sparkles size={20} className="animate-spin-slow" />
              <span>The Next Chapter</span>
            </motion.div>
            <motion.h2 
              variants={fadeInUp}
              className="text-7xl md:text-[10rem] font-black tracking-[-0.08em] mb-12 leading-[0.8] text-gradient"
            >
              Let's Build <br />
              <span className="text-accent italic">Exceptional.</span>
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-2xl md:text-4xl text-secondary leading-relaxed font-bold max-w-4xl mx-auto tracking-tight opacity-70"
            >
              Available for high-impact roles, strategic consulting, 
              and visionary architectural partnerships.
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
            <div className="relative group">
              {/* Ultra-Premium Border Glow */}
              <div className="absolute -inset-[3px] bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 rounded-[4rem] opacity-0 group-hover:opacity-100 transition-all duration-[1.5s] blur-xl pointer-events-none" />
              
              <div className="relative rounded-[4rem] border border-border/40 bg-card backdrop-blur-[100px] p-12 md:p-24 overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.8)]">
                {/* Advanced Tech Pattern */}
                <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                  <div>
                    <h3 className="text-4xl md:text-6xl font-black tracking-[-0.06em] mb-12 text-primary">
                      Ready for <br /> Velocity.
                    </h3>
                    <div className="space-y-10">
                      <a 
                        href="mailto:hello@ayush.dev"
                        className="flex items-center gap-8 group/link"
                      >
                        <div className="p-7 rounded-[2rem] bg-accent/5 border border-accent/20 text-accent group-hover/link:bg-accent group-hover/link:text-background transition-all duration-700 shadow-2xl shadow-accent/10 group-hover/link:scale-110">
                          <Mail size={40} strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-[11px] font-black uppercase tracking-[0.4em] text-secondary mb-2">Direct Channel</p>
                          <p className="text-2xl md:text-3xl font-black text-primary group-hover/link:text-accent transition-all duration-500 tracking-tighter">hello@ayush.dev</p>
                        </div>
                      </a>
                      
                      <div className="pt-12 border-t border-border/30">
                        <p className="text-[11px] font-black uppercase tracking-[0.4em] text-secondary mb-8">Global Reach</p>
                        <div className="flex gap-6">
                          {socialLinks.map((social, i) => (
                            <motion.a 
                              key={i} 
                              href={social.href}
                              whileHover={{ y: -8, scale: 1.2, color: "var(--color-accent)" }}
                              className="p-5 rounded-[1.5rem] border border-border/40 bg-muted/5 text-secondary hover:border-accent/40 transition-all duration-500 shadow-xl"
                              aria-label={social.label}
                            >
                              {social.icon}
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-8">
                    <button className="w-full group relative bg-primary text-background px-12 py-10 rounded-[2.5rem] font-black uppercase tracking-[0.3em] text-sm overflow-hidden transition-all hover:scale-[1.03] active:scale-95 shadow-[0_40px_80px_rgba(255,255,255,0.08)]">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <span className="relative flex items-center justify-center gap-5">
                        Schedule Strategic Call <Send size={28} className="group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform duration-700 ease-[cubic-bezier(0.21,0.47,0.32,0.98)]" />
                      </span>
                    </button>
                    <button className="w-full px-12 py-10 rounded-[2.5rem] font-black uppercase tracking-[0.3em] text-sm border border-border/60 hover:bg-muted/30 transition-all active:scale-95 flex items-center justify-center gap-5 text-secondary hover:text-primary shadow-2xl">
                      Download CV Architecture <ArrowUpRight size={28} />
                    </button>
                    <div className="flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] text-secondary/40 mt-6">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Global Response Active
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
