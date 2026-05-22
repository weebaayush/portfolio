import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { cn } from '../utils/cn';
import { Code, Sparkles, ArrowUpRight, ExternalLink, Command } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils/animations';

const projects = [
  {
    title: "ClubConnect",
    category: "Full Stack Ecosystem",
    description: "A flagship social platform for university clubs to manage events, memberships, and community engagement with real-time synchronization.",
    tags: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
    links: { github: "#", demo: "#" },
    featured: true
  },
  {
    title: "Nexus Dashboard",
    category: "Data Visualization",
    description: "Enterprise-grade analytics dashboard featuring real-time data visualization and automated predictive reporting systems.",
    tags: ["Next.js", "TypeScript", "D3.js", "AWS"],
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800",
    links: { github: "#", demo: "#" },
    featured: false
  },
  {
    title: "EcoSphere AI",
    category: "Machine Learning",
    description: "ML platform for monitoring environmental changes using high-resolution satellite imagery and predictive neural networks.",
    tags: ["Python", "TensorFlow", "FastAPI", "React"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    links: { github: "#", demo: "#" },
    featured: false
  }
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={fadeInUp}
      className={cn(
        "group relative rounded-[4rem] border border-border/40 bg-card overflow-hidden transition-all duration-[1s] ease-[cubic-bezier(0.21,0.47,0.32,0.98)]",
        "hover:border-accent/40 hover:shadow-[0_40px_100px_rgba(0,0,0,0.8)]",
        project.featured ? "lg:col-span-2" : "col-span-1"
      )}
    >
      <div className={cn(
        "flex flex-col h-full",
        project.featured ? "lg:flex-row" : "flex-col"
      )}>
        {/* Cinematic Image Showcase */}
        <div className={cn(
          "relative overflow-hidden",
          project.featured ? "lg:w-3/5 h-96 lg:h-auto" : "w-full h-96"
        )}>
          {/* Advanced Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10" />
          
          <motion.img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-[2.5s] ease-[cubic-bezier(0.21,0.47,0.32,0.98)] group-hover:scale-110 filter grayscale-[0.2] group-hover:grayscale-0"
          />
          
          {project.featured && (
            <div className="absolute top-10 left-10 z-20 px-8 py-3 rounded-full bg-accent text-white text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-4 shadow-2xl shadow-accent/40">
              <Sparkles size={16} className="animate-spin-slow" />
              Featured Masterpiece
            </div>
          )}
        </div>

        {/* Exclusive Content Section */}
        <div className={cn(
          "p-12 lg:p-20 flex flex-col justify-center",
          project.featured ? "lg:w-2/5" : "w-full"
        )}>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-accent font-black uppercase tracking-[0.4em] text-[10px]">{project.category}</span>
            <div className="h-[1px] w-12 bg-border/50" />
          </div>

          <h3 className="text-4xl lg:text-5xl font-black mb-8 tracking-[-0.06em] text-gradient group-hover:text-primary transition-all duration-700 leading-tight">
            {project.title}
          </h3>
          
          <p className="text-secondary text-lg lg:text-xl leading-relaxed mb-12 font-semibold tracking-tight">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-14">
            {project.tags.map(tag => (
              <span key={tag} className="px-5 py-2 rounded-xl bg-muted/30 border border-border/30 text-[9px] font-black text-secondary uppercase tracking-[0.2em] group-hover:border-accent/20 group-hover:text-accent transition-all duration-500">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-12 mt-auto">
            <a 
              href={project.links.demo} 
              className="flex items-center gap-3 text-[12px] font-black uppercase tracking-[0.3em] text-primary hover:text-accent transition-all group/link relative"
            >
              Explore Project
              <ArrowUpRight size={20} className="group-hover/link:translate-x-2 group-hover/link:-translate-y-2 transition-transform duration-500" />
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-accent transition-all duration-500 group-hover/link:w-full" />
            </a>
            <a 
              href={project.links.github} 
              className="flex items-center gap-3 text-[12px] font-black uppercase tracking-[0.3em] text-secondary hover:text-primary transition-all"
            >
              <Code size={20} />
              Repository
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-48 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60%] h-[60%] bg-blue-600/5 blur-[180px] rounded-full pointer-events-none" />

      <Container>
        <div className="mb-32 flex flex-col lg:flex-row lg:items-end justify-between gap-16">
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
            <h2 className="text-6xl md:text-[9rem] font-black tracking-[-0.08em] leading-[0.8] text-gradient">
              Curation of <br />
              <span className="text-accent italic">Excellence.</span>
            </h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden xl:block text-secondary text-lg max-w-[320px] font-semibold leading-relaxed italic border-l-2 border-accent/20 pl-10"
          >
            "A precise exploration of engineering standards and visual harmony."
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

        {/* Massive Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-48 text-center"
        >
          <button className="group relative px-16 py-8 rounded-full border border-border/60 font-black uppercase tracking-[0.4em] text-xs hover:bg-muted/30 transition-all active:scale-95 text-secondary hover:text-primary flex items-center gap-8 mx-auto shadow-2xl">
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            View Complete Engineering Archive 
            <Code size={24} className="group-hover:rotate-[360deg] transition-transform duration-[1s] ease-in-out" />
          </button>
        </motion.div>
      </Container>
    </section>
  );
};
