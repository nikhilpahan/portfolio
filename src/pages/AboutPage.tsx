import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef, useCallback, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { NotebookBackground } from "@/components/ui/NotebookBackground";
import DoodleCanvas from "@/components/ui/DoodleCanvas";

// --- Custom Components for About Page ---

const FadeIn = ({ children, delay = 0, className = "" }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);



const ScrapbookImage = ({ src, alt, rotation = "rotate-0", tapePos = "top", className = "", dimensionsText = "", caption = "" }: any) => {
  return (
    <motion.div 
      className={`relative inline-block ${rotation} ${className} cursor-grab active:cursor-grabbing`}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.15}
      whileDrag={{ scale: 1.05, rotate: "2deg", zIndex: 50 }}
    >
      {/* Tape */}
      <div
        className="absolute z-20 w-16 h-5 bg-[#EAE2C8] dark:bg-[#D5C295]/80 shadow-sm"
        style={{
          top: tapePos === "top" ? "-8px" : "auto",
          bottom: tapePos === "bottom" ? "-8px" : "auto",
          left: "50%",
          transform: "translateX(-50%) rotate(-2deg)",
        }}
      />
      {/* Photo Frame */}
      <div className="bg-background p-3 pb-8 md:pb-12 shadow-xl border border-border/50 relative z-10 overflow-hidden group">
        <div className="relative w-full h-full bg-secondary/50 overflow-hidden">
          {/* Polaroid Developing Effect Background */}
          <div className="absolute inset-0 bg-[#F4F1E1] dark:bg-[#2A2824]"></div>
          <img
            src={src}
            alt={alt}
            className="relative z-10 w-full h-full object-cover opacity-0 transition-opacity duration-[1500ms] ease-in-out"
            onLoad={(e) => (e.currentTarget.style.opacity = '1')}
            onError={(e) => (e.currentTarget.style.opacity = '0')}
          />
        </div>
        {caption && (
          <p className="font-handwritten text-muted-foreground text-lg text-center mt-4 relative z-10">
            {caption}
          </p>
        )}
      </div>
    </motion.div>
  );
};

// --- Magnetic Letter (for the name) ---
const MagneticLetter = ({ char, className = "" }: { char: string; className?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.5 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const radius = 90;
    if (dist < radius) {
      const force = (radius - dist) / radius;
      x.set(-dx * force * 0.55);
      y.set(-dy * force * 0.55);
    } else {
      x.set(0);
      y.set(0);
    }
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <motion.span
      ref={ref}
      style={{ x: springX, y: springY, display: "inline-block" }}
      className={className}
    >
      {char}
    </motion.span>
  );
};

// --- Scattered Desk Item ---
const DeskItem = ({
  children,
  initialRotate = 0,
  style = {},
  className = "",
  dragConstraints,
}: {
  children: React.ReactNode;
  initialRotate?: number;
  style?: React.CSSProperties;
  className?: string;
  dragConstraints: React.RefObject<HTMLDivElement>;
}) => (
  <motion.div
    drag
    dragConstraints={dragConstraints}
    dragElastic={0.15}
    dragMomentum={false}
    whileHover={{ scale: 1.04, zIndex: 20, rotate: 0 }}
    whileDrag={{ scale: 1.06, zIndex: 30, cursor: "grabbing" }}
    initial={{ rotate: initialRotate, opacity: 0, scale: 0.92 }}
    animate={{ rotate: initialRotate, opacity: 1, scale: 1 }}
    transition={{ type: "spring", stiffness: 180, damping: 20 }}
    className={`absolute cursor-grab select-none ${className}`}
    style={style}
  >
    {children}
  </motion.div>
);

// --- About Hero Background: Journal Lines ---


const AboutPage = () => {
  const deskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-background flex flex-col overflow-x-hidden">
      <Navbar />
      <DoodleCanvas />

      <style>{`
        .font-handwritten {
          font-family: 'Caveat', cursive;
        }
        
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
          position: relative;
        }
        
        .marquee-content {
          display: inline-block;
          animation: marquee 25s linear infinite;
        }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="flex-grow pt-16">

        {/* HERO */}
        <section className="relative min-h-[90vh] pt-28 pb-16 md:pt-40 md:pb-32 flex items-center overflow-hidden">
          <NotebookBackground showMargin />
          <div className="relative z-10 max-w-[1200px] mx-auto pl-12 pr-6 md:px-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

              {/* LEFT — Magnetic name + bio */}
              <div className="order-1 flex flex-col items-start z-10">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="block font-handwritten text-accent text-2xl md:text-3xl mb-6 md:ml-1 tracking-wide"
                >
                  hi, hello, namaste —
                </motion.span>

                {/* Magnetic Name */}
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="font-medium leading-none mb-6 select-none"
                  style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}
                >
                  <span className="text-foreground">I&apos;m </span>
                  <span className="inline-flex items-baseline">
                    {["N", "i", "k", "h", "i", "l"].map((char, i) => (
                      <MagneticLetter
                        key={i}
                        char={char}
                        className="text-foreground"
                      />
                    ))}
                    <MagneticLetter char="." className="text-accent" />
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                  className="font-brand text-foreground font-light text-xl md:text-2xl max-w-md mb-12 leading-relaxed"
                >
                  I&apos;m a{" "}
                  <span className="relative inline-block px-1">
                    product designer
                    <span className="absolute inset-x-0 bottom-[4px] h-[35%] bg-accent/25 -z-10"></span>
                  </span>. I try to understand how things work — especially when they don&apos;t.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex items-center gap-4 text-[10px] md:text-[11px] tracking-[0.4em] text-muted-foreground/80 uppercase font-medium"
                >
                  <div className="w-12 h-[1px] bg-muted-foreground/40"></div>
                  <span>SCROLL, SLOWLY</span>
                </motion.div>
              </div>

              {/* RIGHT — Scattered Desk */}
              <div
                ref={deskRef}
                className="order-2 relative w-full h-[480px] md:h-[540px] mt-8 md:mt-0"
              >
                {/* Main portrait */}
                <DeskItem
                  dragConstraints={deskRef}
                  initialRotate={3}
                  style={{ top: "5%", left: "15%" }}
                  className="w-[65%] max-w-[240px] md:w-[52%] md:max-w-none"
                >
                  <div className="bg-background p-3 pb-10 shadow-xl border border-border/50">
                    <div className="relative w-full aspect-[4/5] bg-secondary/50 overflow-hidden">
                      <div className="absolute inset-0 bg-[#F4F1E1] dark:bg-[#2A2824]"></div>
                      <img src="/about-portrait-hero.png" alt="Portrait" className="relative z-10 w-full h-full object-cover opacity-0 transition-opacity duration-[1500ms] ease-in-out" onLoad={e => (e.currentTarget.style.opacity = "1")} onError={e => (e.currentTarget.style.opacity = "0")} />
                    </div>
                    <p className="font-handwritten text-muted-foreground text-sm text-center mt-3 relative z-10">that’s me. mid-thought, probably.</p>
                  </div>
                  {/* Tape */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-5 bg-[#EAE2C8] dark:bg-[#D5C295]/80 shadow-sm rotate-[-2deg] z-20" />
                </DeskItem>

                {/* Sticky note 1 */}
                <DeskItem
                  dragConstraints={deskRef}
                  initialRotate={-5}
                  style={{ top: "2%", right: "4%", width: "30%" }}
                >
                  <div className="bg-[#FFF9C4] dark:bg-[#E8D930]/80 p-4 shadow-md">
                    <p className="font-handwritten text-foreground/70 text-sm leading-snug">
                      currently learning:<br />AI Workflows.
                    </p>
                    <p className="font-handwritten text-accent text-xs mt-2">and trying not to get overwhelmed!!</p>
                  </div>
                </DeskItem>

                {/* Sticky note 2 */}
                <DeskItem
                  dragConstraints={deskRef}
                  initialRotate={4}
                  style={{ bottom: "6%", right: "2%", width: "34%" }}
                >
                  <div className="bg-[#C8F7C5] dark:bg-[#4CAF50]/40 p-4 shadow-md">
                    <p className="font-handwritten text-foreground/70 text-sm leading-snug">
                      rewatching one peice<br />at 2am. again.
                    </p>
                  </div>
                </DeskItem>

                {/* Small annotation */}
                <DeskItem
                  dragConstraints={deskRef}
                  initialRotate={-3}
                  style={{ bottom: "10%", left: "4%", width: "38%" }}
                >
                  <div className="font-handwritten text-muted-foreground text-base leading-snug px-2">
                    <p className="text-accent text-lg mb-1">&#9733; black belt</p>
                    <p>state gold, 2018</p>
                    <p className="text-xs opacity-60 mt-1">(a very different me)</p>
                  </div>
                </DeskItem>
              </div>
            </div>
          </div>
        </section>

        {/* CURIOUS */}
        <section className="py-16 md:py-32 bg-secondary/10 relative" id="curious">
          <NotebookBackground showMargin />
          <div className="max-w-[1200px] mx-auto pl-12 pr-6 md:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
              <div className="md:col-span-7">
                <FadeIn delay={0}>
                  <p className="font-brand text-accent italic font-medium mb-6 tracking-wide">chapter one</p>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <h2 className="font-display font-semibold text-6xl md:text-8xl text-foreground leading-[1.1] mb-8">
                    curious <br />
                    <span className="text-muted-foreground italic">— almost a <br />problem.</span>
                  </h2>
                </FadeIn>
              </div>
              <div className="md:col-span-5 md:col-start-8 flex flex-col justify-center">
                <FadeIn delay={0.2}>
                  <div className="space-y-6 mb-2">
                    <p className="font-brand text-foreground font-light text-xl md:text-2xl leading-relaxed max-w-lg">
                      Not just about design — about people, business, psychology, how things connect.
                    </p>
                    <p className="font-brand text-muted-foreground/70 text-base md:text-lg leading-relaxed">
                      Sometimes useful. Sometimes just overthinking the menu for 20 minutes.
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.6}>
                  <p className="font-handwritten text-muted-foreground/60 text-2xl md:text-3xl mt-1 italic leading-snug">
                    p.s. yes, I will ask you 14 questions →
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-32 relative bg-background">
          <NotebookBackground showMargin />
          <div className="max-w-[1200px] mx-auto pl-12 pr-6 md:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="order-2 md:order-1 flex justify-center md:justify-start mt-8 md:mt-0">
                <FadeIn className="w-full max-w-[280px] md:max-w-[400px]">
                  <ScrapbookImage
                    src="/about-systems.png"
                    alt="Systems thinking visualization"
                    rotation="-rotate-[3deg]"
                    className="w-full aspect-square"
                    dimensionsText="800x800px"
                    caption="it's all connected."
                  />
                </FadeIn>
              </div>
              <div className="order-1 md:order-2 flex flex-col justify-center items-start">
                <FadeIn delay={0}>
                  <p className="font-brand text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-muted-foreground/60 font-medium mb-6">02 . HOW MY BRAIN WORKS</p>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <h3 className="font-display font-medium text-5xl md:text-7xl text-foreground mb-8 leading-[1.1]">
                    I see things <br />as <span className="decoration-wavy underline decoration-red-500/30 decoration-1 underline-offset-8">systems</span>.
                  </h3>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="font-brand text-foreground font-light text-base md:text-lg leading-relaxed max-w-md mb-1">
                    Not just screens — but everything behind them. The why, the who, the tiny decision someone made on a Tuesday in 2017.
                  </p>
                </FadeIn>
                <FadeIn delay={0.6}>
                  <div className="font-handwritten text-accent text-2xl md:text-3xl leading-snug mt-1">
                    <p>makes design interesting.</p>
                    <p>life, slightly complicated.</p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-32 bg-secondary/10 relative">
          <NotebookBackground showMargin />
          <div className="max-w-[1200px] mx-auto pl-12 pr-6 md:px-8 relative z-10 text-center">
            <div className="flex flex-col items-center">
              <FadeIn delay={0}>
                <h2 className="font-handwritten text-2xl md:text-4xl lg:text-5xl text-foreground leading-relaxed md:leading-tight mb-12 max-w-3xl mx-auto">
                  "I was never interested in just one thing. Design was the only field that let me <span className="text-accent">connect</span> them all."
                </h2>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex items-center justify-center gap-4 text-[10px] tracking-[0.25em] text-muted-foreground uppercase font-bold leading-relaxed mt-8">
                  <div className="w-4 h-[1px] bg-muted-foreground/50"></div>
                  <span>A THING I TELL MYSELF, OFTEN</span>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* IDEAS */}
        <section className="py-16 md:py-32 bg-foreground text-background">
          <div className="max-w-[1200px] mx-auto pl-12 pr-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
              <div className="md:col-span-5 flex flex-col justify-center">
                <FadeIn delay={0}>
                  <p className="font-handwritten text-accent text-3xl mb-6 leading-snug">things i love →</p>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <h3 className="font-display font-semibold text-6xl md:text-8xl mb-8 leading-[1.1]">
                    Time <br />with <br /><span className="text-accent">ideas.</span>
                  </h3>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="font-brand text-background/80 font-medium text-base md:text-lg leading-relaxed max-w-sm mb-6">
                    Philosophy, films, anime — anything that<br className="hidden md:block" />shifts perspective. Not always productive.<br className="hidden md:block" />Always interesting.
                  </p>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <div className="space-y-3 font-handwritten text-background/60 text-xl md:text-2xl tracking-wide mt-6 leading-snug">
                    <p>· watching one piece at 2am</p>
                    <p>· arguing with chatgpt about philosophy & human behavior</p>
                    <p>· nolan films and creatively chaotic edits</p>
                  </div>
                </FadeIn>
              </div>
              <div className="md:col-span-7 mt-8 md:mt-0">
                <FadeIn delay={0.2} className="w-full relative">
                  <div className="relative aspect-[16/9] md:aspect-[2/1] w-full bg-[#1A1A1A] shadow-2xl rotate-[1deg] overflow-hidden">
                    <img src="/about-ideas.png" alt="Working late" className="w-full h-full object-cover opacity-0 transition-opacity duration-[1500ms] ease-in-out" onLoad={(e) => (e.currentTarget.style.opacity = '0.9')} onError={(e) => (e.currentTarget.style.opacity = '0')} />
                  </div>
                  <p className="font-handwritten text-accent text-2xl md:text-3xl mt-6 leading-snug md:ml-4 text-center md:text-left">3am. one more episode. always.</p>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* TRAVEL */}
        <section className="relative min-h-[70vh] md:min-h-[90vh] w-full overflow-hidden flex items-end pb-8 md:pb-12">
          <div className="absolute inset-0 bg-[#1A1A1A] z-0"></div>
          <img src="/about-travel.png" alt="Travel" className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-[1500ms] ease-in-out opacity-0" onLoad={(e) => (e.currentTarget.style.opacity = '1')} onError={(e) => (e.currentTarget.style.opacity = '0')} />
          {/* Bottom Dark Gradient Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

          {/* Aligned Top Overlay (for location tag) */}
          <div className="absolute inset-x-0 top-0 z-20">
            <div className="max-w-[1200px] mx-auto pl-12 pr-6 md:px-8 pt-8 md:pt-12 flex justify-end">
              <FadeIn delay={1}>
                <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg rotate-[1deg]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-white/80 text-[10px] md:text-xs tracking-[0.15em] font-light uppercase">Rishikesh, India</span>
                </div>
              </FadeIn>
            </div>
          </div>

          <div className="relative z-20 max-w-[1200px] mx-auto pl-12 pr-6 md:px-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-end h-full">
              <div>
                <FadeIn delay={0}>
                  <p className="font-brand text-[10px] md:text-[11px] tracking-[0.5em] text-white/60 uppercase font-medium mb-6">04 . IN TRANSIT</p>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <h3 className="font-display font-medium text-6xl md:text-8xl text-white leading-[1.1]">
                    I like <br /><span>traveling.</span>
                  </h3>
                </FadeIn>
              </div>

              <div className="md:text-right flex flex-col md:items-end">
                <FadeIn delay={0.2}>
                  <p className="font-brand text-white/90 font-medium text-base md:text-lg max-w-sm mb-1 leading-relaxed">
                    Mostly to see how people live and think.
                  </p>
                </FadeIn>
                <FadeIn delay={0.6}>
                  <p className="font-handwritten text-[#E8C872] text-2xl md:text-3xl max-w-sm leading-snug mt-0">
                    also, the food. always the food.
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* DISCIPLINE */}
        <section className="py-16 md:py-32 bg-secondary/20 relative">
          <NotebookBackground showMargin />
          <div className="max-w-[1200px] mx-auto pl-12 pr-6 md:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
              <FadeIn className="order-2 md:order-1 flex flex-col items-center md:items-end w-full mt-8 md:mt-0">
                <div className="w-full max-w-[260px] md:max-w-[360px]">
                  <ScrapbookImage
                    src="/about-blackbelt.png"
                    alt="Taekwondo Black Belt"
                    rotation="rotate-[2deg]"
                    tapePos="top"
                    className="w-full aspect-square"
                    dimensionsText="800x800px"
                    caption="state gold, 2018 (a different me)"
                  />
                </div>
              </FadeIn>
              <div className="order-1 md:order-2 flex flex-col justify-center">
                <FadeIn delay={0}>
                  <p className="font-brand text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-muted-foreground/60 font-medium mb-6">05 . BEFORE PIXELS</p>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <h3 className="font-display font-medium text-5xl md:text-7xl text-foreground leading-[1.1] mb-8">
                    A <span>black belt</span> <br />walks into <br />a design studio.
                  </h3>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="font-brand text-foreground font-medium text-base md:text-lg leading-relaxed max-w-sm mb-6">
                    Before design, I was into sports. Black belt in<br className="hidden md:block" />Taekwondo. State gold medalist.
                  </p>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <p className="font-brand text-muted-foreground text-base md:text-lg leading-relaxed max-w-[400px] mt-6 mb-1">
                    Still trying to stay that disciplined.
                  </p>
                </FadeIn>
                <FadeIn delay={0.7}>
                  <p className="font-handwritten text-accent text-2xl md:text-3xl lowercase mt-0 leading-snug">
                    (some days, better than others.)
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* GUITAR */}
        <section className="py-16 md:py-32 relative bg-background">
          <NotebookBackground showMargin />
          <div className="max-w-[1200px] mx-auto pl-12 pr-6 md:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
              <div className="md:col-span-5 md:col-start-2 flex flex-col justify-center">
                <FadeIn delay={0}>
                  <p className="font-brand text-accent font-medium italic mb-6 tracking-wider">recently —</p>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <h3 className="font-display font-semibold text-5xl md:text-7xl text-foreground mb-8 leading-[1.1]">
                    learning the <br />guitar.
                  </h3>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="font-display font-semibold text-muted-foreground italic text-3xl mb-8">
                    badly.
                  </p>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="font-brand text-foreground font-medium text-base md:text-lg leading-relaxed max-w-sm mb-1">
                    Slow progress. But enjoying being bad at something again.
                  </p>
                </FadeIn>
                <FadeIn delay={0.6}>
                  <div className="font-handwritten text-muted-foreground text-2xl md:text-3xl mt-1 leading-snug">
                    <p>current chord: G.</p>
                    <p>aspirational chord: F. <span className="text-accent">(rip my fingers)</span></p>
                  </div>
                </FadeIn>
              </div>
              <div className="md:col-span-5 md:col-start-7 mt-8 md:mt-0">
                <FadeIn delay={0.2} className="w-full max-w-[260px] md:max-w-[340px] mx-auto md:mx-0">
                  <ScrapbookImage
                    src="/about-guitar.png"
                    alt="Playing guitar"
                    rotation="rotate-[-1deg]"
                    tapePos="top"
                    className="w-full aspect-[4/5]"
                    dimensionsText="800x1000px"
                    caption="the struggle is real"
                  />
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* PAPER */}
        <section className="py-16 md:py-32 bg-secondary/10 relative">
          <NotebookBackground showMargin />
          <div className="max-w-[1200px] mx-auto pl-12 pr-6 md:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="flex flex-col justify-center items-start md:items-start md:pr-12">
                <FadeIn delay={0}>
                  <p className="font-brand text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-muted-foreground/60 font-medium mb-6">A HABIT</p>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <h3 className="font-display font-semibold text-5xl md:text-7xl text-foreground mb-8 leading-[1.1]">
                    I think <br /><span className="underline decoration-accent decoration-2 underline-offset-8 decoration-dotted">on paper.</span>
                  </h3>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <p className="font-handwritten text-muted-foreground text-2xl md:text-3xl max-w-[340px] mt-6 leading-snug">
                    messy, looped, sometimes unreadable the next morning.
                  </p>
                </FadeIn>
              </div>
              <div className="w-full flex justify-center md:justify-start">
                <FadeIn delay={0.2} className="w-full relative max-w-[300px] md:max-w-none">
                  <ScrapbookImage
                    src="/about-paper.png"
                    alt="Notebook"
                    rotation="rotate-[1deg]"
                    tapePos="top"
                    className="w-full aspect-[3/2]"
                    dimensionsText="1200x800px"
                    caption="thinking in ink"
                  />
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* SHELF */}
        <section className="py-16 md:py-32 bg-background relative">
          <NotebookBackground showMargin />
          <div className="max-w-[1200px] mx-auto pl-12 pr-6 md:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
              <div className="order-2 md:order-1 md:col-span-5 flex justify-center md:justify-start mt-8 md:mt-0">
                <FadeIn className="w-full max-w-[260px] md:max-w-[360px]">
                  <ScrapbookImage
                    src="/about-shelf.png"
                    alt="Currently reading book image"
                    rotation="rotate-[2deg]"
                    tapePos="top"
                    className="w-full aspect-square"
                    dimensionsText="800x800px"
                    caption={<>currently reading: <span className="text-accent"> UX for AI by Greg Nudelman </span></>}
                  />
                </FadeIn>
              </div>
              <div className="order-1 md:order-2 md:col-span-7 flex flex-col justify-center">
                <FadeIn delay={0}>
                  <p className="font-brand text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-muted-foreground/60 font-medium mb-6">CURRENTLY (SLOWLY) READING</p>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <h3 className="font-display font-semibold text-5xl md:text-7xl text-foreground mb-8 leading-[1.1]">
                    The <span>unfinished</span> shelf.
                  </h3>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <ul className="space-y-4 font-medium mb-8">
                    <li className="flex items-start gap-4">
                      <span className="text-accent text-[8px] mt-2.5">▶</span>
                      <span className="text-2xl md:text-3xl italic text-foreground leading-snug">The Art of Noticing <span className="text-muted-foreground not-italic text-sm md:text-base font-sans ml-2 tracking-normal">— Rob Walker</span></span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-accent text-[8px] mt-2.5">▶</span>
                      <span className="text-2xl md:text-3xl italic text-foreground leading-snug">Thinking, Fast and Slow <span className="text-muted-foreground not-italic text-sm md:text-base font-sans ml-2 tracking-normal">— Kahneman</span></span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-accent text-[8px] mt-2.5">▶</span>
                      <span className="text-2xl md:text-3xl italic text-foreground leading-snug">Kafka on the Shore <span className="text-muted-foreground not-italic text-sm md:text-base font-sans ml-2 tracking-normal">— Murakami</span></span>
                    </li>
                  </ul>
                </FadeIn>
                <FadeIn delay={0.5}>
                  <p className="font-handwritten text-muted-foreground text-2xl md:text-3xl mt-2 leading-snug">
                    I read more than I finish. forgive me, librarians.
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <section className="py-16 md:py-32 bg-secondary/10 relative">
          <NotebookBackground showMargin />
          <div className="max-w-[1200px] mx-auto pl-12 pr-6 md:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
              <FadeIn className="order-2 md:order-1 flex justify-center md:justify-end mt-8 md:mt-0">
                <div className="w-full max-w-[240px] md:max-w-[320px]">
                  <ScrapbookImage
                    src="/about-closing.png"
                    alt="Closing Portrait"
                    rotation="rotate-[-2deg]"
                    tapePos="top"
                    className="w-full aspect-[4/5] grayscale"
                    dimensionsText="800x1000px"
                    caption="it's been a journey."
                  />
                </div>
              </FadeIn>
              <div className="order-1 md:order-2 flex flex-col justify-center">
                <FadeIn delay={0}>
                  <h2 className="font-display font-semibold text-6xl md:text-8xl text-foreground mb-8 leading-[1.1]">
                    Still <br /><span className="italic">figuring <br />things out</span><span className="inline-block w-[0.6em] h-[4px] md:h-[6px] bg-primary ml-2 animate-pulse align-baseline" style={{ animationDuration: '1s' }}></span>
                  </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="font-brand font-medium text-base md:text-lg text-foreground mb-1 leading-relaxed">
                    Design is just one part of it.
                  </p>
                </FadeIn>
                <FadeIn delay={0.6}>
                  <p className="font-handwritten text-accent text-2xl md:text-3xl mt-1 leading-snug">
                    thanks for reading this far. seriously.
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

      </div>


      <Footer />
    </div>
  );
};

export default AboutPage;
