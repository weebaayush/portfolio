import { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { cn } from '../utils/cn';
import { staggerContainer, fadeInUp } from '../utils/animations';
import { SpotlightCard } from '../components/ui/SpotlightCard';

const Counter = ({ value, duration = 2.5 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const spring = useSpring(0, { 
    duration: duration * 1000, 
    bounce: 0,
    stiffness: 40,
    damping: 20
  });
  const display = useTransform(spring, (current) => Math.floor(current));

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

const stats = [
  { label: 'Full-Stack Projects', value: 4, suffix: '+' },
  { label: 'Technologies & Tools', value: 18, suffix: '' },
  { label: 'Internship Experiences', value: 3, suffix: '+' },
  { label: 'Research-Backed Flagship System', value: 1, suffix: '' },
];

export const Stats = () => {
  return (
    <section id="stats" className="py-24 relative bg-background overflow-hidden">
      <Container>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <SpotlightCard className="p-12 md:p-14 group border border-border/40">
                {/* Card Internal Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.04)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                
                <div className="relative z-10">
                  <div className="text-6xl md:text-7xl font-black tracking-[-0.08em] mb-6 text-primary flex items-baseline justify-center lg:justify-start">
                    <Counter value={stat.value} />
                    <span className="text-accent text-4xl ml-1 font-bold italic">{stat.suffix}</span>
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary/60 group-hover:text-primary transition-all duration-500 text-center lg:text-left">
                    {stat.label}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
