import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { useRef, useEffect, useState } from "react";
import { ShimmerButton } from "@/components/ui/ShimmerButton";

type Project = (typeof projects)[0];

// ─── Tile 1: Big visual card ────────────────────────────────────────────────
const MainCard = ({
  project,
  delay = 0,
  isButtonHovered = false,
}: {
  project: Project;
  delay?: number;
  isButtonHovered?: boolean;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideo = project.image.match(/\.(mp4|webm|ogg)(?:$|\?)/i);

  // Trigger video when button is hovered from outside
  useEffect(() => {
    if (!isVideo) return;
    const hasHover = window.matchMedia("(hover: hover)").matches;
    if (!hasHover) {
      videoRef.current?.play().catch(() => { });
      return;
    }

    if (isButtonHovered) {
      videoRef.current?.play().catch(() => { });
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isButtonHovered, isVideo]);

  // Are we in an "active" hover state (card itself OR button)
  const isActive = isButtonHovered;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay }}
      onMouseEnter={() => {
        const hasHover = window.matchMedia("(hover: hover)").matches;
        if (hasHover) videoRef.current?.play().catch(() => { });
      }}
      onMouseLeave={() => {
        const hasHover = window.matchMedia("(hover: hover)").matches;
        if (hasHover && !isButtonHovered && videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
      className="group relative overflow-hidden rounded-[var(--radius)] bg-transparent border border-border/60
        flex flex-col h-full"
    >
      {/* Image / Video */}
      <div className="relative overflow-hidden h-[260px] md:h-[320px] shrink-0">
        {isVideo ? (
          <video
            ref={videoRef}
            src={project.image}
            loop
            muted
            playsInline
            autoPlay
            className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-[1.04]"
          />
        ) : (
          <>
            <img
              src={project.image}
              alt={project.title}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700
                ${isActive ? "md:scale-[1.04]" : "md:group-hover:scale-[1.04]"}
                ${project.hoverImage
                  ? isActive
                    ? "opacity-0"
                    : "opacity-0 md:opacity-100 md:group-hover:opacity-0"
                  : ""
                }`}
            />
            {project.hoverImage && (
              <img
                src={project.hoverImage}
                alt=""
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 md:scale-[1.04]
                  ${isActive ? "opacity-100" : "opacity-100 md:opacity-0 md:group-hover:opacity-100"}`}
              />
            )}
          </>
        )}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent" />

        {/* Status badge */}
        {project.status && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/75 backdrop-blur-md border border-border/50">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[9px] font-brand font-bold text-foreground uppercase tracking-widest">
              {project.status}
            </span>
          </div>
        )}
      </div>

      {/* Text content */}
      <div className="flex flex-col gap-3 p-5">
        <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground leading-tight">
          {project.title}
        </h3>
        <p className="text-muted-foreground font-body text-sm leading-relaxed line-clamp-3">
          {project.subtitle}
        </p>
      </div>
    </motion.div>
  );
};

// ─── Tile 2: Role + Contribution ────────────────────────────────────────────
const RoleCard = ({
  project,
  delay = 0,
}: {
  project: Project;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay }}
    className="relative overflow-hidden rounded-[var(--radius)] bg-transparent border border-border/60
      flex flex-col gap-5 p-5"
  >
    {project.role && (
      <div className="flex flex-col gap-1.5">
        <p className="text-[10px] font-body font-semibold text-muted-foreground/50 uppercase tracking-[0.15em]">
          My Role
        </p>
        <p className="text-base font-display font-semibold text-foreground leading-snug">
          {project.role}
        </p>
      </div>
    )}

    {project.contribution && (
      <div className="flex flex-col gap-1.5 border-t border-border/40 pt-4">
        <p className="text-[10px] font-body font-semibold text-muted-foreground/50 uppercase tracking-[0.15em]">
          Contribution
        </p>
        <p className="text-sm font-body text-muted-foreground leading-relaxed line-clamp-4">
          {project.contribution}
        </p>
      </div>
    )}
  </motion.div>
);

// ─── Tile 3: Focus Area + Tags + CTA ────────────────────────────────────────

const FocusCard = ({
  project,
  delay = 0,
  onButtonHoverChange,
}: {
  project: Project;
  delay?: number;
  onButtonHoverChange?: (hovered: boolean) => void;
}) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay }}
      className="relative overflow-hidden rounded-[var(--radius)] bg-card border border-border/60
        flex flex-col justify-between gap-5 p-5"
    >
      <div className="flex flex-col gap-4">
        {project.focusArea && (
          <div className="flex flex-col gap-1.5">
            <p className="text-[10px] font-body font-semibold text-muted-foreground/50 uppercase tracking-[0.15em]">
              Focus Area
            </p>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              {project.focusArea}
            </p>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 border-t border-border/40 pt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-body font-medium text-muted-foreground/70 bg-secondary/60 px-2.5 py-0.5 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* CTA — uses shared ShimmerButton */}
      {project.id && (
        <ShimmerButton
          label="View Case Study"
          variant="filled"
          size="md"
          showArrow
          onMouseEnter={() => onButtonHoverChange?.(true)}
          onMouseLeave={() => onButtonHoverChange?.(false)}
          onClick={() => navigate(`/work/${project.id}`)}
          className="w-full justify-between"
        />
      )}
    </motion.div>
  );
};

// ─── Project cluster: 3 tiles for one project ───────────────────────────────
const ProjectCluster = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const baseDelay = index * 0.06;
  // Shared hover state: button in FocusCard → triggers MainCard thumbnail effect
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="md:col-span-8 h-full">
        <MainCard
          project={project}
          delay={baseDelay}
          isButtonHovered={isButtonHovered}
        />
      </div>
      <div className="md:col-span-4 flex flex-col gap-4 h-full">
        <RoleCard project={project} delay={baseDelay + 0.08} />
        <FocusCard
          project={project}
          delay={baseDelay + 0.14}
          onButtonHoverChange={setIsButtonHovered}
        />
      </div>
    </div>
  );
};

// ─── Main Section ────────────────────────────────────────────────────────────
const SelectedWorkBento = () => {
  return (
    <section id="work" className="px-6 md:px-10 max-w-6xl mx-auto py-16 md:py-32">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <p className="text-sm text-muted-foreground font-body tracking-wide uppercase mb-2">
          Selected Work
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
          Projects I'm proud of<span className="text-accent">.</span>
        </h2>
      </motion.div>

      {/* Project clusters — generous gap between each project */}
      <div className="flex flex-col gap-16 md:gap-24">
        {projects.map((project, i) => (
          <ProjectCluster key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default SelectedWorkBento;
