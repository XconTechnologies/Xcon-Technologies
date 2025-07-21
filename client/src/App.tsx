import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import { useScrollRestoration } from "./hooks/use-scroll-restoration";
import { preloadImages, preloadFonts } from "./utils/performance";
import { usePerformanceOptimization } from "./hooks/use-performance";
import Home from "@/pages/home";
import Career from "@/pages/career";
import Internship from "@/pages/internship";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Portfolio from "@/pages/portfolio";
import Services from "@/pages/services";
import NotFound from "@/pages/not-found";
import WebDevelopment from "@/pages/services/web-development";
import SoftwareDevelopment from "@/pages/services/software-development";
import AppDevelopment from "@/pages/services/app-development";
import DataEngineering from "@/pages/services/data-engineering";
import CloudEngineering from "@/pages/services/cloud-engineering";
import MvpDevelopment from "@/pages/services/mvp-development";
import DevOps from "@/pages/services/devops";
import QaTesting from "@/pages/services/qa-testing";
import ItConsulting from "@/pages/services/it-consulting";
import Blog from "@/pages/blog";
import BlogSingle from "@/pages/blog-single";

function Router() {
  // Track page views when routes change
  useAnalytics();
  
  // Scroll to top on route change
  useScrollRestoration();
  
  // Optimize performance
  usePerformanceOptimization();
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/career" component={Career} />
      <Route path="/internship" component={Internship} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/services" component={Services} />
      <Route path="/services/web-development" component={WebDevelopment} />
      <Route path="/services/software-development" component={SoftwareDevelopment} />
      <Route path="/services/app-development" component={AppDevelopment} />
      <Route path="/services/data-engineering" component={DataEngineering} />
      <Route path="/services/cloud-engineering" component={CloudEngineering} />
      <Route path="/services/mvp-development" component={MvpDevelopment} />
      <Route path="/services/devops" component={DevOps} />
      <Route path="/services/qa-testing" component={QaTesting} />
      <Route path="/services/it-consulting" component={ItConsulting} />
      <Route path="/services/it-consultation" component={ItConsulting} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogSingle} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Initialize Google Analytics and performance optimizations
  useEffect(() => {
    // Preload critical resources
    preloadFonts();
    preloadImages([
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=75'
    ]);
    
    // Initialize Google Analytics
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
