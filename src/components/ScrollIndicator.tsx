import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

interface ScrollIndicatorProps {
  color?: string;
}

export default function ScrollIndicator({ color = "var(--foreground)" }: ScrollIndicatorProps) {
  const { scrollYProgress } = useScroll();
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Track scroll state manually for conditional rendering
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      // Show indicator after scrolling down a bit
      if (latest > 0.02 && !isVisible) {
        setIsVisible(true);
      } else if (latest <= 0.02 && isVisible) {
        setIsVisible(false);
      }

      // Check if we hit the bottom
      if (latest > 0.99 && !isAtBottom) {
        setIsAtBottom(true);
      } else if (latest <= 0.99 && isAtBottom) {
        setIsAtBottom(false);
      }
    });
  }, [scrollYProgress, isVisible, isAtBottom]);

  // Width of the progress bar
  const progressWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  // Optional: pulse effect or color change when complete
  const progressColor = color; 

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center justify-center cursor-pointer"
          onClick={isAtBottom ? scrollToTop : undefined}
          title={isAtBottom ? "Back to top" : ""}
        >
          {/* Outer Glass Pill */}
          <motion.div 
            className="relative flex items-center overflow-hidden rounded-[var(--radius)] border border-border/60 bg-background/60 backdrop-blur-md shadow-lg transition-all duration-500 ease-out"
            animate={{
              width: isAtBottom ? "140px" : "100px",
              height: isAtBottom ? "40px" : "12px",
            }}
          >
            {/* The filling bar */}
            {!isAtBottom && (
              <motion.div
                className="absolute left-0 top-0 bottom-0 rounded-full"
                style={{ 
                  width: progressWidth, 
                  backgroundColor: progressColor,
                  opacity: 0.8
                }}
              />
            )}

            {/* Back to Top state */}
            <AnimatePresence>
              {isAtBottom && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full flex items-center justify-center gap-2 font-brand font-bold text-[11px] uppercase tracking-widest"
                  style={{ color: progressColor }}
                >
                  Back to top <ArrowUp className="w-3 h-3" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
