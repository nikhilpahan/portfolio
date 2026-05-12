import React from "react";

interface NotebookBackgroundProps {
  showMargin?: boolean;
  opacity?: number;
  darkOpacity?: number;
}

export const NotebookBackground: React.FC<NotebookBackgroundProps> = ({
  showMargin = false,
  opacity = 0.6,
  darkOpacity = 0.2,
}) => (
  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
    <div
      className="absolute inset-0 notebook-lines dark:hidden"
      style={{
        opacity: opacity,
        maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
      }}
    />
    <div
      className="absolute inset-0 notebook-lines hidden dark:block"
      style={{
        opacity: darkOpacity,
        maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
      }}
    />
    {showMargin && (
      <div className="absolute inset-y-0 left-8 md:left-14 w-px bg-accent/30" />
    )}
  </div>
);

export default NotebookBackground;
