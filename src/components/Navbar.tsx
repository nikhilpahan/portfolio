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
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Close mobile menu when resizing to desktop
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);

    // Set initial active path
    const currentPath = window.location.pathname + window.location.hash;
    setActivePath(currentPath === "/" ? "" : currentPath);

    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100 && !isOpen) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
        setIsHidden(false);
      }
      lastScrollY = currentScrollY;

      setScrolled(currentScrollY > 40);

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
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <>
      {/* Background blur overlay for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-background/40 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isHidden ? -120 : 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ transition: "border-radius 0.5s ease, background-color 0.5s ease, box-shadow 0.5s ease, border-color 0.5s ease, backdrop-filter 0.5s ease" }}
        className={`fixed z-50 overflow-hidden transition-all duration-500
          ${
            isOpen 
              ? "top-3 left-3 right-3 bg-background/70 backdrop-blur-2xl border border-border/50 rounded-[28px] shadow-2xl" 
              : `top-3 left-3 right-3 md:top-0 md:left-0 md:right-0 bg-background/70 backdrop-blur-xl border border-border/50 rounded-full shadow-lg ${
                  scrolled
                    ? "md:bg-background/80 md:backdrop-blur-md md:border-b md:rounded-none md:shadow-none"
                    : "md:bg-transparent md:backdrop-blur-none md:border-transparent md:rounded-none md:shadow-none"
                }`
          } 
        `}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col justify-center">
          {/* Top Bar (Logo + Desktop Links + Mobile Toggle) */}
          <div className="flex items-center justify-between h-14 md:h-16">
            <motion.a
              href="/"
              onClick={() => setIsOpen(false)}
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

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
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

            {/* Mobile Toggle Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col items-center justify-center w-8 h-8 gap-1 focus:outline-none z-50"
              aria-label="Toggle Navigation"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-5 h-[2px] bg-foreground block rounded-full"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-5 h-[2px] bg-foreground block rounded-full"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-5 h-[2px] bg-foreground block rounded-full"
              />
            </button>
          </div>

          {/* Mobile Expanded Links */}
          <div
            className={`md:hidden grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isOpen ? "grid-rows-[1fr] opacity-100 pointer-events-auto" : "grid-rows-[0fr] opacity-0 pointer-events-none"
            }`}
          >
            <div className="overflow-hidden">
              <div className="flex flex-col gap-2 pb-6 pt-2 px-2">
                {navItems.map((item, i) => {
                  const isCaseStudyPage = window.location.pathname.startsWith("/work/");
                  const isActive = !isCaseStudyPage && activePath === item.href;
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={false}
                      animate={isOpen ? { y: 0, opacity: 1 } : { y: -8, opacity: 0 }}
                      transition={{ type: "spring", bounce: 0, duration: 0.5, delay: isOpen ? i * 0.04 : 0 }}
                      onClick={() => {
                        setActivePath(item.href);
                        setIsOpen(false);
                      }}
                      className={`text-xl font-display tracking-wide transition-colors py-3 px-4 rounded-xl flex items-center justify-between ${
                        isActive ? "text-accent bg-accent/10 font-medium" : "text-foreground hover:bg-secondary/40"
                      }`}
                    >
                      {item.label}
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>}
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
