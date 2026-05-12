import { useState } from "react";
import { Copy, Check } from "lucide-react";

export const ScratchRevealEmail = ({ email = "nikhilpahan02@gmail.com" }: { email?: string }) => {
  const rows = 6;
  const cols = 20;
  const totalCells = rows * cols;
  
  const [scratched, setScratched] = useState<Set<number>>(new Set());
  const [copied, setCopied] = useState(false);

  const handlePointerMove = (index: number) => {
    if (!scratched.has(index)) {
      setScratched(prev => new Set(prev).add(index));
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const percentScratched = scratched.size / totalCells;
  const isRevealed = percentScratched > 0.45; // Reveal all if 45% is scratched

  return (
    <div className="flex flex-col items-start gap-3 group w-full max-w-sm">
      <p className="text-[10px] font-brand font-semibold tracking-widest uppercase text-muted-foreground/40 transition-colors group-hover:text-muted-foreground/80">
        [ Hidden Data Block ]
      </p>
      
      <div 
        className={`relative overflow-hidden rounded-lg border w-full transition-all duration-500 ${isRevealed ? 'border-emerald-500/50 bg-emerald-500/5 cursor-pointer hover:bg-emerald-500/10' : 'border-border/50 bg-secondary/50 cursor-crosshair'}`}
        onClick={isRevealed ? handleCopy : undefined}
      >
        {/* The Text Underneath */}
        <div className="flex items-center justify-center gap-3 font-mono text-sm md:text-base font-bold tracking-tight text-emerald-500 py-3 opacity-90 h-[50px]">
          {email}
          {isRevealed && (
            copied ? <Check className="w-4 h-4 text-emerald-500 animate-in zoom-in duration-300" /> 
                   : <Copy className="w-4 h-4 text-emerald-500 animate-in zoom-in duration-300" />
          )}
        </div>

        {/* The Scratch Mask Grid */}
        <div 
          className={`absolute inset-0 grid w-full h-full transition-opacity duration-700 ${isRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)` }}
        >
          {Array.from({ length: totalCells }).map((_, i) => (
            <div
              key={i}
              data-index={i}
              className="bg-foreground w-full h-full border-[0.5px] border-background/5 transition-opacity duration-[400ms]"
              style={{ opacity: scratched.has(i) ? 0 : 1 }}
              onPointerEnter={() => handlePointerMove(i)}
              onTouchMove={(e) => {
                const touch = e.touches[0];
                const element = document.elementFromPoint(touch.clientX, touch.clientY);
                if (element && element.getAttribute('data-index')) {
                  handlePointerMove(parseInt(element.getAttribute('data-index')!));
                }
              }}
            />
          ))}
        </div>
        
        {/* Cover text */}
        <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${isRevealed ? 'opacity-0' : 'opacity-100'}`}>
          <span className="font-brand font-bold uppercase tracking-widest text-[10px] text-background mix-blend-difference opacity-80">Scratch to Reveal</span>
        </div>
      </div>

      <div className={`h-4 mt-1 transition-opacity duration-300 ${copied ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-[10px] text-emerald-500/80 font-mono tracking-widest uppercase">Email copied to clipboard</p>
      </div>
    </div>
  );
};
