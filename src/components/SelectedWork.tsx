import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

const SelectedWork = () => {
  return (
    <section id="work" className="px-6 md:px-10 max-w-6xl mx-auto py-16 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16"
      >
        <p className="text-sm text-muted-foreground font-body tracking-wide uppercase mb-2">
          Selected Work
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
          Projects I'm proud of<span className="text-accent">.</span>
        </h2>
      </motion.div>

      {/* Featured project */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <ProjectCard project={projects[0]} featured />
      </motion.div>

      {/* Other projects */}
      <div className="flex flex-col gap-24 md:gap-40 mt-24 md:mt-40">
        {projects.slice(1).map((project, i) => (
          <div key={project.title} className="flex flex-col gap-24 md:gap-40">
            <div className="w-full h-px bg-border/40" />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectedWork;
