import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import ExploreMoreCard from "@/components/ExploreMoreCard";
import { motion } from "framer-motion";
import {
  User,
  Settings,
  Code,
  ClipboardList,
  ArrowRight,
  ShoppingCart,
  Package,
  Truck,
  Globe,
  CheckCircle2,
  CreditCard,
  Layers,
  Sparkles,
  BarChart3,
  AlertCircle,
  Palette,
  Search,
  Zap,
  ArrowDown,
  AlertTriangle,
  Target,
  ArrowUpRight,
  MousePointerClick,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

// Reusable animation wrapper
const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const accordionData = [
  { id: 'hook', title: 'The Hook', image: '/attavita-accordion-hook-placeholder.png' },
  { id: 'understanding', title: 'Understanding', image: '/attavita-accordion-understanding-placeholder.png' },
  { id: 'details', title: 'Details', image: '/attavita-accordion-details-placeholder.png' },
  { id: 'trust', title: 'Trust', image: '/attavita-accordion-trust-placeholder.png' }
];

const InteractiveAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full h-auto bg-[#F3EADB] rounded-[24px] border border-border p-4 flex flex-col gap-2 overflow-hidden relative shadow-sm group">
      {accordionData.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <motion.div
            key={item.id}
            layout
            onMouseEnter={() => {
              if (window.innerWidth >= 768) setActiveIndex(index);
            }}
            onClick={() => setActiveIndex(index)}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`relative overflow-hidden rounded-[16px] cursor-pointer border ${isActive ? 'bg-secondary/20 border-transparent aspect-[235/100]' : 'bg-white border-border/40 shadow-sm hover:border-border transition-colors flex-none'}`}
          >
            {/* Expanded State (Image) */}
            <motion.div
              className="absolute inset-0 w-full h-full"
              initial={false}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ pointerEvents: isActive ? 'auto' : 'none' }}
            >
              <div className="w-full h-full bg-secondary/40 flex items-center justify-center relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover absolute inset-0"
                  onError={(e) => {
                    // Fallback to show placeholder text if image isn't found yet
                    e.currentTarget.style.opacity = '0';
                    const parent = e.currentTarget.parentElement;
                    if (parent && !parent.querySelector('.placeholder-text')) {
                      const span = document.createElement('span');
                      span.className = 'placeholder-text text-muted-foreground/50 font-brand text-sm font-medium';
                      span.innerText = `[Placeholder: ${item.title}]`;
                      parent.appendChild(span);
                    }
                  }}
                />
              </div>
            </motion.div>

            {/* Collapsed State (Title & Icon) */}
            <motion.div
              className="w-full h-full flex items-center justify-between py-2 px-4"
              initial={false}
              animate={{ opacity: isActive ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              style={{ pointerEvents: isActive ? 'none' : 'auto' }}
            >
              <div className="flex items-center gap-4">
                <div className="w-8 md:w-16 h-[1px] bg-border/80" />
                <span className="text-sm md:text-base text-muted-foreground font-brand font-medium">
                  {item.title}
                </span>
              </div>
              <div className="flex items-center">
                <ArrowDown className="w-4 h-4 text-muted-foreground/40 md:hidden" />
                <MousePointerClick className="w-4 h-4 text-muted-foreground/40 hidden md:block" />
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

const CaseStudyAttavita = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-background min-h-screen">

      <Navbar />

      <main className="pt-32">

        {/* =======================
            HERO & META
        ======================== */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-16">
          <FadeIn className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
            <div className="max-w-4xl">
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-bold mb-6 font-brand">Case Study</p>
              <h1 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6 leading-[1.1]">
                Making an unfamiliar health product<br className="hidden md:block" />
                easier to understand through its everyday usage
              </h1>
              <div className="flex flex-col gap-6">
                <p className="font-brand text-base md:text-xl text-muted-foreground leading-relaxed max-w-3xl font-medium tracking-wide">
                  A content-led Shopify experience that helps families adopt better nutrition without changing daily habits.
                </p>
                <p className="font-brand text-lg text-foreground font-semibold">
                  The challenge wasn’t interaction — it was understanding.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary/50 border border-border w-fit">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/60" />
                  <span className="text-xs font-brand font-semibold text-foreground tracking-wide uppercase">E-Commerce · Design & Development</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 md:pt-10">
              <Button className="group font-brand tracking-wide font-bold bg-transparent border border-[#D3402E] text-[#D3402E] hover:bg-[#D3402E]/10 transition-all shadow-none h-11 px-8 text-base rounded-lg w-fit" asChild>
                <a href="https://attavita.in/" target="_blank" rel="noopener noreferrer">
                  attavita.in
                  <ArrowUpRight aria-hidden="true" className="w-4 h-4 ml-2 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </Button>
            </div>
          </FadeIn>

          {/* Thumbnail */}
          <FadeIn delay={0.1} className="mb-16">
            <div className="w-full aspect-auto md:aspect-[16/7] bg-secondary/30 rounded-2xl border border-border flex items-center justify-center relative overflow-hidden group">
              <img src="/attavita-hero.png" alt="Attavita case study hero" className="w-full h-auto md:absolute md:inset-0 md:h-full object-cover" />
            </div>
          </FadeIn>

          {/* Project Meta */}
          <FadeIn delay={0.2} className="py-8 border-t border-border/50">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 font-brand">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-widest text-muted-foreground font-normal">Timeline</p>
                <p className="text-base text-foreground font-normal">8 Weeks</p>
              </div>
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-widest text-muted-foreground font-normal">Role</p>
                <p className="text-base text-foreground font-normal">Product Designer & Shopify Developer</p>
              </div>
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-widest text-muted-foreground font-normal">Platform</p>
                <p className="text-base text-foreground font-normal">Shopify</p>
              </div>
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-widest text-muted-foreground font-normal">Scope</p>
                <p className="text-base text-foreground font-normal leading-relaxed">End-to-end design + development</p>
              </div>
            </div>
          </FadeIn>

          {/* Executive Summary */}
          <FadeIn delay={0.3} className="mt-16 bg-secondary/20 rounded-[24px] border border-border/50 p-6 md:p-10">
            <h2 className="font-display font-semibold text-lg md:text-2xl text-foreground mb-6">At a Glance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col">
                <AlertCircle className="w-6 h-6 text-muted-foreground mb-4 opacity-80" />
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-3 font-brand">Context</p>
                <div className="space-y-4 text-sm md:text-base text-muted-foreground font-brand leading-relaxed">
                  <p>
                    Attavita is a fortified premix designed to be mixed with flour to add <strong className="text-foreground">essential nutrients to everyday meals</strong>.
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <Layers className="w-6 h-6 text-foreground mb-4 opacity-80" />
                <p className="text-xs uppercase tracking-widest text-foreground font-bold mb-3 font-brand">The Challenge</p>
                <div className="space-y-4 text-sm md:text-base text-muted-foreground font-brand leading-relaxed">
                  <p>
                    Users <strong className="text-foreground">didn’t understand what the product is</strong>, how it fits into daily life, or whether they could trust it.
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 mb-4 opacity-80" />
                <p className="text-xs uppercase tracking-widest text-emerald-500 font-bold mb-3 font-brand">The Approach</p>
                <div className="text-sm md:text-base text-muted-foreground font-brand leading-relaxed">
                  <p>
                    Focused on explaining the product through its actual usage, while structuring information to reduce confusion and <strong className="text-foreground">build trust progressively</strong>.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        <div className="h-px w-full bg-border/40" />

        {/* =======================
            SECTION 01: CONTEXT & USERS
        ======================== */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <FadeIn>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-bold mb-6 font-brand">01 / Context & Users</p>
              <h2 className="font-display text-2xl md:text-4xl font-semibold text-foreground mb-6 leading-[1.2]">
                Who this product is for — and why it’s a difficult audience.
              </h2>
              <div className="space-y-6 text-muted-foreground font-brand text-base leading-relaxed">
                <div className="space-y-4">
                  <p>
                    Health-conscious parents who want better nutrition for their families without changing daily routines.
                  </p>
                  <p>
                    They are not nutrition experts, are skeptical of new products, and prefer simple, familiar solutions.
                  </p>
                </div>
                <blockquote className="pl-6 border-l-2 border-[#D3402E] italic text-foreground font-medium py-2">
                  "How do we introduce a new health category to users who are inherently skeptical of supplements?"
                </blockquote>
              </div>
            </FadeIn>

            {/* Diagram: The Adoption Barrier */}
            <FadeIn delay={0.2} className="w-full bg-background rounded-[24px] border border-border p-6 md:p-8 flex flex-col h-full min-h-[300px] shadow-sm relative overflow-hidden">
              <p className="text-[10px] uppercase tracking-widest font-brand font-bold text-muted-foreground mb-8">System Analysis: The Adoption Barrier</p>

              <div className="flex-1 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 relative">

                {/* User */}
                <div className="flex flex-col items-center gap-3 w-full md:w-auto z-10">
                  <div className="w-16 h-16 rounded-full bg-secondary border border-border flex items-center justify-center">
                    <User className="w-6 h-6 text-foreground opacity-80" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-brand font-semibold text-foreground">Health-Conscious Parent</p>
                    <p className="text-xs text-muted-foreground font-brand mt-1">Existing routines</p>
                  </div>
                </div>

                {/* Arrow to Barrier */}
                <div className="hidden md:flex flex-1 items-center justify-center relative z-0">
                  <div className="w-full h-px border-t-2 border-dashed border-border absolute" />
                  <ArrowRight className="w-4 h-4 text-border relative bg-background px-0.5" />
                </div>

                {/* The Barrier */}
                <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4 w-full md:max-w-[220px] flex flex-col items-center shadow-sm relative z-10 before:absolute before:inset-y-0 before:-left-1 before:w-1 before:bg-red-500/40 before:rounded-l-full">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-4 h-4 text-red-500/70" />
                    <span className="text-[10px] font-brand font-bold text-red-500/70 uppercase tracking-widest">Friction</span>
                  </div>
                  <div className="w-full space-y-2">
                    <div className="bg-background border border-border/50 rounded-md py-1.5 px-2 text-center shadow-sm"><span className="text-[10px] font-brand text-muted-foreground">No mental model</span></div>
                    <div className="bg-background border border-border/50 rounded-md py-1.5 px-2 text-center shadow-sm"><span className="text-[10px] font-brand text-muted-foreground">High skepticism</span></div>
                    <div className="bg-background border border-border/50 rounded-md py-1.5 px-2 text-center shadow-sm"><span className="text-[10px] font-brand text-muted-foreground">Information overload</span></div>
                  </div>
                </div>

                {/* Arrow to Goal */}
                <div className="hidden md:flex flex-1 items-center justify-center relative z-0">
                  <div className="w-full h-px border-t-2 border-dashed border-border absolute" />
                  <ArrowRight className="w-4 h-4 text-border relative bg-background px-0.5" />
                </div>

                {/* Goal */}
                <div className="flex flex-col items-center gap-3 w-full md:w-auto z-10">
                  <div className="w-16 h-16 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center shadow-sm">
                    <Target className="w-6 h-6 text-[#10b981]" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-brand font-bold text-[#10b981]">Goal</p>
                    <p className="text-xs text-muted-foreground font-brand mt-1">Better Nutrition</p>
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>
        </section>

        <div className="h-px w-full bg-border/40" />

        {/* =======================
            SECTION 02: PROBLEM & APPROACH
        ======================== */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-32">
          <FadeIn className="mb-16 md:mb-24">
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-bold mb-6 font-brand text-left">02 / Problem & Approach</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start text-left">
              <h2 className="font-display text-2xl md:text-4xl font-semibold text-[#D3402E] leading-[1.2] max-w-xl">
                Users didn’t understand the product — and didn’t trust it.
              </h2>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground font-brand leading-relaxed pt-1">
                <ul className="space-y-3 list-disc pl-5 marker:text-[#D3402E]">
                  <li>Use the product’s actual usage (mixing with flour) to make it easier to understand</li>
                  <li>Structure information into clear sections instead of long content blocks</li>
                  <li>Reveal information progressively instead of showing everything at once</li>
                  <li>Introduce trust signals alongside product explanation</li>
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="w-full h-auto rounded-[24px] border border-border flex flex-col items-center justify-center relative overflow-hidden group mb-12 bg-secondary/10">
            <img
              src="/attavita_design_approach.png"
              alt="Design Approach Visualization"
              className="w-full h-auto object-cover"
            />
          </FadeIn>

          <FadeIn delay={0.3} className="max-w-3xl mx-auto mb-16 md:mb-24">
            <blockquote className="text-center font-brand text-lg md:text-xl text-foreground font-medium leading-relaxed italic border-y border-border/40 py-8">
              "The experience needed to help users move from confusion to clarity by making the product easier to understand through its actual usage."
            </blockquote>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="w-full bg-secondary/10 border border-border/50 py-12 md:py-16 rounded-[24px] flex flex-col shadow-sm relative overflow-hidden">
              <div className="px-6 md:px-10 mb-8 md:mb-12 w-full max-w-5xl mx-auto flex flex-col items-start justify-between">
                <p className="text-[10px] md:text-xs uppercase tracking-widest font-brand font-bold text-muted-foreground mb-4">System of Understanding: Core Architecture</p>
              </div>
              <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-6 px-6 md:px-10 w-full max-w-5xl mx-auto relative z-10">

                {/* Stage 1 */}
                <div className="flex-1 bg-background border border-border rounded-xl p-6 shadow-sm flex flex-col justify-center">
                  <div className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center mb-4">
                    <User className="w-4 h-4 text-foreground opacity-70" />
                  </div>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground font-bold mb-2 font-brand">01 / The Anchor</p>
                  <p className="text-base font-brand font-semibold text-foreground mb-2">Usage Clarity</p>
                  <p className="text-xs font-brand text-muted-foreground leading-relaxed">Establish familiarity by demonstrating how to mix it with daily flour.</p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center -mx-2 z-20">
                  <div className="w-8 h-8 bg-background border border-border rounded-full flex items-center justify-center shadow-sm">
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
                <div className="md:hidden flex justify-center -my-2 z-20">
                  <div className="w-8 h-8 bg-background border border-border rounded-full flex items-center justify-center shadow-sm">
                    <ArrowDown className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="flex-1 bg-background border border-border rounded-xl p-6 shadow-sm flex flex-col justify-center">
                  <div className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center mb-4">
                    <Layers className="w-4 h-4 text-foreground opacity-70" />
                  </div>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground font-bold mb-2 font-brand">02 / The Content</p>
                  <p className="text-base font-brand font-semibold text-foreground mb-2">Structured Flow</p>
                  <p className="text-xs font-brand text-muted-foreground leading-relaxed">Break down complex health benefits into scannable, logical sections.</p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center -mx-2 z-20">
                  <div className="w-8 h-8 bg-background border border-border rounded-full flex items-center justify-center shadow-sm">
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
                <div className="md:hidden flex justify-center -my-2 z-20">
                  <div className="w-8 h-8 bg-background border border-border rounded-full flex items-center justify-center shadow-sm">
                    <ArrowDown className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="flex-1 bg-[#10b981]/5 border border-[#10b981]/20 rounded-xl p-6 shadow-sm flex flex-col justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                  </div>
                  <p className="text-sm uppercase tracking-widest text-[#10b981] font-bold mb-2 font-brand">03 / The Output</p>
                  <p className="text-base font-brand font-semibold text-foreground mb-2">Decision Readiness</p>
                  <p className="text-xs font-brand text-muted-foreground leading-relaxed">Combine understanding with trust signals to reduce purchase hesitation.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* =======================
            SECTION 03: FEATURES
        ======================== */}
        <div className="w-full bg-secondary/30 dark:bg-secondary/10 border-y border-border/40">
          <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-32">
            <FadeIn className="mb-24">
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D3402E] font-bold mb-6 font-brand">03 / Key Design Decisions</p>
              <h2 className="font-display text-2xl md:text-4xl font-semibold text-foreground max-w-2xl leading-[1.2]">
                Structuring the product experience
              </h2>
            </FadeIn>

            <div className="space-y-32">
              {/* Experience 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-center">
                <FadeIn className="order-2 lg:order-1 lg:col-span-7 w-full aspect-[16/10] bg-secondary/20 rounded-[20px] border border-border relative overflow-hidden group">
                  <video
                    src="/attavita-discovery.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </FadeIn>
                <FadeIn delay={0.2} className="order-1 lg:order-2 lg:col-span-3">
                  {/* <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2 font-brand">Step 01</p> */}
                  <h3 className="font-display text-xl md:text-3xl font-semibold text-foreground mb-4">
                    Start with familiar context (roti) instead of nutrition jargon
                  </h3>
                  <p className="font-brand text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                    Explained the product through its actual usage (mixing with flour) to build a clear mental model without relying on nutrition jargon.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold text-muted-foreground border border-border rounded-md bg-secondary/50 font-brand">Mental model</span>
                    <span className="px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold text-muted-foreground border border-border rounded-md bg-secondary/50 font-brand">Habit anchoring</span>
                  </div>
                </FadeIn>
              </div>

              {/* Experience 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-center">
                <FadeIn className="lg:col-span-3">
                  {/* <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2 font-brand">Step 02</p> */}
                  <h3 className="font-display text-xl md:text-3xl font-semibold text-foreground mb-4">
                    Simplifying information structure
                  </h3>
                  <p className="font-brand text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                    Split long content into smaller sections to improve readability. A content-first experience ensured users received answers in a logical sequence.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold text-muted-foreground border border-border rounded-md bg-secondary/50 font-brand">Content-first</span>
                    <span className="px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold text-muted-foreground border border-border rounded-md bg-secondary/50 font-brand">Information Architecture</span>
                  </div>
                </FadeIn>
                <FadeIn delay={0.2} className="lg:col-span-7 w-full h-auto bg-secondary/20 rounded-[20px] border border-border relative overflow-hidden group">
                  <img
                    src="/attavita-approach.png"
                    alt="UX research and information architecture"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </FadeIn>
              </div>

              {/* Experience 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-center">
                <FadeIn className="order-2 lg:order-1 lg:col-span-7 w-full relative overflow-hidden">
                  <InteractiveAccordion />
                </FadeIn>
                <FadeIn delay={0.2} className="order-1 lg:order-2 lg:col-span-3">
                  {/* <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2 font-brand">Step 03</p> */}
                  <h3 className="font-display text-xl md:text-3xl font-semibold text-foreground mb-4">
                    Revealing information progressively
                  </h3>
                  <p className="font-brand text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                    Instead of overwhelming users with information, the experience was structured as a sequence. Each section answers a specific question: <span className="text-foreground font-semibold">what it is</span>, <span className="text-foreground font-semibold">how it works</span>, and <span className="text-foreground font-semibold">why it matters</span>.
                    <br /><br />
                    Gradually building clarity and trust.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold text-muted-foreground border border-border rounded-md bg-secondary/50 font-brand">Progressive disclosure</span>
                    <span className="px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold text-muted-foreground border border-border rounded-md bg-secondary/50 font-brand">Storytelling</span>
                  </div>
                </FadeIn>
              </div>

              {/* Experience 4 */}
              <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-center">
                <FadeIn className="lg:col-span-3">
                  {/* <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2 font-brand">Step 04</p> */}
                  <h3 className="font-display text-xl md:text-3xl font-semibold text-foreground mb-4">
                    Building trust through validation layers
                  </h3>
                  <p className="font-brand text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                    Instead of relying on persuasion, trust was established through verifiable signals embedded within the experience.
                    <br /><br />
                    Certifications, lab testing, and expert-backed insights were presented alongside product information—helping users validate claims and build confidence before making a decision.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold text-muted-foreground border border-border rounded-md bg-secondary/50 font-brand">Credibility system</span>
                    <span className="px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold text-muted-foreground border border-border rounded-md bg-secondary/50 font-brand">Trust signals</span>
                  </div>
                </FadeIn>
                <FadeIn delay={0.2} className="lg:col-span-7 w-full h-auto bg-secondary/20 rounded-[20px] border border-border relative overflow-hidden group">
                  <img
                    src="/attavita-validation.png"
                    alt="Custom Shopify development"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </FadeIn>
              </div>

              {/* Experience 5 */}
              <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-center">
                <FadeIn className="order-2 lg:order-1 lg:col-span-7 w-full h-auto bg-secondary/20 rounded-[20px] border border-border relative overflow-hidden group">
                  <img
                    src="/attavita-decision.png"
                    alt="Payment, shipping, and CRM integrations"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </FadeIn>
                <FadeIn delay={0.2} className="order-1 lg:order-2 lg:col-span-3">
                  {/* <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2 font-brand">Step 05</p> */}
                  <h3 className="font-display text-xl md:text-3xl font-semibold text-foreground mb-4">
                    Consultation integration
                  </h3>
                  <p className="font-brand text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                    Provided an easy off-ramp for users who still had questions by seamlessly integrating expert consultation booking into the purchase flow.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold text-muted-foreground border border-border rounded-md bg-secondary/50 font-brand">Consultation</span>
                    <span className="px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold text-muted-foreground border border-border rounded-md bg-secondary/50 font-brand">Support flow</span>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>
        </div>

        {/* =======================
            SECTION 04: DESIGN PROCESS
        ======================== */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-32">
          <FadeIn className="mb-24">
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-bold mb-6 font-brand">04 / Design Process</p>
            <h2 className="font-display text-2xl md:text-4xl font-semibold text-foreground mb-6 leading-[1.2]">
              Designing and building under real constraints.
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl font-brand leading-relaxed">
              Many decisions were finalized directly in development due to time and business constraints.
            </p>
          </FadeIn>

          <div className="space-y-32">
            {/* Phase 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-start">
              <FadeIn className="order-2 lg:order-1 lg:col-span-7 w-full h-full min-h-[240px] py-10 bg-secondary/10 rounded-[20px] border border-border relative flex items-center justify-center px-6 overflow-hidden group">
                {/* Diagram 1: Alignment */}
                <div className="flex flex-col w-full max-w-2xl gap-6">
                  {/* Row 1 */}
                  <div className="flex flex-col md:flex-row w-full gap-4 md:gap-6">
                    <div className="flex-1 bg-foreground text-background rounded-xl p-5 md:p-6 flex flex-col shadow-md">
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold font-brand mb-4 opacity-70">Business Reality</span>
                      <ul className="space-y-3">
                        {["Entirely new product category in India", "No existing brand reference", "FSSAI certified, science-backed", "Must sell without distribution infra"].map((text, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D3402E] shrink-0 mt-1.5" />
                            <span className="text-sm font-brand font-medium leading-relaxed">{text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex-1 bg-white border border-border rounded-xl p-5 md:p-6 flex flex-col shadow-sm">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold font-brand mb-4">User Reality</span>
                      <ul className="space-y-3">
                        {["\"What is this powder?\" — zero awareness", "Skeptical of additives in food", "Won't change cooking habits", "Trust driven by safety proof"].map((text, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 shrink-0 mt-1.5" />
                            <span className="text-sm text-muted-foreground font-brand font-medium leading-relaxed">{text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="flex items-center justify-center gap-4 w-full py-2">
                    <div className="h-px bg-border/80 flex-1" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold font-brand">Key Discoveries</span>
                    <div className="h-px bg-border/80 flex-1" />
                  </div>

                  {/* Row 3 */}
                  <div className="flex flex-col gap-3 w-full">
                    <div className="bg-white border border-border rounded-xl p-4 flex items-center gap-4 shadow-sm w-full">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#F3EADB] flex items-center justify-center text-lg md:text-xl shrink-0">🫓</div>
                      <div className="flex flex-col">
                        <span className="text-sm md:text-base font-semibold font-brand text-foreground mb-1">Atta is the highest-trust surface</span>
                        <span className="text-[11px] md:text-xs text-muted-foreground font-brand">70% of daily food is flour-based — safest vehicle for fortification</span>
                      </div>
                    </div>
                    <div className="bg-white border border-border rounded-xl p-4 flex items-center gap-4 shadow-sm w-full">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-secondary/60 flex items-center justify-center text-lg md:text-xl shrink-0">📊</div>
                      <div className="flex flex-col">
                        <span className="text-sm md:text-base font-semibold font-brand text-foreground mb-1">Hidden hunger is real but invisible</span>
                        <span className="text-[11px] md:text-xs text-muted-foreground font-brand">60.9% children & 53.7% women are deficient — stat-led storytelling builds urgency</span>
                      </div>
                    </div>
                    <div className="bg-white border border-border rounded-xl p-4 flex items-center gap-4 shadow-sm w-full">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-secondary/60 flex items-center justify-center text-lg md:text-xl shrink-0">🔒</div>
                      <div className="flex flex-col">
                        <span className="text-sm md:text-base font-semibold font-brand text-foreground mb-1">Safety = primary conversion barrier</span>
                        <span className="text-[11px] md:text-xs text-muted-foreground font-brand">FSSAI approval and RDA alignment must be prominent — not buried in FAQs</span>
                      </div>
                    </div>
                  </div>

                  {/* Row 4 */}
                  <div className="bg-[#D3402E] rounded-xl p-5 md:p-6 w-full flex flex-col md:flex-row md:items-center justify-between gap-4 mt-2 shadow-md">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-bold font-brand mb-1">Design Alignment</span>
                      <span className="text-lg md:text-xl font-semibold font-brand text-white">Educate before you sell</span>
                    </div>
                    <div className="px-4 py-2 rounded border border-white/30 text-white text-[11px] md:text-xs font-brand font-medium self-start md:self-auto bg-white/10">
                      Education-first approach
                    </div>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2} className="order-1 lg:order-2 lg:col-span-3">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2 font-brand">Phase 01</p>
                <h3 className="font-display text-xl md:text-3xl font-semibold text-foreground mb-4">
                  Understanding product & business
                </h3>
                <p className="font-brand text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                  Worked with stakeholders to understand the product, its usage, and business goals in a new category.
                </p>
              </FadeIn>
            </div>

            {/* Phase 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-start">
              <FadeIn className="lg:col-span-3">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2 font-brand">Phase 02</p>
                <h3 className="font-display text-xl md:text-3xl font-semibold text-foreground mb-4">
                  Defining content strategy
                </h3>
                <p className="font-brand text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                  Identified need for a content-first approach to explain what the product is before driving conversion.
                </p>
              </FadeIn>
              <FadeIn delay={0.2} className="lg:col-span-7 w-full h-full min-h-[200px] py-10 bg-secondary/10 rounded-[20px] border border-border relative flex items-center justify-center px-6 overflow-hidden group">
                {/* Diagram 2: Content Strategy */}
                <div className="flex flex-col w-full max-w-3xl gap-4 md:gap-5 relative">
                  {/* The vertical line connecting the badges */}
                  <div className="absolute left-4 md:left-5 top-8 bottom-8 w-px bg-border/80" />

                  {/* Step 1 */}
                  <div className="flex flex-row gap-4 md:gap-6 relative w-full items-stretch">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-foreground text-background flex items-center justify-center text-xs md:text-sm font-bold font-brand shrink-0 z-10 relative mt-4 md:mt-5 shadow-sm">1</div>
                    <div className="flex-1 bg-foreground text-background rounded-xl p-5 md:p-6 flex flex-col shadow-md">
                      <div className="flex justify-between items-start w-full mb-4">
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-[0.2em] font-bold font-brand mb-1.5 opacity-60">The Hook</span>
                          <span className="text-lg md:text-xl font-semibold font-brand">Hero — Stop the scroll</span>
                        </div>
                        <span className="px-2.5 py-1 rounded bg-white/10 text-[10px] font-brand font-medium tracking-wide">Video</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {["Fortify your atta headline", "Chapati video loop", "Single CTA"].map((text, i) => (
                          <span key={i} className="px-3 py-1.5 rounded-md bg-white/10 text-[11px] md:text-xs font-brand font-medium tracking-wide flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D3402E]"></span>{text}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs md:text-sm italic opacity-70 font-brand">"I've seen flour in my kitchen, what is this product?"</span>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-row gap-4 md:gap-6 relative w-full items-stretch">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary border border-border text-foreground flex items-center justify-center text-xs md:text-sm font-bold font-brand shrink-0 z-10 relative mt-4 md:mt-5 shadow-sm">2</div>
                    <div className="flex-1 bg-white border border-border rounded-xl p-5 md:p-6 flex flex-col shadow-sm">
                      <div className="flex justify-between items-start w-full mb-4">
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-[0.2em] font-bold font-brand mb-1.5 text-muted-foreground">The What</span>
                          <span className="text-lg md:text-xl font-semibold font-brand text-foreground">Education — Answer the confusion</span>
                        </div>
                        <span className="px-2.5 py-1 rounded bg-secondary text-[10px] font-brand font-medium tracking-wide text-foreground border border-border">Tabs</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {["What is it?", "Why needed?", "Why flour?", "Is it safe?"].map((text, i) => (
                          <span key={i} className="px-3 py-1.5 rounded-md bg-secondary/50 border border-border text-muted-foreground text-[11px] md:text-xs font-brand font-medium tracking-wide flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"></span>{text}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs md:text-sm italic text-muted-foreground font-brand">"Okay, so it adds iron and B12 to my rotis without changing the taste."</span>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-row gap-4 md:gap-6 relative w-full items-stretch">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary border border-border text-foreground flex items-center justify-center text-xs md:text-sm font-bold font-brand shrink-0 z-10 relative mt-4 md:mt-5 shadow-sm">3</div>
                    <div className="flex-1 bg-white border border-border rounded-xl p-5 md:p-6 flex flex-col shadow-sm">
                      <div className="flex justify-between items-start w-full mb-4">
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-[0.2em] font-bold font-brand mb-1.5 text-muted-foreground">The Why</span>
                          <span className="text-lg md:text-xl font-semibold font-brand text-foreground">Trust — Dissolve the skepticism</span>
                        </div>
                        <span className="px-2.5 py-1 rounded bg-secondary text-[10px] font-brand font-medium tracking-wide text-foreground border border-border">Proof</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {["FSSAI certified", "50K+ families", "4.8★ rating", "UGC video wall", "Hidden hunger stats"].map((text, i) => (
                          <span key={i} className="px-3 py-1.5 rounded-md bg-secondary/50 border border-border text-muted-foreground text-[11px] md:text-xs font-brand font-medium tracking-wide flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"></span>{text}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs md:text-sm italic text-muted-foreground font-brand">"Other families are using it, and the government endorses fortification."</span>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex flex-row gap-4 md:gap-6 relative w-full items-stretch">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#D3402E] text-white flex items-center justify-center text-xs md:text-sm font-bold font-brand shrink-0 z-10 relative mt-4 md:mt-5 shadow-sm">4</div>
                    <div className="flex-1 bg-[#D3402E] rounded-xl p-5 md:p-6 flex flex-col shadow-md">
                      <div className="flex justify-between items-start w-full mb-4">
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-[0.2em] font-bold font-brand mb-1.5 text-white/70">Conversion</span>
                          <span className="text-lg md:text-xl font-semibold font-brand text-white">Buy — When intent is highest</span>
                        </div>
                        <span className="px-2.5 py-1 rounded bg-white/20 text-[10px] font-brand font-medium tracking-wide text-white border border-white/10">₹1,249</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {["1-month or 3-month pack", "Sale price visible", "NEW10 coupon"].map((text, i) => (
                          <span key={i} className="px-3 py-1.5 rounded-md bg-white/10 border border-white/10 text-white text-[11px] md:text-xs font-brand font-medium tracking-wide flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>{text}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs md:text-sm italic text-white/80 font-brand">"I'm already convinced — the buy button appears right as I'm ready."</span>
                    </div>
                  </div>

                  {/* Note Card */}
                  <div className="w-full mt-2 z-10 relative">
                    <div className="w-full bg-white border border-border rounded-xl p-4 md:p-5 flex items-start gap-3 shadow-sm">
                      <span className="text-base shrink-0 mt-0.5">💡</span>
                      <p className="text-sm font-brand text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-foreground">Principle:</span> Conversion is placed last intentionally. For a new product category, showing the price before building understanding creates friction — the funnel earns trust first, then asks for money.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Phase 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-start">
              <FadeIn className="order-2 lg:order-1 lg:col-span-7 w-full h-full min-h-[240px] py-10 bg-[#F5EFE6] dark:bg-secondary/10 rounded-[20px] border border-border relative flex flex-col px-6 md:px-8 overflow-hidden group">
                {/* Diagram 3: Information Architecture */}
                <div className="flex flex-col w-full gap-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold font-brand mb-2 opacity-70">Information Architecture</span>

                  {/* Row 1: Flow */}
                  <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4 w-full pb-2 -mt-4">
                    <div className="bg-foreground text-background px-4 md:px-6 py-3 rounded-lg text-sm font-semibold font-brand text-center">One product</div>
                    <div className="hidden md:flex items-center justify-center"><ArrowRight className="w-4 h-4 text-border" /></div>
                    <div className="flex md:hidden justify-center my-[-8px] z-10"><ArrowDown className="w-4 h-4 text-border" /></div>
                    <div className="bg-foreground text-background px-4 md:px-6 py-3 rounded-lg text-sm font-semibold font-brand text-center">Homepage does all the selling</div>
                    <div className="hidden md:flex items-center justify-center"><ArrowRight className="w-4 h-4 text-border" /></div>
                    <div className="flex md:hidden justify-center my-[-8px] z-10"><ArrowDown className="w-4 h-4 text-border" /></div>
                    <div className="bg-[#D3402E] text-white px-4 md:px-6 py-3 rounded-lg text-sm font-semibold font-brand text-center">Two SKUs close the deal</div>
                  </div>

                  {/* Divider 1 */}
                  <div className="flex items-center justify-center gap-4 w-full py-1">
                    <div className="h-px bg-border flex-1" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold font-brand whitespace-nowrap">5 Pages — Each with a single job</span>
                    <div className="h-px bg-border flex-1" />
                  </div>

                  {/* Row 2: 5 Pages */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3 w-full">
                    <div className="bg-foreground text-background rounded-lg p-3 flex flex-col items-center justify-center text-center shadow-md">
                      <span className="text-sm font-semibold font-brand mb-1">Home</span>
                      <span className="text-[10px] font-brand opacity-70">Full conversion funnel</span>
                    </div>
                    <div className="bg-transparent border border-border rounded-lg p-3 flex flex-col items-center justify-center text-center">
                      <span className="text-sm font-semibold font-brand text-foreground mb-1">Our Story</span>
                      <span className="text-[10px] font-brand text-muted-foreground">Brand credibility</span>
                    </div>
                    <div className="bg-transparent border border-border rounded-lg p-3 flex flex-col items-center justify-center text-center">
                      <span className="text-sm font-semibold font-brand text-foreground mb-1">Products</span>
                      <span className="text-[10px] font-brand text-muted-foreground">Browse & buy</span>
                    </div>
                    <div className="bg-transparent border border-border rounded-lg p-3 flex flex-col items-center justify-center text-center">
                      <span className="text-sm font-semibold font-brand text-foreground mb-1">Blog</span>
                      <span className="text-[10px] font-brand text-muted-foreground">SEO & education</span>
                    </div>
                    <div className="bg-transparent border border-border rounded-lg p-3 flex flex-col items-center justify-center text-center col-span-2 md:col-span-1">
                      <span className="text-sm font-semibold font-brand text-foreground mb-1">Contact</span>
                      <span className="text-[10px] font-brand text-muted-foreground">Support & affiliate</span>
                    </div>
                  </div>

                  {/* Divider 2 */}
                  <div className="flex items-center justify-center gap-4 w-full py-1">
                    <div className="h-px bg-border flex-1" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold font-brand whitespace-nowrap">Homepage Scroll = The entire sales conversation</span>
                    <div className="h-px bg-border flex-1" />
                  </div>

                  {/* Row 3: Homepage Scroll Flow */}
                  <div className="bg-foreground rounded-xl p-5 md:p-6 w-full flex flex-col gap-4 shadow-md">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-background/50 font-bold font-brand mb-1">Homepage — 12 Sections, One Direction</span>
                    <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full items-stretch">
                      <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                        <span className="text-[10px] text-background/50 font-brand mb-1">01</span>
                        <span className="text-sm md:text-base font-semibold font-brand text-background mb-2">Hook</span>
                        <span className="text-[10px] font-brand text-background/70">Video hero + trust bar</span>
                      </div>
                      <div className="hidden md:flex items-center justify-center"><ArrowRight className="w-4 h-4 text-background/30" /></div>
                      <div className="flex md:hidden justify-center my-[-8px] z-10"><ArrowDown className="w-4 h-4 text-background/30" /></div>
                      <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                        <span className="text-[10px] text-background/50 font-brand mb-1">02</span>
                        <span className="text-sm md:text-base font-semibold font-brand text-background mb-2">Educate</span>
                        <span className="text-[10px] font-brand text-background/70">What · Why · How · Safe</span>
                      </div>
                      <div className="hidden md:flex items-center justify-center"><ArrowRight className="w-4 h-4 text-background/30" /></div>
                      <div className="flex md:hidden justify-center my-[-8px] z-10"><ArrowDown className="w-4 h-4 text-background/30" /></div>
                      <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                        <span className="text-[10px] text-background/50 font-brand mb-1">03</span>
                        <span className="text-sm md:text-base font-semibold font-brand text-background mb-2">Prove</span>
                        <span className="text-[10px] font-brand text-background/70">Stats · UGC · Reviews</span>
                      </div>
                      <div className="hidden md:flex items-center justify-center"><ArrowRight className="w-4 h-4 text-background/30" /></div>
                      <div className="flex md:hidden justify-center my-[-8px] z-10"><ArrowDown className="w-4 h-4 text-background/30" /></div>
                      <div className="flex-1 bg-[#D3402E] rounded-lg p-4 flex flex-col items-center justify-center text-center shadow-md">
                        <span className="text-[10px] text-white/70 font-brand mb-1">04</span>
                        <span className="text-sm md:text-base font-semibold font-brand text-white mb-2">Convert</span>
                        <span className="text-[10px] font-brand text-white/80">Product card · FAQ</span>
                      </div>
                    </div>
                    <span className="text-xs italic text-background/50 font-brand mt-2">New product category → users don't know what it is. Education had to come before conversion.</span>
                  </div>

                  {/* Divider 3 */}
                  <div className="flex items-center justify-center gap-4 w-full py-1">
                    <div className="h-px bg-border flex-1" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold font-brand whitespace-nowrap">Product Catalogue — Intentionally Minimal</span>
                    <div className="h-px bg-border flex-1" />
                  </div>

                  {/* Row 4: Products */}
                  <div className="flex flex-col md:flex-row gap-4 w-full">
                    <div className="flex-1 bg-[#EBE5DB] border border-[#DCD5C9] rounded-xl p-4 md:p-5 flex items-center gap-4 shadow-sm">
                      <div className="w-10 h-10 rounded-lg bg-black/5 flex items-center justify-center shrink-0 text-lg">📦</div>
                      <div className="flex flex-col">
                        <span className="text-sm md:text-base font-semibold font-brand text-foreground mb-1">1-month pack — ₹1,249</span>
                        <span className="text-[11px] md:text-xs font-brand text-muted-foreground">Low-commitment entry · trial intent</span>
                      </div>
                    </div>
                    <div className="flex-1 bg-[#D3402E] rounded-xl p-4 md:p-5 flex items-center gap-4 shadow-md">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-lg">📦</div>
                      <div className="flex flex-col">
                        <span className="text-sm md:text-base font-semibold font-brand text-white mb-1">3-month pack — ₹2,899</span>
                        <span className="text-[11px] md:text-xs font-brand text-white/80">Committed buyer · best value</span>
                      </div>
                    </div>
                  </div>

                  {/* Divider 4 */}
                  <div className="flex items-center justify-center gap-4 w-full py-1">
                    <div className="h-px bg-border flex-1" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold font-brand whitespace-nowrap">Supporting Structure</span>
                    <div className="h-px bg-border flex-1" />
                  </div>

                  {/* Row 5: Supporting */}
                  <div className="flex flex-col md:flex-row gap-4 w-full">
                    <div className="flex-1 bg-[#EBE5DB]/50 border border-[#DCD5C9]/50 rounded-xl p-5 flex flex-col gap-4">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold font-brand">Utility — Slide-out Drawers</span>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 border border-border bg-white rounded-md text-[11px] font-medium font-brand shadow-sm">Cart</span>
                        <span className="px-3 py-1.5 border border-border bg-white rounded-md text-[11px] font-medium font-brand shadow-sm">Search</span>
                        <span className="px-3 py-1.5 border border-border bg-white rounded-md text-[11px] font-medium font-brand shadow-sm">Wishlist</span>
                        <span className="px-3 py-1.5 border border-border bg-white rounded-md text-[11px] font-medium font-brand shadow-sm">Account</span>
                      </div>
                    </div>
                    <div className="flex-1 bg-[#EBE5DB]/50 border border-[#DCD5C9]/50 rounded-xl p-5 flex flex-col gap-4">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold font-brand">Footer — Policies & Reach</span>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 border border-border bg-white rounded-md text-[11px] font-medium font-brand shadow-sm">Terms</span>
                        <span className="px-3 py-1.5 border border-border bg-white rounded-md text-[11px] font-medium font-brand shadow-sm">Shipping</span>
                        <span className="px-3 py-1.5 border border-border bg-white rounded-md text-[11px] font-medium font-brand shadow-sm">Returns</span>
                        <span className="px-3 py-1.5 border border-border bg-white rounded-md text-[11px] font-medium font-brand shadow-sm">Social links</span>
                        <span className="px-3 py-1.5 border border-border bg-white rounded-md text-[11px] font-medium font-brand shadow-sm">Affiliate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2} className="order-1 lg:order-2 lg:col-span-3">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2 font-brand">Phase 03</p>
                <h3 className="font-display text-xl md:text-3xl font-semibold text-foreground mb-4">
                  Structuring the experience
                </h3>
                <p className="font-brand text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                  Created clear information architecture to break complex health content into understandable sections.
                </p>
              </FadeIn>
            </div>

            {/* Phase 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-center">
              <FadeIn className="lg:col-span-3">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2 font-brand">Phase 04</p>
                <h3 className="font-display text-xl md:text-3xl font-semibold text-foreground mb-4">
                  Designing and iterating
                </h3>
                <p className="font-brand text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                  Designed the interface and refined it continuously based on stakeholder feedback and evolving requirements.
                </p>
              </FadeIn>
              <FadeIn delay={0.2} className="lg:col-span-7 w-full h-auto bg-secondary/30 rounded-[20px] border border-border relative flex items-center justify-center overflow-hidden group">
                {/* Diagram 4: Image Placeholder */}
                <img src="/attavita-process-04-design.png" alt="UI Design" className="w-full h-auto object-cover opacity-100 transition-opacity duration-700" />
              </FadeIn>
            </div>

            {/* Phase 5 */}
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-center">
              <FadeIn className="order-2 lg:order-1 lg:col-span-7 w-full h-auto bg-secondary/30 rounded-[20px] border border-border relative flex items-center justify-center overflow-hidden group">
                {/* Diagram 5: Image Placeholder */}
                <img src="/attavita-process-05-build.png" alt="Development" className="w-full h-auto object-cover opacity-100 transition-opacity duration-700" />
              </FadeIn>
              <FadeIn delay={0.2} className="order-1 lg:order-2 lg:col-span-3">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2 font-brand">Phase 05</p>
                <h3 className="font-display text-xl md:text-3xl font-semibold text-foreground mb-4">
                  Building and integrating
                </h3>
                <p className="font-brand text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                  Developed the website in Shopify using custom sections and integrated payments, shipping, and CRM via APIs.
                </p>
              </FadeIn>
            </div>

            {/* Phase 6 */}
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-center">
              <FadeIn className="lg:col-span-3">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2 font-brand">Phase 06</p>
                <h3 className="font-display text-xl md:text-3xl font-semibold text-foreground mb-4">
                  Testing and handover
                </h3>
                <p className="font-brand text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                  Tested integrations and set up the store so the team could manage content post-launch.
                </p>
              </FadeIn>
              <FadeIn delay={0.2} className="lg:col-span-7 w-full h-auto bg-secondary/30 rounded-[20px] border border-border relative flex items-center justify-center overflow-hidden group">
                {/* Diagram 6: Image Placeholder */}
                <img src="/attavita-process-06-test.png" alt="Testing" className="w-full h-auto object-cover opacity-100 transition-opacity duration-700" />
              </FadeIn>
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-border/40" />

        {/* =======================
            SECTION 05: WHAT THIS DESIGN ENABLES
        ======================== */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-32">
          <FadeIn className="mb-16">
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-bold mb-6 font-brand">05 / What this design enables</p>
            <h2 className="font-display text-2xl md:text-4xl font-semibold text-foreground max-w-2xl leading-[1.2]">
              Designed to reduce confusion.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeIn delay={0.1} className="p-8 bg-secondary/20 rounded-[20px] border border-border flex flex-col justify-start">
              <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center mb-6">
                <CheckCircle2 className="w-5 h-5 text-foreground opacity-80" />
              </div>
              <p className="text-sm md:text-base text-foreground font-semibold font-brand mb-2">Explained through real usage</p>
              <p className="text-xs md:text-sm text-muted-foreground font-brand leading-relaxed">Shifted focus from traditional e-commerce to practical demonstration.</p>
            </FadeIn>
            <FadeIn delay={0.2} className="p-8 bg-secondary/20 rounded-[20px] border border-border flex flex-col justify-start">
              <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center mb-6">
                <CheckCircle2 className="w-5 h-5 text-foreground opacity-80" />
              </div>
              <p className="text-sm md:text-base text-foreground font-semibold font-brand mb-2">Structured content for clarity</p>
              <p className="text-xs md:text-sm text-muted-foreground font-brand leading-relaxed">Organized complex health information into a logical flow.</p>
            </FadeIn>
            <FadeIn delay={0.3} className="p-8 bg-secondary/20 rounded-[20px] border border-border flex flex-col justify-start">
              <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center mb-6">
                <CheckCircle2 className="w-5 h-5 text-foreground opacity-80" />
              </div>
              <p className="text-sm md:text-base text-foreground font-semibold font-brand mb-2">Guided understanding step-by-step</p>
              <p className="text-xs md:text-sm text-muted-foreground font-brand leading-relaxed">Revealed information progressively to prevent overwhelming the user.</p>
            </FadeIn>
            <FadeIn delay={0.4} className="p-8 bg-secondary/20 rounded-[20px] border border-border flex flex-col justify-start">
              <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center mb-6">
                <CheckCircle2 className="w-5 h-5 text-foreground opacity-80" />
              </div>
              <p className="text-sm md:text-base text-foreground font-semibold font-brand mb-2">Built trust through visible signals</p>
              <p className="text-xs md:text-sm text-muted-foreground font-brand leading-relaxed">Placed certifications and doctor testimonials alongside claims.</p>
            </FadeIn>
          </div>
        </section>

        <div className="h-px w-full bg-border/40" />

        {/* =======================
            SECTION 06: REFLECTION
        ======================== */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-32">
          <FadeIn className="mb-16">
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-bold mb-6 font-brand">06 / Reflection</p>
            <h2 className="font-display text-2xl md:text-4xl font-semibold text-foreground max-w-2xl leading-[1.2]">
              Clarity is not a one-time outcome.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FadeIn delay={0.1} className="bg-background rounded-[20px] p-8 border border-border h-full hover:border-[#D3402E]/50 transition-colors">
              <h3 className="font-brand font-semibold text-lg text-foreground mb-4">Maintaining structure</h3>
              <p className="text-base text-muted-foreground leading-relaxed font-brand">
                Clarity breaks quickly when content grows without structure.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-background rounded-[20px] p-8 border border-border h-full hover:border-[#D3402E]/50 transition-colors">
              <h3 className="font-brand font-semibold text-lg text-foreground mb-4">Scalable design systems</h3>
              <p className="text-base text-muted-foreground leading-relaxed font-brand">
                Business needs add complexity — design must absorb it without overwhelming users.
              </p>
            </FadeIn>
            <FadeIn delay={0.3} className="bg-background rounded-[20px] p-8 border border-border h-full hover:border-[#D3402E]/50 transition-colors">
              <h3 className="font-brand font-semibold text-lg text-foreground mb-4">Balancing education</h3>
              <p className="text-base text-muted-foreground leading-relaxed font-brand">
                Trust is built across the experience, not through a single section.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* =======================
            SECTION: EXPLORE MORE
        ======================== */}
        <div className="flex items-center justify-center w-full py-16 md:py-24 relative overflow-hidden">
          <div className="h-px bg-border/60 absolute inset-x-0 top-1/2 -translate-y-1/2"></div>
          <span className="px-6 py-2 bg-background relative z-10 text-xs font-semibold text-muted-foreground uppercase tracking-widest border border-border/60 rounded-full">End of Case Study</span>
        </div>

        <section className="bg-secondary/10 py-16 md:py-32">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <FadeIn>
              <h2 className="font-display text-2xl md:text-4xl font-semibold text-foreground mb-12 text-center md:text-left">
                Explore more projects
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {projects.filter(p => p.id !== "attavita").map((project, idx) => (
                <FadeIn key={project.id} delay={0.1 * idx} className="h-full">
                  <ExploreMoreCard project={project} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyAttavita;
