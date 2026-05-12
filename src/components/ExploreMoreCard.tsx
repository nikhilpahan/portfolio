import { useNavigate } from "react-router-dom";
import { ShimmerButton } from "@/components/ui/ShimmerButton";
import { useEffect, useRef } from "react";

interface ExploreProject {
  id: string;
  title: string;
  tags: string[];
  image: string;
  hoverImage?: string;
}

const ExploreMoreCard = ({ project }: { project: ExploreProject }) => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const hasHover = window.matchMedia("(hover: hover)").matches;
    if (hasHover && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    // Prevent double navigation if the user clicks directly on the button
    e.stopPropagation();
    window.dispatchEvent(new Event("project-hover-end"));
    window.scrollTo(0, 0);
    const target = `/work/${project.id === "caudate-ai" ? "caudate-ai" : project.id}`;
    navigate(target);
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={(e) => {
        const hasHover = window.matchMedia("(hover: hover)").matches;
        if (!hasHover) return;
        if (videoRef.current) videoRef.current.play();
      }}
      onMouseLeave={(e) => {
        const hasHover = window.matchMedia("(hover: hover)").matches;
        if (!hasHover) return;
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
      className="group flex flex-col gap-0 rounded-[var(--radius)] border border-border/60 overflow-hidden bg-transparent h-full cursor-pointer hover:border-border transition-colors block"
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video overflow-hidden bg-secondary/40 shrink-0 flex items-center justify-center">
        {project.image.match(/\.(mp4|webm|ogg)(?:$|\?)/i) ? (
          <video
            ref={videoRef}
            src={project.image}
            preload="metadata"
            loop
            muted
            playsInline
            autoPlay
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-[1.04] z-20"
          />
        ) : (
          <>
            <img
              src={project.image}
              alt={project.title}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-[1.04] z-20 ${project.hoverImage ? 'opacity-0 md:opacity-100 md:group-hover:opacity-0' : ''}`}
            />
            {project.hoverImage && (
              <img
                src={project.hoverImage}
                alt={`${project.title} hover`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:scale-[1.04] z-10"
              />
            )}
          </>
        )}
        {/* Gradient fade-out at bottom like SideProjects */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent z-30" />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-grow gap-4 p-5">
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-lg md:text-xl font-semibold text-foreground leading-snug group-hover:text-accent transition-colors">
            {project.title.split("—")[0].trim()}
          </h3>
        </div>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 border-t border-border/40 pt-4 mt-auto">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-body font-medium text-muted-foreground/70 bg-secondary/60 px-2.5 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="pt-2 mt-auto">
          <ShimmerButton
            label="View Case Study"
            variant="filled"
            size="md"
            showArrow
            onClick={handleClick}
            className="w-full justify-between"
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreMoreCard;
