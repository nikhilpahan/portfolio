import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorLabel = () => {
  const [isActive, setIsActive] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHoverStart = () => setIsActive(true);
    const handleHoverEnd = () => setIsActive(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("project-hover-start", handleHoverStart);
    window.addEventListener("project-hover-end", handleHoverEnd);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("project-hover-start", handleHoverStart);
      window.removeEventListener("project-hover-end", handleHoverEnd);
    };
  }, [cursorX, cursorY]);

  if (typeof window === "undefined") return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center text-muted-foreground"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        marginLeft: 16, // attaches firmly down and right of natural cursor arrow
        marginTop: 16,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.8 }}
      transition={{ duration: 0.15 }}
    >
      <span className="text-[11px] sm:text-xs font-normal tracking-wide whitespace-nowrap">
        view case study
      </span>
    </motion.div>
  );
};

export default CursorLabel;
