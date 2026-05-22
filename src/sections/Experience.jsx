import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Container } from '../components/ui/Container';
import { cn } from '../utils/cn';
import { Briefcase, Calendar, ChevronRight, Fingerprint } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils/animations';

const experiences = [
  {
    role: "Lead Systems Architect",
    company: "TechNova Solutions",
    period: "2023 - Present",
    description: "Spearheading the core architecture of high-availability distributed systems. Pioneered a company-wide micro-frontend standard that reduced deployment friction by 60%.",
    skills: ["System Design", "Kubernetes", "Next.js 14", "Event-Driven"]
  },
  {
    role: "Senior Engineering Consultant",
    company: "CloudScale Systems",
    period: "2021 - 2023",
    description: "Strategic consulting for enterprise partners on cloud migration and database optimization. Managed a team of 8 developers building real-time data pipelines.",
    skills: ["PostgreSQL", "Go", "AWS Architecture", "Redis"]
  },
  {
    role: "Interactive UI Specialist",
    company: "Creative Logic Agency",
    period: "2019 - 2021",
    description: "Crafted high-fidelity interactive prototypes and complex web-based experiences for award-winning marketing campaigns and digital products.",
    skills: ["Three.js", "Framer Motion", "GSAP", "Performance"]
  }
];

const ExperienceItem = ({ exp }) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative pl-16 md:pl-24 pb-32 last:pb-0 group"
    >
      {/* Vertical Line Segment (static background) */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-border/40 group-last:hidden" />
      
      {/* Animated Dot */}
      <div className="absolute left-[-8px] top-0 w-[17px] h-[17px] rounded-full bg-background border-2 border-accent z-20 group-hover:bg-accent transition-all duration-700 shadow-[0_0_20px_rgba(59,130,246,0.6)] group-hover:scale-125">
        <motion.div 
          animate={{ scale: [1, 2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-accent blur-[8px]"
        />
      </div>

      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 mb-8">
        <div>
          <h3 className="text-3xl md:text-5xl font-black tracking-[-0.06em] text-primary group-hover:text-accent transition-all duration-1000 leading-none mb-4">
            {exp.role}
          </h3>
          <div className="flex items-center gap-4 text-accent font-black text-[10px] uppercase tracking-[0.4em] mt-6">
            <div className="p-2 rounded-lg bg-accent/5 border border-accent/20">
              <Briefcase size={16} />
            </div>
            <span>{exp.company}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-secondary text-[11px] font-black uppercase tracking-[0.3em] bg-muted/10 px-8 py-3 rounded-full border border-border/40 w-fit backdrop-blur-2xl shadow-2xl">
          <Calendar size={14} className="text-accent" />
          <span>{exp.period}</span>
        </div>
      </div>

      <p className="text-secondary text-lg md:text-2xl leading-relaxed max-w-4xl mb-12 font-semibold tracking-tight opacity-80 group-hover:opacity-100 transition-opacity duration-1000">
        {exp.description}
      </p>

      <div className="flex flex-wrap gap-4">
        {exp.skills.map(skill => (
          <span key={skill} className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-secondary border border-border/40 px-6 py-2.5 rounded-[1rem] hover:border-accent/40 hover:text-primary transition-all duration-500 cursor-default bg-muted/5">
            <ChevronRight size={14} className="text-accent" />
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <section id="experience" ref={containerRef} className="py-48 bg-background relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-32">
          {/* Header */}
          <div className="xl:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sticky top-48"
            >
              <div className="flex items-center gap-4 text-accent font-black mb-10 uppercase tracking-[0.6em] text-[10px]">
                <Fingerprint size={20} />
                <span>The Trajectory</span>
              </div>
              <h2 className="text-6xl md:text-[7rem] font-black tracking-[-0.08em] mb-12 leading-[0.85] text-gradient">
                Career <br />
                <span className="text-accent italic">Velocity.</span>
              </h2>
              <div className="text-secondary text-xl leading-relaxed max-w-md font-semibold italic border-l-4 border-accent/30 pl-10 opacity-60 hover:opacity-100 transition-opacity duration-1000">
                "A narrative of architectural innovation, decisive leadership, and shipping world-class digital systems."
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="xl:col-span-8 relative">
            {/* Animated Progress Line */}
            <motion.div 
              style={{ scaleY }}
              className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-blue-400 to-transparent z-10 origin-top shadow-[0_0_15px_rgba(59,130,246,0.8)]"
            />
            
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-0"
            >
              {experiences.map((exp) => (
                <ExperienceItem key={exp.role} exp={exp} />
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
