import { Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";

const BehanceIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
  </svg>
);

const DribbbleIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 3.313 2.687 6 6 6s6-2.687 6-6c0-3.314-2.687-6-6-6zm4.942 5.72c-1.288-.211-2.472-.223-3.551-.036-.123-.282-.249-.562-.384-.84 1.154-.5 2.083-1.18 2.774-2.041.675.797 1.098 1.81 1.161 2.917zm-1.921-3.64c-.604.777-1.434 1.391-2.492 1.84-.509-.93-1.09-1.838-1.745-2.719.39-.099.796-.158 1.216-.158 1.139 0 2.184.39 3.021 1.037zm-5.257-.497c.666.871 1.255 1.769 1.77 2.69-1.217.357-2.666.542-4.344.554.347-1.418 1.3-2.598 2.574-3.244zm-2.721 4.417l.008-.127c1.923-.003 3.584-.225 4.975-.662.117.237.229.477.335.716-1.69.529-3.083 1.611-4.169 3.24-.717-.86-1.149-1.964-1.149-3.167zm1.914 3.905c.984-1.544 2.242-2.549 3.801-3.013.463 1.21.804 2.455 1.021 3.73-1.675.645-3.476.333-4.822-.717zm5.794.215c-.218-1.177-.54-2.327-.96-3.449.938-.132 1.971-.098 3.1.098-.219 1.394-1.015 2.597-2.14 3.351z"/>
  </svg>
);

const Footer = () => {
  const socialLinks = [
    { label: "LinkedIn", icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/nikhil-pahan/" },
    { label: "Behance", icon: <BehanceIcon className="w-4 h-4" />, href: "https://www.behance.net/nikhilpahan" },
    { label: "Dribbble", icon: <DribbbleIcon className="w-4 h-4" />, href: "https://dribbble.com/nikhilpahan" },
    { label: "Instagram", icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/nikhildesignns/" },
    { label: "Twitter", icon: <Twitter className="w-4 h-4" />, href: "https://x.com/NikhilPahan" },
  ];

  return (
    <footer className="w-full border-t border-border mt-auto">
      <div className="px-6 md:px-10 max-w-6xl mx-auto py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground font-body">
          © {new Date().getFullYear()} — Designed & built with intention
        </p>
        <div className="flex gap-6 items-center">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center ${
                link.icon ? "" : "text-sm font-body"
              }`}
              aria-label={link.label}
            >
              {link.icon ? link.icon : link.label}
            </a>
          ))}
        </div>

        {/* Mobile-only inline Back to Top — replaces the fixed floating indicator */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="md:hidden flex items-center justify-center gap-2 px-5 py-2.5 rounded-[var(--radius)] border border-border/60 bg-background/60 backdrop-blur-md cursor-pointer transition-colors duration-300 hover:bg-secondary/60"
          aria-label="Back to top"
        >
          <span className="font-brand font-bold text-[11px] uppercase tracking-widest text-foreground">
            Back to top
          </span>
          <ArrowUp className="w-3 h-3 text-foreground" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
