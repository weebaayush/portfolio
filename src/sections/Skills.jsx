import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { cn } from '../utils/cn';
import { staggerContainer, fadeInUp } from '../utils/animations';
import { 
  Server, 
  Wrench, 
  Layout, 
  Cpu, 
  Globe, 
  Layers,
  Component,
  Shield,
  Zap
} from 'lucide-react';

const SkillCard = ({ title, items, icon: Icon, className }) => {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -10, transition: { duration: 0.4 } }}
      className={cn(
        "group relative overflow-hidden rounded-[3rem] border border-border/40 bg-card backdrop-blur-3xl p-12 transition-all duration-700",
        "hover:border-accent/50 hover:bg-muted/10 hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)]",
        className
      )}
    >
      {/* Dynamic Glow Cursor Interaction (Simulated) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(59,130,246,0.1),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      {/* Multi-layered Internal Light */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col">
        <div className="mb-10 flex items-center justify-between">
          <div className="p-5 rounded-[1.5rem] bg-background/80 border border-border/50 group-hover:border-accent/40 group-hover:text-accent transition-all duration-700 shadow-2xl shadow-black/40">
            <Icon size={32} strokeWidth={1.5} />
          </div>
          <div className="h-[1px] flex-grow ml-8 bg-gradient-to-r from-border/60 via-border/20 to-transparent group-hover:from-accent/40 transition-all duration-700" />
        </div>

        <h3 className="text-3xl font-black mb-8 tracking-[-0.04em] text-gradient">{title}</h3>
        
        <div className="flex flex-wrap gap-4 mt-auto">
          {items.map((item, i) => (
            <span 
              key={i}
              className="px-5 py-2 rounded-full bg-muted/20 border border-border/30 text-[10px] font-black uppercase tracking-[0.25em] text-secondary group-hover:text-primary group-hover:border-accent/40 transition-all duration-500"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      
      {/* Corner Branding */}
      <div className="absolute top-8 right-8 text-accent/10 group-hover:text-accent/30 transition-colors duration-1000">
        <Zap size={40} strokeWidth={0.5} />
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="py-48 relative bg-background overflow-hidden">
      {/* Atmospheric Effects */}
      <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-accent/5 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-blue-900/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/4 translate-y-1/4" />

      <Container>
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-accent font-black mb-8 uppercase tracking-[0.6em] text-[10px]"
          >
            <Shield size={20} />
            <span>The Arsenal</span>
          </motion.div>
          <h2 className="text-6xl md:text-[8rem] font-black tracking-[-0.06em] leading-[0.85] mb-4 text-gradient">
            High Performance <br />
            <span className="text-accent italic">Technology.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10 auto-rows-[320px]"
        >
          {/* Frontend - Large Card */}
          <SkillCard 
            title="Frontend Engineering"
            icon={Layout}
            items={["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"]}
            className="lg:col-span-2 lg:row-span-2"
          />

          {/* Backend - Tall Card */}
          <SkillCard 
            title="Backend Core"
            icon={Server}
            items={["Node.js", "Go", "Python", "GraphQL", "PostgreSQL", "Redis"]}
            className="lg:row-span-2"
          />

          {/* Architecture - Square Card */}
          <SkillCard 
            title="System Design"
            icon={Layers}
            items={["Microservices", "Scalable APIs", "Event-Driven"]}
          />

          {/* UI/UX - Square Card */}
          <SkillCard 
            title="Design Logic"
            icon={Component}
            items={["Figma", "Design Systems", "Motion Design"]}
          />

          {/* DevOps - Wide Card */}
          <SkillCard 
            title="Cloud & Infra"
            icon={Wrench}
            items={["Docker", "AWS", "Terraform", "CI/CD Pipeline"]}
            className="lg:col-span-2"
          />

          {/* Performance - Square Card */}
          <SkillCard 
            title="Optimization"
            icon={Globe}
            items={["Vitals", "SEO Engine", "Edge Delivery"]}
          />
        </motion.div>
      </Container>
    </section>
  );
};
