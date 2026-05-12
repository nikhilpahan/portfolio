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
  Database,
  Network,
  Wand2,
  Table,
  CheckCircle2,
  GitMerge,
  Filter,
  Layers,
  ArrowUpRight,
  Sparkles,
  LayoutDashboard,
  AlertCircle
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



const CaseStudyETL = () => {
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
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#7C4BF9] font-bold mb-6 font-brand">Case Study</p>
              <h1 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6 leading-[1.1]">
                From disconnected datasets <br className="hidden md:block" />
                to structured insights
              </h1>
              <div className="flex flex-col gap-6">
                <p className="font-brand text-base md:text-xl text-muted-foreground leading-relaxed max-w-3xl font-medium tracking-wide">
                  A visual, AI-assisted system that helps users combine and transform multiple data sources into analysis-ready datasets.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#7C4BF9]/10 border border-[#7C4BF9]/20 w-fit">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7C4BF9]" />
                  <span className="text-xs font-brand font-semibold text-[#7C4BF9] tracking-wide uppercase">Core Feature · CaudateAI Ecosystem</span>
                </div>
              </div>
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

          {/* Thumbnail */}
          <FadeIn delay={0.1} className="mb-16">
            <div className="w-full aspect-[45/32] bg-secondary/30 rounded-2xl border border-border relative overflow-hidden">
              <img src="/etl-hero.png" alt="ETL visual workflow hero" className="w-full h-full object-cover" />
            </div>
          </FadeIn>

          {/* Project Meta */}
          <FadeIn delay={0.2} className="py-8 border-t border-border/50">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 font-brand">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-widest text-muted-foreground font-normal">Timeline</p>
                <p className="text-base text-foreground font-normal">5 Weeks</p>
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
                <p className="text-base text-foreground font-normal leading-relaxed">Data Pipelines · Node-based UX · Visual Transformations</p>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-sm uppercase tracking-widest text-muted-foreground font-normal mb-6 font-brand">The Team</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 md:gap-x-10">
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

          {/* Executive Summary */}
          <FadeIn delay={0.3} className="mt-16 bg-secondary/20 rounded-[24px] border border-border/50 p-6 md:p-10">
            <h2 className="font-display font-semibold text-lg md:text-2xl text-foreground mb-6">At a Glance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col">
                <AlertCircle className="w-6 h-6 text-muted-foreground mb-4 opacity-80" />
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-3 font-brand">The Need</p>
                <div className="space-y-4 text-sm md:text-base text-muted-foreground font-brand leading-relaxed">
                  <p>
                    While users could analyze individual datasets, they struggled when their questions required <strong className="text-foreground">combining and transforming multiple data sources</strong>.
                  </p>
                  <p>
                    There was no simple way to structure data for analysis without relying on technical workflows.
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <Network className="w-6 h-6 text-[#7C4BF9] mb-4 opacity-80" />
                <p className="text-xs uppercase tracking-widest text-[#7C4BF9] font-bold mb-3 font-brand">The Approach</p>
                <div className="space-y-4 text-sm md:text-base text-muted-foreground font-brand leading-relaxed">
                  <p>
                    Designed a <strong className="text-foreground">node-based visual ETL system</strong> that allows users to combine datasets, apply transformations, and understand data flow through a clear, step-by-step pipeline.
                  </p>
                  <p>
                    AI assists by detecting issues and enabling quick data cleanup and previews during the process.
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-500 mb-4 opacity-80" />
                <p className="text-xs uppercase tracking-widest text-green-600 dark:text-green-500 font-bold mb-3 font-brand">The Outcome</p>
                <div className="text-sm md:text-base text-muted-foreground font-brand leading-relaxed">
                  <p>
                    Users can create structured, analysis-ready datasets by combining multiple sources—<strong className="text-foreground">without depending on analysts or writing complex queries</strong>.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        <div className="h-px w-full bg-border/40" />

        {/* =======================
            SECTION 01: THE PROBLEM
        ======================== */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <FadeIn>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-bold mb-6 font-brand">01 / The Problem</p>
              <h2 className="font-display text-2xl md:text-4xl font-semibold text-foreground mb-6 leading-[1.2]">
                From simple queries to complex data workflows.
              </h2>
              <div className="space-y-6 text-muted-foreground font-brand text-base leading-relaxed">
                <div className="space-y-4">
                  <p>
                    Following the initial analytics experience, it became clear that users could analyze individual datasets but struggled when their questions required <strong className="text-foreground">combining multiple data sources</strong>.
                  </p>
                  <p>
                    While AI-assisted cleanup improved data quality, users lacked a way to <strong className="text-foreground">connect and transform datasets into a unified structure</strong> for deeper analysis.
                  </p>
                  <p>
                    This made workflows <strong className="text-foreground">dependent on analysts or engineers</strong> for even simple data combinations.
                  </p>
                </div>
                <blockquote className="pl-6 border-l-2 border-[#7C4BF9] italic text-foreground font-medium py-2">
                  "Data preparation became the real barrier—insights depend on how data is structured and combined."
                </blockquote>
              </div>
            </FadeIn>

            {/* Workflow Diagram */}
            <FadeIn delay={0.2} className="w-full bg-secondary/20 rounded-[24px] border border-border/50 p-6 md:p-10 flex flex-col items-center justify-center gap-6 h-full min-h-[300px] overflow-x-auto">
              <div className="flex justify-start md:justify-center items-center gap-4 w-full min-w-max md:min-w-0 pb-2">
                <div className="flex flex-col gap-3">
                  <div className="w-32 h-12 bg-background border border-border rounded-lg flex items-center justify-center shadow-sm">
                    <Database className="w-4 h-4 text-muted-foreground mr-2" /><span className="text-xs font-brand font-medium">Dataset A</span>
                  </div>
                  <div className="w-32 h-12 bg-background border border-border rounded-lg flex items-center justify-center shadow-sm">
                    <Database className="w-4 h-4 text-muted-foreground mr-2" /><span className="text-xs font-brand font-medium">Dataset B</span>
                  </div>
                </div>
                <div className="flex flex-col items-center px-4">
                  <Network className="w-8 h-8 text-[#7C4BF9] opacity-80" />
                  <div className="h-px w-16 bg-[#7C4BF9]/40 mt-4 mb-4"></div>
                </div>
                <div className="w-36 h-28 bg-[#7C4BF9]/10 border border-[#7C4BF9]/30 rounded-xl flex flex-col items-center justify-center shadow-md relative overflow-hidden">
                  <Sparkles className="w-6 h-6 text-[#7C4BF9] mb-2 absolute top-2 right-2 opacity-20" />
                  <Table className="w-6 h-6 text-[#7C4BF9] mb-2" />
                  <span className="text-xs font-brand font-semibold text-[#7C4BF9] text-center px-2">Structured Output</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <div className="h-px w-full bg-border/40" />

        {/* =======================
            SECTION 02: TRANSLATING LOGIC
        ======================== */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-32">
          <FadeIn className="mb-16 md:mb-24">
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-bold mb-6 font-brand text-left">02 / Solution</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start text-left">
              <h2 className="font-display text-2xl md:text-4xl font-semibold text-[#7C4BF9] leading-[1.2] max-w-xl">
                Turning data transformation into a visual workflow
              </h2>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground font-brand leading-relaxed pt-1">
                <p>
                  To reduce the complexity of combining and transforming datasets, I designed a <strong className="text-foreground">visual workflow</strong> where each step is represented as <strong className="text-foreground">a block in a pipeline</strong>.
                </p>
                <p>
                  Users can connect datasets, apply transformations, and <strong className="text-foreground">follow how data flows through each step</strong>—without needing to configure logic manually.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="w-full min-h-[300px] md:aspect-[21/9] bg-secondary/20 rounded-[24px] border border-border relative mb-12 overflow-x-auto md:overflow-hidden">
            {/* Subtle dot-grid background */}
            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle, rgba(124,75,249,0.15) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
            {/* Label */}
            <div className="absolute top-5 left-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#7C4BF9]" />
              <span className="text-[10px] font-brand font-bold text-muted-foreground uppercase tracking-widest">Visual Pipeline · Live Preview</span>
            </div>
            {/* Diagram — scrolls horizontally on mobile, centered on desktop */}
            <div className="md:absolute md:inset-0 flex items-center justify-start md:justify-center px-6 md:px-14 pt-14 pb-8 md:pt-0 md:pb-0">
              <div className="flex items-center w-full max-w-5xl min-w-max md:min-w-0 pb-4">
                {/* SOURCES */}
                <div className="flex flex-col gap-3 flex-shrink-0">
                  <div className="bg-background border border-border rounded-xl px-3 py-2.5 w-36 md:w-44 shadow-sm">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-5 h-5 rounded-md bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                        <Table className="w-2.5 h-2.5 text-emerald-600" />
                      </div>
                      <span className="text-[9px] font-brand font-bold text-muted-foreground uppercase tracking-widest">Source A</span>
                    </div>
                    <p className="text-[11px] font-brand text-foreground font-semibold leading-none">sales_2024.csv</p>
                    <p className="text-[9px] text-muted-foreground font-brand mt-1">1,204 rows · 8 cols</p>
                  </div>
                  <div className="bg-background border border-border rounded-xl px-3 py-2.5 w-36 md:w-44 shadow-sm">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-5 h-5 rounded-md bg-blue-500/10 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                        <Database className="w-2.5 h-2.5 text-blue-500" />
                      </div>
                      <span className="text-[9px] font-brand font-bold text-muted-foreground uppercase tracking-widest">Source B</span>
                    </div>
                    <p className="text-[11px] font-brand text-foreground font-semibold leading-none">customers.db</p>
                    <p className="text-[9px] text-muted-foreground font-brand mt-1">847 rows · 5 cols</p>
                  </div>
                </div>
                {/* SVG fan: 2 sources → JOIN */}
                <svg width="72" height="104" viewBox="0 0 72 104" fill="none" className="flex-shrink-0">
                  <path d="M 0 26 C 36 26 36 52 72 52" stroke="#7C4BF9" strokeWidth="1.5" strokeOpacity="0.55" fill="none" />
                  <path d="M 0 78 C 36 78 36 52 72 52" stroke="#7C4BF9" strokeWidth="1.5" strokeOpacity="0.55" fill="none" />
                </svg>
                {/* JOIN node */}
                <div className="flex-shrink-0 bg-[#7C4BF9]/5 border-2 border-[#7C4BF9]/50 rounded-xl px-3 py-3 shadow-sm">
                  <div className="flex items-center gap-1.5 mb-1">
                    <GitMerge className="w-3 h-3 text-[#7C4BF9]" />
                    <span className="text-[9px] font-brand font-bold text-[#7C4BF9] uppercase tracking-widest">Join</span>
                  </div>
                  <p className="text-[10px] font-brand text-[#7C4BF9]/80 whitespace-nowrap">on customer_id</p>
                </div>
                {/* Arrow */}
                <div className="flex items-center flex-shrink-0 mx-2">
                  <div className="w-6 h-px bg-border/80" />
                  <ArrowRight className="w-3 h-3 text-muted-foreground/40 -ml-0.5 flex-shrink-0" />
                </div>
                {/* TRANSFORMS */}
                <div className="flex flex-col gap-2 flex-shrink-0">
                  <div className="bg-background border border-border rounded-lg px-2.5 py-2">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <Filter className="w-2.5 h-2.5 text-muted-foreground" />
                      <span className="text-[9px] font-brand font-bold text-muted-foreground uppercase tracking-widest">Filter</span>
                    </div>
                    <p className="text-[10px] font-brand text-foreground">region = "EMEA"</p>
                  </div>
                  <div className="bg-background border border-border rounded-lg px-2.5 py-2">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <Layers className="w-2.5 h-2.5 text-muted-foreground" />
                      <span className="text-[9px] font-brand font-bold text-muted-foreground uppercase tracking-widest">Rename</span>
                    </div>
                    <p className="text-[10px] font-brand text-foreground">cust_id → id</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1.5 bg-[#7C4BF9]/5 border border-[#7C4BF9]/25 rounded-lg">
                    <Sparkles className="w-2.5 h-2.5 text-[#7C4BF9] flex-shrink-0" />
                    <span className="text-[9px] font-brand text-[#7C4BF9] leading-none">Normalize "region" to uppercase?</span>
                  </div>
                </div>
                {/* Arrow */}
                <div className="flex items-center flex-shrink-0 mx-2">
                  <div className="w-6 h-px bg-border/80" />
                  <ArrowRight className="w-3 h-3 text-muted-foreground/40 -ml-0.5 flex-shrink-0" />
                </div>
                {/* OUTPUT */}
                <div className="flex-1 min-w-0 bg-background border-2 border-[#7C4BF9]/30 rounded-xl p-3 shadow-sm">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-[9px] font-brand font-bold text-foreground uppercase tracking-widest">Output · Ready</span>
                    </div>
                    <span className="text-[9px] font-brand text-muted-foreground">2,051 rows</span>
                  </div>
                  <div className="border border-border rounded-lg overflow-hidden text-[9px] font-brand">
                    <div className="grid grid-cols-3 bg-secondary/60 border-b border-border">
                      <div className="px-2 py-1 font-brand font-bold text-muted-foreground uppercase">id</div>
                      <div className="px-2 py-1 font-brand font-bold text-muted-foreground uppercase border-x border-border">name</div>
                      <div className="px-2 py-1 font-brand font-bold text-muted-foreground uppercase">region</div>
                    </div>
                    <div className="grid grid-cols-3 border-b border-border/50">
                      <div className="px-2 py-1 text-foreground">001</div>
                      <div className="px-2 py-1 text-foreground border-x border-border/50">Arya S.</div>
                      <div className="px-2 py-1 text-[#7C4BF9] font-semibold">EMEA</div>
                    </div>
                    <div className="grid grid-cols-3 border-b border-border/50">
                      <div className="px-2 py-1 text-foreground">002</div>
                      <div className="px-2 py-1 text-foreground border-x border-border/50">Riya K.</div>
                      <div className="px-2 py-1 text-[#7C4BF9] font-semibold">EMEA</div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="px-2 py-1 text-muted-foreground/50">···</div>
                      <div className="px-2 py-1 text-muted-foreground/50 border-x border-border/50">···</div>
                      <div className="px-2 py-1 text-muted-foreground/50">···</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} className="max-w-3xl mx-auto mb-16 md:mb-24">
            <blockquote className="text-center font-brand text-lg md:text-xl text-foreground font-medium leading-relaxed italic border-y border-border/40 py-8">
              "Data transformation becomes a series of clear, visual steps instead of hidden logic."
            </blockquote>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="w-full bg-secondary/10 border border-border/50 py-12 md:py-16 rounded-[24px] flex flex-col shadow-sm relative overflow-hidden">
              <div className="px-6 md:px-10 mb-6 md:mb-10 w-full max-w-5xl mx-auto">
                <p className="text-[10px] md:text-xs uppercase tracking-widest font-brand font-bold text-muted-foreground">System Flow</p>
              </div>

              <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-2 lg:gap-3 px-6 md:px-10 w-full max-w-5xl mx-auto">

                {/* Step 1 */}
                <div className="w-full lg:w-0 lg:flex-1 h-auto min-h-[110px] bg-background border border-border hover:border-[#7C4BF9]/50 transition-colors rounded-xl p-4 md:p-5 flex flex-col justify-between shadow-sm relative z-10 group">
                  <span className="text-[10px] text-[#7C4BF9] font-bold font-brand tracking-widest opacity-80 group-hover:opacity-100 transition-opacity mb-2">01</span>
                  <div>
                    <h4 className="font-brand font-semibold text-base xl:text-lg text-foreground mb-0.5 whitespace-nowrap">Connect</h4>
                    <p className="text-[11px] lg:text-xs text-muted-foreground font-brand leading-[1.3] pr-2">Multiple datasets</p>
                  </div>
                </div>

                <div className="flex items-center justify-center py-1 lg:py-0 px-0 xl:px-1">
                  <ArrowRight className="w-4 h-4 text-[#7C4BF9]/40 flex-shrink-0 rotate-90 lg:rotate-0" />
                </div>

                {/* Step 2 */}
                <div className="w-full lg:w-0 lg:flex-1 h-auto min-h-[110px] bg-background border border-border hover:border-[#7C4BF9]/50 transition-colors rounded-xl p-4 md:p-5 flex flex-col justify-between shadow-sm relative z-10 group">
                  <span className="text-[10px] text-[#7C4BF9] font-bold font-brand tracking-widest opacity-80 group-hover:opacity-100 transition-opacity mb-2">02</span>
                  <div>
                    <h4 className="font-brand font-semibold text-base xl:text-lg text-foreground mb-0.5 whitespace-nowrap">Preview</h4>
                    <p className="text-[11px] lg:text-xs text-muted-foreground font-brand leading-[1.3] pr-2">AI-assisted cleanup</p>
                  </div>
                </div>

                <div className="flex items-center justify-center py-1 lg:py-0 px-0 xl:px-1">
                  <ArrowRight className="w-4 h-4 text-[#7C4BF9]/40 flex-shrink-0 rotate-90 lg:rotate-0" />
                </div>

                {/* Step 3 */}
                <div className="w-full lg:w-0 lg:flex-1 h-auto min-h-[110px] bg-background border border-border hover:border-[#7C4BF9]/50 transition-colors rounded-xl p-4 md:p-5 flex flex-col justify-between shadow-sm relative z-10 group">
                  <span className="text-[10px] text-[#7C4BF9] font-bold font-brand tracking-widest opacity-80 group-hover:opacity-100 transition-opacity mb-2">03</span>
                  <div>
                    <h4 className="font-brand font-semibold text-base xl:text-lg text-foreground mb-0.5 whitespace-nowrap">Combine</h4>
                    <p className="text-[11px] lg:text-xs text-muted-foreground font-brand leading-[1.3] pr-2">Visual transforms</p>
                  </div>
                </div>

                <div className="flex items-center justify-center py-1 lg:py-0 px-0 xl:px-1">
                  <ArrowRight className="w-4 h-4 text-[#7C4BF9]/40 flex-shrink-0 rotate-90 lg:rotate-0" />
                </div>

                {/* Step 4 */}
                <div className="w-full lg:w-0 lg:flex-1 h-auto min-h-[110px] bg-background border border-border hover:border-[#7C4BF9]/50 transition-colors rounded-xl p-4 md:p-5 flex flex-col justify-between shadow-sm relative z-10 group">
                  <span className="text-[10px] text-[#7C4BF9] font-bold font-brand tracking-widest opacity-80 group-hover:opacity-100 transition-opacity mb-2">04</span>
                  <div>
                    <h4 className="font-brand font-semibold text-base xl:text-lg text-foreground mb-0.5 whitespace-nowrap">Output</h4>
                    <p className="text-[11px] lg:text-xs text-muted-foreground font-brand leading-[1.3] pr-2">Structured data</p>
                  </div>
                </div>

                <div className="flex items-center justify-center py-1 lg:py-0 px-0 xl:px-1">
                  <ArrowRight className="w-4 h-4 text-[#7C4BF9]/40 flex-shrink-0 rotate-90 lg:rotate-0" />
                </div>

                {/* Step 5 */}
                <div className="w-full lg:w-0 lg:flex-1 h-auto min-h-[110px] bg-[#7C4BF9]/10 border-2 border-[#7C4BF9]/30 rounded-xl p-4 md:p-5 flex flex-col justify-between shadow-sm relative z-10 group transform hover:scale-[1.02] transition-transform">
                  <span className="text-[10px] text-[#7C4BF9] font-bold font-brand tracking-widest opacity-90 group-hover:opacity-100 transition-opacity mb-2">05</span>
                  <div>
                    <h4 className="font-brand font-bold text-base xl:text-lg text-[#7C4BF9] mb-0.5 whitespace-nowrap">Use</h4>
                    <p className="text-[11px] lg:text-xs text-[#7C4BF9]/80 font-brand leading-[1.3] pr-2">Generate Insights</p>
                  </div>
                </div>

              </div>
            </div>
          </FadeIn>
        </section>

        {/* =======================
            SECTION 04: CORE EXPERIENCES
        ======================== */}
        <div className="w-full bg-secondary/30 dark:bg-secondary/10 border-y border-border/40">
          <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-32">
            <FadeIn className="mb-24">
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-bold mb-6 font-brand">04 / Core Experiences</p>
              <h2 className="font-display text-2xl md:text-4xl font-semibold text-foreground max-w-2xl leading-[1.2]">
                From raw data to structured dataset
              </h2>
            </FadeIn>

            <div className="space-y-32">
              {/* Experience 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-center">
                <FadeIn className="order-2 lg:order-1 lg:col-span-7 w-full aspect-[16/10] bg-secondary/20 rounded-[20px] border border-border relative overflow-hidden group">
                  <img
                    src="/etl-core-01-connect.png"
                    alt="Dataset upload and connection"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </FadeIn>
                <FadeIn delay={0.2} className="order-1 lg:order-2 lg:col-span-3">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2 font-brand">Step 01</p>
                  <h3 className="font-display text-xl md:text-3xl font-semibold text-foreground mb-4">
                    Connecting and preparing data
                  </h3>
                  <p className="font-brand text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                    Users start by connecting one or more datasets. The system provides a preview along with <strong className="text-foreground">AI-assisted cleanup</strong> to <strong className="text-foreground">detect inconsistencies before transformation</strong>.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold text-[#7C4BF9] border border-[#7C4BF9]/25 rounded-md bg-[#7C4BF9]/5 font-brand">Supports multiple data sources (CSV, database, etc.)</span>
                    <span className="px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold text-[#7C4BF9] border border-[#7C4BF9]/25 rounded-md bg-[#7C4BF9]/5 font-brand">AI detects missing values and inconsistencies</span>
                    <span className="px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold text-[#7C4BF9] border border-[#7C4BF9]/25 rounded-md bg-[#7C4BF9]/5 font-brand">Users can clean data before building transformations</span>
                  </div>
                </FadeIn>
              </div>

              {/* Experience 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-center">
                <FadeIn className="lg:col-span-3">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2 font-brand">Step 02</p>
                  <h3 className="font-display text-xl md:text-3xl font-semibold text-foreground mb-4">
                    Building the transformation pipeline
                  </h3>
                  <p className="font-brand text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                    Users construct their workflow by connecting datasets and transformation nodes on a <strong className="text-foreground">visual canvas</strong>. Each connection defines <strong className="text-foreground">how data flows through the pipeline</strong>.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold text-[#7C4BF9] border border-[#7C4BF9]/25 rounded-md bg-[#7C4BF9]/5 font-brand">Each node represents a transformation</span>
                    <span className="px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold text-[#7C4BF9] border border-[#7C4BF9]/25 rounded-md bg-[#7C4BF9]/5 font-brand">Connections define data flow</span>
                    <span className="px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold text-[#7C4BF9] border border-[#7C4BF9]/25 rounded-md bg-[#7C4BF9]/5 font-brand">Users build workflows visually</span>
                  </div>
                </FadeIn>
                <FadeIn delay={0.2} className="lg:col-span-7 w-full aspect-[16/10] bg-secondary/20 rounded-[20px] border border-border relative overflow-hidden group">
                  <img
                    src="/etl-core-02-pipeline.png"
                    alt="Visual pipeline canvas"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </FadeIn>
              </div>

              {/* Experience 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-center">
                <FadeIn className="order-2 lg:order-1 lg:col-span-7 w-full aspect-[16/10] bg-secondary/20 rounded-[20px] border border-border relative overflow-hidden group">
                  <img
                    src="/etl-core-03-transform.png"
                    alt="Transformation modal"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </FadeIn>
                <FadeIn delay={0.2} className="order-1 lg:order-2 lg:col-span-3">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2 font-brand">Step 03</p>
                  <h3 className="font-display text-xl md:text-3xl font-semibold text-foreground mb-4">
                    Applying transformations step by step
                  </h3>
                  <p className="font-brand text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                    Users apply transformations like <strong className="text-foreground">filter, join, and aggregate</strong> directly on nodes. The system assists with AI-powered suggestions, helping users define logic <strong className="text-foreground">without writing queries</strong>.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold text-[#7C4BF9] border border-[#7C4BF9]/25 rounded-md bg-[#7C4BF9]/5 font-brand">Select and configure transformations directly on nodes</span>
                    <span className="px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold text-[#7C4BF9] border border-[#7C4BF9]/25 rounded-md bg-[#7C4BF9]/5 font-brand">AI suggests relevant transformations based on data context</span>
                    <span className="px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold text-[#7C4BF9] border border-[#7C4BF9]/25 rounded-md bg-[#7C4BF9]/5 font-brand">Users can apply logic without writing SQL</span>
                  </div>
                </FadeIn>
              </div>

              {/* Experience 4 */}
              <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-center">
                <FadeIn className="lg:col-span-3">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2 font-brand">Step 04</p>
                  <h3 className="font-display text-xl md:text-3xl font-semibold text-foreground mb-4">
                    Previewing changes before applying
                  </h3>
                  <p className="font-brand text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                    Each transformation shows a <strong className="text-foreground">before-and-after preview</strong>, helping users <strong className="text-foreground">validate changes before applying them</strong>.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold text-[#7C4BF9] border border-[#7C4BF9]/25 rounded-md bg-[#7C4BF9]/5 font-brand">Compare before and after changes</span>
                    <span className="px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold text-[#7C4BF9] border border-[#7C4BF9]/25 rounded-md bg-[#7C4BF9]/5 font-brand">Instant feedback on transformations</span>
                    <span className="px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold text-[#7C4BF9] border border-[#7C4BF9]/25 rounded-md bg-[#7C4BF9]/5 font-brand">Reduces the risk of incorrect data operations</span>
                  </div>
                </FadeIn>
                <FadeIn delay={0.2} className="lg:col-span-7 w-full aspect-[16/10] bg-secondary/20 rounded-[20px] border border-border relative overflow-hidden group">
                  <img
                    src="/etl-core-04-preview.png"
                    alt="Split view before and after"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </FadeIn>
              </div>

              {/* Experience 5 */}
              <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-center">
                <FadeIn className="order-2 lg:order-1 lg:col-span-7 w-full aspect-[16/10] bg-secondary/20 rounded-[20px] border border-border relative overflow-hidden group">
                  <img
                    src="/etl-core-05-output.png"
                    alt="Final structured dataset"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </FadeIn>
                <FadeIn delay={0.2} className="order-1 lg:order-2 lg:col-span-3">
                  <p className="text-[10px] uppercase tracking-widest text-[#7C4BF9] font-bold mb-2 font-brand">Step 05</p>
                  <h3 className="font-display text-xl md:text-3xl font-semibold text-foreground mb-4">
                    Generating a structured dataset
                  </h3>
                  <p className="font-brand text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                    The final output is a <strong className="text-foreground">clean, structured dataset</strong> that can be used for <strong className="text-foreground">further analysis and generating insights</strong>.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold text-[#7C4BF9] border border-[#7C4BF9]/25 rounded-md bg-[#7C4BF9]/5 font-brand">Unified dataset created from transformations</span>
                    <span className="px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold text-[#7C4BF9] border border-[#7C4BF9]/25 rounded-md bg-[#7C4BF9]/5 font-brand">Structured and analysis-ready</span>
                    <span className="px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold text-[#7C4BF9] border border-[#7C4BF9]/25 rounded-md bg-[#7C4BF9]/5 font-brand">Can be saved or exported</span>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>
        </div>

        {/* =======================
            SECTION 05: DESIGN PROCESS
        ======================== */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-32">

          {/* Section Header — 2 column */}
          <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-16 md:mb-20">
            <div>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-bold mb-8 font-brand">05 / Design Process</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold leading-[1.15] text-foreground">
                Designing under <em className="italic text-[#7C4BF9]">real</em><br />
                <span className="text-[#7C4BF9]">constraints</span>.
              </h2>
            </div>
            <div className="flex items-end pb-1">
              <p className="text-sm md:text-base text-muted-foreground font-brand leading-relaxed">
                A rapid, iterative process shaped by real constraints. Inside a small early-stage team, design and development happened in parallel — requiring constant collaboration and quick decisions. I leaned on continuous exploration, use-case-driven thinking, and independent UX research to refine the experience while shipping.
              </p>
            </div>
          </FadeIn>

          {/* Process Cards */}
          <div className="flex flex-col gap-3">

            {/* 01 — Understanding existing tools */}
            <FadeIn className="grid grid-cols-1 lg:grid-cols-[2.5fr_4fr] gap-8 bg-secondary/30 border border-border rounded-[20px] p-6 md:p-8 items-start">
              <div>
                <p className="text-[10px] text-muted-foreground font-bold font-brand tracking-widest mb-3">01</p>
                <h3 className="font-brand font-semibold text-base md:text-[17px] text-foreground mb-3">Understanding why existing tools fail non-technical users</h3>
                <p className="text-xs md:text-sm text-muted-foreground font-brand leading-relaxed">Analyzed tools like Zoho DataPrep, Tableau Prep, and Alteryx to understand where they break down. While powerful, they rely heavily on technical mental models, making multi-dataset workflows difficult for non-technical users.</p>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-2 lg:mt-0">
                {[
                  { name: "Zoho DataPrep", src: "/etl-process-01-zoho.png" },
                  { name: "Tableau Prep", src: "/etl-process-01-tableau.png" },
                  { name: "Alteryx", src: "/etl-process-01-alteryx.png" },
                ].map((tool) => (
                  <div key={tool.name} className="flex flex-col gap-1.5">
                    <div className="w-full bg-secondary/40 border border-border rounded-lg overflow-hidden aspect-[16/10]">
                      <img src={tool.src} alt={tool.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[9px] font-brand font-medium text-muted-foreground text-center uppercase tracking-wider">{tool.name}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* 02 — Identifying the gap */}
            <FadeIn delay={0.05} className="grid grid-cols-1 lg:grid-cols-[2.5fr_4fr] gap-8 bg-secondary/30 border border-border rounded-[20px] p-6 md:p-8 items-center">
              <div>
                <p className="text-[10px] text-muted-foreground font-bold font-brand tracking-widest mb-3">02</p>
                <h3 className="font-brand font-semibold text-base md:text-[17px] text-foreground mb-3">The gap between single-dataset cleanup and multi-dataset workflows</h3>
                <p className="text-xs md:text-sm text-muted-foreground font-brand leading-relaxed">Most tools handle single datasets well, but combining multiple sources introduces complexity. Users struggle to structure and unify data without writing queries or understanding schemas.</p>
              </div>
              {/* Gap diagram — wrapped container */}
              <div className="bg-background border border-border rounded-2xl p-5 overflow-x-auto">
                <div className="flex items-center justify-between gap-2 min-w-max md:min-w-0 pb-2">
                  {/* Left: 1 dataset box — absolute limitation floats below without disrupting centering */}
                  <div className="relative flex-shrink-0 pb-5">
                    <div className="px-4 py-2 border border-border rounded-xl bg-secondary/20">
                      <span className="text-[11px] font-brand font-semibold text-foreground">1 dataset</span>
                    </div>
                    <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-[10px] font-brand text-red-500 font-semibold whitespace-nowrap">limitation</span>
                  </div>
                  {/* Dashed gap connector — flex-1 fills available space, label + line emphasized */}
                  <div className="flex-1 flex flex-col items-center gap-1 px-3">
                    <span className="text-[10px] font-brand font-bold text-foreground/70 tracking-widest uppercase">gap</span>
                    <div className="w-full border-t-2 border-dashed border-foreground/30"></div>
                  </div>
                  {/* 3 empty rectangles */}
                  <div className="flex flex-col gap-2 flex-shrink-0">
                    <div className="w-16 h-7 border border-border rounded-lg bg-secondary/20" />
                    <div className="w-16 h-7 border border-border rounded-lg bg-secondary/20" />
                    <div className="w-16 h-7 border border-border rounded-lg bg-secondary/20" />
                  </div>
                  {/* SVG: 3 paths converging right to unified */}
                  <svg width="60" height="84" viewBox="0 0 60 84" fill="none" className="flex-shrink-0">
                    <path d="M 0 14 C 30 14 30 42 60 42" stroke="#7C4BF9" strokeWidth="1.5" strokeOpacity="0.7" fill="none" />
                    <path d="M 0 42 L 60 42" stroke="#7C4BF9" strokeWidth="1.5" strokeOpacity="0.7" fill="none" />
                    <path d="M 0 70 C 30 70 30 42 60 42" stroke="#7C4BF9" strokeWidth="1.5" strokeOpacity="0.7" fill="none" />
                  </svg>
                  {/* Unified box */}
                  <div className="px-5 py-2.5 border-2 border-[#7C4BF9]/60 rounded-xl bg-[#7C4BF9]/10 flex-shrink-0">
                    <span className="text-[12px] font-brand font-semibold text-[#7C4BF9]">unified</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* 03 — Exploring interaction models */}
            <FadeIn delay={0.05} className="grid grid-cols-1 lg:grid-cols-[2.5fr_4fr] gap-8 bg-secondary/30 border border-border rounded-[20px] p-6 md:p-8 items-center">
              <div>
                <p className="text-[10px] text-muted-foreground font-bold font-brand tracking-widest mb-3">03</p>
                <h3 className="font-brand font-semibold text-base md:text-[17px] text-foreground mb-3">From form-based inputs to visual data flows</h3>
                <p className="text-xs md:text-sm text-muted-foreground font-brand leading-relaxed">Form-based configurations hide relationships between transformations. A visual pipeline makes dependencies explicit, helping users understand how data evolves step by step.</p>
              </div>
              {/* Form vs Pipeline side-by-side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* A — FORM */}
                <div className="bg-background border border-border rounded-xl p-4 flex flex-col gap-3">
                  <span className="text-[9px] font-brand font-bold text-muted-foreground tracking-widest">A — FORM</span>
                  <div className="flex flex-col gap-2">
                    <div className="h-2.5 rounded-full bg-secondary/70 w-full" />
                    <div className="h-2.5 rounded-full bg-secondary/70 w-5/6" />
                    <div className="h-2.5 rounded-full bg-secondary/60 w-full" />
                    <div className="h-2.5 rounded-full bg-secondary/60 w-3/5" />
                  </div>
                </div>
                {/* B — PIPELINE */}
                <div className="bg-[#7C4BF9]/5 border border-[#7C4BF9]/30 rounded-xl p-4 flex flex-col gap-3">
                  <span className="text-[9px] font-brand font-bold text-[#7C4BF9] tracking-widest">B — PIPELINE ✓</span>
                  <div className="flex items-center gap-1">
                    {/* 2 input nodes */}
                    <div className="flex flex-col gap-2 flex-shrink-0">
                      <div className="w-8 h-6 border border-[#7C4BF9]/40 rounded-md bg-background" />
                      <div className="w-8 h-6 border border-[#7C4BF9]/40 rounded-md bg-background" />
                    </div>
                    {/* SVG: fan from 2 inputs */}
                    <svg width="22" height="44" viewBox="0 0 22 44" fill="none" className="flex-shrink-0">
                      <path d="M 0 11 C 11 11 11 22 22 22" stroke="#7C4BF9" strokeWidth="1.2" strokeOpacity="0.6" fill="none" />
                      <path d="M 0 33 C 11 33 11 22 22 22" stroke="#7C4BF9" strokeWidth="1.2" strokeOpacity="0.6" fill="none" />
                    </svg>
                    {/* Middle node */}
                    <div className="w-9 h-6 border border-[#7C4BF9]/40 rounded-md bg-background flex-shrink-0" />
                    {/* Line */}
                    <div className="w-3 h-px bg-[#7C4BF9]/40" />
                    {/* Output node */}
                    <div className="w-9 h-6 border border-[#7C4BF9]/40 rounded-md bg-background flex-shrink-0" />
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* 04 — Node-based approach */}
            <FadeIn delay={0.05} className="grid grid-cols-1 lg:grid-cols-[2.5fr_4fr] gap-8 bg-secondary/30 border border-border rounded-[20px] p-6 md:p-8 items-center">
              <div>
                <p className="text-[10px] text-muted-foreground font-bold font-brand tracking-widest mb-3">04</p>
                <h3 className="font-brand font-semibold text-base md:text-[17px] text-foreground mb-3">Designing a system users can reason about</h3>
                <p className="text-xs md:text-sm text-muted-foreground font-brand leading-relaxed">A node-based canvas allows users to construct workflows visually. Each step becomes a manipulable unit, making complex transformations easier to build, modify, and debug.</p>
              </div>
              {/* Node canvas — 3 inputs → SVG curves → JOIN → output */}
              <div className="bg-background border border-border rounded-2xl p-6 overflow-x-auto">
                <div className="flex items-center justify-start gap-2 min-w-max md:min-w-0 pb-2">
                  {/* 3 input nodes — visible with secondary fill */}
                <div className="flex flex-col gap-3 flex-shrink-0">
                  <div className="w-12 h-8 border border-border rounded-lg bg-secondary/40" />
                  <div className="w-12 h-8 border border-border rounded-lg bg-secondary/40" />
                  <div className="w-12 h-8 border border-border rounded-lg bg-secondary/40" />
                </div>
                {/* SVG curves converging into JOIN */}
                <svg width="68" height="92" viewBox="0 0 68 92" fill="none" className="flex-shrink-0">
                  <path d="M 0 16 C 34 16 34 46 68 46" stroke="#7C4BF9" strokeWidth="1.8" strokeOpacity="0.75" fill="none" />
                  <path d="M 0 46 L 68 46" stroke="#7C4BF9" strokeWidth="1.8" strokeOpacity="0.75" fill="none" />
                  <path d="M 0 76 C 34 76 34 46 68 46" stroke="#7C4BF9" strokeWidth="1.8" strokeOpacity="0.75" fill="none" />
                </svg>
                {/* JOIN node */}
                <div className="flex-shrink-0 px-5 py-3.5 border-2 border-[#7C4BF9]/70 rounded-2xl bg-[#7C4BF9]/8">
                  <span className="text-[11px] font-brand font-bold text-[#7C4BF9] uppercase tracking-widest">JOIN</span>
                </div>
                  {/* Line to output */}
                  <div className="flex-1 min-w-[20px] h-0.5 bg-border" />
                  {/* Dark output square */}
                  <div className="w-11 h-11 rounded-lg bg-foreground flex-shrink-0" />
                </div>
              </div>
            </FadeIn>

            {/* 05 — AI-assisted interactions */}
            <FadeIn delay={0.05} className="grid grid-cols-1 lg:grid-cols-[2.5fr_4fr] gap-8 bg-secondary/30 border border-border rounded-[20px] p-6 md:p-8 items-center">
              <div>
                <p className="text-[10px] text-muted-foreground font-bold font-brand tracking-widest mb-3">05</p>
                <h3 className="font-brand font-semibold text-base md:text-[17px] text-foreground mb-3">Reducing decision fatigue with AI assistance</h3>
                <p className="text-xs md:text-sm text-muted-foreground font-brand leading-relaxed">Instead of expecting users to define logic from scratch, AI suggests transformations, highlights inconsistencies, and guides decisions—without removing user control.</p>
              </div>
              {/* AI panel — column scan + suggestion */}
              <div className="bg-background border border-border rounded-xl overflow-hidden">
                {/* Top: detected values + variant count */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-border/50">
                  <span className="text-[11px] font-brand text-muted-foreground">region: emea, EMEA, Emea</span>
                  <span className="text-[11px] font-brand font-semibold text-[#7C4BF9]">3 variants</span>
                </div>
                {/* AI suggestion row */}
                <div className="flex items-center gap-2.5 px-4 py-3 bg-[#7C4BF9]/5">
                  <span className="flex-shrink-0 px-1.5 py-0.5 bg-[#7C4BF9] rounded text-[9px] font-bold text-white tracking-wide">AI</span>
                  <span className="text-[11px] font-brand text-foreground">Normalize to uppercase across 1,204 rows?</span>
                </div>
              </div>
            </FadeIn>

            {/* 06 — Using AI in the design process */}
            <FadeIn delay={0.05} className="grid grid-cols-1 lg:grid-cols-[2.5fr_4fr] gap-8 bg-secondary/30 border border-border rounded-[20px] p-6 md:p-8 items-start">
              <div>
                <p className="text-[10px] text-muted-foreground font-bold font-brand tracking-widest mb-3">06</p>
                <h3 className="font-brand font-semibold text-base md:text-[17px] text-foreground mb-3">Accelerating exploration with AI</h3>
                <p className="text-xs md:text-sm text-muted-foreground font-brand leading-relaxed">AI was used to rapidly explore multiple interaction patterns and UI variations. This reduced iteration time from days to hours, enabling faster validation of ideas under tight constraints.</p>
              </div>
              {/* Prompt + 3 image grid */}
              <div className="flex flex-col gap-3">
                <div className="bg-foreground rounded-lg px-4 py-2.5">
                  <span className="text-[11px] font-brand text-background">Exploring multiple ways to combine datasets visually</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {["/etl-process-06-a.png", "/etl-process-06-b.png", "/etl-process-06-c.png"].map((src, i) => (
                    <div key={i} className="aspect-[3/4] bg-secondary/40 border border-border rounded-lg overflow-hidden">
                      <img src={src} alt={`AI iteration ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* 07 — User flow & system thinking */}
            <FadeIn delay={0.05} className="grid grid-cols-1 lg:grid-cols-[2.5fr_4fr] gap-8 bg-secondary/30 border border-border rounded-[20px] p-6 md:p-8 items-center">
              <div>
                <p className="text-[10px] text-muted-foreground font-bold font-brand tracking-widest mb-3">07</p>
                <h3 className="font-brand font-semibold text-base md:text-[17px] text-foreground mb-3">Designing the system, not just the screens</h3>
                <p className="text-xs md:text-sm text-muted-foreground font-brand leading-relaxed">The experience was structured as a continuous flow—from data ingestion to transformation and output—ensuring each step connects logically without breaking the user’s mental model.</p>
              </div>
              {/* 4-step horizontal flow */}
              <div className="flex items-center gap-1.5">
                <div className="flex-1 h-9 border border-border/70 rounded-md bg-background flex items-center justify-center">
                  <span className="text-[9px] font-brand font-bold text-muted-foreground uppercase tracking-widest text-center px-1">DATASETS</span>
                </div>
                <ArrowRight className="w-3 h-3 text-muted-foreground/50 flex-shrink-0" />
                <div className="flex-1 h-9 border border-border/70 rounded-md bg-background flex items-center justify-center">
                  <span className="text-[9px] font-brand font-bold text-muted-foreground uppercase tracking-widest text-center px-1">COMBINE</span>
                </div>
                <ArrowRight className="w-3 h-3 text-muted-foreground/50 flex-shrink-0" />
                <div className="flex-1 h-9 border border-border/70 rounded-md bg-background flex items-center justify-center">
                  <span className="text-[9px] font-brand font-bold text-muted-foreground uppercase tracking-widest text-center px-1">TRANSFORM</span>
                </div>
                <ArrowRight className="w-3 h-3 text-muted-foreground/50 flex-shrink-0" />
                <div className="flex-1 h-9 border border-border/70 rounded-md bg-background flex items-center justify-center">
                  <span className="text-[9px] font-brand font-bold text-muted-foreground uppercase tracking-widest text-center px-1">OUTPUT</span>
                </div>
              </div>
            </FadeIn>

            {/* 08 — Validation */}
            <FadeIn delay={0.05} className="grid grid-cols-1 lg:grid-cols-[2.5fr_4fr] gap-8 bg-secondary/30 border border-border rounded-[20px] p-6 md:p-8 items-center">
              <div>
                <p className="text-[10px] text-muted-foreground font-bold font-brand tracking-widest mb-3">08</p>
                <h3 className="font-brand font-semibold text-base md:text-[17px] text-foreground mb-3">Simplifying complexity through iteration</h3>
                <p className="text-xs md:text-sm text-muted-foreground font-brand leading-relaxed">Iterative testing helped reduce the workflow from ~14 steps to 5. The focus was on removing unnecessary decisions while preserving flexibility for complex use cases.</p>
              </div>
              {/* Before / After — pill shapes */}
              <div className="grid grid-cols-2 gap-3">
                {/* BEFORE: many small grey pills */}
                <div className="bg-background border border-border rounded-xl p-4 flex flex-col gap-3">
                  <span className="text-[9px] font-brand font-bold text-muted-foreground uppercase tracking-widest">Before</span>
                  <div className="flex flex-wrap gap-1">
                    <div className="w-5 h-4 rounded-full bg-secondary/70" />
                    <div className="w-5 h-4 rounded-full bg-secondary/70" />
                    <div className="w-5 h-4 rounded-full bg-secondary/70" />
                    <div className="w-5 h-4 rounded-full bg-secondary/70" />
                    <div className="w-5 h-4 rounded-full bg-secondary/70" />
                    <div className="w-5 h-4 rounded-full bg-secondary/70" />
                    <div className="w-5 h-4 rounded-full bg-secondary/70" />
                    <div className="w-5 h-4 rounded-full bg-secondary/70" />
                    <div className="w-5 h-4 rounded-full bg-secondary/70" />
                    <div className="w-5 h-4 rounded-full bg-secondary/70" />
                    <div className="w-5 h-4 rounded-full bg-secondary/70" />
                    <div className="w-5 h-4 rounded-full bg-secondary/70" />
                  </div>
                  <span className="text-[10px] text-muted-foreground font-brand">14 steps</span>
                </div>
                {/* AFTER: 5 solid purple pills */}
                <div className="bg-[#7C4BF9]/5 border border-[#7C4BF9]/30 rounded-xl p-4 flex flex-col gap-3">
                  <span className="text-[9px] font-brand font-bold text-[#7C4BF9] uppercase tracking-widest">After</span>
                  <div className="flex gap-1.5">
                    <div className="w-7 h-6 rounded-full bg-[#7C4BF9]" />
                    <div className="w-7 h-6 rounded-full bg-[#7C4BF9]" />
                    <div className="w-7 h-6 rounded-full bg-[#7C4BF9]" />
                    <div className="w-7 h-6 rounded-full bg-[#7C4BF9]" />
                    <div className="w-7 h-6 rounded-full bg-[#7C4BF9]" />
                  </div>
                  <span className="text-[10px] text-[#7C4BF9] font-brand font-semibold">5 steps</span>
                </div>
              </div>
            </FadeIn>

          </div>{/* end cards */}

          {/* Stats Row */}
          <FadeIn delay={0.2} className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-16 pt-14 border-t border-border/40">
            <div>
              <span className="font-brand text-5xl md:text-6xl font-bold text-[#7C4BF9]">5</span>
              <p className="font-brand text-sm text-foreground font-medium mt-2">steps to a structured dataset</p>
              <p className="font-brand text-[10px] text-muted-foreground uppercase tracking-widest mt-1">From free-form +15</p>
            </div>
            <div>
              <span className="font-brand text-5xl md:text-6xl font-bold text-[#7C4BF9]">3×</span>
              <p className="font-brand text-sm text-foreground font-medium mt-2">faster pipeline assembly</p>
              <p className="font-brand text-[10px] text-muted-foreground uppercase tracking-widest mt-1">vs. legacy ETL</p>
            </div>
            <div>
              <span className="font-brand text-5xl md:text-6xl font-bold text-[#7C4BF9]">0</span>
              <p className="font-brand text-sm text-foreground font-medium mt-2">lines of SQL & coding required</p>
              <p className="font-brand text-[10px] text-muted-foreground uppercase tracking-widest mt-1">for the core flow</p>
            </div>
          </FadeIn>

        </section>

        <div className="h-px w-full bg-border/40" />

        {/* =======================
            SECTION 06: THE OUTCOME
        ======================== */}
        <section className="bg-[#7C4BF9]/5 py-24 md:py-32 border-y border-[#7C4BF9]/10">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <FadeIn className="mb-16">
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#7C4BF9] font-bold mb-6 font-brand">06 / The Outcome</p>
              <h2 className="font-display text-2xl md:text-4xl font-semibold text-foreground max-w-2xl leading-[1.2]">
                Simplifying complex data workflows
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <FadeIn delay={0.1} className="p-8 bg-background rounded-[20px] border border-border flex flex-col gap-3 shadow-sm">
                <span className="text-[10px] font-brand font-bold text-[#7C4BF9] uppercase tracking-widest">01</span>
                <h3 className="font-brand text-base font-semibold text-foreground">No-code data workflows</h3>
                <p className="text-xs md:text-sm text-muted-foreground font-brand leading-relaxed">Non-technical users can build and modify data pipelines visually, without relying on analysts or writing queries.</p>
              </FadeIn>
              {/* Card 2 */}
              <FadeIn delay={0.2} className="p-8 bg-background rounded-[20px] border border-border flex flex-col gap-3 shadow-sm">
                <span className="text-[10px] font-brand font-bold text-[#7C4BF9] uppercase tracking-widest">02</span>
                <h3 className="font-brand text-base font-semibold text-foreground">0 SQL required</h3>
                <p className="text-xs md:text-sm text-muted-foreground font-brand leading-relaxed">Complex joins and transformations are handled by the system, eliminating the need for manual queries.</p>
              </FadeIn>
              {/* Card 3 */}
              <FadeIn delay={0.3} className="p-8 bg-background rounded-[20px] border border-border flex flex-col gap-3 shadow-sm">
                <span className="text-[10px] font-brand font-bold text-[#7C4BF9] uppercase tracking-widest">03</span>
                <h3 className="font-brand text-base font-semibold text-foreground">Real-time validation</h3>
                <p className="text-xs md:text-sm text-muted-foreground font-brand leading-relaxed">Users instantly see how transformations affect their data, reducing errors and increasing confidence before applying changes.</p>
              </FadeIn>
              {/* Card 4 */}
              <FadeIn delay={0.4} className="p-8 bg-background rounded-[20px] border border-border flex flex-col gap-3 shadow-sm">
                <span className="text-[10px] font-brand font-bold text-[#7C4BF9] uppercase tracking-widest">04</span>
                <h3 className="font-brand text-base font-semibold text-foreground">AI-assisted, user-controlled</h3>
                <p className="text-xs md:text-sm text-muted-foreground font-brand leading-relaxed">AI suggests improvements and flags issues, while users retain full control over every decision.</p>
              </FadeIn>
            </div>
          </div>
        </section>


        <div className="h-px w-full bg-border/40" />

        {/* =======================
            SECTION 07: KEY LEARNINGS
        ======================== */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-32">
          <FadeIn className="mb-16">
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-bold mb-6 font-brand">07 / Key Learnings</p>
            <h2 className="font-display text-2xl md:text-4xl font-semibold text-foreground max-w-2xl leading-[1.2]">
              Design principles that shaped the work
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn delay={0.1} className="bg-background rounded-[20px] p-8 border border-border h-full hover:border-[#7C4BF9]/50 transition-colors flex flex-col gap-4">
              <span className="text-[10px] font-brand font-bold text-[#7C4BF9] uppercase tracking-widest">01</span>
              <h3 className="font-brand font-semibold text-base text-foreground">Make data understandable, not technical</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-brand">
                Technical jargon alienates non-technical users. Translating backend concepts into spatial, visual interactions significantly lowers the barrier to entry.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-background rounded-[20px] p-8 border border-border h-full hover:border-[#7C4BF9]/50 transition-colors flex flex-col gap-4">
              <span className="text-[10px] font-brand font-bold text-[#7C4BF9] uppercase tracking-widest">02</span>
              <h3 className="font-brand font-semibold text-base text-foreground">Start simple, reveal complexity</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-brand">
                Users shouldn't face an empty, overwhelming canvas. Guided entry points and progressive disclosure make complex workflows approachable.
              </p>
            </FadeIn>
            <FadeIn delay={0.3} className="bg-background rounded-[20px] p-8 border border-border h-full hover:border-[#7C4BF9]/50 transition-colors flex flex-col gap-4">
              <span className="text-[10px] font-brand font-bold text-[#7C4BF9] uppercase tracking-widest">03</span>
              <h3 className="font-brand font-semibold text-base text-foreground">AI suggests, users decide</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-brand">
                AI highlights issues and recommends actions, but users retain control — ensuring trust and preventing unintended transformations.
              </p>
            </FadeIn>
            <FadeIn delay={0.4} className="bg-background rounded-[20px] p-8 border border-border h-full hover:border-[#7C4BF9]/50 transition-colors flex flex-col gap-4">
              <span className="text-[10px] font-brand font-bold text-[#7C4BF9] uppercase tracking-widest">04</span>
              <h3 className="font-brand font-semibold text-base text-foreground">Reliable input, reliable output</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-brand">
                Poor data leads to poor outcomes. Surfacing issues early through previews and AI-assisted cleanup ensures users build on trustworthy data.
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
              {projects.filter(p => p.id !== "etl-tool").map((project, idx) => (
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

export default CaseStudyETL;
