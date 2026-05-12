import { useState, useEffect } from "react";
import { ScratchRevealEmail } from "@/components/ui/ScratchRevealEmail";
import { ArrowUpRight, MapPin } from "lucide-react";

const CustomTimeWidget = () => {
  const [time, setTime] = useState("");
  const [ampm, setAmpm] = useState("");
  const [status, setStatus] = useState("ONLINE");

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const timeString = new Intl.DateTimeFormat('en-US', {
        timeZone: "Asia/Kolkata",
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }).format(date);
      
      const parts = timeString.split(' ');
      setTime(parts[0]);
      setAmpm(parts[1]);

      const hour = parseInt(new Intl.DateTimeFormat('en-US', { timeZone: "Asia/Kolkata", hour: 'numeric', hour12: false }).format(date));
      if (hour >= 0 && hour < 8) setStatus("SLEEP MODE");
      else if (hour >= 8 && hour < 10) setStatus("BOOTING UP");
      else setStatus("ONLINE");
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex flex-wrap items-center gap-3 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-sm w-max">
      <MapPin className="w-3.5 h-3.5 text-accent" />
      <span className="text-[13px] font-body text-white/90">Based in India</span>
      <span className="w-1 h-1 rounded-full bg-white/20 mx-1"></span>
      <span className="text-[12px] font-mono text-white/70 tracking-wider">{time} {ampm}</span>
      <span className="w-1 h-1 rounded-full bg-white/20 mx-1"></span>
      <div className="flex items-center gap-1.5">
        <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${status === 'ONLINE' ? 'bg-emerald-500' : status === 'SLEEP MODE' ? 'bg-amber-500' : 'bg-blue-500'}`}></span>
        <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">{status}</span>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="relative w-full overflow-hidden flex justify-center py-10 md:py-12 border-y border-white/5">
      
      <style>{`
        .premium-bg {
          background-color: #050508;
        }
        .aurora-1 {
          position: absolute;
          top: -10%;
          left: -20%;
          width: 70vw;
          height: 120%;
          background: radial-gradient(circle at center, #3d1404 0%, transparent 65%);
          animation: float1 35s ease-in-out infinite;
          opacity: 0.8;
        }
        .aurora-2 {
          position: absolute;
          bottom: -10%;
          right: -20%;
          width: 80vw;
          height: 140%;
          background: radial-gradient(circle at center, #130a2e 0%, transparent 65%);
          animation: float2 40s ease-in-out infinite;
          opacity: 0.8;
        }
        @keyframes float1 {
          0% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(80vw, 20vh) scale(1.2); }
          50% { transform: translate(100vw, -10vh) scale(0.9); }
          75% { transform: translate(40vw, 30vh) scale(1.1); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes float2 {
          0% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-70vw, -30vh) scale(1.1); }
          50% { transform: translate(-100vw, 20vh) scale(1.3); }
          75% { transform: translate(-20vw, 10vh) scale(0.8); }
          100% { transform: translate(0, 0) scale(1); }
        }
      `}</style>

      {/* Premium Dark Fluid Aurora Background */}
      <div className="absolute inset-0 z-0 premium-bg overflow-hidden pointer-events-none">
        <div className="aurora-1"></div>
        <div className="aurora-2"></div>
      </div>

      <div className="relative w-full max-w-[1000px] border border-white/5 bg-white/[0.01] backdrop-blur-sm overflow-hidden p-6 md:p-10 z-10 mx-4 md:mx-10 rounded-[1.5rem]">
        <div className="relative z-10 flex flex-col md:flex-row w-full items-stretch h-full">
          
          {/* Left Column */}
          <div className="w-full md:w-[48%] flex flex-col justify-between items-start md:pr-8 gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]"></span>
                <span className="text-[11px] font-mono text-white/70 tracking-[0.2em] uppercase">Get in Touch</span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-white leading-[1.1] tracking-tight">
                Let's create<br/>something meaningful<span className="text-[#FF4500]">.</span>
              </h2>
            </div>
            
            <CustomTimeWidget />
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-[1px] bg-white/5 mx-2"></div>
          {/* Horizontal Divider for Mobile */}
          <div className="block md:hidden w-full h-[1px] bg-white/5 my-6"></div>

          {/* Right Column */}
          <div className="w-full md:w-[48%] flex flex-col justify-between items-start md:pl-8 gap-6">
            <p className="font-body text-[14px] text-white/70 leading-relaxed max-w-sm">
              Open to new opportunities, collaborations, or just a good conversation about design.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <button 
                onClick={() => {
                  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                  if (isMobile) {
                    window.location.href = "mailto:nikhilpahan02@gmail.com";
                  } else {
                    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=nikhilpahan02@gmail.com", "_blank");
                  }
                }}
                className="group bg-white text-black px-5 py-3 rounded-xl font-medium text-[13px] flex items-center justify-center gap-2 hover:bg-accent hover:text-white transition-all duration-300 shadow-lg"
              >
                Say Hello <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
              <button 
                onClick={() => window.open("https://www.linkedin.com/in/nikhil-pahan/", "_blank")}
                className="bg-transparent border border-white/20 text-white px-5 py-3 rounded-xl font-medium text-[13px] flex items-center justify-center gap-2 hover:bg-accent hover:border-accent transition-all duration-300"
              >
                LinkedIn
              </button>
            </div>

            <div className="w-full mt-2">
              <ScratchRevealEmail />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
