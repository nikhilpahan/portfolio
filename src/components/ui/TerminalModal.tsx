import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal } from "lucide-react";

const bootLogs = [
  "INIT_SYSTEM v2.0.4",
  "Checking memory...",
  "Memory OK. 16GB allocated.",
  "Loading portfolio assets...",
  "[OK] Loaded 34 SVG files",
  "[OK] Cached fonts: Satoshi, Caveat",
  "Connecting to design systems...",
  "ESTABLISHED: Figma, Tailwind",
  "Checking coffee supply...",
  "WARNING: Coffee levels critically low.",
  "Injecting dark mode protocols...",
  "System ready. User is awesome.",
  "> _"
];

export const TerminalModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      setLogs([]);
      setCurrentIndex(0);
      return;
    }

    if (currentIndex < bootLogs.length) {
      const timer = setTimeout(() => {
        setLogs(prev => [...prev, bootLogs[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, Math.random() * 300 + 100); // Random delay between logs
      
      return () => clearTimeout(timer);
    }
  }, [isOpen, currentIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-background/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-[#0a0a0a] border border-[#333] rounded-xl overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#1a1a1a] border-b border-[#333]">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Terminal className="w-4 h-4" />
                <span className="text-xs font-mono">developer_logs.exe</span>
              </div>
              <button 
                onClick={onClose}
                className="p-1 hover:bg-[#333] rounded text-muted-foreground hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 h-[300px] overflow-y-auto font-mono text-sm md:text-base text-emerald-500 leading-relaxed flex flex-col gap-1">
              {logs.map((log, i) => (
                <div key={i} className="flex">
                  <span className="opacity-50 mr-3 select-none">{String(i).padStart(2, '0')}</span>
                  <span dangerouslySetInnerHTML={{ __html: log.replace(/WARNING:/, '<span class="text-amber-500">WARNING:</span>').replace(/\[OK\]/, '<span class="text-emerald-400">[OK]</span>') }} />
                </div>
              ))}
              {currentIndex < bootLogs.length && (
                <div className="flex mt-1">
                  <span className="opacity-50 mr-3 select-none">{String(currentIndex).padStart(2, '0')}</span>
                  <span className="w-2 h-4 bg-emerald-500 animate-pulse inline-block" />
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
