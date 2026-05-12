import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import CursorLabel from "@/components/CursorLabel";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import SideProjects from "./pages/SideProjects.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import CaseStudyCaudate from "./pages/CaseStudyCaudate.tsx";
import CaseStudyETL from "./pages/CaseStudyETL.tsx";
import CaseStudyAttavita from "./pages/CaseStudyAttavita.tsx";

const queryClient = new QueryClient();

import ScrollIndicator from "@/components/ScrollIndicator";

// Scrolls to top on every route change — must be inside BrowserRouter
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};

const GlobalScrollIndicator = () => {
  const { pathname } = useLocation();

  let color = "hsl(var(--accent))";
  if (pathname === "/work/attavita") color = "#D3402E";
  if (pathname === "/work/caudate-ai" || pathname === "/work/etl-tool") color = "#7C4BF9";

  return <ScrollIndicator color={color} />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CursorLabel />
      <BrowserRouter>
        <ScrollToTop />
        <GlobalScrollIndicator />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/side-projects" element={<SideProjects />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work/caudate-ai" element={<CaseStudyCaudate />} />
          <Route path="/work/etl-tool" element={<CaseStudyETL />} />
          <Route path="/work/attavita" element={<CaseStudyAttavita />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

