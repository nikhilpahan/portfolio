import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Side Projects", href: "/side-projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    // Set initial active path
    const currentPath = window.location.pathname + window.location.hash;
    setActivePath(currentPath === "/" ? "" : currentPath);

    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Disable scroll spy entirely on case study pages
      if (window.location.pathname.startsWith("/work/")) {
        setActivePath("");
        return;
      }

      // Scroll Spy Logic
      let visibleSection = "";

      navItems.forEach((item) => {
        if (item.href.includes("#")) {
          const id = item.href.split("#")[1];
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Check if element is occupying the middle of the screen
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 4) {
              visibleSection = item.href;
            }
          }
        }
      });

      // Overrides for absolute top and absolute bottom of page
      if (window.location.pathname === "/") {
        if (window.scrollY < 100) {
          visibleSection = "";
        } else if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
          visibleSection = "/#contact";
        }
      } else {
        visibleSection = window.location.pathname;
      }

      setActivePath((prev) => (prev !== visibleSection ? visibleSection : prev));
    };

    const handleLocationChange = () => {
      const path = window.location.pathname + window.location.hash;
      setActivePath(path === "/" ? "" : path);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("hashchange", handleLocationChange);
    window.addEventListener("popstate", handleLocationChange);

    // Call onScroll once to initialize perfectly
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", handleLocationChange);
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : ""
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <motion.a
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-foreground inline-flex items-baseline"
          whileHover="hover"
          initial="rest"
        >
          <motion.span
            variants={{ rest: { y: 0 }, hover: { y: -3 } }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            N
          </motion.span>
          <motion.span
            variants={{ rest: { y: 0 }, hover: { y: -3 } }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.03 }}
          >
            P
          </motion.span>
          <motion.span
            className="text-accent inline-block origin-bottom"
            variants={{ rest: { scale: 1, y: 0 }, hover: { scale: 1.3, y: 0 } }}
            transition={{ type: "spring", stiffness: 500, damping: 10, delay: 0.06 }}
          >
            .
          </motion.span>
        </motion.a>
        <div className="flex items-center gap-8">
          {navItems.map((item) => {
            const isCaseStudyPage = window.location.pathname.startsWith("/work/");
            const isActive = !isCaseStudyPage && activePath === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActivePath(item.href)}
                className={`relative text-sm font-body outline-none transition-colors duration-300 py-0.5 ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-active-indicator"
                    className="absolute left-0 right-0 -bottom-px h-[2px] bg-accent rounded-[var(--radius)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
