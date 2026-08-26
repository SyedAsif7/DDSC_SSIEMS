
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import { ThemeProvider } from "./hooks/use-theme";
import { ScrollToTop, ScrollToTopButton, GlobalBackgroundVideo } from "./components/layout";

// Lazy load pages with automatic retry/reload when new deployments occur
const lazyRetry = (componentImport: () => Promise<any>) =>
  lazy(async () => {
    const pageHasBeenForceRefreshed = JSON.parse(
      window.sessionStorage.getItem("page-has-been-force-refreshed") || "false"
    );

    try {
      const component = await componentImport();
      window.sessionStorage.setItem("page-has-been-force-refreshed", "false");
      return component;
    } catch (error) {
      if (!pageHasBeenForceRefreshed) {
        window.sessionStorage.setItem("page-has-been-force-refreshed", "true");
        window.location.reload();
        return { default: () => null };
      }
      throw error;
    }
  });

const Index = lazyRetry(() => import("./pages/Index"));
const Gallery = lazyRetry(() => import("./pages/Gallery"));
const WorkshopDetails = lazyRetry(() => import("./pages/WorkshopDetails"));
const AchievementDetail = lazyRetry(() => import("./pages/AchievementDetail"));
const TheAsifTalks = lazyRetry(() => import("./pages/TheAsifTalks"));
const NotFound = lazyRetry(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => {
  // Dynamically set basename based on Vite's BASE_URL
  // This allows the app to work on both Vercel (root /) and GitHub Pages (/DDSC_SSIEMS/)
  const basename = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL.replace(/\/$/, '');

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <TooltipProvider>
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
                <Route path="/the-asif-talks" element={<TheAsifTalks />} />
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
