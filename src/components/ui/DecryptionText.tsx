import { useState, useEffect } from "react";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

export const DecryptionText = ({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) => {
  const [displayText, setDisplayText] = useState("");
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;

    // Start with fully scrambled text
    setDisplayText(text.replace(/[a-zA-Z0-9]/g, () => characters[Math.floor(Math.random() * characters.length)]));

    timeout = setTimeout(() => {
      let iteration = 0;
      interval = setInterval(() => {
        setDisplayText((prev) => 
          text.split("").map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (letter === " " || letter === "·") return letter; // Don't scramble spaces/dots
            return characters[Math.floor(Math.random() * characters.length)];
          }).join("")
        );
        
        if (iteration >= text.length) {
          clearInterval(interval);
        }
        
        iteration += 1/3; // Speed of reveal
      }, 30);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  return <span className={className}>{displayText}</span>;
};
