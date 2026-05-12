/**
 * ShimmerButton
 * A reusable button with:
 *  - Shimmer sweep animation on hover (Framer Motion variants)
 *  - Dual-arrow diagonal launch (same as the bento "View Case Study" button)
 *  - Accent-color text + icon on hover
 *  - Two visual variants: "filled" (dark bg) and "outline"
 */

import { motion, HTMLMotionProps } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Shared motion variants ──────────────────────────────────────────────────
const shimmerVariants = {
  rest: { x: "-110%", skewX: -12 },
  hover: {
    x: "110%",
    skewX: -12,
    transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
  },
};

const arrowExitVariants = {
  rest: { x: 0, y: 0, opacity: 1 },
  hover: {
    x: 5,
    y: -5,
    opacity: 0,
    transition: { duration: 0.18, ease: "easeIn" },
  },
};

const arrowEnterVariants = {
  rest: { x: -5, y: 5, opacity: 0 },
  hover: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.18, ease: "easeOut", delay: 0.14 },
  },
};

// ─── Text colour variant ─────────────────────────────────────────────────────
const textVariants = {
  rest: { color: "inherit" },
  hover: {
    color: "hsl(16 90% 72%)",
    transition: { duration: 0.2 },
  },
};

// ─── Types ───────────────────────────────────────────────────────────────────
interface ShimmerButtonProps
  extends Omit<HTMLMotionProps<"button">, "children"> {
  label: string;
  variant?: "filled" | "outline";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  /** Optional icon to display on the right of the label */
  rightIcon?: React.ReactNode;
  /** Use asChild-style: pass an <a> wrapper via this prop */
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
}

// ─── Component ───────────────────────────────────────────────────────────────
export const ShimmerButton = ({
  label,
  variant = "filled",
  size = "md",
  showArrow = true,
  rightIcon,
  href,
  target,
  rel,
  download,
  className,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onClick,
  ...rest
}: ShimmerButtonProps) => {
  const sizeClasses = {
    sm: "h-9 px-4 text-sm",
    md: "h-10 px-5 text-sm",
    lg: "h-11 px-8 text-sm",
  };

  const variantClasses = {
    filled:
      "bg-primary text-primary-foreground hover:bg-primary/85",
    outline:
      "border border-foreground/20 bg-transparent text-foreground hover:bg-foreground/5",
  };

  const inner = (
    <motion.button
      initial="rest"
      whileHover="hover"
      animate="rest"
      onClick={onClick}
      className={cn(
        "relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-[var(--radius)]",
        "font-medium transition-colors duration-300 cursor-pointer focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...rest}
    >
      {/* Shimmer sweep overlay */}
      <motion.div
        variants={shimmerVariants}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/12 to-transparent pointer-events-none"
        style={{ skewX: -12 }}
      />

      {/* Label — accent on hover */}
      <motion.span variants={textVariants} className="relative z-10 font-body font-semibold">
        {label}
      </motion.span>

      {/* Right icon (e.g. Download) */}
      {rightIcon && (
        <motion.span variants={textVariants} className="relative z-10">
          {rightIcon}
        </motion.span>
      )}

      {/* Dual-arrow launch */}
      {showArrow && (
        <div className="relative z-10 w-4 h-4 flex items-center justify-center overflow-hidden">
          <motion.div
            variants={arrowExitVariants}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.div variants={textVariants}>
              <ArrowUpRight className="w-4 h-4" />
            </motion.div>
          </motion.div>
          <motion.div
            variants={arrowEnterVariants}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.div variants={textVariants}>
              <ArrowUpRight className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>
      )}
    </motion.button>
  );

  // Wrap in an anchor if href is provided
  if (href) {
    return (
      <a href={href} target={target} rel={rel} download={download}>
        {inner}
      </a>
    );
  }

  return inner;
};

export default ShimmerButton;
