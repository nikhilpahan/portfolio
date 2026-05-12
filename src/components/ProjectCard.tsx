import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface Project {
  id?: string;
  title: string;
  subtitle: string;
  tags: string[];
  image: string;
  hoverImage?: string;
  featured?: boolean;
  status?: string;
  role?: string;
  contribution?: string;
  focusArea?: string;
}

const ProjectCard = ({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) => {
  const navigate = useNavigate();
  
  const handleMouseEnter = (e: any) => {
    window.dispatchEvent(new Event("project-hover-start"));
    const video = e.currentTarget.querySelector("video");
    if (video) video.play();
  };
  
  const handleMouseLeave = (e: any) => {
    window.dispatchEvent(new Event("project-hover-end"));
    const video = e.currentTarget.querySelector("video");
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };
  
  const handleClick = () => {
    window.dispatchEvent(new Event("project-hover-end"));
    if (project.id) {
      navigate(`/work/${project.id}`);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group cursor-pointer flex flex-col gap-6 md:gap-8 w-full bg-card/50 hover:bg-card border border-border/50 p-6 md:p-8 rounded-2xl md:rounded-[20px] shadow-sm hover:shadow-md transition-all duration-500"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="flex flex-col gap-8 w-full">
        {/* Header section */}
        <div className="flex flex-col gap-4">
          <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground group-hover:text-accent transition-colors duration-300 flex items-center gap-2 flex-wrap">
            {project.title}
            {project.status && (
              <span className="text-muted-foreground/60 text-xl md:text-2xl font-normal">
                ({project.status})
              </span>
            )}
          </h3>
          <p className="text-muted-foreground font-body text-base lg:text-lg max-w-2xl">
            {project.subtitle}
          </p>
          <div className="flex gap-2 flex-wrap mt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium font-body text-muted-foreground/80 bg-secondary/60 px-3 py-1 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Info section */}
        {(project.role || project.contribution || project.focusArea) && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 pt-4 border-t border-border/40">
            {project.role && (
              <div className="md:col-span-3 flex flex-col gap-2">
                <span className="text-[11px] font-semibold text-muted-foreground/60 uppercase tracking-widest font-body">
                  My Role
                </span>
                <span className="text-sm text-foreground font-body font-medium">
                  {project.role}
                </span>
              </div>
            )}
            {project.contribution && (
              <div className="md:col-span-5 flex flex-col gap-2">
                <span className="text-[11px] font-semibold text-muted-foreground/60 uppercase tracking-widest font-body">
                  Contribution
                </span>
                <span className="text-sm text-foreground font-body leading-relaxed">
                  {project.contribution}
                </span>
              </div>
            )}
            {project.focusArea && (
              <div className="md:col-span-4 flex flex-col gap-2">
                <span className="text-[11px] font-semibold text-muted-foreground/60 uppercase tracking-widest font-body">
                  Focus Area
                </span>
                <span className="text-sm text-foreground font-body leading-relaxed">
                  {project.focusArea}
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Image section */}
      <div className="relative w-full aspect-video rounded-2xl md:rounded-2xl overflow-hidden shadow-sm ring-1 ring-border/30 transition-all duration-500">
        {project.image.match(/\.(mp4|webm|ogg)(?:$|\?)/i) ? (
          <video
            src={project.image}
            preload="metadata"
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <>
            <img
              src={project.image}
              alt={project.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${project.hoverImage ? 'group-hover:opacity-0 z-10' : ''}`}
            />
            {project.hoverImage && (
              <img
                src={project.hoverImage}
                alt={`${project.title} animated`}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
              />
            )}
          </>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
