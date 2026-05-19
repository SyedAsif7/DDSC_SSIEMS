import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState, useCallback } from "react";
import { Sparkles, Code2, Rocket, Users, Info, ChevronRight, Handshake, ArrowLeft, ArrowRight } from "lucide-react";
import { getAssetPath } from "@/lib/utils";
import { Link } from "react-router-dom";
import MagneticButton from "@/components/ui/MagneticButton";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const slides = [
    {
      title: "Vibe Coding Workshop — Chapter 1.",
      subtitle: "A Massive Success — Chapter 1 Completed",
      description: "200+ student developers built and deployed live GenAI apps in record time. Chapter 1 proved that Parbhani is ready for the future.",
      icon: <Sparkles className="w-6 h-6 text-ndc-blue" />,
      tag: "✨ Chapter 1 Success",
      extraBadge: "✅ 200+ Participants",
      bgImage: "/images/Vibe coding workshop/IMG_9211.jpg"
    },
    {
      title: "The Team Behind the Magic.",
      subtitle: "DDSC Chapter 2 Core Committee",
      description: "A passionate group of student developers who organized this massive event in just 8 to 10 days.",
      icon: <Users className="w-6 h-6 text-ndc-purple" />,
      tag: "✨ Core Team",
      extraBadge: "👑 Leadership",
      bgImage: "/images/Vibe coding workshop/Core team.jpg"
    },
    {
      title: "GDE Mentorship.",
      subtitle: "Meeting with Industry Experts",
      description: "Bridging the gap between academia and industry through interactive sessions with Google Developer Experts.",
      icon: <Handshake className="w-6 h-6 text-ndc-blue" />,
      tag: "🤝 Expert Guidance",
      extraBadge: "GDE Session",
      bgImage: "/images/Vibe coding workshop/Meeeting of team with speakers.jpg"
    },
    {
      title: "Leadership & Vision.",
      subtitle: "Director SSIEMS Addressing the Event",
      description: "Honored to have Dr. Anand K. Pathrikar, Director SSIEMS, supporting student-led innovation and the future of tech.",
      icon: <Rocket className="w-6 h-6 text-ndc-blue" />,
      tag: "🏛️ Institutional Support",
      extraBadge: "Director SSIEMS",
      bgImage: "/images/Vibe coding workshop/Director.jpg"
    },
    {
      title: "Strong Partnerships.",
      subtitle: "Sponsor HP World Parbhani",
      description: "A big thank you to HP World Parbhani for their incredible support in making our workshop a grand success.",
      icon: <Handshake className="w-6 h-6 text-ndc-blue" />,
      tag: "🤝 Our Sponsor",
      extraBadge: "HP World",
      bgImage: "/images/Vibe coding workshop/Sponser hp world delvering speech.JPG"
    },
    {
      title: "Visionary Leadership.",
      subtitle: "President Syed Asif Delivering Vote of Thanks",
      description: "Our President, Syed Asif, sharing the vision for DDSC and expressing gratitude to the community for a successful Chapter 1.",
      icon: <Users className="w-6 h-6 text-ndc-blue" />,
      tag: "👑 Leadership",
      extraBadge: "President DDSC",
      bgImage: "/images/Vibe coding workshop/President syed asif delvering vote of thanks.jpg"
    },
    {
      title: "Innovating with AI.",
      subtitle: "Student Project Presentations",
      description: "Witnessing the creativity of young developers building real-world AI applications using Gemini Models.",
      icon: <Sparkles className="w-6 h-6 text-ndc-blue" />,
      tag: "🚀 Student Innovation",
      extraBadge: "Demo Day",
      bgImage: "/images/Vibe coding workshop/Student is presenting her workshop model.jpg"
    },
    {
      title: "Technical Support Squad.",
      subtitle: "Technical & Management Teams",
      description: "The specialized units that ensured technical excellence and seamless execution of every workshop detail.",
      icon: <Users className="w-6 h-6 text-ndc-blue" />,
      tag: "⚙️ Team Work",
      extraBadge: "Operations",
      bgImage: "/images/Vibe coding workshop/Technical Team.jpg"
    },
    {
      title: "The Creative Core.",
      subtitle: "Meet the Design Team",
      description: "The creative powerhouses responsible for the visual identity and aesthetic excellence of the DCode Developers Club.",
      icon: <Sparkles className="w-6 h-6 text-ndc-purple" />,
      tag: "🎨 Design Team",
      extraBadge: "Creative Minds",
      bgImage: "/images/Vibe coding workshop/Design team.jpeg"
    },
    {
      title: "Event Excellence.",
      subtitle: "Logistics & Coordination Team",
      description: "Orchestrating memorable experiences and ensuring a smooth journey for all 200+ participants.",
      icon: <Users className="w-6 h-6 text-ndc-purple" />,
      tag: "🎪 Management",
      extraBadge: "Success",
      bgImage: "/images/Vibe coding workshop/Event management team.jpeg"
    },
    {
      title: "Roots of Sustainability.",
      subtitle: "Tree Plantation Ceremony",
      description: "Marking the beginning of a sustainable tech journey with our distinguished Google Developer Experts.",
      icon: <Rocket className="w-6 h-6 text-ndc-purple" />,
      tag: "🌱 Sustainable Tech",
      extraBadge: "Tradition",
      bgImage: "/images/Vibe coding workshop/Tree plantation by speakers.jpg"
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, skipSnaps: false }, 
    [Autoplay({ delay: 6000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="hero" className="relative overflow-hidden bg-[#050505] pt-16 sm:pt-20 md:pt-24 pb-12">
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05)_0%,transparent_70%)]"></div>
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-ndc-purple/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-ndc-blue/10 blur-[120px] rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative group">
          {/* Main Slider Container */}
          <div className="overflow-hidden rounded-[2.5rem] sm:rounded-[3.5rem] md:rounded-[4rem] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] bg-slate-950" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                  {/* Photo Frame */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/8] md:aspect-[21/9] overflow-hidden">
                    {/* Cinematic Layers */}
                    <img 
                      src={getAssetPath(slide.bgImage)} 
                      alt="" 
                      className="absolute inset-0 w-full h-full object-cover opacity-30 blur-2xl scale-110" 
                    />
                    <motion.img 
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      src={getAssetPath(slide.bgImage)} 
                      alt={slide.title} 
                      className="absolute inset-0 w-full h-full object-contain z-10 transition-transform duration-[2s] hover:scale-[1.03]" 
                    />
                    
                    {/* Top Status Header */}
                    <div className="absolute top-0 left-0 right-0 z-20 p-6 sm:p-10 flex items-center justify-between pointer-events-none">
                      <div className="flex items-center gap-3">
                        <div className="px-4 py-1.5 rounded-full bg-slate-950/40 backdrop-blur-md border border-white/10 text-[9px] font-black uppercase tracking-[0.2em] text-white">
                          {slide.tag}
                        </div>
                        {slide.extraBadge && (
                          <div className="px-4 py-1.5 rounded-full bg-ndc-purple/20 backdrop-blur-md border border-ndc-purple/30 text-[9px] font-black uppercase tracking-[0.2em] text-ndc-purple animate-pulse">
                            {slide.extraBadge}
                          </div>
                        )}
                      </div>
                      <div className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/40 backdrop-blur-md border border-white/10 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-ndc-green animate-pulse"></span>
                        Relive the moment
                      </div>
                    </div>

                    {/* Gradient Overlay for Footer Integration */}
                    <div className="absolute inset-0 z-15 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows (Integrated into frame edges) */}
          <button 
            onClick={scrollPrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-slate-950/20 hover:bg-slate-950/40 backdrop-blur-md border border-white/5 flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
            aria-label="Previous slide"
          >
            <ArrowLeft size={24} />
          </button>
          <button 
            onClick={scrollNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-slate-950/20 hover:bg-slate-950/40 backdrop-blur-md border border-white/5 flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
            aria-label="Next slide"
          >
            <ArrowRight size={24} />
          </button>
        </div>

        {/* Content Section - Sophisticated Metadata Bar */}
        <div className="mt-10 sm:mt-14 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="grid md:grid-cols-12 gap-8 items-end"
            >
              <div className="md:col-span-8 space-y-6 text-center md:text-left px-4">
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] text-white uppercase italic">
                    {slides[selectedIndex].title.split(' ').map((word, i) => (
                      <span key={i} className={['Future', 'Magic.', 'Innovation.', 'Excellence.', 'Workflow.', 'Energy', 'Chapter', '1.', 'Vibe', 'Coding', 'Creative', 'Core.', 'Leadership.', 'Partnerships.'].includes(word) ? 'gradient-text' : ''}>
                        {word}{' '}
                      </span>
                    ))}
                  </h1>
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <div className="h-px w-12 bg-gradient-to-r from-ndc-purple to-transparent opacity-50"></div>
                    <p className="text-ndc-purple text-xs md:text-sm font-black uppercase tracking-[0.4em] drop-shadow-sm">
                      {slides[selectedIndex].subtitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-400 text-base md:text-xl font-medium leading-relaxed max-w-2xl mx-auto md:mx-0 opacity-80 italic">
                  "{slides[selectedIndex].description}"
                </p>
              </div>

              <div className="md:col-span-4 flex justify-center md:justify-end pb-2">
                <Link to="/workshop" className="group/btn relative">
                  <div className="absolute -inset-4 bg-ndc-purple/20 blur-xl rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                  <MagneticButton>
                    <div className="relative px-8 py-4 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-xs flex items-center gap-3 group-hover/btn:bg-ndc-purple group-hover/btn:text-white transition-all duration-500 shadow-2xl">
                      Explore Chapter 1
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </MagneticButton>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Indicators - More technical look */}
          <div className="flex justify-center md:justify-start gap-3 mt-12 px-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
                className={`group relative h-1.5 transition-all duration-700 rounded-full overflow-hidden ${
                  selectedIndex === index ? 'w-12 bg-ndc-purple' : 'w-4 bg-white/10 hover:bg-white/20'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {selectedIndex === index && (
                  <motion.div 
                    className="absolute inset-0 bg-white/30"
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 6, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
