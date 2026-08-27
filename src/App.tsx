
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Suspense, useEffect } from "react";
import { ThemeProvider } from "./hooks/use-theme";
import { ScrollToTop, ScrollToTopButton, GlobalBackgroundVideo } from "./components/layout";
import { lazyRetry } from "./lib/utils";

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

  useEffect(() => {
    // Proactive background update check for Chrome & Mobile users
    const checkForUpdates = async () => {
      try {
        const res = await fetch(`/?_t=${Date.now()}`, {
          cache: 'no-store',
          headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' }
        });
        if (res.ok) {
          const text = await res.text();
          const match = text.match(/window\.__DDSC_VERSION__\s*=\s*["']([^"']+)["']/);
          const serverVersion = match ? match[1] : null;
          const currentVersion = (window as any).__DDSC_VERSION__;
          if (serverVersion && currentVersion && serverVersion !== currentVersion) {
            console.log('Update detected:', serverVersion, 'replacing', currentVersion);
            (window as any).__DDSC_VERSION__ = serverVersion;
            window.location.reload();
          }
        }
      } catch (err) {
        // Offline or network silent fail
      }
    };

    checkForUpdates();

    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        checkForUpdates();
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

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
