import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState, useCallback } from "react";
import { Sparkles, Rocket, Users, ChevronRight, Handshake, ArrowLeft, ArrowRight } from "lucide-react";
import { getAssetPath } from "@/lib/utils";
import { Link } from "react-router-dom";

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
    [Autoplay({ delay: 7000, stopOnInteraction: true })]
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
    <section id="hero" className="relative overflow-hidden bg-transparent pt-12 sm:pt-16 md:pt-20 pb-12 scroll-mt-28">
      <div className="section-container relative z-10">
        <div className="relative group">
          {/* Main Slider Container */}
          <div className="overflow-hidden rounded-3xl md:rounded-[2rem] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] bg-slate-950" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, index) => {
                const isNear = Math.abs(index - selectedIndex) <= 1
                  || (selectedIndex === 0 && index === slides.length - 1)
                  || (selectedIndex === slides.length - 1 && index === 0);

                return (
                <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                  <div className="relative aspect-[16/10] sm:aspect-[16/8] md:aspect-[21/9] overflow-hidden bg-slate-950">
                    {isNear ? (
                      <img
                        src={getAssetPath(slide.bgImage)}
                        alt={slide.title}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                        fetchPriority={index === 0 ? 'high' : 'low'}
                        className="absolute inset-0 w-full h-full object-contain z-10"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-slate-900/80" aria-hidden="true" />
                    )}
                    
                    <div className="absolute top-0 left-0 right-0 z-20 p-6 sm:p-10 flex items-center justify-between pointer-events-none">
                      <div className="flex items-center gap-3">
                        <div className="px-4 py-1.5 rounded-full bg-slate-950/80 border border-white/20 text-[11px] font-black uppercase tracking-[0.18em] text-white">
                          {slide.tag}
                        </div>
                        {slide.extraBadge && (
                          <div className="hidden sm:block px-4 py-1.5 rounded-full bg-ndc-purple/90 border border-white/30 text-[11px] font-black uppercase tracking-[0.18em] text-white">
                            {slide.extraBadge}
                          </div>
                        )}
                      </div>
                      <div className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 border border-white/20 text-[11px] font-black uppercase tracking-[0.18em] text-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-ndc-green"></span>
                        Relive the moment
                      </div>
                    </div>

                    <div className="absolute inset-0 z-[15] bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                  </div>
                </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows (Integrated into frame edges) */}
          <button 
            onClick={scrollPrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-slate-950/70 hover:bg-slate-950/90 border border-white/10 flex items-center justify-center text-white transition-opacity opacity-70 md:opacity-0 md:group-hover:opacity-100"
            aria-label="Previous slide"
          >
            <ArrowLeft size={24} />
          </button>
          <button 
            onClick={scrollNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-slate-950/70 hover:bg-slate-950/90 border border-white/10 flex items-center justify-center text-white transition-opacity opacity-70 md:opacity-0 md:group-hover:opacity-100"
            aria-label="Next slide"
          >
            <ArrowRight size={24} />
          </button>
        </div>

        <div className="mt-10 sm:mt-14 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-end">
              <div className="md:col-span-8 space-y-6 text-center md:text-left">
                <div className="space-y-4">
                  <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                    {slides[selectedIndex].title.split(' ').map((word, i) => (
                      <span key={i} className={['Future', 'Magic.', 'Innovation.', 'Excellence.', 'Workflow.', 'Energy', 'Chapter', '1.', 'Vibe', 'Coding', 'Creative', 'Core.', 'Leadership.', 'Partnerships.', 'Mentorship.'].includes(word) ? 'gradient-text' : ''}>
                        {word}{' '}
                      </span>
                    ))}
                  </h1>
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <div className="h-px w-8 bg-gradient-to-r from-ndc-purple to-transparent opacity-60"></div>
                    <p className="text-violet-300 text-xs md:text-sm font-semibold uppercase tracking-[0.16em] drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                      {slides[selectedIndex].subtitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-on-glass-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                  {slides[selectedIndex].description}
                </p>
              </div>

              <div className="md:col-span-4 flex justify-center md:justify-end pb-2">
                <Link to="/workshop" className="group/btn">
                  <div className="relative px-7 py-3.5 rounded-xl bg-white text-black font-bold tracking-tight text-sm flex items-center gap-2.5 group-hover/btn:bg-ndc-purple group-hover/btn:text-white transition-colors duration-300 shadow-xl">
                    Explore Chapter 1
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              </div>
          </div>

          <div className="flex justify-center md:justify-start gap-3 mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  selectedIndex === index ? 'w-12 bg-ndc-purple' : 'w-4 bg-white/10 hover:bg-white/20'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
