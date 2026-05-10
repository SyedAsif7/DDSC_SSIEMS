
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import WorkshopDetails from "./pages/WorkshopDetails";
import AchievementDetail from "./pages/AchievementDetail";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./hooks/use-theme";
import ScrollToTop from "./components/ScrollToTop";
import GlobalBackgroundVideo from "./components/layout/GlobalBackgroundVideo";

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
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/workshop" element={<WorkshopDetails />} />
                <Route path="/achievement/:id" element={<AchievementDetail />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
