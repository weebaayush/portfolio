import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Container } from '../components/ui/Container';
import { cn } from '../utils/cn';
import { Briefcase, Calendar, ChevronRight, Fingerprint, Award, Trophy, Verified, Cpu, Globe } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils/animations';

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Unified Mentor Private Limited",
    period: "June 2026 – August 2026",
    description: "Architected high-fidelity web interfaces with a focus on responsive design systems and seamless user experiences. Implemented modern frontend architectures ensuring peak performance across digital platforms.",
    skills: ["Frontend Development", "UI/UX Design", "Responsive Architecture", "Modern Web"]
  },
  {
    role: "Full-Stack Web Developer",
    company: "EduSkills Foundation",
    period: "January 2026 – March 2026",
    description: "Developed comprehensive full-stack applications with integrated backend APIs and robust authentication systems. Focused on building scalable logic and modern application workflows for high-availability environments.",
    skills: ["Full-Stack", "Backend APIs", "Auth Systems", "Scalable Logic"]
  },
  {
    role: "AI-ML Virtual Intern",
    company: "Google for Developers",
    period: "October 2025 – December 2025",
    description: "Explored advanced machine learning workflows and AI fundamentals. Engineered predictive models and data pipelines using Python and TensorFlow, following industry-standard ML engineering practices.",
    skills: ["Python", "TensorFlow", "ML Workflows", "Data Engineering"]
  },
  {
    role: "Campus Ambassador",
    company: "Internshala UGC Program",
    period: "March 2025 – August 2025",
    description: "Strategized campus outreach and brand representation initiatives. Managed multi-channel communication and cross-functional coordination to drive platform awareness and engagement.",
    skills: ["Strategic Outreach", "Brand Identity", "Coordination", "Communication"]
  }
];

const achievements = [
  {
    title: "SIH Internal Hackathon",
    desc: "Achieved 3rd Rank in the prestigious Smart India Hackathon internal rounds.",
    icon: <Trophy size={18} />
  },
  {
    title: "Engineering Mastery",
    desc: "Successfully built production-style full-stack systems with scalable backend focus.",
    icon: <Cpu size={18} />
  },
  {
    title: "Academic Excellence",
    desc: "Internship completion certificates verified for all professional tenures.",
    icon: <Verified size={18} />
  },
  {
    title: "Global Reach",
    desc: "Worked on applications designed for international scalability and modern web standards.",
    icon: <Globe size={18} />
  }
];

const ExperienceItem = ({ exp }) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative pl-16 md:pl-24 pb-32 last:pb-0 group"
    >
      {/* Vertical Line Segment */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-border/40 group-last:hidden" />
      
      {/* Animated Trajectory Point */}
      <div className="absolute left-[-8px] top-0 w-[17px] h-[17px] rounded-full bg-background border-2 border-accent z-20 group-hover:bg-accent transition-all duration-700 shadow-[0_0_20px_rgba(59,130,246,0.6)] group-hover:scale-125">
        <motion.div 
          animate={{ scale: [1, 2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-accent blur-[8px]"
        />
      </div>

      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 mb-10">
        <div>
          <h3 className="text-4xl md:text-5xl font-black tracking-[-0.06em] text-primary group-hover:text-accent transition-all duration-1000 leading-none mb-6">
            {exp.role}
          </h3>
          <div className="flex items-center gap-4 text-accent font-black text-[10px] uppercase tracking-[0.4em]">
            <div className="p-2.5 rounded-xl bg-accent/5 border border-accent/20">
              <Briefcase size={16} strokeWidth={2.5} />
            </div>
            <span>{exp.company}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-secondary/60 text-[10px] font-black uppercase tracking-[0.3em] glass px-8 py-3 rounded-full w-fit shadow-2xl">
          <Calendar size={14} className="text-accent/60" />
          <span>{exp.period}</span>
        </div>
      </div>

      <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mb-12 font-semibold tracking-tight text-secondary/70 group-hover:text-secondary transition-all duration-700 text-balance">
        {exp.description}
      </p>

      <div className="flex flex-wrap gap-4">
        {exp.skills.map(skill => (
          <span key={skill} className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-secondary/50 border border-border/40 px-6 py-2.5 rounded-[1.25rem] hover:border-accent/40 hover:text-primary transition-all duration-500 cursor-default bg-muted/5 backdrop-blur-xl">
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
    <section id="experience" ref={containerRef} className="section-padding bg-background relative overflow-hidden">
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
              <h2 className="text-7xl md:text-[9rem] font-black tracking-[-0.08em] mb-12 leading-[0.85] text-reveal">
                Career <br />
                <span className="text-accent italic">Velocity.</span>
              </h2>
              <div className="text-secondary text-xl leading-relaxed max-w-md font-semibold italic border-l-4 border-accent/20 pl-10 opacity-60 hover:opacity-100 transition-opacity duration-1000 mb-20 text-balance">
                "A narrative of professional growth, technical consulting, and architecting modern digital ecosystems."
              </div>

              {/* Achievements Sidebar Grid */}
              <div className="hidden xl:flex flex-col gap-10">
                 <div className="flex items-center gap-4 text-accent font-black uppercase tracking-[0.6em] text-[10px]">
                  <Award size={20} />
                  <span>Key Milestones</span>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {achievements.map((achievement, idx) => (
                    <div key={idx} className="group relative p-8 rounded-[2.5rem] border border-border/40 bg-muted/5 transition-all duration-700 hover:border-accent/40 backdrop-blur-3xl overflow-hidden">
                      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                      <div className="flex items-center gap-5 mb-4 relative z-10">
                        <div className="text-accent group-hover:scale-120 group-hover:rotate-12 transition-all duration-700 p-3 rounded-2xl bg-accent/5 border border-accent/20">
                          {achievement.icon}
                        </div>
                        <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-primary">{achievement.title}</h4>
                      </div>
                      <p className="text-sm text-secondary/60 font-semibold leading-relaxed tracking-tight relative z-10">{achievement.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="xl:col-span-8 relative">
            {/* Animated Progress Line */}
            <motion.div 
              style={{ scaleY }}
              className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-blue-400 to-transparent z-10 origin-top shadow-[0_0_20px_rgba(59,130,246,0.8)]"
            />
            
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-0"
            >
              {experiences.map((exp, idx) => (
                <ExperienceItem key={idx} exp={exp} />
              ))}
            </motion.div>

            {/* Mobile/Tablet Achievements Display */}
            <div className="xl:hidden mt-40">
               <div className="flex items-center gap-4 text-accent font-black mb-10 uppercase tracking-[0.6em] text-[10px]">
                <Award size={20} />
                <span>Key Milestones</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {achievements.map((achievement, idx) => (
                  <div key={idx} className="glow-card p-10 group shadow-2xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-accent p-4 rounded-2xl bg-accent/5 border border-accent/20">
                        {achievement.icon}
                      </div>
                      <h4 className="text-xl font-black uppercase tracking-widest text-primary">{achievement.title}</h4>
                    </div>
                    <p className="text-base text-secondary/70 font-semibold leading-relaxed tracking-tight text-balance">{achievement.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
