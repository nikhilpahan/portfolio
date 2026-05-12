import React, { useState, useRef, useEffect } from "react";
import { Pen, X } from "lucide-react";
import { getStroke } from "perfect-freehand";

interface Point {
  x: number;
  y: number;
}

export const DoodleCanvas = () => {
  const [isDoodleMode, setIsDoodleMode] = useState(false);
  const [strokes, setStrokes] = useState<Point[][]>([]);
  const [currentStroke, setCurrentStroke] = useState<Point[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);
  const [svgHeight, setSvgHeight] = useState('100%');
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide button when within 300px of the bottom (footer area)
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 300;
      setIsAtBottom(isBottom);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ensure SVG covers the full scrollable document height
  useEffect(() => {
    const updateHeight = () => {
      setSvgHeight(`${document.documentElement.scrollHeight}px`);
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    // Observe DOM changes that might increase height
    const observer = new MutationObserver(updateHeight);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      window.removeEventListener('resize', updateHeight);
      observer.disconnect();
    };
  }, []);

  const startDrawing = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!isDoodleMode) return;
    const point = { x: e.pageX, y: e.pageY };
    setCurrentStroke([point]);
  };

  const draw = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!isDoodleMode || currentStroke.length === 0) return;
    const point = { x: e.pageX, y: e.pageY };
    setCurrentStroke((prev) => [...prev, point]);
  };

  const stopDrawing = () => {
    if (currentStroke.length > 0) {
      setStrokes((prev) => [...prev, currentStroke]);
      setCurrentStroke([]);
    }
  };

  const removeStroke = (index: number, e: React.MouseEvent) => {
    if (!isDoodleMode) return;
    e.stopPropagation();
    setStrokes((prev) => prev.filter((_, i) => i !== index));
  };

  const getPathData = (stroke: Point[]) => {
    if (!stroke.length) return "";
    
    const strokePoints = getStroke(
      stroke.map(p => [p.x, p.y]), 
      {
        size: 8,
        thinning: 0.6,
        smoothing: 0.5,
        streamline: 0.5,
      }
    );
    
    if (!strokePoints.length) return "";

    const d = strokePoints.reduce(
      (acc, [x0, y0], i, arr) => {
        const [x1, y1] = arr[(i + 1) % arr.length];
        acc.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2);
        return acc;
      },
      ["M", ...strokePoints[0], "Q"] as (string | number)[]
    );

    d.push("Z");
    return d.join(" ");
  };

  // Cursor SVGs
  const penCursor = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%237C4BF9' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z'/></svg>") 0 24, crosshair`;
  const eraserCursor = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='red' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21'/><path d='M22 21H7'/><path d='m5 11 9 9'/></svg>") 0 24, pointer`;

  return (
    <>
      {/* Floating Toggle Button */}
      <div 
        className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] transition-all duration-500 ${
          isAtBottom && !isDoodleMode ? "translate-y-24 opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        }`}
      >
        <button
          onClick={() => setIsDoodleMode(!isDoodleMode)}
          className={`flex items-center gap-2 px-5 py-3 md:px-6 md:py-4 rounded-full font-handwritten text-xl md:text-2xl shadow-2xl transition-all duration-300 border backdrop-blur-md ${
            isDoodleMode 
              ? "bg-accent/90 text-accent-foreground border-accent scale-105" 
              : "bg-background/80 text-foreground border-border hover:bg-secondary/90"
          }`}
        >
          {isDoodleMode ? <X size={20} /> : <Pen size={20} />}
          {isDoodleMode ? "Done Doodling" : "Doodle on this page"}
        </button>
      </div>

      {/* SVG Canvas */}
      <div 
        className={`absolute top-0 left-0 z-40 ${isDoodleMode ? "pointer-events-auto" : "pointer-events-none"}`}
        style={{ 
          height: svgHeight, 
          width: '100%',
          cursor: isDoodleMode ? penCursor : 'auto'
        }}
      >
        <svg
          ref={svgRef}
          className="w-full h-full"
          style={{ display: 'block' }}
          onPointerDown={startDrawing}
          onPointerMove={draw}
          onPointerUp={stopDrawing}
          onPointerLeave={stopDrawing}
        >
          <defs>
            <filter id="chalk-texture" x="-20%" y="-20%" width="140%" height="140%">
              {/* 1. Roughen the edges */}
              <feTurbulence type="fractalNoise" baseFrequency="0.4" numOctaves="3" result="noise1" />
              <feDisplacementMap in="SourceGraphic" in2="noise1" scale="2.5" result="roughEdges" xChannelSelector="R" yChannelSelector="G" />
              
              {/* 2. Create fine, grainy texture for the interior */}
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" result="noise2" />
              <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 2 -0.6" in="noise2" result="grainyAlpha" />
              
              {/* 3. Punch holes in the stroke using the grainy texture */}
              <feComposite operator="in" in="roughEdges" in2="grainyAlpha" />
            </filter>
          </defs>
          
          {/* Completed Strokes */}
          {strokes.map((stroke, i) => (
            <path
              key={i}
              d={getPathData(stroke)}
              fill="currentColor"
              stroke="none"
              filter="url(#chalk-texture)"
              className="text-accent transition-colors duration-200"
              style={{
                cursor: isDoodleMode ? eraserCursor : 'auto'
              }}
              onPointerDown={(e) => {
                if (isDoodleMode) e.stopPropagation();
              }}
              onClick={(e) => removeStroke(i, e)}
              onMouseEnter={(e) => {
                if (isDoodleMode) {
                  (e.target as SVGPathElement).style.fill = 'red';
                  (e.target as SVGPathElement).style.opacity = '0.5';
                }
              }}
              onMouseLeave={(e) => {
                if (isDoodleMode) {
                  (e.target as SVGPathElement).style.fill = 'currentColor';
                  (e.target as SVGPathElement).style.opacity = '1';
                }
              }}
            />
          ))}
          
          {/* Current Stroke */}
          {currentStroke.length > 0 && (
            <path
              d={getPathData(currentStroke)}
              fill="currentColor"
              stroke="none"
              filter="url(#chalk-texture)"
              className="text-accent"
              style={{ pointerEvents: 'none' }}
            />
          )}
        </svg>
      </div>
    </>
  );
};

export default DoodleCanvas;
