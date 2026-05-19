
/**
 * Index (Homepage)
 * Composes all major sections in the recommended order with sticky navbar alignment.
 */
import CollegeHeader from "@/components/layout/CollegeHeader";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyJoinSection from "@/components/sections/WhyJoinSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import UpcomingEventsSection from "@/components/sections/UpcomingEventsSection";
import TeamSection from "@/components/sections/TeamSection";
import JoinSection from "@/components/sections/JoinSection";
import PartnersSection from "@/components/sections/PartnersSection";
import GallerySliderSection from "@/components/sections/GallerySliderSection";
import Footer from "@/components/layout/Footer";
import AnnouncementModal from "@/components/layout/AnnouncementModal";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <AnnouncementModal />
      <Helmet>
        <title>DCode Developers Club | Building the Future Together</title>
        <meta name="description" content="Official website of DCode Developers Club. Join our community of innovators, builders, and tech enthusiasts." />
      </Helmet>

      <div className="relative z-10 min-h-screen flex flex-col">
        <CollegeHeader />
        <Navbar />
        
        <main className="flex-1">
          {/* Home */}
          <HeroSection />
          
          <div className="relative">
            {/* Subtle Gradient Overlays between sections */}
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none"></div>
            
            <div className="space-y-0">
              {/* About */}
              <section className="section-spacing">
                <AboutSection />
              </section>

              {/* Events/Achievements */}
              <section className="section-spacing bg-white/[0.01]">
                <AchievementsSection />
              </section>

              <section className="section-spacing">
                <WhyJoinSection />
              </section>

              {/* Upcoming Events */}
              <section className="section-spacing bg-white/[0.01]">
                <UpcomingEventsSection />
              </section>

              {/* Gallery Slider */}
              <section className="section-spacing">
                <GallerySliderSection />
              </section>

              {/* Team */}
              <section className="section-spacing bg-white/[0.01]">
                <TeamSection />
              </section>

              {/* Partners */}
              <section className="section-spacing">
                <PartnersSection />
              </section>

              {/* Join Us */}
              <section className="section-spacing bg-ndc-purple/[0.02]">
                <JoinSection />
              </section>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
