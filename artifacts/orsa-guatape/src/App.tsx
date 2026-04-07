import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import Home from "@/pages/Home";
import ExperienceHorizon from "@/pages/ExperienceHorizon";
import ExperienceAdrenaline from "@/pages/ExperienceAdrenaline";
import ExperienceSignature from "@/pages/ExperienceSignature";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/experiencia/horizon" component={ExperienceHorizon} />
          <Route path="/experiencia/adrenaline" component={ExperienceAdrenaline} />
          <Route path="/experiencia/signature" component={ExperienceSignature} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
