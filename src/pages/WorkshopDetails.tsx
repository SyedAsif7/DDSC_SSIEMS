import { useState, useEffect } from "react";
import { ArrowLeft, Sparkles, Calendar, Clock, MapPin, ChevronRight, CheckCircle2, Download, Share2, FileText, Target, User2, Award, Phone, MessageSquare, Users, GraduationCap, Linkedin, Navigation, Zap, Terminal, Eye, Maximize2, Handshake, Quote, Star, BarChart3, Rocket, Globe, Instagram, Laptop } from "lucide-react";
import { Link } from "react-router-dom";
import CollegeHeader from "@/components/layout/CollegeHeader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import SectionHeader from "@/components/ui/SectionHeader";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Camera } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getAssetPath } from "@/lib/utils";

/**
 * WorkshopDetails Page
 * Detailed success story of the Vibe Coding Workshop Chapter 1.
 */
const WorkshopDetails = () => {
  const learningPoints = [
    "Vibe Coding workflow for fast GenAI development",
    "Build intelligent features using Google AI Studio",
    "Generate application logic using Gemini Models",
    "Deploy GenAI microservices to Cloud Run",
    "Go from prototype to live URL in minutes"
  ];

  const workflowSteps = [
    { step: "01", title: "Prototype", desc: "Using Google AI Studio to rapidly prototype intelligent features and ideas.", color: "text-ndc-purple", icon: Sparkles, glow: "shadow-ndc-purple/20" },
    { step: "02", title: "Generate", desc: "Using Gemini Models to generate complete application logic and code.", color: "text-ndc-blue", icon: Zap, glow: "shadow-ndc-blue/20" },
    { step: "03", title: "Build", desc: "Building a fully functional GenAI application from the generated code.", color: "text-ndc-green", icon: Terminal, glow: "shadow-ndc-green/20" },
    { step: "04", title: "Deploy", desc: "Deploying the live GenAI microservice to Google Cloud Run.", color: "text-ndc-purple", icon: Navigation, glow: "shadow-ndc-purple/20" }
  ];

  const speakers = [
    {
      name: "Ashutosh S. Bhakare",
      role: "Google Developer Expert (GDE)",
      desc: "Ashutosh S. Bhakare is a certified Google Developer Expert — recognized and certified globally by Google. With deep expertise in Google Cloud, AI and modern application development, Ashutosh brings real world industry knowledge and hands on experience to every session he conducts.",
      contribution: "At the Vibe Coding Workshop, Ashutosh led the entire hands-on session — teaching students how to prototype, build and deploy live GenAI applications using Google AI Studio, Gemini Models and Google Cloud Run.",
      image: "/images/team/Ashutosh S. Bhakare.jpeg"
    },
    {
      name: "Rachana Bhakare",
      role: "Google Developer Expert (GDE)",
      desc: "Rachana Bhakare is a Google Developer Expert who brings a unique combination of technical expertise and warm, engaging communication to every session.",
      contribution: "At the Vibe Coding Workshop, Rachana played a key role in guiding participants through the workshop — making the learning experience more interactive, inclusive and impactful.",
      image: "/images/team/Rachana Bhakare.jpeg"
    }
  ];

  const stats = [
    { label: "Days to Organise", value: "8-10 Days", icon: Calendar },
    { label: "Speakers", value: "2 GDEs", icon: User2 },
    { label: "Total Students", value: "200+", icon: Users },
    { label: "Certificates", value: "For All", icon: Award },
    { label: "Entry Fee", value: "Free", icon: Zap },
    { label: "Chapter", value: "Chapter 1", icon: Star }
  ];

  const quotes = [
    { text: "This was not just a workshop. This was a movement. Parbhani proved today that small cities have big dreams.", author: "Syed Asif", role: "President DDSC" },
    { text: "From a blank editor to a live AI app — in minutes. That is the power of Vibe Coding.", author: "Ashutosh S. Bhakare", role: "Google Developer Expert" },
    { text: "Seeing students from Parbhani build and deploy real AI applications was truly inspiring.", author: "Rachana Bhakare", role: "Google Developer Expert" }
  ];

  const galleryImages = [
    { src: "/images/Vibe coding workshop/IMG_9211.jpg", caption: "Workshop Session in APJ Abdul Kalam Auditorium" },
    { src: "/images/Vibe coding workshop/IMG_9399.jpg", caption: "Students engaging with the AI workflow" },
    { src: "/images/Vibe coding workshop/Participates in auditorium.jpg", caption: "Full house of enthusiastic participants" },
    { src: "/images/Vibe coding workshop/Student is presenting her workshop model.jpg", caption: "Student presenting her GenAI model" },
    { src: "/images/Vibe coding workshop/President syed asif delvering vote of thanks.jpg", caption: "President Syed Asif delivering the vote of thanks" },
    { src: "/images/Vibe coding workshop/Stage image of director.jpg", caption: "Director addressing the attendees" },
    { src: "/images/Vibe coding workshop/Meeeting of team with speakers.jpg", caption: "Core team meeting with Google Developer Experts" },
    { src: "/images/Vibe coding workshop/Design team.jpeg", caption: "Creative minds of the Design Team" },
    { src: "/images/Vibe coding workshop/Registration desk.jpg", caption: "Welcoming participants at the Registration Desk" },
    { src: "/images/Vibe coding workshop/Sponser hp world delvering speech.JPG", caption: "Sponsor HP World delivering a speech" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 selection:bg-ndc-purple/30 custom-scrollbar">
      <Helmet>
        <title>Vibe Coding Workshop Success | DCode Developers Club</title>
        <meta name="description" content="Relive the success of DCode Developers Club's first hands-on workshop on Vibe Coding and GenAI Apps." />
      </Helmet>

      <CollegeHeader />
      <Navbar />

      <main className="relative pt-6 md:pt-12 pb-24 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-ndc-purple/10 blur-[160px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-ndc-blue/10 blur-[160px] rounded-full animate-pulse delay-1000"></div>
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]"></div>
        </div>

        <div className="section-container relative z-10">
          {/* Navigation */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8 md:mb-12"
          >
            <Link 
              to="/#events" 
              className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 active:scale-95"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Back to Achievements</span>
            </Link>
          </motion.div>

          {/* 1. Hero Section */}
          <div className="max-w-5xl mx-auto text-center mb-24 md:mb-40 px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="flex flex-wrap items-center justify-center gap-3">
                {['First Event', 'Successful', 'Google Cloud', 'GenAI', 'Parbhani'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-ndc-purple/10 border border-ndc-purple/20 text-ndc-purple text-[10px] font-black uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase italic">
                Where Innovation <br />
                <span className="gradient-text">Meets Action</span>
              </h1>
              
              <p className="text-gray-400 text-lg md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed italic">
                "DCode Developers Club organised its first ever hands-on workshop on Vibe Coding — Rapidly Building and Deploying GenAI Apps on Google Cloud."
              </p>
            </motion.div>
          </div>

          {/* 2. About The Event */}
          <div className="mb-24 md:mb-40">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-ndc-blue/10 border border-ndc-blue/20 text-ndc-blue">
                  <Rocket size={16} />
                  <span className="text-xs font-black uppercase tracking-widest">Chapter 1</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase italic">
                  Vibe Coding Workshop — <span className="gradient-text">Chapter 1</span>
                </h2>
                <div className="space-y-4 text-gray-400 text-sm md:text-base font-medium leading-relaxed">
                  <p>
                    On 16th May 2026, DCode Developers Club (DDSC) in association with Shri Shivaji Institute of Engineering & Management Studies (SSIEMS), Parbhani organised its first ever hands-on technical workshop titled —
                  </p>
                  <p className="text-white font-black italic text-lg md:text-xl border-l-4 border-ndc-purple pl-6 py-2 bg-ndc-purple/5 rounded-r-xl">
                    "Vibe Coding — Rapidly Building and Deploying GenAI Apps on Google Cloud."
                  </p>
                  <p>
                    The workshop was a one of a kind experience that took students from a blank editor to a live AI application — in minutes.
                  </p>
                  <p>
                    Participants learned the complete Vibe Coding workflow — from prototyping with Google AI Studio to building and deploying live GenAI microservices on Google Cloud Run.
                  </p>
                  <p>
                    The event was led by certified Google Developer Experts (GDEs) and was attended by passionate student developers from Parbhani and beyond.
                  </p>
                  <p className="text-ndc-blue font-black uppercase tracking-widest text-sm pt-4">
                    This was not just a workshop. This was Chapter 1 of DDSC's journey.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-video group"
              >
                <img 
                  src={getAssetPath("/images/Vibe coding workshop/IMG_9211.jpg")} 
                  alt="Workshop Session" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                  <div className="space-y-2">
                    <p className="text-white font-black text-xl uppercase tracking-tight">The Future of Coding</p>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">APJ Abdul Kalam Auditorium</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* 3. Event Details Table */}
          <div className="mb-24 md:mb-40">
            <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-[2.5rem] bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase italic mb-8 text-center">Event <span className="gradient-text">Logistics</span></h3>
              <div className="grid gap-4">
                {[
                  { label: "Date", value: "16th May 2026 — Saturday", icon: Calendar },
                  { label: "Entry Time", value: "10:30 AM — 11:30 AM", icon: Clock },
                  { label: "Session Time", value: "12:30 PM Sharp", icon: Zap },
                  { label: "Venue", value: "APJ Abdul Kalam Auditorium, SSIEMS Parbhani", icon: MapPin },
                  { label: "Certificate", value: "E-Certificate for all participants", icon: Award },
                  { label: "Fee", value: "Free of Cost", icon: Star },
                  { label: "Partner", value: "Shri Shivaji Institute of Engineering & Management Studies, Parbhani", icon: Handshake }
                ].map((detail, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all">
                    <div className="flex items-center gap-3 mb-2 sm:mb-0">
                      <detail.icon className="w-5 h-5 text-ndc-blue" />
                      <span className="text-xs font-black uppercase tracking-widest text-gray-500">{detail.label}</span>
                    </div>
                    <span className="text-sm md:text-base font-bold text-white">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3.5 Event Gallery Slider Section */}
          <div className="mb-24 md:mb-40">
            <SectionHeader 
              badgeText="Visual Journey"
              badgeIcon={Camera}
              titlePrefix="Event"
              titleHighlight="Gallery"
              description="Glimpses of the Vibe Coding Workshop."
              centered
            />
            <div className="max-w-5xl mx-auto mt-12 px-4 md:px-12">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 3000,
                    stopOnInteraction: true,
                  })
                ]}
                className="w-full relative group/carousel"
              >
                <CarouselContent className="-ml-4">
                  {galleryImages.map((image, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                      <div className="p-1">
                        <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-white/5 border border-white/10 shadow-xl">
                          <img 
                            src={encodeURI(getAssetPath(image.src))} 
                            alt={image.caption}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <p className="text-white text-sm md:text-base font-bold italic tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                              {image.caption}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden md:block">
                  <CarouselPrevious className="bg-slate-900 border-white/20 hover:bg-white/10 text-white -left-4" />
                  <CarouselNext className="bg-slate-900 border-white/20 hover:bg-white/10 text-white -right-4" />
                </div>
              </Carousel>
              <div className="mt-8 text-center md:hidden">
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest italic">Swipe to explore gallery</p>
              </div>
            </div>
          </div>

          {/* 4. What Participants Learned */}
          <div className="mb-24 md:mb-40">
            <SectionHeader 
              badgeText="Learning Outcomes"
              badgeIcon={GraduationCap}
              titlePrefix="What Participants"
              titleHighlight="Learned"
              description="Mastering the cutting-edge GenAI workflow."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 px-4">
              {learningPoints.map((point, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-ndc-green/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5 text-ndc-green" />
                  </div>
                  <span className="text-sm md:text-base font-bold text-gray-300">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 5. Workflow Steps Section */}
          <div className="mb-24 md:mb-40">
            <SectionHeader 
              badgeText="The Process"
              badgeIcon={Navigation}
              titlePrefix="The Vibe"
              titleHighlight="Workflow"
              description="A streamlined approach to rapid development and deployment."
              centered
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 px-4">
              {workflowSteps.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[2.5rem] bg-slate-900/40 border border-white/5 backdrop-blur-xl group hover:border-white/20 transition-all duration-500 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6 border border-white/10 group-hover:scale-110 transition-all">
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <span className={`text-4xl font-black ${item.color} opacity-20 mb-3 block italic`}>{item.step}</span>
                  <h4 className="text-xl font-black text-white uppercase mb-3 tracking-tight">{item.title}</h4>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <div className="inline-block p-6 rounded-3xl bg-ndc-purple/10 border border-ndc-purple/20 backdrop-blur-xl">
                <p className="text-white font-black italic text-lg md:text-2xl tracking-tight">
                  From a blank editor to a live URL — in minutes. ⚡
                </p>
              </div>
            </div>
          </div>

          {/* 6. Speakers Section */}
          <div className="mb-24 md:mb-40">
            <SectionHeader 
              badgeText="Expert Guidance"
              badgeIcon={User2}
              titlePrefix="Our Distinguished"
              titleHighlight="Speakers"
              description="Learn from industry-recognized Google Developer Experts."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 px-4">
              {speakers.map((speaker, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="p-8 md:p-10 rounded-[2.5rem] bg-slate-900/40 border border-white/5 backdrop-blur-xl group hover:border-white/20 transition-all"
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="w-32 h-32 rounded-3xl overflow-hidden ring-4 ring-ndc-purple/20 shrink-0">
                      <img src={getAssetPath(speaker.image)} alt={speaker.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="space-y-4 text-center md:text-left">
                      <div className="space-y-1">
                        <h4 className="text-2xl font-black text-white italic">{speaker.name}</h4>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-ndc-purple">{speaker.role}</span>
                      </div>
                      <p className="text-xs text-gray-400 font-medium leading-relaxed">{speaker.desc}</p>
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                        <p className="text-[11px] text-gray-300 italic font-bold leading-relaxed">{speaker.contribution}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 7. Sponsors Section */}
          <div className="mb-24 md:mb-40">
            <div className="max-w-4xl mx-auto p-12 rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-ndc-blue/10 blur-[100px] rounded-full -translate-y-32 translate-x-32 group-hover:bg-ndc-blue/20 transition-all"></div>
              
              <div className="relative z-10 text-center space-y-8">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-ndc-blue/10 border border-ndc-blue/20 text-ndc-blue">
                  <Handshake size={16} />
                  <span className="text-xs font-black uppercase tracking-widest">Proud Sponsor</span>
                </div>
                
                <div className="space-y-4">
                  <div className="w-32 h-32 mx-auto bg-white rounded-3xl p-4 flex items-center justify-center shadow-2xl">
                    <img src={getAssetPath("/images/sponsors/sponser_hpworldparbhani.jpeg")} alt="HP World" className="max-w-full max-h-full object-contain" />
                  </div>
                  <h3 className="text-4xl font-black text-white italic uppercase">HP World</h3>
                  <p className="text-ndc-blue font-black uppercase tracking-[0.3em] text-sm">Laptops | Desktops | Printers | Accessories</p>
                </div>

                <div className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base leading-relaxed font-medium italic">
                  "We are deeply grateful to HP World for being the proud sponsor of the Vibe Coding Workshop. HP World's generous support played a crucial role in making this event possible. By sponsoring this event, HP World didn't just fund a workshop — they invested in the future of technology and the next generation of developers."
                </div>

                <div className="pt-4">
                  <span className="text-xs font-black uppercase tracking-[0.4em] text-gray-600">We are honoured to have HP World as our partner</span>
                </div>
              </div>
            </div>
          </div>

          {/* 9. Testimonial Section */}
          <div className="mb-24 md:mb-40">
            <SectionHeader 
              badgeText="Voices of the Event"
              badgeIcon={MessageSquare}
              titlePrefix="What Made This"
              titleHighlight="Day Special"
              description="Real thoughts from our speakers and student leaders."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 px-4">
              {quotes.map((quote, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 relative group hover:bg-white/[0.04] transition-all"
                >
                  <Quote className="absolute top-6 left-6 w-10 h-10 text-ndc-purple opacity-10 group-hover:opacity-20 transition-opacity" />
                  <div className="relative z-10 space-y-6">
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium italic">
                      "{quote.text}"
                    </p>
                    <div className="pt-4 border-t border-white/5">
                      <p className="text-white font-black uppercase tracking-tight">{quote.author}</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-ndc-purple">{quote.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 10. Stats Section */}
          <div className="mb-24 md:mb-40">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4">
              {stats.map((stat, i) => (
                <div key={i} className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 text-center group hover:border-ndc-blue/20 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-ndc-blue/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-5 h-5 text-ndc-blue" />
                  </div>
                  <p className="text-xl md:text-2xl font-black text-white italic tracking-tighter mb-1">{stat.value}</p>
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 11. Closing Section */}
          <div className="text-center px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto space-y-12"
            >
              <div className="space-y-6">
                <h3 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">This Was Just <span className="gradient-text">Chapter 1</span></h3>
                <p className="text-gray-400 text-sm md:text-lg leading-relaxed font-medium">
                  The Vibe Coding Workshop was just the beginning. DCode Developers Club is committed to bringing more world class events, workshops and opportunities to student developers at SSIEMS Parbhani and beyond.
                </p>
              </div>

              <div className="p-10 rounded-[3rem] bg-gradient-to-br from-ndc-purple/20 via-ndc-blue/10 to-transparent border border-ndc-purple/30 shadow-[0_0_50px_rgba(168,85,247,0.1)] relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                <div className="relative z-10 space-y-4">
                  <p className="text-ndc-purple font-black uppercase tracking-[0.4em] text-xs">The next big thing</p>
                  <h4 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">DDSC Mega Fest</h4>
                  <p className="text-ndc-blue font-black uppercase tracking-[0.4em] text-xl">Coming Soon 🔥</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-8">
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    { icon: Instagram, label: "@ddsc_club", url: "https://instagram.com/ddsc_club" },
                    { icon: Globe, label: "www.dcode.club", url: "https://www.dcode.club" },
                    { icon: Linkedin, label: "linkedin.com/in/dcodeclub", url: "https://linkedin.com/in/dcodeclub" }
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all group"
                    >
                      <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                      <span className="text-[10px] font-black uppercase tracking-widest">{social.label}</span>
                    </a>
                  ))}
                </div>
                <div className="pt-8 border-t border-white/5 w-full max-w-xs">
                  <p className="text-gray-500 font-black italic uppercase tracking-widest text-sm">Learn. Build. Innovate. 💙</p>
                  <p className="text-gray-700 font-black uppercase tracking-[0.4em] text-[10px] mt-2">— Team DDSC</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WorkshopDetails;
