import { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { cn } from '../utils/cn';
import { staggerContainer, fadeInUp } from '../utils/animations';

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
  { label: 'High-Impact Projects', value: 24, suffix: '+' },
  { label: 'Modern Technologies', value: 18, suffix: '' },
  { label: 'Years of Mastery', value: 5, suffix: '+' },
  { label: 'Satisfied Partners', value: 15, suffix: '+' },
];

export const Stats = () => {
  return (
    <section id="stats" className="py-32 relative bg-background overflow-hidden">
      <Container>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className={cn(
                "group relative p-12 rounded-[3rem] border border-border/40 bg-card backdrop-blur-3xl transition-all duration-1000",
                "hover:border-accent/40 hover:-translate-y-3 shadow-2xl shadow-black/40 hover:shadow-accent/5"
              )}
            >
              {/* Card Internal Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="relative z-10">
                <div className="text-6xl md:text-7xl font-black tracking-[-0.06em] mb-6 text-primary flex items-baseline justify-center lg:justify-start">
                  <Counter value={stat.value} />
                  <span className="text-accent text-5xl ml-1 font-bold italic">{stat.suffix}</span>
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary group-hover:text-primary transition-all duration-500 text-center lg:text-left">
                  {stat.label}
                </div>
              </div>
              
              {/* Subtle Animated Corner */}
              <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-accent/10 group-hover:bg-accent group-hover:scale-150 group-hover:shadow-[0_0_15px_rgba(59,130,246,1)] transition-all duration-700" />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
