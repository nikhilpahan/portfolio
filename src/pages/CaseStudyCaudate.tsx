import React from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import ExploreMoreCard from "@/components/ExploreMoreCard";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  User,
  Settings,
  Code,
  ClipboardList,
  ArrowRight,
  Sparkles,
  AlertCircle,
  Languages,
  Brain,
  MessageSquare,
  Lightbulb,
  SlidersHorizontal,
  Palette,
  History,
  LayoutDashboard,
  Plus,
  LineChart,
  Target,
  Settings2,
  Eye,
  Compass,
  BrainCircuit,
  Activity,
  LayoutGrid,
  ArrowUpRight,
  Database,
  ArrowDown
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

// Reusable animation wrapper for easy customization later
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

const PROCESS_PHASES = [
  {
    label: "01 / DISCOVERY",
    image: "/Discovery.png",
    title: "Identifying the real problem",
    description: <>During early exploration and internal testing, it became clear that users struggled not with dashboards, but with <strong className="text-foreground">defining meaningful metrics</strong>. Translating business questions into structured queries was the <strong className="text-foreground">primary friction point</strong>.</>
  },
  {
    label: "02 / DECISION",
    image: "/Decision.png",
    title: "Shifting the interaction model",
    description: <>Instead of improving configuration-heavy workflows, I explored a question-driven approach where users <strong className="text-foreground">express intent in natural language</strong> and the system <strong className="text-foreground">generates insights automatically</strong>.</>
  },
  {
    label: "03 / EXPLORATION",
    image: "/Exploration.png",
    title: "Exploring interaction patterns",
    description: <>Multiple approaches were explored, including form-based configuration and guided workflows. These approaches still required an <strong className="text-foreground">understanding of data structures</strong>, limiting accessibility for non-technical users.</>
  },
  {
    label: "04 / APPROACH",
    image: "/Approch.png",
    title: "AI-assisted workflow",
    description: <>The final design introduced a chat-based interface for KPI generation, supported by <strong className="text-foreground">suggested prompts and editable configurations</strong>. This balanced automation with user control.</>
  },
  {
    label: "05 / VALIDATION",
    image: "/Validation.png",
    title: "Early validation",
    description: <>The solution was tested internally and refined based on feedback. <strong className="text-foreground">Starting with questions</strong> consistently reduced friction compared to traditional workflows.</>
  }
];

const ProcessCard = ({ phase, index, totalCards }: { phase: { label: string; image: string; title: string; description: React.ReactNode }, index: number, totalCards: number }) => {
  const cardSectionRef = useRef<HTMLDivElement>(null);

  const stickyTop = 100 + index * 20;

  const { scrollYProgress } = useScroll({
    target: cardSectionRef,
    offset: [`start ${stickyTop}px`, `end ${stickyTop + 20}px`]
  });

  const isLast = index === totalCards - 1;
  const targetScale = isLast ? 1 : 0.95;
  const targetOpacity = isLast ? 1 : 0.4;

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const filter = useTransform(scrollYProgress, [0, 1], ["brightness(1)", isLast ? "brightness(1)" : "brightness(0.6)"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, targetOpacity]);

  return (
    <div ref={cardSectionRef} className="pb-[40vh] lg:pb-[50vh] w-full last:pb-0">
      <motion.div
        style={{
          position: "sticky",
          top: `${stickyTop}px`,
          scale,
          opacity,
          filter,
          transformOrigin: "top center",
        }}
        className="w-full bg-background rounded-[24px] border border-border/50 p-5 md:p-8 shadow-lg flex flex-col will-change-transform"
      >
        {/* Label */}
        <h4 className="font-brand font-bold text-sm md:text-base text-[#7C4BF9] uppercase tracking-wider mb-4">{phase.label}</h4>

        {/* Image */}
        <div className="w-full aspect-video md:aspect-[16/8] bg-secondary/30 rounded-[12px] border border-border flex items-center justify-center relative overflow-hidden group mb-6">
          <img src={phase.image} alt={phase.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>

        {/* Content */}
        <div>
          <h3 className="font-brand font-semibold text-lg md:text-2xl text-foreground mb-2 md:mb-3">{phase.title}</h3>
          <p className="font-brand text-muted-foreground text-sm md:text-base leading-relaxed">
            {phase.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const CaseStudyCaudate = () => {
  // Always scroll to absolute top of page when route loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-background min-h-screen">

      <Navbar />

      <main className="pt-32">

        {/* =======================
            SECTION: HERO & META
        ======================== */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-16">
          <FadeIn className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
            <div className="max-w-4xl">
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#7C4BF9] font-bold mb-6 font-brand">Case Study</p>
              <h1 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6 leading-[1.1]">
                Designing an AI-Assisted Analytics <br className="hidden md:block" />
                Platform for Non-Technical Teams
              </h1>
              <p className="font-brand text-base md:text-xl text-muted-foreground leading-relaxed max-w-3xl font-medium tracking-wide">
                CaudateAI is an AI-powered platform that helps teams turn prepared datasets into robust business insights by simply asking questions in natural language.
              </p>
            </div>

            <div className="shrink-0 md:pt-10">
              <Button className="group font-brand tracking-wide font-bold bg-transparent border border-[#7C4BF9] text-[#7C4BF9] hover:bg-[#7C4BF9]/10 transition-all shadow-none h-11 px-8 text-base rounded-lg w-fit" asChild>
                <a href="https://caudateai.com/" target="_blank" rel="noopener noreferrer">
                  Caudate AI
                  <ArrowUpRight aria-hidden="true" className="w-4 h-4 ml-2 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </Button>
            </div>
          </FadeIn>

          {/* =======================
              SECTION: THUMBNAIL 
              (Customizable wrapper for a PNG or GIF)
          ======================== */}
          <FadeIn delay={0.1} className="mb-10">
            <div className="w-full bg-secondary/30 rounded-lg border border-border overflow-hidden flex flex-row">
              {/* Left Column: Traditional Analytics */}
              <div className="flex-1 p-3 sm:p-8 md:p-12 sm:pr-4 md:pr-8 flex flex-col items-center">
                <div className="h-24 sm:h-28 flex flex-col items-center justify-start mb-2 sm:mb-6">
                  <h2 className="font-display font-semibold text-[10px] leading-tight sm:text-lg md:text-2xl text-foreground mb-2 text-center uppercase sm:normal-case">Traditional Analytics</h2>
                  <p className="text-center text-[10px] sm:text-xs text-muted-foreground leading-relaxed max-w-[260px] font-brand">
                    Traditional tools require defining metrics before insights.
                  </p>
                </div>

                <div className="flex flex-col items-center gap-2 sm:gap-4 w-full max-w-[280px]">
                  <div className="w-full h-14 sm:h-16 bg-background rounded-lg sm:rounded-lg border border-border/80 p-2 sm:p-4 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-3">
                    <Database aria-hidden="true" className="w-3 h-3 sm:w-5 sm:h-5 text-muted-foreground sm:ml-2 shrink-0" />
                    <span className="font-brand font-medium text-[9px] sm:text-sm text-foreground w-full text-center sm:text-left sm:ml-1 leading-tight sm:leading-normal line-clamp-2">Data</span>
                  </div>

                  <ArrowDown aria-hidden="true" className="w-3 h-3 sm:w-5 sm:h-5 text-muted-foreground/50 shrink-0" />

                  <div className="w-full h-14 sm:h-16 bg-background rounded-lg sm:rounded-lg border border-border/80 p-2 sm:p-4 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-3">
                    <LineChart aria-hidden="true" className="w-3 h-3 sm:w-5 sm:h-5 text-muted-foreground sm:ml-2 shrink-0" />
                    <span className="font-brand font-medium text-[9px] sm:text-sm text-foreground w-full text-center sm:text-left sm:ml-1 leading-tight sm:leading-normal line-clamp-2">Define Metrics</span>
                  </div>

                  <ArrowDown aria-hidden="true" className="w-3 h-3 sm:w-5 sm:h-5 text-muted-foreground/50 shrink-0" />

                  <div className="w-full h-14 sm:h-16 bg-background rounded-lg sm:rounded-lg border border-border/80 p-2 sm:p-4 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-3">
                    <LayoutDashboard aria-hidden="true" className="w-3 h-3 sm:w-5 sm:h-5 text-muted-foreground sm:ml-2 shrink-0" />
                    <span className="font-brand font-medium text-[9px] sm:text-sm text-foreground w-full text-center sm:text-left sm:ml-1 leading-tight sm:leading-normal line-clamp-2">Build Dashboard</span>
                  </div>

                  <ArrowDown aria-hidden="true" className="w-3 h-3 sm:w-5 sm:h-5 text-muted-foreground/50 shrink-0" />

                  <div className="w-full h-14 sm:h-16 bg-background rounded-lg sm:rounded-lg border border-border/80 p-2 sm:p-4 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-3">
                    <AlertCircle aria-hidden="true" className="w-3 h-3 sm:w-5 sm:h-5 text-muted-foreground sm:ml-2 shrink-0" />
                    <span className="font-brand font-medium text-[9px] sm:text-sm text-foreground w-full text-center sm:text-left sm:ml-1 leading-tight sm:leading-normal line-clamp-2">Interpret Insights</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="w-px bg-border/50 my-4 sm:my-12"></div>

              {/* Right Column: CaudateAI */}
              <div className="flex-1 p-3 sm:p-8 md:p-12 sm:pl-4 md:pl-8 flex flex-col items-center bg-[#7C4BF9]/[0.03]">
                <div className="h-24 sm:h-28 flex flex-col items-center justify-start mb-2 sm:mb-6">
                  <h2 className="font-display font-semibold text-[10px] leading-tight sm:text-lg md:text-2xl text-foreground mb-2 text-center uppercase sm:normal-case">CaudateAI (AI-Assisted)</h2>
                  <p className="text-center text-[10px] sm:text-xs text-[#7C4BF9] leading-relaxed max-w-[260px] font-brand">
                    CaudateAI allows users to start with questions instead.
                  </p>
                </div>

                <div className="flex flex-col items-center gap-2 sm:gap-4 w-full max-w-[280px]">
                  <div className="w-full h-14 sm:h-16 bg-[#7C4BF9]/10 rounded-lg sm:rounded-lg border border-[#7C4BF9]/20 p-2 sm:p-4 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/40 dark:bg-black/10 mix-blend-overlay"></div>
                    <Database aria-hidden="true" className="w-3 h-3 sm:w-5 sm:h-5 text-[#7C4BF9] relative z-10 sm:ml-2 shrink-0" />
                    <span className="font-brand font-medium text-[9px] sm:text-sm text-[#7C4BF9] relative z-10 w-full text-center sm:text-left sm:ml-1 leading-tight sm:leading-normal line-clamp-2">Data</span>
                  </div>

                  <ArrowDown aria-hidden="true" className="w-3 h-3 sm:w-5 sm:h-5 text-muted-foreground/50 shrink-0" />

                  <div className="w-full h-14 sm:h-16 bg-[#7C4BF9]/10 rounded-lg sm:rounded-lg border border-[#7C4BF9]/20 p-2 sm:p-4 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/40 dark:bg-black/10 mix-blend-overlay"></div>
                    <MessageSquare aria-hidden="true" className="w-3 h-3 sm:w-5 sm:h-5 text-[#7C4BF9] relative z-10 sm:ml-2 shrink-0" />
                    <span className="font-brand font-medium text-[9px] sm:text-sm text-[#7C4BF9] relative z-10 w-full text-center sm:text-left sm:ml-1 leading-tight sm:leading-normal line-clamp-2">Ask Questions</span>
                  </div>

                  <ArrowDown aria-hidden="true" className="w-3 h-3 sm:w-5 sm:h-5 text-muted-foreground/50 shrink-0" />

                  <div className="w-full h-14 sm:h-16 bg-[#7C4BF9]/10 rounded-lg sm:rounded-lg border border-[#7C4BF9]/20 p-2 sm:p-4 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/40 dark:bg-black/10 mix-blend-overlay"></div>
                    <Lightbulb aria-hidden="true" className="w-3 h-3 sm:w-5 sm:h-5 text-[#7C4BF9] relative z-10 sm:ml-2 shrink-0" />
                    <span className="font-brand font-medium text-[9px] sm:text-sm text-[#7C4BF9] relative z-10 w-full text-center sm:text-left sm:ml-1 leading-tight sm:leading-normal line-clamp-2">AI Generates Insights</span>
                  </div>

                  <ArrowDown aria-hidden="true" className="w-3 h-3 sm:w-5 sm:h-5 text-muted-foreground/50 shrink-0" />

                  <div className="w-full h-14 sm:h-16 bg-[#7C4BF9]/10 rounded-lg sm:rounded-lg border border-[#7C4BF9]/20 p-2 sm:p-4 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/40 dark:bg-black/10 mix-blend-overlay"></div>
                    <LayoutDashboard aria-hidden="true" className="w-3 h-3 sm:w-5 sm:h-5 text-[#7C4BF9] relative z-10 sm:ml-2 shrink-0" />
                    <span className="font-brand font-medium text-[9px] sm:text-sm text-[#7C4BF9] relative z-10 w-full text-center sm:text-left sm:ml-1 leading-tight sm:leading-normal line-clamp-2">Dashboard Exploration</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* =======================
              SECTION: PROJECT META 
          ======================== */}
          <FadeIn delay={0.2} className="py-8 border-t border-border/50">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 font-brand">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-widest text-muted-foreground font-normal">Timeline</p>
                <p className="text-base text-foreground font-normal">Jan 2025 – Mar 2025</p>
              </div>
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-widest text-muted-foreground font-normal">Role</p>
                <p className="text-base text-foreground font-normal">Product Designer</p>
              </div>
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-widest text-muted-foreground font-normal">Platform</p>
                <p className="text-base text-foreground font-normal">Web-based SaaS</p>
              </div>
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-widest text-muted-foreground font-normal">Scope</p>
                <p className="text-base text-foreground font-normal leading-relaxed">AI interaction · KPI generation · Dashboard experience</p>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-sm uppercase tracking-widest text-muted-foreground font-normal mb-6 font-brand">The Team</p>
              <div className="flex flex-wrap gap-x-10 gap-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-[20px] bg-background border border-border flex items-center justify-center shadow-sm">
                    <User aria-hidden="true" className="w-5 h-5 text-[#7C4BF9]" />
                  </div>
                  <div>
                    <p className="text-base font-normal text-foreground font-brand">Nikhil Pahan</p>
                    <p className="text-sm text-muted-foreground font-brand">Product Designer</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-[20px] bg-background border border-border flex items-center justify-center shadow-sm">
                    <Settings aria-hidden="true" className="w-5 h-5 text-[#7C4BF9]" />
                  </div>
                  <div>
                    <p className="text-base font-normal text-foreground font-brand">Ashwini Pandey</p>
                    <p className="text-sm text-muted-foreground font-brand">Founding Engineer</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-[20px] bg-background border border-border flex items-center justify-center shadow-sm">
                    <Code aria-hidden="true" className="w-5 h-5 text-[#7C4BF9]" />
                  </div>
                  <div>
                    <p className="text-base font-normal text-foreground font-brand">Ashish Gupta</p>
                    <p className="text-sm text-muted-foreground font-brand">Founding Engineer</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-[20px] bg-background border border-border flex items-center justify-center shadow-sm">
                    <ClipboardList aria-hidden="true" className="w-5 h-5 text-[#7C4BF9]" />
                  </div>
                  <div>
                    <p className="text-base font-normal text-foreground font-brand">Abhishek Sinha</p>
                    <p className="text-sm text-muted-foreground font-brand">Product Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* =======================
              SECTION: EXECUTIVE SUMMARY (TL;DR)
          ======================== */}
          <FadeIn delay={0.3} className="mt-16 bg-secondary/20 rounded-[24px] border border-border/50 p-6 md:p-10 mb-8">
            <h2 className="font-display font-semibold text-lg md:text-2xl text-foreground mb-6">At a Glance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col">
                <AlertCircle className="w-6 h-6 text-muted-foreground mb-4 opacity-80" />
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-3 font-brand">The Need</p>
                <p className="text-sm md:text-base text-muted-foreground font-brand leading-relaxed">
                  Building dashboards traditionally <strong className="text-foreground">takes hours</strong> and forces non-technical users to <strong className="text-foreground">rely heavily on data analysts</strong>.
                </p>
              </div>
              <div className="flex flex-col">
                <Brain className="w-6 h-6 text-[#7C4BF9] mb-4 opacity-80" />
                <p className="text-xs uppercase tracking-widest text-[#7C4BF9] font-bold mb-3 font-brand">The Approach</p>
                <p className="text-sm md:text-base text-muted-foreground font-brand leading-relaxed">
                  An intuitive, <strong className="text-foreground">no-code</strong> generative AI interface that translates natural language questions into KPIs in real-time.
                </p>
              </div>
              <div className="flex flex-col">
                <Activity className="w-6 h-6 text-green-600 dark:text-green-500 mb-4 opacity-80" />
                <p className="text-xs uppercase tracking-widest text-green-600 dark:text-green-500 font-bold mb-3 font-brand">The Outcome</p>
                <p className="text-sm md:text-base text-muted-foreground font-brand leading-relaxed">
                  <strong className="text-foreground">Launched and live.</strong> Users now build reports instantly with <strong className="text-foreground">minimized hallucination</strong> risk through direct database queries.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        <div className="h-px w-full bg-border/40" />

        {/* =======================
            SECTION 01: PROBLEM & SOLUTION
        ======================== */}
        <section className="pt-16 md:pt-32 pb-0 mb-16 md:mb-32" id="problem-solution">
          <div className="max-w-6xl mx-auto px-6 md:px-10 mb-16 lg:mb-24">
            {/* Top Part: The Problem */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeIn className="flex flex-col">
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-bold mb-6 font-brand">01 / Problem & Solution</p>
                <h2 className="font-display text-2xl md:text-4xl font-semibold text-foreground mb-10 leading-[1.2]">
                  Defining metrics is the real challenge
                </h2>

                <div className="space-y-8">
                  {/* Bullet 1 */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <AlertCircle aria-hidden="true" className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-brand font-semibold text-foreground mb-1 text-sm md:text-base">KPI Definition Struggle</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed font-brand">Users struggle to define meaningful KPIs without technical knowledge.</p>
                    </div>
                  </div>

                  {/* Bullet 2 */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <Languages aria-hidden="true" className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-brand font-semibold text-foreground mb-1 text-sm md:text-base">Translation Difficulty</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed font-brand">Turning business questions into metrics is the biggest friction point.</p>
                    </div>
                  </div>

                  {/* Bullet 3 */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <BrainCircuit aria-hidden="true" className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-brand font-semibold text-foreground mb-1 text-sm md:text-base">Technical Assumption</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed font-brand">Most tools assume users already understand data structures and schema.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} className="w-full bg-secondary/30 rounded-[20px] border border-border/50 p-6 md:p-12 lg:p-16 flex items-center justify-center overflow-x-auto">
                <div className="flex flex-row items-center gap-2 sm:gap-6 md:gap-8 w-full justify-center min-w-min">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-[20px] bg-background border border-border flex flex-shrink-0 items-center justify-center shadow-sm">
                    <span className="font-brand font-medium text-xs sm:text-sm md:text-base text-foreground">Data</span>
                  </div>
                  <ArrowRight aria-hidden="true" className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-[20px] bg-red-500/10 border border-red-500/30 flex flex-shrink-0 items-center justify-center shadow-sm">
                    <span className="font-brand font-semibold text-red-600 dark:text-red-500 text-xs sm:text-sm md:text-base">Metrics</span>
                  </div>
                  <ArrowRight aria-hidden="true" className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-[20px] bg-background border border-border flex flex-shrink-0 items-center justify-center shadow-sm">
                    <span className="font-brand font-medium text-xs sm:text-sm md:text-base text-foreground">Insight</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Bottom Part: The Solution (FULL WIDTH) */}
          <div className="w-full">
            <FadeIn delay={0.3}>
              <div className="w-full flex-col bg-gradient-to-br from-[#7C4BF9] to-[#6032c9] text-white py-16 md:py-20 flex items-center text-center shadow-2xl relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 md:px-10 w-full flex flex-col items-center">
                  {/* Optional decorative background elements */}
                  <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-white/5 rounded-[20px] blur-3xl pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-black/10 rounded-[20px] blur-3xl pointer-events-none"></div>

                  <h2 className="font-display text-2xl md:text-5xl font-semibold mb-16 max-w-4xl leading-[1.2] relative z-10 opacity-80">
                    From questions to insights, <span className="whitespace-nowrap">without defining metrics</span>
                  </h2>

                  <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-2 w-full mb-16 relative z-10">
                    {/* Box 1 */}
                    <div className="w-full lg:w-48 xl:w-56 h-28 bg-black/20 border border-white/5 rounded-2xl flex flex-col items-center justify-center p-4 backdrop-blur-sm transition-all hover:bg-black/30">
                      <span className="text-[10px] tracking-widest uppercase font-bold text-white/50 mb-2 font-brand">Step 1</span>
                      <span className="font-brand font-semibold text-base md:text-lg text-white">Prepared Data</span>
                    </div>

                    <ArrowRight aria-hidden="true" className="w-5 h-5 text-white/30 rotate-90 lg:rotate-0 hidden lg:block mx-2 flex-shrink-0" />
                    <div className="h-6 w-px bg-white/30 block lg:hidden my-2"></div>

                    {/* Box 2 */}
                    <div className="w-full lg:w-48 xl:w-56 h-28 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center p-4 backdrop-blur-sm transition-all hover:bg-white/10">
                      <span className="text-[10px] tracking-widest uppercase font-bold text-white/50 mb-2 font-brand">Step 2</span>
                      <span className="font-brand font-semibold text-base md:text-lg text-white">Ask Question</span>
                    </div>

                    <ArrowRight aria-hidden="true" className="w-5 h-5 text-white/30 rotate-90 lg:rotate-0 hidden lg:block mx-2 flex-shrink-0" />
                    <div className="h-6 w-px bg-white/30 block lg:hidden my-2"></div>

                    {/* Box 3 */}
                    <div className="w-full lg:w-48 xl:w-56 h-28 bg-white/10 border border-white/20 rounded-2xl flex flex-col items-center justify-center p-4 backdrop-blur-sm transition-all hover:bg-white/15">
                      <span className="text-[10px] tracking-widest uppercase font-bold text-white/50 mb-2 font-brand">Step 3</span>
                      <span className="font-brand font-semibold text-base md:text-lg text-white">Generate KPI</span>
                    </div>

                    <ArrowRight aria-hidden="true" className="w-5 h-5 text-white/30 rotate-90 lg:rotate-0 hidden lg:block mx-2 flex-shrink-0" />
                    <div className="h-6 w-px bg-white/30 block lg:hidden my-2"></div>

                    {/* Box 4 */}
                    <div className="w-full lg:w-48 xl:w-56 h-28 bg-white/20 border border-white/30 rounded-2xl flex flex-col items-center justify-center p-4 backdrop-blur-md shadow-2xl transition-all hover:bg-white/25">
                      <span className="text-[10px] tracking-widest uppercase font-bold text-white/70 mb-2 font-brand">Step 4</span>
                      <span className="font-brand font-semibold text-base md:text-lg text-white text-center leading-tight">Add to Dashboard/Report</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-2 mt-4 relative z-10 w-full">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left text-base md:text-lg font-brand">
                      <span className="text-white">The experience is centered around a single core action:</span>
                      <span className="bg-white text-[#7C4BF9] px-5 py-1.5 rounded-[20px] font-bold shadow-lg text-sm md:text-base whitespace-nowrap">"Add KPI"</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <p className="text-white/90 text-sm md:text-base font-brand font-medium tracking-wide leading-tight mb-2">
                        Users ask questions → AI generates insights → dashboards build over time.
                      </p>
                      <p className="text-white/50 italic text-xs md:text-sm font-brand leading-none">
                        *This experience assumes data is already prepared.*
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* =======================
            SECTION 02: CORE EXPERIENCES
        ======================== */}
        <div className="w-full bg-secondary/30 dark:bg-secondary/10 border-y border-border/40">
          <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-32">
            <FadeIn className="mb-24">
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-bold mb-6 font-brand">02 / Solution Deep Dive</p>
              <h2 className="font-display text-2xl md:text-4xl font-semibold text-foreground max-w-2xl leading-[1.2]">
                Core Experiences
              </h2>
              <p className="mt-6 font-brand text-base md:text-xl text-muted-foreground font-medium tracking-wide">
                Ask → Generate → Customize → Add → Dashboard/Report
              </p>
            </FadeIn>

            <div className="space-y-32">
              {/* Experience 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-center">
                <FadeIn className="order-2 lg:order-1 lg:col-span-7 w-full aspect-[4/3] lg:aspect-[16/9] bg-secondary/20 rounded-2xl border border-border/50 flex flex-col items-center justify-center overflow-hidden relative group">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 text-sm font-brand font-medium z-0 opacity-100 group-hover:opacity-0 transition-opacity">Image Placeholder</div>
                  {/* Mobile Asset */}
                  <img src="/exp1-mobile.png" alt="Interface showing a natural language prompt input" className="block lg:hidden relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                  {/* Desktop Asset */}
                  <img src="/exp1-desktop.png" alt="Interface showing a natural language prompt input" className="hidden lg:block relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                </FadeIn>

                <FadeIn delay={0.2} className="order-1 lg:order-2 lg:col-span-3">
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#7C4BF9] font-bold mb-2 font-brand">Core Experience 01</p>
                  <h3 className="font-display text-xl md:text-3xl font-semibold text-foreground mb-4 leading-[1.2]">
                    Start with a question, not configuration
                  </h3>
                  <p className="font-brand text-sm md:text-base text-muted-foreground leading-relaxed">
                    Instead of navigating complex configuration panels, users begin by <strong className="text-foreground">asking questions in natural language</strong>. <strong className="text-foreground">Suggested prompts</strong> help them get started without needing to understand the system.
                  </p>
                </FadeIn>
              </div>

              {/* Experience 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-center">
                <FadeIn className="lg:col-span-3">
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#7C4BF9] font-bold mb-2 font-brand">Core Experience 02</p>
                  <h3 className="font-display text-xl md:text-3xl font-semibold text-foreground mb-4 leading-[1.2]">
                    From question to insight
                  </h3>
                  <p className="font-brand text-sm md:text-base text-muted-foreground leading-relaxed">
                    AI converts the raw intent into a visual representation. We don't just
                    show a chart; we provide an <strong className="text-foreground">explanation of how the logic was derived</strong> to build trust.
                  </p>
                </FadeIn>

                <FadeIn delay={0.2} className="lg:col-span-7 w-full aspect-[4/3] lg:aspect-[16/9] bg-secondary/20 rounded-2xl border border-border/50 flex flex-col items-center justify-center overflow-hidden relative group">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 text-sm font-brand font-medium z-0 opacity-100 group-hover:opacity-0 transition-opacity">Image Placeholder</div>
                  {/* Mobile Asset */}
                  <img src="/exp2-mobile.png" alt="Interface showing AI converting a question to a chart" className="block lg:hidden relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                  {/* Desktop Asset */}
                  <img src="/exp2-desktop.png" alt="Interface showing AI converting a question to a chart" className="hidden lg:block relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                </FadeIn>
              </div>

              {/* Experience 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-center">
                <FadeIn className="order-2 lg:order-1 lg:col-span-7 w-full aspect-[4/3] lg:aspect-[16/9] bg-secondary/20 rounded-2xl border border-border/50 flex flex-col items-center justify-center overflow-hidden relative group">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 text-sm font-brand font-medium z-0 opacity-100 group-hover:opacity-0 transition-opacity">Image Placeholder</div>
                  {/* Mobile Asset */}
                  <img src="/exp3-mobile.png" alt="Interface showing chart customization controls" className="block lg:hidden relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                  {/* Desktop Asset */}
                  <img src="/exp3-desktop.png" alt="Interface showing chart customization controls" className="hidden lg:block relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                </FadeIn>

                <FadeIn delay={0.2} className="order-1 lg:order-2 lg:col-span-3">
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#7C4BF9] font-bold mb-2 font-brand">Core Experience 03</p>
                  <h3 className="font-display text-xl md:text-3xl font-semibold text-foreground mb-4 leading-[1.2]">
                    Balancing automation with control
                  </h3>
                  <p className="font-brand text-sm md:text-base text-muted-foreground leading-relaxed">
                    While AI handles the heavy lifting, users can still <strong className="text-foreground">tweak chart types</strong>,
                    visualization, and display settings.
                    We avoid "Black Box AI" by <strong className="text-foreground">keeping controls accessible</strong>.
                  </p>
                </FadeIn>
              </div>

              {/* Experience 4 */}
              <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-center">
                <FadeIn className="lg:col-span-3">
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#7C4BF9] font-bold mb-2 font-brand">Core Experience 04</p>
                  <h3 className="font-display text-xl md:text-3xl font-semibold text-foreground mb-4 leading-[1.2]">
                    Turning insights into building blocks
                  </h3>
                  <p className="font-brand text-sm md:text-base text-muted-foreground leading-relaxed">
                    Every generated KPI can be <strong className="text-foreground">added to a current dashboard/report</strong>, or their home screen.
                    This <strong className="text-foreground">modularity</strong> ensures insights aren't lost in the chat history.
                  </p>
                </FadeIn>

                <FadeIn delay={0.2} className="lg:col-span-7 w-full aspect-[4/3] lg:aspect-[16/9] bg-secondary/20 rounded-2xl border border-border/50 flex flex-col items-center justify-center overflow-hidden relative group">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 text-sm font-brand font-medium z-0 opacity-100 group-hover:opacity-0 transition-opacity">Image Placeholder</div>
                  {/* Mobile Asset */}
                  <img src="/exp4-mobile.png" alt="Interface showing individual KPIs added to a clean dashboard" className="block lg:hidden relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                  {/* Desktop Asset */}
                  <img src="/exp4-desktop.png" alt="Interface showing individual KPIs added to a clean dashboard" className="hidden lg:block relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                </FadeIn>
              </div>

              {/* Experience 5 */}
              <div className="flex flex-col gap-6 lg:gap-10">
                <FadeIn className="w-full">
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#7C4BF9] font-bold mb-2 font-brand">Core Experience 05</p>
                  <h3 className="font-display text-xl md:text-3xl font-semibold text-foreground mb-4 leading-[1.2]">
                    Dashboards as an outcome, not a starting point
                  </h3>
                  <p className="font-brand text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
                    Dashboards are <strong className="text-foreground">built incrementally</strong> from validated insights. Instead of starting with a blank canvas, users <strong className="text-foreground">add and organize insights</strong> they’ve already explored and refined.
                  </p>
                </FadeIn>

                <FadeIn delay={0.2} className="w-full aspect-[4/3] lg:aspect-[16/9] bg-secondary/20 rounded-2xl border border-border/50 flex flex-col items-center justify-center overflow-hidden relative group">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 text-sm font-brand font-medium z-0 opacity-100 group-hover:opacity-0 transition-opacity">Image Placeholder</div>
                  {/* Mobile Asset */}
                  <img src="/exp5-mobile.png" alt="Interface showing a generated dashboard constructed from modular insights" className="block lg:hidden relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                  {/* Desktop Asset */}
                  <img src="/exp5-desktop.png" alt="Interface showing a generated dashboard constructed from modular insights" className="hidden lg:block relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                </FadeIn>
              </div>
            </div>

            {/* Design Principles Sub-section (Acts as a divider) */}
            <div className="mt-40 bg-secondary/30 rounded-[32px] p-8 md:p-12 lg:p-16 border border-border/50">
              <FadeIn>
                <h3 className="font-display text-2xl md:text-3xl font-semibold mb-10 text-foreground">Design Principles Followed</h3>
              </FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <FadeIn delay={0.1} className="p-8 bg-background rounded-[20px] border border-border hover:border-[#7C4BF9]/50 transition-colors h-full group">
                  <Target aria-hidden="true" className="w-6 h-6 text-[#7C4BF9] mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="font-brand font-semibold text-lg mb-3 text-foreground">Intent over Config</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed font-brand">Prioritize what the user wants to achieve over how
                    they want to build it.</p>
                </FadeIn>
                <FadeIn delay={0.2} className="p-8 bg-background rounded-[20px] border border-border hover:border-[#7C4BF9]/50 transition-colors h-full group">
                  <Settings2 aria-hidden="true" className="w-6 h-6 text-[#7C4BF9] mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="font-brand font-semibold text-lg mb-3 text-foreground">Progressive Control</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed font-brand">Start simple with AI, but offer deep customization hooks when needed.</p>
                </FadeIn>
                <FadeIn delay={0.3} className="p-8 bg-background rounded-[20px] border border-border hover:border-[#7C4BF9]/50 transition-colors h-full group">
                  <Eye aria-hidden="true" className="w-6 h-6 text-[#7C4BF9] mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="font-brand font-semibold text-lg mb-3 text-foreground">Visibility of Logic</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed font-brand">Always explain the "Why" behind AI-generated metrics to build user trust.</p>
                </FadeIn>
                <FadeIn delay={0.4} className="p-8 bg-background rounded-[20px] border border-border hover:border-[#7C4BF9]/50 transition-colors h-full group">
                  <Compass aria-hidden="true" className="w-6 h-6 text-[#7C4BF9] mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="font-brand font-semibold text-lg mb-3 text-foreground">Exploration First</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed font-brand">Encourage asking questions as a way to discover hidden data insights.</p>
                </FadeIn>
              </div>
            </div>
          </section>
        </div>

        {/* =======================
            SECTION 03: PROCESS
        ======================== */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start relative">
            {/* LEFT COLUMN - Sticky - 40% (col-span-5) */}
            <div className="lg:col-span-5 lg:sticky lg:top-[100px] h-auto py-8 flex flex-col justify-center z-10 bg-background/80 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none">
              <FadeIn>
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-bold mb-6 font-brand">03 / Process</p>
                <h2 className="font-display text-2xl md:text-4xl font-semibold text-foreground max-w-2xl leading-[1.2] mb-6">
                  {`Designing under real constraints`}
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-brand max-w-md">
                  This was a rapid, iterative process shaped by real constraints. Working within a small team in an early-stage startup, <strong className="text-foreground">design and development happened in parallel</strong>, requiring constant collaboration. With limited time and resources, I relied on <strong className="text-foreground">continuous exploration</strong> and independent UX research to refine the experience while actively shipping the product.
                </p>
              </FadeIn>
            </div>

            {/* RIGHT COLUMN - Scrolling Cards Stack - 60% (col-span-7) */}
            <div className="lg:col-span-7 flex flex-col relative z-0 mt-8 lg:mt-0">
              {PROCESS_PHASES.map((phase, idx) => (
                <ProcessCard key={idx} phase={phase} index={idx} totalCards={PROCESS_PHASES.length} />
              ))}
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-border/40" />

        {/* =======================
            SECTION 04: THE OUTCOME
        ======================== */}
        <section className="bg-[#7C4BF9]/5 py-24 md:py-32 border-y border-[#7C4BF9]/10">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <FadeIn className="mb-16">
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#7C4BF9] font-bold mb-6 font-brand">04 / The Outcome</p>
              <h2 className="font-display text-2xl md:text-4xl font-semibold text-foreground max-w-2xl leading-[1.2]">
                From questions to insights, instantly
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FadeIn delay={0.1} className="p-8 bg-background rounded-[20px] border border-border flex flex-col gap-3 shadow-sm">
                <span className="text-[10px] font-brand font-bold text-[#7C4BF9] uppercase tracking-widest">01</span>
                <h3 className="font-brand text-base font-semibold text-foreground">Successfully launched</h3>
                <p className="text-xs md:text-sm text-muted-foreground font-brand leading-relaxed">Integrated into production, replacing hours of manual dashboard-building with instant insight generation.</p>
              </FadeIn>
              <FadeIn delay={0.2} className="p-8 bg-background rounded-[20px] border border-border flex flex-col gap-3 shadow-sm">
                <span className="text-[10px] font-brand font-bold text-[#7C4BF9] uppercase tracking-widest">02</span>
                <h3 className="font-brand text-base font-semibold text-foreground">0 coding required</h3>
                <p className="text-xs md:text-sm text-muted-foreground font-brand leading-relaxed">Users construct queries through plain-language questions, with no SQL or scripting knowledge needed.</p>
              </FadeIn>
              <FadeIn delay={0.3} className="p-8 bg-background rounded-[20px] border border-border flex flex-col gap-3 shadow-sm">
                <span className="text-[10px] font-brand font-bold text-[#7C4BF9] uppercase tracking-widest">03</span>
                <h3 className="font-brand text-base font-semibold text-foreground">Real-time data</h3>
                <p className="text-xs md:text-sm text-muted-foreground font-brand leading-relaxed">Dashboards update dynamically by combining historical records with live inputs on every query.</p>
              </FadeIn>
              <FadeIn delay={0.4} className="p-8 bg-background rounded-[20px] border border-border flex flex-col gap-3 shadow-sm">
                <span className="text-[10px] font-brand font-bold text-[#7C4BF9] uppercase tracking-widest">04</span>
                <h3 className="font-brand text-base font-semibold text-foreground">Minimum hallucinations</h3>
                <p className="text-xs md:text-sm text-muted-foreground font-brand leading-relaxed">AI is constrained to predefined data structures, ensuring high data fidelity and accuracy.</p>
              </FadeIn>
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-border/40" />

        {/* =======================
            SECTION: BEYOND ANALYTICS
        ======================== */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center bg-secondary/10 rounded-[24px] border border-border/50 p-8 md:p-12">
            <div className="w-full aspect-[16/10] bg-secondary/30 rounded-[16px] border border-border relative overflow-hidden">
              <img src="/etl-hero.png" alt="ETL data pipeline visual" className="w-full h-full object-cover object-top" />
            </div>
            <div className="flex flex-col items-start pr-0 lg:pr-8">
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-foreground mb-4">Beyond analytics</h3>
              <p className="font-brand text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                While designing this system, we realized that data preparation is critical for reliable insights. This led to designing a visual data pipeline system (covered in another case study).
              </p>
              <Button size="lg" className="font-brand font-semibold text-white bg-[#7C4BF9] hover:bg-[#6032c9] border-none shadow-md" asChild>
                <Link to="/work/etl-tool" onClick={() => { window.dispatchEvent(new Event("project-hover-end")); window.scrollTo(0, 0); }}>View Data Pipeline Case Study</Link>
              </Button>
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-border/40" />

        {/* =======================
            SECTION 05: KEY LEARNINGS
        ======================== */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-32">
          <FadeIn className="mb-16">
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-bold mb-6 font-brand">05 / Key Learnings</p>
            <h2 className="font-display text-2xl md:text-4xl font-semibold text-foreground max-w-2xl leading-[1.2]">
              Design principles that shaped the work
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn delay={0.1} className="bg-background rounded-[20px] p-8 border border-border h-full hover:border-[#7C4BF9]/50 transition-colors flex flex-col gap-4 shadow-sm">
              <span className="text-[10px] font-brand font-bold text-[#7C4BF9] uppercase tracking-widest">01</span>
              <h3 className="font-brand font-semibold text-base text-foreground">Trust before speed</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-brand">
                AI can generate a chart in milliseconds — but if the user doesn't trust the source, it's useless. Designing for data integrity is as important as designing for speed.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-background rounded-[20px] p-8 border border-border h-full hover:border-[#7C4BF9]/50 transition-colors flex flex-col gap-4 shadow-sm">
              <span className="text-[10px] font-brand font-bold text-[#7C4BF9] uppercase tracking-widest">02</span>
              <h3 className="font-brand font-semibold text-base text-foreground">Words are the interface</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-brand">
                In an intent-driven product, copywriting and suggested prompts are structural design decisions. An empty chat box is the most intimidating UI without guidance.
              </p>
            </FadeIn>
            <FadeIn delay={0.3} className="bg-background rounded-[20px] p-8 border border-border h-full hover:border-[#7C4BF9]/50 transition-colors flex flex-col gap-4 shadow-sm">
              <span className="text-[10px] font-brand font-bold text-[#7C4BF9] uppercase tracking-widest">03</span>
              <h3 className="font-brand font-semibold text-base text-foreground">Design and engineering are one</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-brand">
                Every UI decision had immediate implications on token counts, latency, and backend API structure. Silos don't work in AI-first products.
              </p>
            </FadeIn>
            <FadeIn delay={0.4} className="bg-background rounded-[20px] p-8 border border-border h-full hover:border-[#7C4BF9]/50 transition-colors flex flex-col gap-4 shadow-sm">
              <span className="text-[10px] font-brand font-bold text-[#7C4BF9] uppercase tracking-widest">04</span>
              <h3 className="font-brand font-semibold text-base text-foreground">Show the reasoning, not just the result</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-brand">
                Users don't trust AI outputs they can't verify. Exposing how a metric was derived — not just the chart — was the key to sustained adoption.
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
              {projects.filter(p => p.id !== "caudate-ai").map((project, idx) => (
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

export default CaseStudyCaudate;
