
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
import Footer from "@/components/layout/Footer";
import ScrollToTopButton from "@/components/layout/ScrollToTopButton";
import AnnouncementModal from "@/components/layout/AnnouncementModal";
import GlobalBackgroundVideo from "@/components/layout/GlobalBackgroundVideo";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <AnnouncementModal />
      <Helmet>
        <title>DCode Developers Club | Building the Future Together</title>
        <meta name="description" content="Official website of DCode Developers Club. Join our community of innovators, builders, and tech enthusiasts." />
      </Helmet>
      {/* Fixed Background Video Layer */}
      <div className="fixed inset-0 z-[-1]">
        <GlobalBackgroundVideo />
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <CollegeHeader />
        <Navbar />
        
        <main className="flex-1">
          {/* Home */}
          <HeroSection />
          
          <div className="relative">
            {/* Subtle Gradient Overlays between sections */}
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none"></div>
            
            <div className="space-y-32 md:space-y-48 pb-32">
              {/* About */}
              <AboutSection />
              {/* Events/Achievements */}
              <AchievementsSection />
              <WhyJoinSection />
              {/* Upcoming Events */}
              <UpcomingEventsSection />
              {/* Team */}
              <TeamSection />
              {/* Partners */}
              <PartnersSection />
              {/* Join Us */}
              <JoinSection />
            </div>
          </div>
        </main>
        
        <Footer />
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default Index;
