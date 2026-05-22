import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { cn } from '../utils/cn';
import { staggerContainer, fadeInUp } from '../utils/animations';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { 
  Server, 
  Wrench, 
  Layout, 
  Cpu, 
  Terminal,
  ShieldCheck,
  Zap,
  Library,
  Workflow,
  Sparkles
} from 'lucide-react';

const SkillCard = ({ title, items, icon: Icon, className, subtitle }) => {
  return (
    <motion.div variants={fadeInUp} className={className}>
      <SpotlightCard className="h-full p-10 md:p-12 group border border-border/40">
        {/* Subtle Refined Light Reflection */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />

        <div className="relative z-10 h-full flex flex-col">
          <div className="mb-10 flex items-center justify-between">
            <div className="p-4 rounded-[1.25rem] bg-background/80 border border-border/60 group-hover:border-accent/40 group-hover:text-accent transition-all duration-500 shadow-2xl">
              <Icon size={28} strokeWidth={1.5} />
            </div>
            {subtitle && (
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-accent/60 bg-accent/5 px-3 py-1 rounded-full border border-accent/10">
                {subtitle}
              </span>
            )}
          </div>

          <h3 className="text-3xl font-black mb-6 tracking-tight text-reveal">{title}</h3>
          
          <div className="flex flex-wrap gap-2.5 mt-auto">
            {items.map((item, i) => (
              <span 
                key={item}
                className="px-4 py-1.5 rounded-full bg-muted/20 border border-border/40 text-[10px] md:text-[11px] font-bold tracking-tight text-secondary/70 group-hover:text-primary group-hover:border-accent/30 transition-all duration-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        
        {/* Ghost Branding Icon */}
        <div className="absolute -bottom-6 -right-6 text-accent/[0.02] group-hover:text-accent/10 transition-colors duration-1000 rotate-12 pointer-events-none">
          <Icon size={140} strokeWidth={1} />
        </div>
      </SpotlightCard>
    </motion.div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="section-padding relative bg-background overflow-hidden">
      {/* Architectural Atmospheric Lighting */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-accent/5 blur-[180px] rounded-full pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-900/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/4 translate-y-1/4" />

      <Container>
        <div className="mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-accent font-black mb-10 uppercase tracking-[0.6em] text-[10px]"
          >
            <Library size={20} />
            <span>The Repository</span>
          </motion.div>
          <h2 className="text-5xl md:text-[7rem] font-black tracking-[-0.07em] leading-[0.85] mb-8 text-reveal">
            Technical <br />
            <span className="text-accent italic">Architecture.</span>
          </h2>
          <p className="text-xl md:text-2xl text-secondary/70 font-semibold max-w-2xl leading-relaxed tracking-tight text-balance">
            A comprehensive overview of the specialized tools and languages I leverage to build scalable, production-ready systems.
          </p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 auto-rows-auto"
        >
          {/* Backend Card */}
          <SkillCard 
            title="Systems & API"
            subtitle="Core Domain"
            icon={Terminal}
            items={["Python", "FastAPI", "MySQL", "C Language", "C#", "SQL Engineering"]}
            className="lg:col-span-2 min-h-[320px]"
          />

          {/* Core Strengths */}
          <SkillCard 
            title="Engineering DNA"
            icon={ShieldCheck}
            items={["Backend APIs", "Auth Systems", "UI Logic", "Full-Stack"]}
            className="lg:row-span-2 min-h-[320px]"
          />

          {/* Frontend Card */}
          <SkillCard 
            title="Interface & Interaction"
            icon={Layout}
            items={["React", "TypeScript", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3", "JS"]}
            className="min-h-[320px]"
          />

          {/* Tools Card */}
          <SkillCard 
            title="Workflow & Ops"
            icon={Workflow}
            items={["Git", "Postman", "Swagger", "Figma", "VS Code", "Vercel"]}
            className="min-h-[320px]"
          />

          {/* Learning Card */}
          <SkillCard 
            title="Next Frontiers"
            subtitle="Acquisition"
            icon={Zap}
            items={["AWS Cloud", "Docker", "n8n Automation", "Godot Engine"]}
            className="lg:col-span-2 min-h-[320px]"
          />

          {/* Abstract Strengths Card */}
          <SkillCard 
            title="Creative Logic"
            icon={Sparkles}
            items={["UI Design", "Visual Strategy", "Canva", "Brand Identity"]}
            className="min-h-[320px]"
          />
        </motion.div>
      </Container>
    </section>
  );
};
