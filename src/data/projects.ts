import project1Static from "@/assets/caudate-static.png";
import project1Gif from "@/assets/Showreel-Web-gallery-remix(1).gif";
import project3 from "@/assets/attavita-thumbnail.mp4";

export const projects = [
  {
    id: "caudate-ai",
    title: "CaudateAI — AI Analytics Platform",
    status: "Shipped",
    subtitle: "Designing a question-driven analytics experience for non-technical users",
    tags: ["AI", "B2B SAAS", "Data Analytics", "Dashboard UX"],
    role: "Product Designer",
    contribution: "End-to-end design of core experiences including onboarding, KPI generation, report and dashboards",
    focusArea: "AI interaction • Data workflows • System thinking",
    image: project1Static,
    hoverImage: project1Gif,
    featured: true,
  },
  {
    id: "etl-tool",
    title: "Visual ETL System",
    status: "Shipped",
    subtitle: "Designing an AI-assisted, node-based pipeline that empowers non-technical users to structure and transform complex datasets.",
    tags: ["Node-based UI", "Data Engineering", "AI UX", "B2B SaaS"],
    role: "Product Designer",
    contribution: "Designed node-based workflows, step-by-step transformation logic, and interactive data previews.",
    focusArea: "Systems Thinking • Visual Workflows • Complex Interactions",
    image: project1Static,
    hoverImage: "/etl-hover.png",
    featured: false,
  },
  {
    id: "attavita",
    title: "Attavita — Content-led E-Commerce",
    status: "Shipped",
    subtitle: "Designing a Shopify experience to help families adopt better nutrition by explaining an unfamiliar product through everyday usage.",
    tags: ["UX Design", "E-Commerce", "Shopify", "Brand Trust"],
    role: "Product Designer & Shopify Developer",
    contribution: "Led end-to-end UX research, visual design, and Shopify development, focusing on progressive disclosure to build consumer trust.",
    focusArea: "E-Commerce UX • Content Strategy • Trust Building",
    image: project3,
    featured: false,
  },
];
