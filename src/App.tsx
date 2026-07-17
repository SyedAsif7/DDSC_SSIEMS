
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense, useState } from "react";
import { ThemeProvider } from "./hooks/use-theme";
import { ScrollToTop, ScrollToTopButton, GlobalBackgroundVideo, SplashScreen } from "./components/layout";
import { AnimatePresence } from "framer-motion";

// Lazy load pages for better chunking
const Index = lazy(() => import("./pages/Index"));
const Gallery = lazy(() => import("./pages/Gallery"));
const WorkshopDetails = lazy(() => import("./pages/WorkshopDetails"));
const AchievementDetail = lazy(() => import("./pages/AchievementDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => {
  // Dynamically set basename based on Vite's BASE_URL
  // This allows the app to work on both Vercel (root /) and GitHub Pages (/DDSC_SSIEMS/)
  const basename = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL.replace(/\/$/, '');
  const [showSplash, setShowSplash] = useState(true);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <TooltipProvider>
            <AnimatePresence>
              {showSplash && (
                <SplashScreen onFinished={() => setShowSplash(false)} />
              )}
            </AnimatePresence>
            <GlobalBackgroundVideo />
            <Toaster />
            <Sonner />
            <BrowserRouter 
              basename={basename}
              future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
              }}
            >
              <ScrollToTop />
              <ScrollToTopButton />
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center bg-slate-950">
                <div className="w-16 h-16 border-4 border-ndc-purple border-t-transparent rounded-full animate-spin" />
              </div>
            }>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/workshop" element={<WorkshopDetails />} />
                <Route path="/achievement/:id" element={<AchievementDetail />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
