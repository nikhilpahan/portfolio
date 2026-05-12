import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/ShimmerButton";
import { Download, ArrowUpRight, CheckCircle2, Workflow, Code2, Database } from "lucide-react";
import { DecryptionText } from "@/components/ui/DecryptionText";
import { TerminalModal } from "@/components/ui/TerminalModal";

const Hero = () => {
  const [clickCount, setClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(0);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const handleBadgeClick = () => {
    const now = Date.now();
    // Reset combo if more than 3 seconds pass
    if (now - lastClickTime > 3000) {
      setClickCount(1);
    } else {
      const newCount = clickCount + 1;
      setClickCount(newCount);
      if (newCount === 3) {
        setIsTerminalOpen(true);
        setClickCount(0);
      }
    }
    setLastClickTime(now);
  };
  return (
    <>
      <section className="relative w-full min-h-[92vh] flex items-center overflow-hidden lg:overflow-visible">
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-20 w-full h-full"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-start lg:justify-between px-6 md:px-10 max-w-6xl mx-auto pt-32 pb-20 md:pt-40 md:pb-32 lg:pt-16 lg:pb-0 gap-12 lg:gap-16">

      {/* Left Column: Typography & CTAs */}
      <div className="relative z-10 flex-1 max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          {/* Eyebrow Badge */}
          <motion.div 
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border backdrop-blur-sm mb-6 shadow-sm cursor-pointer select-none transition-colors duration-300 ${
              clickCount > 0 
                ? 'bg-red-500/10 border-red-500/30' 
                : 'bg-secondary/60 border-border/50'
            }`}
            onClick={handleBadgeClick}
          >
            <span 
              className={`w-1.5 h-1.5 rounded-full ${
                clickCount > 0 ? 'bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]' : 'bg-emerald-500 animate-erratic-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]'
              }`} 
            />
            <span className={`text-[11px] md:text-xs font-semibold tracking-widest font-brand uppercase ${clickCount > 0 ? 'text-red-500' : 'text-foreground/80'}`}>
              {clickCount === 0 && <DecryptionText text="Nikhil Pahan · Available for new roles" delay={200} />}
              {clickCount === 1 && <DecryptionText text="[ SYSTEM OVERRIDE ]" delay={0} />}
              {clickCount === 2 && <DecryptionText text="[ ACCESSING... ]" delay={0} />}
            </span>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          className="font-display text-4xl md:text-6xl lg:text-[3.5rem] font-semibold leading-[1.05] text-foreground mb-6"
        >
          I design products that simplify <em className="font-brand italic font-medium text-foreground/90 pr-1 whitespace-nowrap">complex systems</em> and workflows<span className="text-accent">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="text-muted-foreground font-body text-lg md:text-xl max-w-lg leading-relaxed mb-10"
        >
          Recently worked on an AI-powered analytics platform where I designed how users turn data into insights using natural language.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
          className="flex flex-wrap gap-4"
        >
          <ShimmerButton
            label="View Work"
            variant="filled"
            size="lg"
            showArrow
            href="#work"
            className="shadow-[0_0_15px_rgba(0,0,0,0.05)] hover:shadow-[0_0_25px_rgba(0,0,0,0.08)]"
          />
          <ShimmerButton
            label="Resume"
            variant="outline"
            size="lg"
            showArrow={false}
            rightIcon={<Download className="w-4 h-4" />}
            href="/resume.pdf"
            download="Resume.pdf"
            className="bg-background/50 backdrop-blur-sm border-border/80 hover:bg-secondary/50"
          />
        </motion.div>
      </div>

      {/* Right Column: Data Bento */}
      <div className="relative z-10 w-[360px] md:w-full md:max-w-3xl lg:max-w-none lg:w-[360px] shrink-0 min-h-[450px] md:min-h-[320px] lg:min-h-[500px] hidden md:block perspective-[1200px] mx-auto lg:mr-0 lg:ml-auto mt-12 lg:mt-0 origin-top">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="absolute inset-0 w-full h-full"
        >

          {/* Card A: Status Node */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            drag
            dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
            dragElastic={0.2}
            whileDrag={{ zIndex: 50, scale: 1.05 }}
            className="absolute top-0 right-0 md:left-0 md:right-auto lg:left-auto lg:right-0 w-[280px] group [perspective:1000px] z-20 md:z-20 lg:z-20 cursor-grab active:cursor-grabbing"
          >
            <div className="relative w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl rounded-2xl">
              {/* Front */}
              <div className="relative w-full [backface-visibility:hidden] bg-background/80 backdrop-blur-xl border border-border/60 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="text-[10px] font-brand text-muted-foreground uppercase tracking-widest">SYS.STATUS</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[9px] font-brand font-semibold text-emerald-600 dark:text-emerald-500">ONLINE</span>
                  </div>
                </div>
                <div className="h-px w-full bg-border/50 mb-3" />
                <p className="text-xs font-brand font-semibold text-foreground mb-1">Capacity: High</p>
                <p className="text-[10px] text-muted-foreground font-brand">Ready for new challenges</p>
                {/* Decorative Sparkline */}
                <div className="mt-3 h-6 w-full flex items-end gap-1 opacity-60">
                  {[4, 7, 3, 8, 5, 9, 6, 10, 8, 6, 9].map((h, i) => (
                    <div key={i} className="flex-1 bg-emerald-500/40 rounded-t-sm" style={{ height: `${h * 10}%` }} />
                  ))}
                </div>
              </div>
              {/* Back */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-foreground rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-xl">
                <p className="text-[13px] md:text-sm font-brand italic leading-relaxed text-background">
                  "Always open to discussing exciting 0→1 opportunities and complex problem spaces."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card C: Process Pipeline */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            drag
            dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
            dragElastic={0.2}
            whileDrag={{ zIndex: 50, scale: 1.05 }}
            className="absolute top-[150px] md:top-0 lg:top-[150px] right-14 md:right-0 md:left-auto lg:right-14 w-[280px] group [perspective:1000px] z-30 md:z-20 lg:z-30 cursor-grab active:cursor-grabbing"
          >
            <div className="relative w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-2xl rounded-2xl">
              {/* Front */}
              <div className="relative w-full [backface-visibility:hidden] bg-background/90 backdrop-blur-2xl border border-border/80 rounded-[var(--radius)] p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Workflow className="w-4 h-4 text-foreground" />
                  <span className="text-[10px] font-brand font-bold text-foreground uppercase tracking-widest">Process Flow</span>
                </div>

                <div className="relative flex items-center justify-between gap-8">
                  {/* Inputs */}
                  <div className="flex flex-col gap-2 shrink-0 z-10 relative w-[116px]">
                    <div className="flex items-center gap-2 bg-secondary/90 border border-border/50 px-2.5 py-1 rounded-lg shadow-sm h-6 w-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#7C4BF9] shrink-0" />
                      <span className="text-[9px] font-brand font-semibold text-foreground tracking-wide whitespace-nowrap">User Empathy</span>
                    </div>
                    <div className="flex items-center gap-2 bg-secondary/90 border border-border/50 px-2.5 py-1 rounded-lg shadow-sm h-6 w-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span className="text-[9px] font-brand font-semibold text-foreground tracking-wide whitespace-nowrap">Business Logic</span>
                    </div>
                    <div className="flex items-center gap-2 bg-secondary/90 border border-border/50 px-2.5 py-1 rounded-lg shadow-sm h-6 w-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                      <span className="text-[9px] font-brand font-semibold text-foreground tracking-wide whitespace-nowrap">Tech Feasibility</span>
                    </div>
                  </div>

                  {/* Connectors */}
                  <svg className="absolute left-[116px] top-1/2 -translate-y-1/2 w-8 h-[72px] z-0 opacity-100" fill="none" viewBox="0 0 32 72">
                    <path d="M 0 12 C 16 12 16 36 32 36" stroke="currentColor" className="text-muted-foreground/60" strokeWidth="1.5" />
                    <path d="M 0 36 L 32 36" stroke="currentColor" className="text-muted-foreground/60" strokeWidth="1.5" />
                    <path d="M 0 60 C 16 60 16 36 32 36" stroke="currentColor" className="text-muted-foreground/60" strokeWidth="1.5" />
                  </svg>

                  {/* Output */}
                  <div className="z-10 flex items-center gap-1.5 bg-foreground border border-border px-3 py-2 rounded-xl shadow-md h-8">
                    <CheckCircle2 className="w-3.5 h-3.5 text-background shrink-0" />
                    <span className="text-[10px] font-brand font-bold text-background uppercase tracking-wider">Impact</span>
                  </div>
                </div>
              </div>
              {/* Back */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-foreground rounded-[var(--radius)] p-6 flex flex-col justify-center items-center text-center shadow-xl">
                <p className="text-[13px] md:text-sm font-brand italic leading-relaxed text-background">
                  "I don't just design screens; I map logic, align stakeholders, and ensure technical viability."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card B: Architecture Schema */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            drag
            dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
            dragElastic={0.2}
            whileDrag={{ zIndex: 50, scale: 1.05 }}
            className="absolute bottom-4 md:bottom-auto md:top-[140px] lg:top-auto lg:bottom-4 right-0 md:right-auto md:left-[calc(50%-140px)] lg:left-auto lg:right-0 w-[280px] group [perspective:1000px] z-10 md:z-30 lg:z-10 cursor-grab active:cursor-grabbing"
          >
            <div className="relative w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-lg rounded-2xl">
              {/* Front */}
              <div className="relative w-full [backface-visibility:hidden] bg-background/80 backdrop-blur-xl border border-border/60 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="w-4 h-4 text-[#7C4BF9]" />
                  <span className="text-[10px] font-brand text-[#7C4BF9] font-semibold uppercase tracking-widest">Architecture.json</span>
                </div>
                <div className="space-y-3 font-brand text-[10px] leading-relaxed">
                  <div className="flex items-start gap-3">
                    <span className="text-muted-foreground shrink-0 w-12">Scope:</span>
                    <span className="text-foreground font-medium">0 → 1 Products & Scaling</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-muted-foreground shrink-0 w-12">Focus:</span>
                    <span className="text-foreground font-medium">Systems Thinking, AI UX</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-muted-foreground shrink-0 w-12">Stack:</span>
                    <span className="text-foreground font-medium">Figma, HTML/CSS/JS (AI)</span>
                  </div>
                </div>
              </div>
              {/* Back */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-foreground rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-xl">
                <p className="text-[13px] md:text-sm font-brand italic leading-relaxed text-background">
                  "A hybrid skillset allowing me to bridge the gap between user needs and engineering realities."
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>

      </div>
    </section>
      <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </>
  );
};

export default Hero;
