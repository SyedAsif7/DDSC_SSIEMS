
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
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <AnnouncementModal />
      <Helmet>
        <title>DCode Developers Club | Building the Future Together</title>
        <meta name="description" content="Official website of DCode Developers Club. Join our community of innovators, builders, and tech enthusiasts." />
      </Helmet>
      <CollegeHeader />
      <Navbar />
      
      {/* Home */}
      <HeroSection />
      
      {/* About */}
      <AboutSection />
      <WhyJoinSection />
      
      {/* Events/Achievements */}
      <AchievementsSection />
      
      {/* Upcoming Events */}
      <UpcomingEventsSection />
      
      {/* Team */}
      <TeamSection />
      
      {/* Partners */}
      <PartnersSection />
      
      {/* Join Us */}
      <JoinSection />
      
      {/* Contact */}
      <Footer />
      
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
