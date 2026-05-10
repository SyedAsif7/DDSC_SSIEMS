import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState, useCallback } from "react";
import { Sparkles, Code2, Rocket, Users, Info } from "lucide-react";
import { getAssetPath } from "@/lib/utils";
import CountdownTimer from "@/components/ui/CountdownTimer";
import { Link } from "react-router-dom";
import MagneticButton from "@/components/ui/MagneticButton";
import { motion } from "framer-motion";

const HeroSection = () => {
  const slides = [
    {
      title: "Hands-On Workshop on Generative AI.",
      subtitle: "Conducted by a Google Developer Expert",
      description: "Explore the power of Generative AI and build real-world solutions using Google Cloud Platform. 16th May 2026, APJ Abdul Kalam Auditorium. E-Certificates for all!",
      icon: <Sparkles className="w-6 h-6 text-ndc-purple" />,
      tag: "✨ Featured Workshop",
      isSpecial: true,
      extraBadge: "📜 E-Certificate Provided",
      detailsLink: "/workshop"
    },
    {
      title: "Building the Future of Technology Together.",
      subtitle: "DCode Developers Student Club",
      description: "A hub for tech enthusiasts to grow skills, work on impactful projects, and build their future together at SSIEMS.",
      icon: <Rocket className="w-6 h-6 text-ndc-blue" />,
      tag: "🚀 Innovation Hub",
      isSpecial: false
    },
    {
      title: "Master the Art of Modern Development.",
      subtitle: "Hands-on Learning Experience",
      description: "Dive deep into full-stack development, AI, and cloud computing through our specialized workshops and bootcamps.",
      icon: <Code2 className="w-6 h-6 text-ndc-blue" />,
      tag: "💻 Skill Up",
      isSpecial: false
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: slides.length > 1 }, 
    slides.length > 1 ? [Autoplay({ delay: 6000 })] : []
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

  const handleJoinClick = (isWorkshop = false) => {
    const url = isWorkshop 
      ? "https://forms.gle/GRLSPbasffrESu1R9" 
      : "https://forms.gle/CHamTqBMouu6ucYa7";
    window.open(url, "_blank");
  };

  return (
    <section id="hero" className={`min-h-[calc(100vh-120px)] flex items-center relative overflow-hidden bg-transparent pt-2`}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-ndc-blue/10 blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-ndc-purple/10 blur-[140px] animate-pulse delay-700"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10 w-full">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left Column - Content */}
                <div className="text-center lg:text-left lg:col-span-1 animate-fade-in">
                  {/* Tagline */}
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
                    <span className="px-4 py-2 rounded-full text-sm font-bold backdrop-blur-md border bg-white/10 text-white border-white/20">
                      {slide.tag}
                    </span>
                    {slide.extraBadge && (
                      <span className="px-4 py-2 rounded-full text-sm font-bold backdrop-blur-md border bg-ndc-purple/20 text-ndc-purple border-ndc-purple/30 animate-pulse">
                        {slide.extraBadge}
                      </span>
                    )}
                  </div>

                  {/* Main Headline */}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white">
                    {slide.title.split(' ').map((word, i) => (
                      <span key={i} className={word === 'Future' || word === 'Art' || word === 'Real-World' || word === 'Thriving' || word === 'Generative' || word === 'AI.' ? 'gradient-text' : ''}>
                        {word}{' '}
                      </span>
                    ))}
                  </h1>
        
                  {/* Subheading */}
                  <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center justify-center lg:justify-start gap-3 text-slate-200">
                    <span className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                      {slide.icon}
                    </span>
                    {slide.subtitle}
                  </h2>
        
                  {/* Description */}
                  <p className="text-lg mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-slate-300">
                    {slide.description}
                  </p>

                  {/* Countdown Timer for Special Event */}
                  {slide.isSpecial && (
                    <div className="mb-10 flex justify-center lg:justify-start">
                      <CountdownTimer targetDate="2026-05-16T12:30:00" />
                    </div>
                  )}
        
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                    <MagneticButton>
                      <Button 
                        onClick={() => handleJoinClick(slide.isSpecial)} 
                        className="font-bold px-8 py-5 text-lg h-auto bg-gradient-to-r from-ndc-purple via-blue-600 to-ndc-blue hover:from-ndc-blue hover:via-purple-600 hover:to-ndc-purple text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-2xl"
                      >
                        {slide.isSpecial ? "Register for Workshop" : "Join the Club"}
                      </Button>
                    </MagneticButton>
                    
                    {slide.isSpecial && (
                      <MagneticButton>
                        <Button 
                          asChild
                          variant="outline"
                          className="font-bold px-8 py-5 text-lg h-auto bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-2xl transition-all"
                        >
                          <Link to="/workshop" className="flex items-center gap-2">
                            <Info className="w-5 h-5" />
                            View Details
                          </Link>
                        </Button>
                      </MagneticButton>
                    )}

                    {!slide.isSpecial && (
                      <a 
                        href="#events" 
                        className="text-base font-semibold flex items-center gap-2 hover:gap-4 transition-all duration-300 text-white hover:text-ndc-purple"
                        aria-label="View Achievements"
                      >
                        View Achievements <span className="text-xl">→</span>
                      </a>
                    )}
                  </div>
                </div>
        
                {/* Right Column - Logo/Graphic */}
                <div className="hidden lg:flex justify-center items-center">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative w-full max-w-lg group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-ndc-purple to-ndc-blue rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <motion.img 
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      src={getAssetPath("images/Dcode-Logo.png")} 
                      alt="DCode Developers Club Logo" 
                      className="w-full h-auto object-contain opacity-95 drop-shadow-2xl" 
                    />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slider Navigation Controls */}
        {slides.length > 1 && (
          <div className="mt-12 flex items-center justify-center lg:justify-start gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  selectedIndex === index 
                    ? 'w-10 bg-gradient-to-r from-ndc-purple to-ndc-blue shadow-[0_0_15px_rgba(139,51,234,0.5)]' 
                    : 'w-2.5 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 flex justify-center p-1 border-white/30">
          <div className="w-1 h-2 rounded-full bg-white/50"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
