import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useMotionTemplate, useMotionValue, MotionValue } from "framer-motion";
import { ShimmerButton } from "@/components/ui/ShimmerButton";
import { MouseEvent as ReactMouseEvent, useEffect, useRef, useState } from "react";

// ─── Interactive Background ──────────────────────────────────────────────────
const ExperimentalGrid = ({ mouseX, mouseY }: { mouseX: MotionValue<number>, mouseY: MotionValue<number> }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let dots: { x: number; y: number; originX: number; originY: number }[] = [];
    const spacing = 32; // Dot spacing

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;

      dots = [];
      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          dots.push({ x, y, originX: x, originY: y });
        }
      }
    };

    window.addEventListener("resize", resize);
    resize();

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseX.get();
      const my = mouseY.get();

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const dx = mx - dot.originX;
        const dy = my - dot.originY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let targetX = dot.originX;
        let targetY = dot.originY;

        let a = 0.25;
        let r = 128, g = 128, b = 128;
        let size = 1.5;

        // Repel and glow effect
        if (dist < 150) {
          const force = (150 - dist) / 150;
          const angle = Math.atan2(dy, dx);

          // Repel
          targetX -= Math.cos(angle) * force * 20;
          targetY -= Math.sin(angle) * force * 20;

          // Glow color interpolation (towards accent rgb(240, 106, 54))
          const intensity = Math.pow(force, 1.5);
          r = 128 + (240 - 128) * intensity;
          g = 128 + (106 - 128) * intensity;
          b = 128 + (54 - 128) * intensity;
          a = 0.25 + 0.75 * intensity;
          size = 1.5 + 1.5 * intensity;
        }

        // Smooth return
        dot.x += (targetX - dot.x) * 0.15;
        dot.y += (targetY - dot.y) * 0.15;

        ctx.fillStyle = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${a})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 w-full h-full bg-background overflow-hidden pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
      {/* Base Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      {/* Interactive Dot Grid */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Smaller Interactive Glow mask */}
      <motion.div
        className="absolute inset-0 pointer-events-none mix-blend-screen"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              hsl(var(--accent) / 0.25),
              transparent 80%
            )
          `,
        }}
      />

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
    </div>
  );
};


// ─── Types ───────────────────────────────────────────────────────────────────
interface SideProject {
  title: string;
  description: string;
  link: string;
  imagePath: string;
  status?: string;
  tags?: string[];
  year?: string;
}

interface SideSection {
  index: string;
  title: string;
  description: string;
  projects: SideProject[];
}

// ─── Data ────────────────────────────────────────────────────────────────────
const sections: SideSection[] = [
  {
    index: "01",
    title: "Projects that go beyond UI/UX",
    description:
      "Exploring design beyond digital interfaces to solve real-world problems and create systemic impact.",
    projects: [
      {
        title: "Designing a Campus Exchange Economy",
        description:
          "A service + product design project exploring how students can share resources, collaborate, and build community through a non-monetary peer-to-peer ecosystem.",
        link: "https://www.behance.net/gallery/214053917/Service-Design-Thinking",
        imagePath: "/side-project-beyond-1.png",
        // status: "Academic project",
        tags: ["Service Design", "Systems Thinking", "Product Strategy"],
        year: "Service Design Thinking",
      },
      {
        title: "The Invisible Systems of Urban Labour",
        description:
          "A research-driven exploration of how migrant head-loaders sustain Delhi’s wholesale economy through informal networks of survival, work, and social infrastructure.",
        link: "https://www.behance.net/gallery/233170159/Homelessness-A-System-Design-Lens",
        imagePath: "/side-project-beyond-2.png",
        // status: "In Progress",
        tags: ["Systems Thinking", "Participatory Research", "Urban Systems", "Social Design"],
        year: "System Thinking",
      },
    ],
  },
  {
    index: "02",
    title: "Product Design Projects",
    description:
      "Concept projects and explorations dedicated to practicing UI/UX skills, testing emerging AI tools, and experimenting with new design processes.",
    projects: [
      {
        title: "Rethinking the Used Car Buying Experience",
        description:
          "Designed a seamless used-car buying platform focused on trust, convenience, and transparent ownership — from home test drives to hassle-free financing.",
        link: "https://www.behance.net/gallery/213516099/HelloCar-Buy-used-car-seamlessly-Product-Design",
        imagePath: "/side-project-product-1.png",
        // status: "Concept",
        tags: ["Product Design", "Automotive", "Service Experience", "UX Research"],
        year: "Product Design",
      },
      {
        title: "Simplifying Personal Finance Management",
        description:
          "A fintech product concept designed to help users track spending, manage cards, and better understand their financial habits through a clean and intuitive experience.",
        link: "https://www.behance.net/gallery/213477415/Money-Manage-finance-track-spending-Product-Design",
        imagePath: "/side-project-product-2.png",
        // status: "In Progress",
        tags: ["FinTech UX", "UX Research", "UI Design", "Product Design"],
        year: "Product Design",
      },
    ],
  },
];

// ─── Status badge colours ─────────────────────────────────────────────────────
const statusStyle: Record<string, string> = {
  "In Progress": "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  Concept: "bg-foreground/5 text-muted-foreground border-border/60",
  Shipped: "bg-accent/10 text-accent border-accent/20",
};

// ─── Project Card ─────────────────────────────────────────────────────────────
const ProjectCard = ({
  project,
  delay = 0,
}: {
  project: SideProject;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay }}
    className="group flex flex-col gap-0 rounded-[var(--radius)] border border-border/60 overflow-hidden bg-transparent h-full"
  >
    {/* Thumbnail */}
    <div className="relative w-full aspect-video overflow-hidden bg-secondary/40 shrink-0 flex items-center justify-center">
      {/* Placeholder (hidden once image loads) */}
      <div className="text-muted-foreground/30 text-xs font-body text-center px-4 leading-relaxed z-10 relative">
        Image Placeholder
        <br />
        <span className="opacity-60 font-brand text-[10px]">
          public{project.imagePath}
        </span>
      </div>
      {/* Actual image */}
      <img
        src={project.imagePath}
        alt={project.title}
        style={{ opacity: 0 }}
        onError={(e) =>
          ((e.currentTarget as HTMLImageElement).style.opacity = "0")
        }
        onLoad={(e) =>
          ((e.currentTarget as HTMLImageElement).style.opacity = "1")
        }
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04] z-20"
      />
      {/* Gradient fade-out at bottom, same as MainCard */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent z-30" />

      {/* Status badge */}
      {project.status && (
        <div
          className={`absolute top-3 left-3 z-40 px-2.5 py-1 rounded-full border text-[9px] font-brand font-bold uppercase tracking-widest ${statusStyle[project.status] ?? statusStyle["Concept"]
            }`}
        >
          {project.status === "In Progress" && (
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 align-middle" />
          )}
          {project.status}
        </div>
      )}
    </div>

    {/* Card body */}
    <div className="flex flex-col flex-grow gap-4 p-5">
      {/* Year label */}
      {project.year && (
        <p className="text-[10px] font-body font-semibold text-muted-foreground/40 uppercase tracking-[0.15em]">
          {project.year}
        </p>
      )}

      <div className="flex flex-col gap-2">
        <h3 className="font-display text-lg md:text-xl font-semibold text-foreground leading-snug">
          {project.title}
        </h3>
        <p className="text-sm font-body text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Tags */}
      {project.tags && project.tags.length > 0 && (
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
      )}

      {/* CTA */}
      <div className="mt-auto pt-2">
        <ShimmerButton
          label="View on Behance"
          variant="outline"
          size="sm"
          showArrow
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full justify-between border-border/60"
        />
      </div>
    </div>
  </motion.div>
);

// ─── Section ──────────────────────────────────────────────────────────────────
const ProjectSection = ({
  section,
  sectionDelay = 0,
}: {
  section: SideSection;
  sectionDelay?: number;
}) => (
  <section className="py-14 md:py-20 border-t border-border/40">
    {/* Section header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: sectionDelay }}
      className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14"
    >
      <div className="flex flex-col gap-2 max-w-xl">
        <p className="text-[10px] font-body font-semibold text-muted-foreground/50 uppercase tracking-[0.15em]">
          {section.index}
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground leading-snug">
          {section.title}
        </h2>
        <p className="text-sm md:text-base text-muted-foreground font-body leading-relaxed mt-1">
          {section.description}
        </p>
      </div>
      <span className="text-[10px] font-brand text-muted-foreground/30 uppercase tracking-widest shrink-0">
        {section.projects.length} projects
      </span>
    </motion.div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {section.projects.map((project, i) => (
        <ProjectCard
          key={project.title}
          project={project}
          delay={sectionDelay + 0.08 + i * 0.1}
        />
      ))}
    </div>
  </section>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
const SideProjects = () => {
  const [isXRayMode, setIsXRayMode] = useState(false);
  const totalProjects = sections.reduce((acc, s) => acc + s.projects.length, 0);

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  function handleMouseMove({ currentTarget, clientX, clientY }: ReactMouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className={`relative min-h-screen bg-background flex flex-col transition-colors duration-700 ${isXRayMode ? 'x-ray-mode' : ''}`}>
      {isXRayMode && (
        <style>{`
          .x-ray-mode {
            --background: 220 60% 6%;
            --foreground: 180 100% 50%;
            --card: 220 60% 10%;
            --card-foreground: 180 100% 50%;
            --border: 180 100% 25%;
            --accent: 300 100% 60%;
            --muted: 220 60% 12%;
            --muted-foreground: 180 100% 30%;
          }
          .x-ray-mode * {
            font-family: monospace !important;
          }
          .x-ray-mode img {
            filter: invert(1) grayscale(1) contrast(1.5) brightness(0.8);
            mix-blend-mode: screen;
            opacity: 0.6 !important;
          }
          .x-ray-mode .mix-blend-overlay {
            opacity: 0.15 !important;
          }
        `}</style>
      )}

      <Navbar />

      {/* Floating Toggle Button */}
      <div className="fixed top-24 right-6 md:top-32 md:right-10 z-[100]">
        <button
          onClick={() => setIsXRayMode(!isXRayMode)}
          className={`flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-sm font-mono text-xs md:text-sm font-bold tracking-widest shadow-xl transition-all duration-300 border uppercase backdrop-blur-md ${
            isXRayMode 
              ? "bg-foreground/10 text-foreground border-foreground scale-105" 
              : "bg-background/80 text-foreground border-border hover:bg-secondary/90"
          }`}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={`transition-colors ${isXRayMode ? 'text-accent animate-pulse' : 'text-foreground'}`}
          >
            <path d="M4 14v3.5A2.5 2.5 0 0 0 6.5 20h11a2.5 2.5 0 0 0 2.5-2.5V14" />
            <rect x="2" y="7" width="20" height="8" rx="2" ry="2" />
            <path d="M12 7v8" />
          </svg>
          {isXRayMode ? "X-Ray Active" : "X-Ray Mode"}
        </button>
      </div>

      {/* ── Hero (Full Width) ───────────────────────────────────────────── */}
      <section
        className="relative w-full overflow-hidden border-b border-border/40 pt-32"
        onMouseMove={handleMouseMove}
      >
        <ExperimentalGrid mouseX={mouseX} mouseY={mouseY} />

        <div className="max-w-6xl mx-auto px-6 md:px-10 w-full py-20 md:py-32 relative z-10">
          <div className="flex flex-col gap-6 max-w-4xl">

            {/* Eyebrow & Badge row */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-2">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3"
              >
                <span className="text-[10px] font-brand font-bold text-foreground tracking-widest bg-secondary/80 px-3 py-1 rounded-[var(--radius)] uppercase border border-border/60">
                  LAB_01
                </span>
                <p className="text-[10px] font-body font-bold text-muted-foreground uppercase tracking-[0.15em]">
                    // Experiments &amp; Concepts
                </p>
              </motion.div>

              {/* Project count badge (moved here) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-[var(--radius)] border border-accent/20 bg-accent/5 w-fit shrink-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] font-brand font-medium text-accent uppercase tracking-widest">
                  {totalProjects} Active
                </span>
              </motion.div>
            </div>

            {/* Masked Title Reveal */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-[1.1] pb-2"
              >
                Side Projects<span className="text-accent">.</span>
              </motion.h1>
            </div>

            {/* Masked Description Reveal */}
            <div className="overflow-hidden mt-4">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed max-w-2xl"
              >
                A collection of personal experiments, spatial explorations, and
                concept-driven investigations in design.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sections ──────────────────────────────────────────────────────── */}
      <main className="flex-grow max-w-6xl mx-auto px-6 md:px-10 w-full pt-12 pb-8">
        {sections.map((section, i) => (
          <ProjectSection
            key={section.index}
            section={section}
            sectionDelay={i * 0.05}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default SideProjects;
