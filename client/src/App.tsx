import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
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
  // Initialize Google Analytics when app loads
  useEffect(() => {
    // Verify required environment variable is present
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
