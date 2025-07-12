import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import MobileAppDevelopment from "@/pages/services/mobile-app-development";
import WebDevelopment from "@/pages/services/web-development";
import CustomSoftwareDevelopment from "@/pages/services/custom-software-development";
import CloudServices from "@/pages/services/cloud-services";
import DigitalMarketing from "@/pages/services/digital-marketing";
import GameDevelopment from "@/pages/services/game-development";
import ArtificialIntelligence from "@/pages/services/artificial-intelligence";
import BlockchainDevelopment from "@/pages/services/blockchain-development";
import StaffAugmentation from "@/pages/services/staff-augmentation";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services/mobile-app-development" component={MobileAppDevelopment} />
      <Route path="/services/web-development" component={WebDevelopment} />
      <Route path="/services/custom-software-development" component={CustomSoftwareDevelopment} />
      <Route path="/services/cloud-services" component={CloudServices} />
      <Route path="/services/digital-marketing" component={DigitalMarketing} />
      <Route path="/services/game-development" component={GameDevelopment} />
      <Route path="/services/artificial-intelligence" component={ArtificialIntelligence} />
      <Route path="/services/blockchain-development" component={BlockchainDevelopment} />
      <Route path="/services/staff-augmentation" component={StaffAugmentation} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
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
