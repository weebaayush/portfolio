import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { cn } from '../utils/cn';
import { Code, Sparkles, ArrowUpRight, ExternalLink, Command, ShieldCheck, QrCode, Cpu, Layers, FileText, CheckCircle2 } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils/animations';
import { SpotlightCard } from '../components/ui/SpotlightCard';

const projects = [
  {
    title: "ClubConnect",
    category: "Flagship Ecosystem",
    tagline: "Production-style college management with QR automation and scalable architecture.",
    description: "An advanced full-stack platform engineered under faculty mentorship to automate college club workflows. Officially approved as a Semester 4 academic project by the Department HOD, the system demonstrates real-world software engineering concepts, supported by a detailed technical report and research documentation.",
    features: [
      { icon: <ShieldCheck size={14} />, text: "RBAC & JWT Auth" },
      { icon: <QrCode size={14} />, text: "QR Attendance" },
      { icon: <FileText size={14} />, text: "Research Backed" },
      { icon: <Layers size={14} />, text: "Scalable Schema" },
    ],
    tags: ["FastAPI", "React", "MySQL", "TypeScript", "SQLAlchemy"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
    links: { github: "https://github.com/weebaayush", demo: "#" },
    featured: true,
    status: "Active Development",
    academic: "HOD Approved • Semester 4"
  }
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={fadeInUp}
      className={cn(
        "group transition-all duration-[1.2s] ease-[cubic-bezier(0.21,0.47,0.32,0.98)]",
        project.featured ? "lg:col-span-2" : "col-span-1"
      )}
    >
      <SpotlightCard className="h-full border border-border/40 overflow-hidden">
        <div className={cn(
          "flex flex-col h-full",
          project.featured ? "lg:flex-row" : "flex-col"
        )}>
          {/* Cinematic Image Showcase */}
          <div className={cn(
            "relative overflow-hidden",
            project.featured ? "lg:w-[55%] h-96 lg:h-auto" : "w-full h-96"
          )}>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10" />
            
            <motion.img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-[3s] ease-[cubic-bezier(0.21,0.47,0.32,0.98)] group-hover:scale-105 filter grayscale-[0.4] group-hover:grayscale-0"
            />
            
            {project.featured && (
              <div className="absolute top-10 left-10 z-20 flex flex-col gap-4">
                <div className="px-8 py-3 rounded-full bg-accent text-white text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-4 shadow-2xl shadow-accent/40">
                  <Sparkles size={16} className="animate-spin-slow" />
                  Flagship Project
                </div>
                <div className="flex gap-2.5">
                  <div className="px-6 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/70 text-[9px] font-black uppercase tracking-[0.2em] w-fit">
                    {project.status}
                  </div>
                  {project.academic && (
                    <div className="px-6 py-2 rounded-full bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 text-emerald-400 text-[9px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                      <CheckCircle2 size={12} />
                      {project.academic}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className={cn(
            "p-12 lg:p-20 flex flex-col justify-center",
            project.featured ? "lg:w-[45%]" : "w-full"
          )}>
            <div className="flex items-center gap-4 mb-10">
              <span className="text-accent font-black uppercase tracking-[0.4em] text-[10px]">{project.category}</span>
              <div className="h-[1px] w-12 bg-border/40" />
            </div>

            <h3 className="text-4xl lg:text-7xl font-black mb-8 tracking-[-0.06em] text-reveal group-hover:text-primary transition-all duration-700 leading-tight">
              {project.title}
            </h3>

            <p className="text-primary/90 text-xl font-bold mb-8 tracking-tight leading-snug text-balance">
              {project.tagline}
            </p>
            
            <p className="text-secondary/70 text-base lg:text-lg leading-relaxed mb-12 font-semibold tracking-tight opacity-80 text-balance">
              {project.description}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-14">
              {project.features?.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 text-secondary/60 group-hover:text-primary transition-colors duration-500">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-accent/70 group-hover:text-accent group-hover:scale-110 transition-all">
                    {feature.icon}
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-[0.2em]">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2.5 mb-16">
              {project.tags.map(tag => (
                <span key={tag} className="px-4 py-1.5 rounded-xl bg-muted/20 border border-border/30 text-[9px] font-black text-secondary/60 uppercase tracking-[0.2em] group-hover:border-accent/30 group-hover:text-accent transition-all duration-500">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-12 mt-auto">
              <a 
                href={project.links.demo} 
                className="flex items-center gap-3 text-[12px] font-black uppercase tracking-[0.3em] text-primary hover:text-accent transition-all group/link relative"
              >
                Live Project
                <ArrowUpRight size={20} className="group-hover/link:translate-x-2 group-hover/link:-translate-y-2 transition-transform duration-500" />
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-accent transition-all duration-500 group-hover/link:w-full shadow-[0_0_15px_var(--color-accent)]" />
              </a>
              <a 
                href={project.links.github} 
                className="flex items-center gap-3 text-[12px] font-black uppercase tracking-[0.3em] text-secondary hover:text-primary transition-all"
              >
                <Code size={20} strokeWidth={2.5} />
                Repository
              </a>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60%] h-[60%] bg-blue-600/5 blur-[180px] rounded-full pointer-events-none" />

      <Container>
        <div className="mb-32 flex flex-col lg:flex-row lg:items-end justify-between gap-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 text-accent font-black mb-10 uppercase tracking-[0.6em] text-[10px]"
            >
              <Command size={20} />
              <span>The Portfolio</span>
            </motion.div>
            <h2 className="text-7xl md:text-[10rem] font-black tracking-[-0.08em] leading-[0.8] text-reveal">
              Product <br />
              <span className="text-accent italic">Shipments.</span>
            </h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden xl:block text-secondary text-xl max-w-[340px] font-semibold leading-relaxed italic border-l-4 border-accent/20 pl-10 opacity-60"
          >
            "A precise exploration of full-stack engineering, auth workflows, and scalable systems."
          </motion.div>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-56 text-center"
        >
          <button className="group relative px-20 py-10 rounded-full border border-border/60 font-black uppercase tracking-[0.4em] text-xs hover:bg-muted/10 transition-all active:scale-95 text-secondary hover:text-primary flex items-center gap-10 mx-auto shadow-2xl backdrop-blur-3xl overflow-hidden">
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            Engineering Archive 
            <Code size={28} className="group-hover:rotate-[360deg] transition-transform duration-[1.2s] ease-[cubic-bezier(0.21,0.47,0.32,0.98)]" />
          </button>
        </motion.div>
      </Container>
    </section>
  );
};
