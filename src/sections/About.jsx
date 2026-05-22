import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { Rocket, Fingerprint, Command } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';
import { SpotlightCard } from '../components/ui/SpotlightCard';

const traits = [
  { icon: <Command size={18} />, label: 'Architecture Mastery' },
  { icon: <Rocket size={18} />, label: 'Peak Performance' },
  { icon: <Fingerprint size={18} />, label: 'Pixel-Perfect DNA' },
];

export const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-background">
      {/* Cinematic Background */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[50%] h-[70%] bg-accent/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          {/* Left Side: Storytelling */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              variants={fadeInUp}
              className="flex items-center gap-4 text-accent font-black mb-12 uppercase tracking-[0.6em] text-[10px]"
            >
              <div className="h-[1px] w-8 bg-accent/30" />
              <span>The Manifest</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-6xl md:text-[7rem] font-black tracking-[-0.08em] mb-12 leading-[0.85] text-reveal"
            >
              Beyond the <br />
              <span className="text-accent italic">Surface.</span>
            </motion.h2>
            
            <motion.div 
              variants={fadeInUp}
              className="space-y-10 text-xl md:text-2xl text-secondary/70 leading-relaxed max-w-2xl font-semibold tracking-tight text-balance"
            >
              <p>
                I don't just write code; I architect digital legacies. My mission is to push the boundaries of what is technically possible while maintaining an uncompromising standard of beauty.
              </p>
              <p>
                As a designer-engineer hybrid, I bridge the gap between abstract concepts and solid reality. Every interaction I build is a dialogue between human and machine, optimized for clarity and emotion.
              </p>
            </motion.div>

            {/* Traits Grid */}
            <div className="flex flex-wrap gap-5 mt-20">
              {traits.map((trait, i) => (
                <motion.div 
                  key={i}
                  variants={fadeInUp}
                  className="flex items-center gap-4 px-8 py-4 rounded-[1.5rem] border border-border/40 bg-muted/5 backdrop-blur-3xl text-[10px] font-black uppercase tracking-[0.3em] text-primary hover:border-accent/40 transition-all duration-500"
                >
                  <span className="text-accent">{trait.icon}</span>
                  {trait.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Visual Masterpiece */}
          <motion.div
            variants={scaleIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.3 }}
            className="relative perspective-2000"
          >
            <SpotlightCard className="p-1 border border-border/40 overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
              <div className="relative h-full w-full rounded-[2.9rem] bg-background/60 backdrop-blur-3xl flex flex-col items-center justify-center p-16 text-center overflow-hidden">
                {/* Advanced Grid */}
                <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px:32px]" />
                
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotateZ: [0, 8, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-20 w-48 h-48 rounded-[3rem] bg-gradient-to-tr from-accent via-blue-400 to-white flex items-center justify-center shadow-[0_30px_70px_rgba(59,130,246,0.3)] mb-12"
                >
                   <Rocket size={80} className="text-white drop-shadow-2xl" />
                </motion.div>

                <h3 className="text-4xl font-black mb-6 tracking-[-0.06em] text-reveal">AAYUSH.DEV</h3>
                <p className="text-secondary/60 text-lg max-w-[280px] mb-12 font-semibold leading-relaxed italic">
                  "Defining the standard of high-performance modern engineering."
                </p>

                {/* Exclusive Console UI */}
                <div className="w-full bg-black/80 rounded-3xl border border-border/40 p-8 text-left font-mono text-[11px] shadow-2xl group-hover:border-accent/30 transition-all duration-700">
                  <div className="flex gap-2.5 mb-6">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
                  </div>
                  <div className="flex items-center gap-3 text-accent mb-3 uppercase tracking-widest font-black">
                    <span className="opacity-40">❯</span>
                    <span>System Init</span>
                  </div>
                  <div className="text-white/70 font-bold tracking-tight leading-relaxed">
                    [OK] Core architecture loaded <br />
                    [OK] Creative engine active <br />
                    <span className="text-emerald-400 mt-2 block font-black">→ Building Greatness_</span>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* Layered Cinematic Glows */}
            <motion.div
              animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
              transition={{ duration: 15, repeat: Infinity }}
              className="absolute -top-20 -right-20 w-72 h-72 bg-accent/15 blur-[100px] rounded-full z-0"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
