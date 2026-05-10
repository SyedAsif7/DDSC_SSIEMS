import { ArrowLeft, Sparkles, Calendar, Clock, MapPin, ChevronRight, CheckCircle2, Download, Share2, Maximize2, FileText, Target, User2, Award, Phone, MessageSquare, Users, GraduationCap, Linkedin, Navigation } from "lucide-react";
import { Link } from "react-router-dom";
import CollegeHeader from "@/components/layout/CollegeHeader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTopButton from "@/components/layout/ScrollToTopButton";
import WorkshopFAQ from "@/components/sections/WorkshopFAQ";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import CountdownTimer from "@/components/ui/CountdownTimer";
import MagneticButton from "@/components/ui/MagneticButton";
import ParallaxSection from "@/components/ui/ParallaxSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

import { getAssetPath } from "@/lib/utils";

/**
 * WorkshopDetails Page
 * Dedicated page for the Generative AI Workshop deep-dive.
 */
const WorkshopDetails = () => {
  const certifications = [
    "AWS UG", "GDE", "Docker Captain", "CKS", "CKA", "CKD", "SCE", "LFCE", "RHCA XI", "SCI", "RHCI", "JBCI"
  ];

  const handleAddToCalendar = () => {
    const event = {
      title: "Generative AI Workshop | DCode Developers Club",
      description: "Master the cutting-edge tools of Generative AI using Google Cloud Platform. Learn from a Google Developer Expert.",
      location: "APJ Auditorium, Shivaji Engineering College, Parbhani",
      startTime: "20260516T123000",
      endTime: "20260516T153000", // Assuming 3 hours
    };

    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}&dates=${event.startTime}/${event.endTime}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 selection:bg-ndc-purple/30">
      <Helmet>
        <title>Generative AI Workshop | DCode Developers Club</title>
        <meta name="description" content="Deep-dive into the Generative AI Workshop by DDSC. Learn about the speaker, roadmap, and get your questions answered." />
      </Helmet>

      <CollegeHeader />
      <Navbar />

      <main className="relative pt-2 md:pt-4 pb-24 overflow-hidden">
        {/* Advanced Background Decorations */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-ndc-purple/10 blur-[160px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-ndc-blue/10 blur-[160px] rounded-full animate-pulse delay-1000"></div>
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="section-container relative z-10">
          {/* Back Button */}
          <div className="mb-4 md:mb-6 animate-fade-in">
            <Link 
              to="/" 
              className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 active:scale-95"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              <span className="text-[10px] font-black uppercase tracking-widest">Back to Home</span>
            </Link>
          </div>

          {/* 1. Exclusive Learning Event (Hero Content) - Refined & Compact */}
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
            <ParallaxSection offset={20}>
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Compact Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ndc-purple/10 border border-ndc-purple/20 text-ndc-purple mb-6 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Exclusive Learning Event</span>
                </div>
                
                {/* Refined Title */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tighter text-white leading-[1.1] uppercase px-4">
                  Generative <span className="gradient-text">AI Workshop</span>
                </h1>
              </motion.div>
            </ParallaxSection>

            {/* Integrated Event Info & Registration Status */}
            <div className="max-w-2xl mx-auto mb-10 px-4">
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-ndc-blue/5 blur-3xl rounded-full"></div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10">
                  <div className="flex items-center justify-center gap-2.5 py-2 sm:border-r border-white/5">
                    <Calendar className="w-4 h-4 text-ndc-purple" />
                    <span className="font-bold text-[11px] md:text-xs uppercase tracking-wider text-gray-300">16th May 2026</span>
                  </div>
                  <div className="flex items-center justify-center gap-2.5 py-2 sm:border-r border-white/5">
                    <Clock className="w-4 h-4 text-ndc-blue" />
                    <span className="font-bold text-[11px] md:text-xs uppercase tracking-wider text-gray-300">12:30 PM Sharp</span>
                  </div>
                  <div className="flex items-center justify-center gap-2.5 py-2">
                    <MapPin className="w-4 h-4 text-ndc-green" />
                    <span className="font-bold text-[11px] md:text-xs uppercase tracking-wider text-gray-300">APJ Auditorium</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <div className="flex items-center gap-2 text-ndc-green">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Registration is FREE</span>
                  </div>
                  <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20"></div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    Limited Seats Available
                  </div>
                </div>
              </div>
            </div>

            {/* Compact Countdown */}
            <div className="mb-10 flex justify-center scale-75 sm:scale-90 md:scale-100">
              <CountdownTimer targetDate="2026-05-16T12:30:00" />
            </div>

            {/* Focused Description */}
            <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto leading-relaxed font-medium mb-10 px-6">
              Master the cutting-edge tools of Generative AI using Google Cloud Platform. 
              Learn from a Google Developer Expert and jumpstart your AI journey.
            </p>

            {/* Streamlined CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 px-6">
              <MagneticButton className="w-full sm:w-auto">
                <Button 
                  asChild
                  className="w-full sm:w-auto px-10 py-6 md:py-8 bg-gradient-to-r from-ndc-purple to-ndc-blue text-white rounded-xl md:rounded-2xl font-black text-base md:text-lg uppercase tracking-[0.15em] shadow-lg hover:shadow-ndc-purple/30 transition-all duration-500 hover:scale-105 active:scale-95"
                >
                  <a href="https://forms.gle/GRLSPbasffrESu1R9" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                    Register Now
                    <ChevronRight className="w-5 h-5" />
                  </a>
                </Button>
              </MagneticButton>

              <MagneticButton className="w-full sm:w-auto">
                <Button 
                  onClick={handleAddToCalendar}
                  variant="outline"
                  className="w-full sm:w-auto px-10 py-6 md:py-8 border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-xl md:rounded-2xl font-black text-base md:text-lg uppercase tracking-[0.15em] transition-all duration-500 hover:scale-105 active:scale-95"
                >
                  <Calendar className="w-5 h-5 mr-3" />
                  Add to Calendar
                </Button>
              </MagneticButton>
            </div>
          </div>

          {/* 2. Speaker Spotlight */}
          <div className="mt-20 md:mt-32 px-4">
            <SectionHeader 
              badgeText="Speaker Spotlight"
              badgeIcon={GraduationCap}
              titlePrefix="Meet the"
              titleHighlight="Expert"
              description="Learn from an industry veteran with extensive experience in Cloud and AI."
              centered
            />
            
            <div className="max-w-4xl mx-auto mt-8 md:mt-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative group bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl md:rounded-[2.5rem] p-6 md:p-10 overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-ndc-purple/5 blur-[80px] rounded-full pointer-events-none"></div>
                
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start text-center md:text-left relative z-10">
                  <div className="relative flex-shrink-0">
                    <div className="w-28 h-28 md:w-40 md:h-40 rounded-2xl md:rounded-3xl bg-gradient-to-br from-ndc-purple/20 to-ndc-blue/20 border border-white/10 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500 shadow-inner">
                      <img 
                        src={getAssetPath("images/Ashutosh S. Bhakare.jpg")} 
                        alt="Ashutosh S. Bhakare" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 bg-ndc-blue p-2 md:p-2.5 rounded-lg md:rounded-xl shadow-lg border border-white/10 animate-bounce">
                      <Award className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-3 md:space-y-4 w-full">
                    <div className="flex flex-col md:flex-row md:items-center justify-center md:justify-start gap-2 md:gap-3">
                      <h3 className="text-xl md:text-3xl font-black text-white tracking-tight">Ashutosh S. Bhakare</h3>
                      <a 
                        href="https://linkedin.com/in/abhakare" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 text-ndc-blue hover:text-white transition-colors text-[10px] md:text-xs font-bold uppercase tracking-widest"
                      >
                        <Linkedin className="w-3.5 h-3.5 md:w-4 h-4" />
                        Connect
                      </a>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-ndc-purple font-black uppercase text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em]">Red Hat Security Specialist</p>
                      <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase">Unnati Development & Training Centre</p>
                    </div>

                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-medium px-2 md:px-0">
                      Google Developer Expert, Docker Captain, and Red Hat Certified Architect. Expertise in Kubernetes, OpenShift, and Cloud-Native AI solutions.
                    </p>

                    <div className="flex flex-wrap gap-1.5 md:gap-2 justify-center md:justify-start pt-2">
                      {certifications.map((cert) => (
                        <span key={cert} className="px-2 py-0.5 md:py-1 rounded-md md:rounded-lg bg-white/5 border border-white/5 text-[7px] md:text-[8px] font-bold text-gray-400 uppercase tracking-widest">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* 3. Visual Guide Section */}
          <div className="mt-20 md:mt-32 mb-16 md:mb-24 px-4">
            <SectionHeader 
              badgeText="Official Media"
              badgeIcon={Sparkles}
              titlePrefix="Visual"
              titleHighlight="Guide"
              description="Explore the comprehensive roadmap and event highlights in one visual overview."
              centered
            />
            
            <div className="max-w-5xl mx-auto mt-8 md:mt-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative group bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl"
              >
                {/* Decorative Background Glows */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-ndc-purple/5 blur-[80px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-ndc-blue/5 blur-[80px] rounded-full pointer-events-none"></div>

                <div className="grid md:grid-cols-12 gap-0">
                  {/* Left: Flyer Showcase */}
                  <div className="md:col-span-5 relative bg-black/20 border-b md:border-b-0 md:border-r border-white/5">
                    <div className="aspect-[4/5] md:aspect-auto md:h-full relative overflow-hidden group/flyer">
                      <img 
                        src="/images/Generative AI workshop flyer design.png" 
                        alt="Workshop Flyer" 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover/flyer:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/flyer:opacity-40 transition-opacity"></div>
                      
                      {/* Floating Badge */}
                      <div className="absolute top-3 md:top-4 left-3 md:left-4 px-2.5 md:px-3 py-1 md:py-1.5 rounded-md md:rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[8px] md:text-[9px] font-black uppercase tracking-widest text-white flex items-center gap-1.5 md:gap-2">
                        <Maximize2 size={8} className="md:w-[10px] md:h-[10px] text-ndc-purple" />
                        Full Flyer
                      </div>

                      {/* Hover Action Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/flyer:opacity-100 transition-all duration-500 scale-90 group-hover/flyer:scale-100">
                        <Button asChild variant="secondary" className="bg-white text-black hover:bg-gray-200 rounded-xl px-4 md:px-6 font-bold uppercase tracking-wider text-[9px] md:text-[10px] h-9 md:h-10 shadow-2xl">
                          <a href="/images/Generative AI workshop flyer design.png" target="_blank">View Full Image</a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Right: Structured Content */}
                  <div className="md:col-span-7 p-6 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4 md:mb-6">
                      <div className="p-2 md:p-2.5 rounded-lg md:rounded-xl bg-ndc-purple/10 border border-ndc-purple/20 text-ndc-purple">
                        <FileText size={18} className="md:w-5 md:h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-2xl font-black text-white uppercase tracking-tight leading-none">Workshop Guide</h3>
                        <p className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Official Event Media</p>
                      </div>
                    </div>

                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 md:mb-8 font-medium">
                      Our official flyer contains the full curriculum, session breakdown, and key takeaways. 
                      Save it to your device for quick reference during the workshop.
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
                      {[
                        { icon: Target, label: "Roadmap", text: "Curriculum", color: "text-ndc-purple" },
                        { icon: User2, label: "Speaker", text: "Expert Bio", color: "text-ndc-blue" },
                        { icon: Calendar, label: "Schedule", text: "Time & Venue", color: "text-ndc-green" },
                        { icon: Award, label: "Certificate", text: "Eligibility", color: "text-ndc-purple" }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/5 group/item hover:bg-white/[0.06] transition-colors">
                          <item.icon size={14} className={`md:w-4 md:h-4 ${item.color} opacity-80 group-hover/item:opacity-100 transition-opacity`} />
                          <div className="flex flex-col">
                            <span className="text-[9px] md:text-[10px] font-black text-white uppercase tracking-tight leading-none">{item.label}</span>
                            <span className="text-[8px] md:text-[9px] font-bold text-gray-500 mt-0.5">{item.text}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Action Row */}
                    <div className="flex flex-row gap-3">
                      <Button 
                        asChild
                        className="flex-1 bg-gradient-to-r from-ndc-purple to-ndc-blue text-white rounded-xl h-10 md:h-12 font-black uppercase tracking-widest text-[9px] md:text-[10px] shadow-lg shadow-ndc-purple/20 hover:scale-[1.02] active:scale-95 transition-all"
                      >
                        <a href="/images/Generative AI workshop flyer design.png" download>
                          <Download className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                          Download
                        </a>
                      </Button>
                      <Button 
                        onClick={() => navigator.share && navigator.share({ title: 'Workshop Flyer', url: window.location.href })}
                        variant="outline"
                        className="w-10 md:w-12 h-10 md:h-12 border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-xl font-black uppercase tracking-widest text-[10px] transition-all p-0 flex items-center justify-center"
                      >
                        <Share2 className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* 4. Join the Network (Community & Support Section) */}
          <div className="mt-20 md:mt-32 max-w-5xl mx-auto px-4">
            <SectionHeader 
              badgeText="Support & Community"
              badgeIcon={Users}
              titlePrefix="Join the"
              titleHighlight="Network"
              description="Get in touch with the team and join our official community for updates."
              centered
            />
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12">
              {/* WhatsApp Group Card - Premium & Organized */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative p-6 md:p-10 rounded-3xl md:rounded-[3rem] bg-slate-900/40 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#25D366]/5 blur-[80px] rounded-full pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-5 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <MessageSquare size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tight leading-none">WhatsApp</h3>
                      <p className="text-[10px] md:text-xs font-bold text-[#25D366] uppercase tracking-[0.2em] mt-2">Official Group</p>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 font-medium">
                    Be part of our growing community. Get instant notifications, share resources, and interact with speakers and peers.
                  </p>
                </div>

                <Button 
                  asChild
                  className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-2xl h-14 md:h-16 font-black uppercase tracking-[0.2em] text-[11px] md:text-xs shadow-xl shadow-[#25D366]/10 transition-all hover:translate-y-[-4px] active:translate-y-0"
                >
                  <a href="https://chat.whatsapp.com/EDdFNffkRdn9A0NXLvymCx" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                    Join Community Group
                    <ChevronRight size={20} />
                  </a>
                </Button>
              </motion.div>

              {/* Contact Card - Premium & Organized */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative p-6 md:p-10 rounded-3xl md:rounded-[3rem] bg-slate-900/40 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-ndc-purple/5 blur-[80px] rounded-full pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-5 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-ndc-purple/10 border border-ndc-purple/20 text-ndc-purple flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Phone size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tight leading-none">Support</h3>
                      <p className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mt-2">Direct Contact</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {[
                      { name: "Syed Asif", phone: "8788740090", role: "Event Lead" },
                      { name: "Sarvadnya Kshirsagar", phone: "9356994413", role: "Coordination" }
                    ].map((contact, i) => (
                      <div key={i} className="flex items-center justify-between p-4 md:p-5 rounded-2xl bg-white/[0.03] border border-white/5 group/contact hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-ndc-purple/10 flex items-center justify-center text-ndc-purple text-xs md:text-sm font-black border border-ndc-purple/20">
                            {contact.name.charAt(0)}
                          </div>
                          <div>
                            <span className="block text-sm md:text-base font-bold text-white">{contact.name}</span>
                            <span className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-widest">{contact.role}</span>
                          </div>
                        </div>
                        <a 
                          href={`tel:${contact.phone}`} 
                          className="px-4 py-2 rounded-xl bg-ndc-purple/10 text-ndc-purple text-[10px] md:text-xs font-black uppercase tracking-widest hover:bg-ndc-purple hover:text-white transition-all shadow-lg"
                        >
                          Call
                        </a>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <p className="text-[9px] md:text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em] text-center italic">
                      Support Available: 10 AM - 6 PM
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* 5. Venue & Directions */}
          <div className="mt-24 md:mt-32 max-w-5xl mx-auto px-4">
            <SectionHeader 
              badgeText="Location"
              badgeIcon={MapPin}
              titlePrefix="Venue &"
              titleHighlight="Directions"
              description="Join us at the APJ Auditorium. Easy to find, easy to reach."
              centered
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 relative group bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl md:rounded-[3rem] p-8 md:p-12 overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-ndc-blue/5 blur-[80px] rounded-full pointer-events-none"></div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">APJ Auditorium</h3>
                    <p className="text-gray-400 text-sm md:text-lg font-medium leading-relaxed">
                      Shivaji Engineering College,<br />
                      Parbhani, Maharashtra 431401
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 group/item hover:bg-white/10 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-ndc-purple/10 flex items-center justify-center text-ndc-purple shrink-0">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <span className="block text-sm font-black text-white uppercase tracking-wider">Exact Location</span>
                        <span className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">APJ Auditorium, Main Wing</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 group/item hover:bg-white/10 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-ndc-blue/10 flex items-center justify-center text-ndc-blue shrink-0">
                        <Navigation size={24} />
                      </div>
                      <div>
                        <span className="block text-sm font-black text-white uppercase tracking-wider">College Campus</span>
                        <span className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Shivaji Engineering College</span>
                      </div>
                    </div>
                  </div>

                  <Button 
                    asChild
                    className="w-full bg-white text-black hover:bg-gray-200 rounded-2xl h-16 font-black uppercase tracking-[0.2em] text-xs md:text-sm shadow-xl transition-all hover:scale-[1.02] active:scale-95"
                  >
                    <a href="https://maps.app.goo.gl/pS3MnfsMdUkKRvja9" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                      Get Directions on Maps
                      <Navigation size={20} className="animate-pulse" />
                    </a>
                  </Button>
                </div>

                <div className="relative aspect-square md:aspect-auto md:h-full rounded-[2rem] overflow-hidden border border-white/10 shadow-inner group/map">
                  {/* Decorative Map Placeholder/Thumbnail Overlay */}
                  <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] z-10 flex items-center justify-center opacity-0 group-hover/map:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="text-center p-6">
                      <MapPin size={40} className="text-ndc-purple mx-auto mb-4 animate-bounce" />
                      <p className="text-white font-black uppercase tracking-widest text-xs">Open Google Maps</p>
                    </div>
                  </div>
                  
                  {/* Real Map Iframe (Optional) or High-quality image representation */}
                  <img 
                    src={getAssetPath("images/ssiems-campus.webp")}
                    alt="Shivaji Engineering College Campus" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover/map:scale-110"
                  />
                  
                  {/* Overlay button for better mobile accessibility */}
                  <div className="absolute inset-0 z-20 md:hidden">
                    <a href="https://maps.app.goo.gl/pS3MnfsMdUkKRvja9" target="_blank" rel="noopener noreferrer" className="block w-full h-full" aria-label="Open Google Maps"></a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ & Final Sections */}
          <div className="mt-24 md:mt-40 space-y-24 md:space-y-32 px-4">
            <ParallaxSection offset={20}>
              <WorkshopFAQ />
            </ParallaxSection>
          </div>

          {/* Final CTA */}
          <div className="mt-20 md:mt-32 text-center py-16 md:py-24 rounded-3xl md:rounded-[4rem] bg-slate-900/40 backdrop-blur-2xl border border-white/10 relative overflow-hidden shadow-2xl mx-4">
            <div className="absolute inset-0 bg-gradient-to-br from-ndc-purple/10 via-transparent to-ndc-blue/10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-ndc-purple/10 blur-[80px] md:blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-ndc-blue/10 blur-[80px] md:blur-[100px] rounded-full"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto px-6">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 md:mb-8 tracking-tighter uppercase leading-tight">
                Don't Miss This <br /><span className="gradient-text">Opportunity</span>
              </h2>
              <p className="text-sm md:text-lg text-gray-400 mb-10 md:mb-12 font-medium leading-relaxed">
                Secure your spot today and receive an E-Certificate upon successful completion of the workshop. 
                <span className="block mt-2 text-xs text-ndc-purple font-bold italic opacity-80">
                  *Attendance is mandatory to receive your certificate.
                </span>
              </p>
              <MagneticButton className="inline-block w-full sm:w-auto">
                <Button 
                  asChild
                  className="w-full sm:w-auto px-10 md:px-12 py-6 md:py-7 bg-white text-black hover:bg-gray-200 rounded-xl md:rounded-2xl font-black uppercase tracking-[0.15em] md:tracking-[0.2em] transition-all shadow-xl text-xs md:text-sm"
                >
                  <a href="https://forms.gle/GRLSPbasffrESu1R9" target="_blank" rel="noopener noreferrer">
                    Claim Your Free Spot
                  </a>
                </Button>
              </MagneticButton>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default WorkshopDetails;
