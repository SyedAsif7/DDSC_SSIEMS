import { useState, useEffect } from "react";
import { ArrowLeft, Sparkles, Calendar, Clock, MapPin, ChevronRight, CheckCircle2, Download, Share2, FileText, Target, User2, Award, Phone, MessageSquare, Users, GraduationCap, Linkedin, Navigation, Zap, Terminal, Eye, Maximize2, Handshake } from "lucide-react";
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
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";

import { getAssetPath } from "@/lib/utils";

/**
 * WorkshopDetails Page
 * Dedicated page for the Generative AI Workshop deep-dive.
 */
const WorkshopDetails = () => {
  const certifications = [
    "AWS UG", "GDE", "Docker Captain", "CKS", "CKA", "CKAD", "SCE", "LFCE", "RHCA XI", "SCI", "RHCI", "JBCI"
  ];

  const learningPoints = [
    "Vibe Coding workflow for fast GenAI development",
    "Build intelligent features using Google AI Studio",
    "Generate application logic using Gemini models",
    "Deploy GenAI microservices to Cloud Run",
    "Go from prototype to live URL in minutes"
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

  const workflowSteps = [
    { step: "01", title: "Prototype", desc: "Google AI Studio", color: "text-ndc-purple", icon: Sparkles, glow: "shadow-ndc-purple/20" },
    { step: "02", title: "Generate", desc: "Gemini Models", color: "text-ndc-blue", icon: Zap, glow: "shadow-ndc-blue/20" },
    { step: "03", title: "Build", desc: "Microservice", color: "text-ndc-green", icon: Terminal, glow: "shadow-ndc-green/20" },
    { step: "04", title: "Deploy", desc: "Cloud Run", color: "text-ndc-purple", icon: Navigation, glow: "shadow-ndc-purple/20" }
  ];

  const targetAudience = [
    { title: "Students", desc: "Engineering & Tech students looking to stay ahead.", icon: GraduationCap },
    { title: "Developers", desc: "Builders wanting to accelerate their workflow.", icon: Terminal },
    { title: "Innovators", desc: "Anyone curious about the GenAI revolution.", icon: Sparkles }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 selection:bg-ndc-purple/30 custom-scrollbar">
      <Helmet>
        <title>Generative AI Workshop | DCode Developers Club</title>
        <meta name="description" content="Deep-dive into the Generative AI Workshop by DDSC. Learn about the speaker, roadmap, and get your questions answered." />
      </Helmet>

      <CollegeHeader />
      <Navbar />

      <main className="relative pt-6 md:pt-12 pb-24 overflow-hidden">
        {/* Advanced Background Decorations */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-ndc-purple/10 blur-[160px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-ndc-blue/10 blur-[160px] rounded-full animate-pulse delay-1000"></div>
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]"></div>
          <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>

        <div className="section-container relative z-10">
          {/* 0. Navigation */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8 md:mb-12"
          >
            <Link 
              to="/" 
              className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 active:scale-95"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Back to Home</span>
            </Link>
          </motion.div>

          {/* 1. Hero Section */}
          <div className="max-w-5xl mx-auto text-center mb-12 md:mb-24">
            <ParallaxSection offset={15}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6 md:space-y-8"
              >
                {/* Premium Badge */}
                <div className="inline-flex items-center gap-2 md:gap-2.5 px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-ndc-purple/10 border border-ndc-purple/20 text-ndc-purple shadow-[0_0_40px_rgba(168,85,247,0.15)] backdrop-blur-md">
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4 animate-spin-slow" />
                  <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">Exclusive Learning Event</span>
                </div>
                
                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1] md:leading-[1.1] uppercase italic">
                  Vibe Coding: <br className="block md:hidden" />
                  <span className="gradient-text drop-shadow-[0_0_40px_rgba(59,130,246,0.3)]">GenAI Apps</span>
                </h1>
                
                <div className="flex items-center justify-center gap-3 md:gap-4 px-4">
                  <span className="hidden sm:block h-px w-8 md:w-20 bg-gradient-to-r from-transparent to-ndc-purple/50"></span>
                  <p className="text-ndc-purple font-black text-[9px] md:text-sm uppercase tracking-[0.2em] md:tracking-[0.4em] text-center leading-relaxed">
                    Building & Deploying <br className="block sm:hidden" /> on Google Cloud
                  </p>
                  <span className="hidden sm:block h-px w-8 md:w-20 bg-gradient-to-l from-transparent to-ndc-purple/50"></span>
                </div>
              </motion.div>
            </ParallaxSection>
          </div>

          {/* 2. Quick Logistics Grid */}
          <div className="max-w-4xl mx-auto mb-20 md:mb-24 px-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6"
            >
              {[
                { icon: Calendar, text: "16th May 2026", sub: "Saturday", color: "bg-ndc-purple/10 text-ndc-purple", border: "border-ndc-purple/20" },
                { icon: Clock, text: "12:30 PM", sub: "Sharp Start", color: "bg-ndc-blue/10 text-ndc-blue", border: "border-ndc-blue/20" },
                { icon: MapPin, text: "APJ Auditorium", sub: "SSIEMS Campus", color: "bg-ndc-green/10 text-ndc-green", border: "border-ndc-green/20" }
              ].map((item, i) => (
                <div key={i} className={`flex md:flex-col items-center gap-5 md:gap-0 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.02] border ${item.border} backdrop-blur-xl group hover:bg-white/[0.04] transition-all duration-500 shadow-xl`}>
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl ${item.color} flex items-center justify-center md:mb-6 group-hover:scale-110 transition-transform shadow-inner shrink-0`}>
                    <item.icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div className="flex flex-col md:items-center">
                    <span className="font-black text-base md:text-lg text-white uppercase tracking-tight mb-0.5 md:mb-1">{item.text}</span>
                    <span className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">{item.sub}</span>
                  </div>
                </div>
              ))}
            </motion.div>
            
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 md:gap-4">
              <div className="flex items-center gap-2.5 px-5 py-2.5 md:px-6 md:py-3 rounded-xl md:rounded-2xl bg-ndc-green/5 border border-ndc-green/10 text-ndc-green backdrop-blur-sm w-full sm:w-auto justify-center">
                <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">Free Registration</span>
              </div>
              <div className="flex items-center gap-2.5 px-5 py-2.5 md:px-6 md:py-3 rounded-xl md:rounded-2xl bg-ndc-purple/5 border border-ndc-purple/10 text-ndc-purple backdrop-blur-sm w-full sm:w-auto justify-center">
                <GraduationCap className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">E-Certificates Included</span>
              </div>
            </div>
          </div>

          {/* 3. Primary CTA & Countdown */}
          <div className="flex flex-col items-center mb-24 md:mb-40 px-4">
            <div className="scale-75 sm:scale-90 md:scale-125 mb-12 md:mb-16 drop-shadow-[0_0_30px_rgba(168,85,247,0.2)]">
              <CountdownTimer targetDate="2026-05-16T12:30:00" />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full max-w-2xl">
              <MagneticButton className="flex-1">
                <Button 
                  asChild
                  className="w-full h-16 md:h-20 bg-gradient-to-r from-ndc-purple via-ndc-blue to-ndc-purple bg-[length:200%_auto] animate-gradient text-white rounded-[1.25rem] font-black text-sm md:text-lg uppercase tracking-[0.2em] shadow-2xl shadow-ndc-purple/20 hover:scale-[1.02] active:scale-[0.98] transition-all group overflow-hidden relative"
                >
                  <a href="https://forms.gle/GRLSPbasffrESu1R9" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 relative z-10">
                    Register Now
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </MagneticButton>
              <MagneticButton className="flex-1">
                <Button 
                  onClick={handleAddToCalendar}
                  variant="outline"
                  className="w-full h-16 md:h-20 border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-[1.25rem] font-black text-sm md:text-lg uppercase tracking-[0.2em] transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Calendar className="w-5 h-5 mr-3" />
                  Add to Calendar
                </Button>
              </MagneticButton>
            </div>
          </div>

          {/* 5. Target Audience Section */}
          <div className="mb-24 md:mb-40">
            <SectionHeader 
              badgeText="Target Audience"
              badgeIcon={Users}
              titlePrefix="Who is this"
              titleHighlight="For?"
              description="This workshop is designed for anyone eager to build modern, AI-powered applications."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 px-4">
              {targetAudience.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.02] border border-white/5 text-center group hover:bg-white/[0.04] transition-all duration-500"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6 md:mb-8 border border-white/10 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 md:w-8 md:h-8 text-ndc-blue" />
                  </div>
                  <h4 className="text-lg md:text-xl font-black text-white uppercase mb-3 md:mb-4 tracking-tight">{item.title}</h4>
                  <p className="text-[13px] md:text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 6. Workflow Steps Section */}
          <div className="mb-24 md:mb-40">
            <SectionHeader 
              badgeText="The Process"
              badgeIcon={Navigation}
              titlePrefix="The Vibe"
              titleHighlight="Workflow"
              description="A streamlined approach to rapid development and deployment."
              centered
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16 px-4">
              {workflowSteps.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`relative p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-[#0A0A0A] border border-white/5 backdrop-blur-xl group hover:border-white/20 transition-all duration-500 text-center ${item.glow} hover:shadow-2xl`}
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] md:rounded-[2rem] bg-white/5 flex items-center justify-center mx-auto mb-6 md:mb-8 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-inner">
                    <item.icon className={`w-8 h-8 md:w-10 md:h-10 ${item.color}`} />
                  </div>
                  
                  <span className={`text-4xl md:text-5xl font-black ${item.color} opacity-20 mb-2 md:mb-3 block tracking-tighter italic`}>
                    {item.step}
                  </span>
                  <h4 className="text-xl md:text-2xl font-black text-white uppercase mb-2 md:mb-3 tracking-tight">{item.title}</h4>
                  <p className="text-[10px] md:text-[11px] text-gray-500 font-bold uppercase tracking-[0.2em] md:tracking-[0.25em]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 7. Faculty Section */}
          <div className="mb-24 md:mb-40">
            <SectionHeader 
              badgeText="Expert Faculty"
              badgeIcon={GraduationCap}
              titlePrefix="Learn from the"
              titleHighlight="Masters"
              description="Industry veterans with over a decade of experience in training and technology."
              centered
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mt-12 md:mt-16 px-4">
              {[
                {
                  name: "Ashutosh S. Bhakare",
                  img: "Ashutosh S. Bhakare.jpeg",
                  role: "Red Hat Security Specialist",
                  org: "Unnati Development & Training Centre",
                  desc: "Expert in enterprise security and cloud-native automation. Passionate about building secure, scalable AI solutions.",
                  linkedin: "https://linkedin.com/in/abhakare",
                  topic: "Rapidly Building and Deploying GenAI Apps",
                  certs: certifications
                },
                {
                  name: "Rachana Bhakare",
                  img: "Rachana Bhakare.jpeg",
                  role: "Senior Platform Instructor",
                  org: "Unnati Development & Training Centre",
                  desc: "12+ years of experience in technical training and platform engineering. Expert in containerization and modern app dev.",
                  linkedin: "https://www.linkedin.com/in/rachana-bhakare-a82490249/",
                  topic: "Demystifying Containers and AI Apps",
                  certs: ["Platform Training", "Instructor", "GDG", "OpenSource"]
                }
              ].map((speaker, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-14 shadow-2xl group hover:border-white/20 transition-all duration-700 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-white/5 blur-[80px] md:blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors"></div>
                  
                  <div className="flex flex-col sm:flex-row gap-8 md:gap-10 items-center sm:items-start text-center sm:text-left mb-8 md:mb-10 relative z-10">
                    <div className="relative flex-shrink-0">
                      <div className="w-32 h-32 md:w-48 md:h-48 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/10 group-hover:scale-105 transition-transform duration-700 shadow-2xl">
                        <img src={getAssetPath(`images/${speaker.img}`)} alt={speaker.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 bg-ndc-purple p-3 md:p-4 rounded-xl md:rounded-2xl shadow-2xl border border-white/10 animate-bounce-slow">
                        <Award className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="space-y-4 md:space-y-5">
                      <div className="space-y-1 md:space-y-1.5">
                        <h3 className="text-2xl md:text-4xl font-black text-white tracking-tighter leading-tight uppercase italic">{speaker.name}</h3>
                        <p className="text-ndc-purple font-black uppercase text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em]">{speaker.role}</p>
                        <p className="text-gray-500 text-[9px] md:text-[10px] font-bold uppercase tracking-widest">{speaker.org}</p>
                      </div>
                      <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-ndc-blue hover:text-white transition-all text-[10px] md:text-xs font-black uppercase tracking-[0.2em] group/link">
                        <Linkedin className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform group-hover/link:rotate-12" />
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                  
                  <div className="space-y-6 md:space-y-8 relative z-10">
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium">{speaker.desc}</p>
                    <div className="p-6 md:p-7 rounded-[1.5rem] md:rounded-[2rem] bg-white/[0.03] border border-white/5 backdrop-blur-sm group-hover:bg-white/[0.05] transition-colors">
                      <p className="text-[9px] md:text-[10px] font-black text-white uppercase tracking-widest mb-2 md:mb-3 opacity-50">Core Specialization:</p>
                      <p className="text-ndc-blue text-base md:text-lg font-bold italic uppercase leading-tight tracking-tight">{speaker.topic}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-2.5">
                      {speaker.certs.slice(0, 8).map((cert) => (
                        <span key={cert} className="px-3 py-1 md:px-4 md:py-1.5 rounded-lg md:rounded-xl bg-white/5 border border-white/5 text-[8px] md:text-[9px] font-bold text-gray-500 uppercase tracking-widest hover:text-white hover:bg-white/10 transition-colors">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 8. Official Event Flyer Section */}
          <div className="mb-24 md:mb-40 px-4">
            <SectionHeader 
              badgeText="Event Media"
              badgeIcon={Sparkles}
              titlePrefix="Official"
              titleHighlight="Flyer"
              description="The definitive visual guide and roadmap for our upcoming Vibe Coding workshop."
              centered
            />
            
            <div className="max-w-6xl mx-auto mt-12 md:mt-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                {/* Left Side: Premium Flyer Showcase */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative group order-2 lg:order-1"
                >
                  {/* Decorative Glow behind the flyer */}
                  <div className="absolute -inset-4 bg-gradient-to-tr from-ndc-purple/20 via-ndc-blue/20 to-ndc-green/20 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="relative w-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-slate-900/40 backdrop-blur-xl aspect-[1/1.414] cursor-zoom-in group/flyer transition-transform duration-500 hover:scale-[1.01]">
                        <img 
                          src={getAssetPath("images/Hands-on workshop on Vibe Coding.jpg")} 
                          alt="Official Workshop Flyer" 
                          className="w-full h-full object-cover transition-all duration-700 group-hover/flyer:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/flyer:opacity-40 transition-opacity"></div>
                        
                        {/* Overlay Elements */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/flyer:opacity-100 transition-all duration-500">
                          <div className="px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl bg-white text-black font-black uppercase tracking-widest text-[10px] md:text-xs flex items-center gap-2 md:gap-3 shadow-2xl scale-90 group-hover/flyer:scale-100 transition-transform">
                            <Maximize2 size={16} />
                            <span className="hidden sm:inline">View Full Resolution</span>
                            <span className="sm:hidden">View Full</span>
                          </div>
                        </div>

                        <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 flex justify-between items-end">
                          <div className="space-y-1">
                            <p className="text-[9px] md:text-[10px] font-black text-ndc-purple uppercase tracking-[0.2em] md:tracking-[0.3em]">Official Asset</p>
                            <p className="text-base md:text-lg font-black text-white uppercase tracking-tight">Workshop Blueprint</p>
                          </div>
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0">
                            <Eye className="text-white w-5 h-5" />
                          </div>
                        </div>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-transparent overflow-hidden flex items-center justify-center shadow-none focus:outline-none">
                      <DialogTitle className="sr-only">Official Workshop Flyer</DialogTitle>
                      <motion.img 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        src={getAssetPath("images/Hands-on workshop on Vibe Coding.jpg")} 
                        alt="Flyer Full Resolution" 
                        className="max-w-full max-h-[90vh] object-contain rounded-xl md:rounded-2xl shadow-[0_0_100px_rgba(0,0,0,0.8)]"
                      />
                    </DialogContent>
                  </Dialog>
                </motion.div>

                {/* Right Side: Structured Information & Actions */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8 md:space-y-12 order-1 lg:order-2"
                >
                  <div className="space-y-4 md:space-y-6">
                    <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic leading-none">
                      The <span className="gradient-text">Masterclass</span> <br/> Roadmap
                    </h3>
                    <p className="text-gray-400 text-base md:text-lg font-medium leading-relaxed max-w-lg">
                      Our official flyer contains all the essential details for the upcoming workshop. From core learning modules to registration pathways, it's your complete guide to the event.
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {learningPoints.slice(0, 4).map((point, i) => (
                      <div key={i} className="flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-colors group">
                        <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-ndc-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                          <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-ndc-blue" />
                        </div>
                        <span className="text-[10px] md:text-[11px] font-bold text-gray-300 uppercase tracking-tight leading-tight">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-5 pt-2 md:pt-4">
                    <Button 
                      asChild
                      className="h-16 md:h-20 flex-1 bg-white text-black hover:bg-gray-100 rounded-xl md:rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] md:text-xs shadow-2xl transition-all hover:-translate-y-1"
                    >
                      <a href={getAssetPath("images/Hands-on workshop on Vibe Coding.jpg")} download className="flex items-center justify-center gap-3">
                        <Download className="w-4 h-4 md:w-5 md:h-5" />
                        Download Flyer
                      </a>
                    </Button>
                    <Button 
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: 'Vibe Coding Workshop Flyer',
                            text: 'Check out the official flyer for the upcoming GenAI Workshop!',
                            url: window.location.href
                          });
                        }
                      }}
                      variant="outline"
                      className="h-16 md:h-20 px-8 border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-xl md:rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] md:text-xs transition-all hover:-translate-y-1"
                    >
                      <Share2 className="w-4 h-4 md:w-5 md:h-5 sm:mr-3" />
                      <span className="hidden sm:inline">Share</span>
                    </Button>
                  </div>

                  {/* Trust Badge */}
                  <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-r from-ndc-purple/5 to-ndc-blue/5 border border-white/5 flex items-center gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                      <Award className="w-6 h-6 md:w-8 md:h-8 text-ndc-purple" />
                    </div>
                    <div className="space-y-0.5 md:space-y-1">
                      <p className="text-[10px] md:text-xs font-black text-white uppercase tracking-widest">Certified Learning</p>
                      <p className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-widest">Authorized by DDSC & SSIEMS</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* 9. Media & Community Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-24 md:mb-40 px-4">
            {/* Community Support */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-14 flex flex-col justify-between group hover:border-white/20 transition-all duration-500"
            >
              <div className="space-y-8 md:space-y-10">
                <div className="flex items-center gap-6 md:gap-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-ndc-purple/10 border border-ndc-purple/20 text-ndc-purple flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner shrink-0">
                    <MessageSquare size={32} className="md:w-10 md:h-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight italic">Support</h3>
                    <p className="text-[10px] md:text-[11px] font-bold text-ndc-purple uppercase tracking-[0.2em] md:tracking-[0.3em]">Community & Contact</p>
                  </div>
                </div>

                <div className="space-y-6 md:space-y-8">
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed font-medium">
                    Join our official WhatsApp group for live updates or reach out to our team leads for direct assistance.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                    {[
                      { name: "Syed Asif", phone: "8788740090", role: "Event Lead" },
                      { name: "Sarvadnya K.", phone: "9356994413", role: "Coordination" }
                    ].map((contact, i) => (
                      <div key={i} className="p-5 md:p-6 rounded-2xl md:rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-all group/item shadow-xl">
                        <div className="flex items-center justify-between mb-2 md:mb-3">
                          <span className="text-[13px] md:text-sm font-black text-white uppercase tracking-tight">{contact.name}</span>
                          <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-ndc-purple opacity-50 group-hover/item:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 md:mb-4">{contact.role}</p>
                        <a href={`tel:${contact.phone}`} className="text-[13px] md:text-sm font-black text-ndc-blue hover:text-white transition-colors tracking-widest">
                          {contact.phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Button asChild className="mt-10 md:mt-12 h-16 md:h-20 bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-[1.25rem] md:rounded-[1.5rem] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs shadow-2xl transition-all hover:-translate-y-1">
                <a href="https://chat.whatsapp.com/EDdFNffkRdn9A0NXLvymCx" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 md:gap-4">
                  Join Community Group
                  <ChevronRight size={20} className="md:w-6 md:h-6" />
                </a>
              </Button>
            </motion.div>

            {/* Venue Directions */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-14 flex flex-col justify-between group hover:border-white/20 transition-all duration-500"
            >
              <div className="space-y-8 md:space-y-10">
                <div className="flex items-center gap-6 md:gap-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-ndc-blue/10 border border-ndc-blue/20 text-ndc-blue flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner shrink-0">
                    <MapPin size={32} className="md:w-10 md:h-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight italic">Venue</h3>
                    <p className="text-[10px] md:text-[11px] font-bold text-ndc-blue uppercase tracking-[0.2em] md:tracking-[0.3em]">APJ Auditorium</p>
                  </div>
                </div>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed font-medium">
                  Located in the main wing of Shivaji Engineering College (SSIEMS), Parbhani. Click below for exact GPS coordinates.
                </p>
                <div className="p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-3 md:gap-4 mb-1.5 md:mb-2">
                    <Navigation className="w-4 h-4 md:w-5 md:h-5 text-ndc-blue" />
                    <span className="text-[13px] md:text-sm font-black text-white uppercase tracking-widest">Exact Coordinates</span>
                  </div>
                  <p className="text-[11px] md:text-xs text-gray-500 font-medium">SSIEMS Campus, Vasmat Road, Parbhani</p>
                </div>
              </div>
              <Button asChild className="mt-10 md:mt-12 h-16 md:h-20 bg-white text-black hover:bg-gray-100 rounded-[1.25rem] md:rounded-[1.5rem] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs shadow-2xl transition-all hover:-translate-y-1">
                <a href="https://maps.app.goo.gl/pS3MnfsMdUkKRvja9" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 md:gap-4">
                  Get Directions
                  <Navigation size={20} className="md:w-6 md:h-6" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Event Sponsors Section */}
          <div className="mb-24 md:mb-40 px-4">
            <SectionHeader 
              badgeText="Event Supporters"
              badgeIcon={Handshake}
              titlePrefix="Our"
              titleHighlight="Sponsors"
              description="DCode 2026 is supported by industry leaders committed to student growth and innovation."
              centered
            />
            
            <div className="max-w-4xl mx-auto mt-12 md:mt-16 space-y-6 md:space-y-8">
              {/* Academic Partner */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 flex flex-col sm:flex-row items-center gap-8 md:gap-12 group hover:border-white/20 transition-all duration-500"
              >
                <div className="relative shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 group-hover:scale-105 transition-transform duration-700 shadow-2xl bg-white/5 flex items-center justify-center p-4">
                    <img 
                      src={getAssetPath("images/ssiems-logo.png")} 
                      alt="SSIEMS Parbhani" 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-ndc-blue p-2 md:p-3 rounded-lg md:rounded-xl shadow-2xl border border-white/10">
                    <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                </div>
                
                <div className="text-center sm:text-left space-y-4 md:space-y-6 flex-1">
                  <div className="space-y-1.5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ndc-blue/10 border border-ndc-blue/20 text-ndc-blue mb-2">
                      <Sparkles className="w-3 h-3" />
                      <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em]">Official Academic Partner</span>
                    </div>
                    <h4 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter">Shri Shivaji Institute of Engineering and Management Studies</h4>
                    <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed">
                      Our official academic partner providing resources, spaces, and academic support for the club's activities and growth.
                    </p>
                  </div>
                  
                  <a 
                    href="https://ssiems.org.in/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all text-[10px] md:text-xs font-black uppercase tracking-[0.2em] group/link"
                  >
                    Visit Institute Website
                    <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </motion.div>

              {/* Silver Sponsor */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 flex flex-col sm:flex-row items-center gap-8 md:gap-12 group hover:border-white/20 transition-all duration-500"
              >
                <div className="relative shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 group-hover:scale-105 transition-transform duration-700 shadow-2xl">
                    <img 
                      src={getAssetPath("images/sponser_hpworldparbhani.jpeg")} 
                      alt="HP World Parbhani" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-slate-400 p-2 md:p-3 rounded-lg md:rounded-xl shadow-2xl border border-white/10">
                    <Award className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                </div>
                
                <div className="text-center sm:text-left space-y-4 md:space-y-6 flex-1">
                  <div className="space-y-1.5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-400/10 border border-slate-400/20 text-slate-400 mb-2">
                      <Sparkles className="w-3 h-3" />
                      <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em]">Silver Sponsor</span>
                    </div>
                    <h4 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter">HP World, Parbhani</h4>
                    <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed">
                      Official Silver Sponsor for DCode 2026. Empowering students with the latest technology solutions and supporting technical innovation in the community.
                    </p>
                  </div>
                  
                  <a 
                    href="https://www.hpworldstores.in/convolt-systems-parbhani-maharashtra-431401/Home" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all text-[10px] md:text-xs font-black uppercase tracking-[0.2em] group/link"
                  >
                    Visit Website
                    <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* 9. FAQ Section */}
          <div className="mb-24 md:mb-40">
            <WorkshopFAQ />
          </div>

          {/* 10. Final CTA Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-12 md:p-32 rounded-[3.5rem] md:rounded-[5rem] bg-slate-900/40 backdrop-blur-3xl border border-white/10 text-center overflow-hidden shadow-2xl mx-4"
          >
            <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-ndc-purple/10 blur-[100px] md:blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-ndc-blue/10 blur-[100px] md:blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-8xl font-black text-white mb-8 md:mb-10 tracking-tighter uppercase leading-none italic">
                Ready to <span className="gradient-text">Vibe?</span>
              </h2>
              <p className="text-lg md:text-2xl text-gray-400 mb-12 md:mb-16 font-medium leading-relaxed px-4">
                Seats are limited and filling fast. Claim your free spot today and join the GenAI revolution in Parbhani.
              </p>
              <MagneticButton className="inline-block w-full sm:w-auto">
                <Button asChild className="h-20 md:h-24 px-12 md:px-20 bg-white text-black hover:bg-gray-100 rounded-[1.5rem] md:rounded-[2rem] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-lg shadow-2xl transition-all hover:scale-105 active:scale-95 w-full sm:w-auto">
                  <a href="https://forms.gle/GRLSPbasffrESu1R9" target="_blank" rel="noopener noreferrer">
                    Claim Free Spot
                  </a>
                </Button>
              </MagneticButton>
              <p className="mt-10 md:mt-12 text-[9px] md:text-xs text-gray-500 font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] opacity-50 px-4">
                Exclusive for SSIEMS Students & Tech Enthusiasts
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default WorkshopDetails;
