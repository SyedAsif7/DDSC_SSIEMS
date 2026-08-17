/**
 * Index (Homepage)
 * Composes all major sections in nav-aligned order with sticky navbar.
 * Below-fold sections are code-split so the first paint stays light.
 */
import { lazy, Suspense } from "react";
import CollegeHeader from "@/components/layout/CollegeHeader";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";

const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const WhyJoinSection = lazy(() => import("@/components/sections/WhyJoinSection"));
const AchievementsSection = lazy(() => import("@/components/sections/AchievementsSection"));
const UpcomingEventsSection = lazy(() => import("@/components/sections/UpcomingEventsSection"));
const TeamSection = lazy(() => import("@/components/sections/TeamSection"));
const JoinSection = lazy(() => import("@/components/sections/JoinSection"));
const PartnersSection = lazy(() => import("@/components/sections/PartnersSection"));
const GallerySliderSection = lazy(() => import("@/components/sections/GallerySliderSection"));
const TimelineSection = lazy(() => import("@/components/sections/TimelineSection"));
const WorkshopFAQ = lazy(() => import("@/components/sections/WorkshopFAQ"));

const SectionFallback = () => (
  <div className="section-spacing flex justify-center py-16" aria-hidden="true">
    <div className="h-10 w-10 rounded-full border-2 border-ndc-purple/40 border-t-transparent animate-spin" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Helmet>
        <title>DCode Developers Club | Building the Future Together</title>
        <meta name="description" content="Official website of DCode Developers Club. Join our community of innovators, builders, and tech enthusiasts." />
      </Helmet>

      <div className="relative z-10 min-h-screen flex flex-col">
        <CollegeHeader />
        <Navbar />
        
        <main className="flex-1">
          <HeroSection />

          <Suspense fallback={<SectionFallback />}>
            {/* Order matches navbar: About → Why Join → Achievements → … */}
            <AboutSection />
            <WhyJoinSection />
            <AchievementsSection />
            <UpcomingEventsSection />
            <GallerySliderSection />
            <TimelineSection />
            <WorkshopFAQ />
            <TeamSection />
            <PartnersSection />
            <JoinSection />
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
