import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export const SystemStatus = () => {
  const [time, setTime] = useState("");
  const [status, setStatus] = useState({ text: "ONLINE", color: "text-emerald-500", dot: "bg-emerald-500" });

  useEffect(() => {
    const updateTime = () => {
      // Get IST Time
      const options: Intl.DateTimeFormatOptions = { 
        timeZone: "Asia/Kolkata", 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true 
      };
      
      const timeString = new Intl.DateTimeFormat('en-US', options).format(new Date());
      setTime(timeString);

      // Simple status logic based on IST hour (0-23)
      const hour = parseInt(new Intl.DateTimeFormat('en-US', { timeZone: "Asia/Kolkata", hour: 'numeric', hour12: false }).format(new Date()));
      
      if (hour >= 0 && hour < 8) {
        setStatus({ text: "SLEEP MODE", color: "text-amber-500", dot: "bg-amber-500" });
      } else if (hour >= 8 && hour < 10) {
        setStatus({ text: "BOOTING UP", color: "text-blue-500", dot: "bg-blue-500" });
      } else {
        setStatus({ text: "ONLINE", color: "text-emerald-500", dot: "bg-emerald-500" });
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex flex-wrap items-center justify-center gap-3 md:gap-4 px-4 py-2.5 rounded-full border border-border/40 bg-secondary/30 backdrop-blur-sm mb-12 shadow-sm">
      <div className="flex items-center gap-2">
        <Clock className="w-3.5 h-3.5 text-muted-foreground" />
        <span className="text-[10px] md:text-xs font-mono text-muted-foreground tracking-wider uppercase">
          Local Time (IST): {time}
        </span>
      </div>
      <div className="hidden md:block w-px h-3 bg-border/60" />
      <div className="flex items-center gap-2">
        <span className={`w-1.5 h-1.5 rounded-full ${status.dot} animate-pulse`} />
        <span className={`text-[10px] md:text-xs font-brand font-bold tracking-widest ${status.color}`}>
          {status.text}
        </span>
      </div>
    </div>
  );
};
