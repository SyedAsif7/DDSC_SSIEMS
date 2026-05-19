import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import SectionHeader from "@/components/ui/SectionHeader";
import { Camera, ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { getAssetPath } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const galleryImages = [
  { src: "/images/Vibe coding workshop/President syed asif delvering vote of thanks.jpg", caption: "President Syed Asif delivering the vote of thanks" },
  { src: "/images/Vibe coding workshop/Design team.jpeg", caption: "Creative minds of the Design Team" },
  { src: "/images/Vibe coding workshop/Sponser hp world delvering speech.JPG", caption: "Sponsor HP World delivering a speech" },
  { src: "/images/Vibe coding workshop/Registration desk.jpg", caption: "Welcoming participants at the Registration Desk" },
  { src: "/images/Vibe coding workshop/Technical Team.jpg", caption: "The Technical Team driving innovation" },
  { src: "/images/Vibe coding workshop/Participates in auditorium.jpg", caption: "Full house at our signature workshop" },
  { src: "/images/Vibe coding workshop/Student is presenting her workshop model.jpg", caption: "Showcasing student-led innovation" },
  { src: "/images/events/SIH One Day Workshop images/Workshop conducted for Sih 1.jpg", caption: "Intensive learning session during SIH workshop" },
  { src: "/images/Vibe coding workshop/Tree plantation by speakers.jpg", caption: "Commitment to a sustainable future" },
  { src: "/images/Vibe coding workshop/Ful Team.jpg", caption: "The incredible team behind the scenes" },
];

const GallerySliderSection = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="gallery-slider">
      {/* Background Glow Effects */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-ndc-purple/10 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-ndc-blue/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px] pointer-events-none"></div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader 
            badgeText="Visual Journey"
            badgeIcon={Camera}
            titlePrefix="Featured"
            titleHighlight="Moments"
            description="A glimpse into the energy, innovation, and passion of the DDSC community."
            centered
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 w-full max-w-[100vw] overflow-hidden"
        >
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
              })
            ]}
            className="w-full relative group/carousel"
          >
            <CarouselContent className="-ml-4 md:-ml-8">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-8 basis-[85%] md:basis-[60%] lg:basis-[50%]">
                  <div className="p-2">
                    <div className="group relative rounded-[2rem] overflow-hidden aspect-[16/10] bg-slate-900/50 border border-white/10 shadow-2xl transition-all duration-700 hover:border-ndc-purple/30 hover:shadow-ndc-purple/20">
                      <img 
                        src={encodeURI(getAssetPath(image.src))} 
                        alt={image.caption}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        loading="lazy"
                      />
                      
                      {/* Premium Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="w-8 h-1 bg-ndc-purple rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                        <p className="text-white text-lg md:text-2xl font-black italic tracking-tight drop-shadow-lg">
                          {image.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="hidden md:block">
              <CarouselPrevious className="bg-black/50 backdrop-blur-md border-white/10 hover:bg-white/10 hover:border-white/20 text-white w-12 h-12 left-8 transition-transform hover:scale-110 shadow-2xl" />
              <CarouselNext className="bg-black/50 backdrop-blur-md border-white/10 hover:bg-white/10 hover:border-white/20 text-white w-12 h-12 right-8 transition-transform hover:scale-110 shadow-2xl" />
            </div>
          </Carousel>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center flex flex-col items-center justify-center gap-6"
        >
          <p className="text-xs text-gray-500 font-black uppercase tracking-[0.2em] italic hidden md:block">
            Swipe or use arrows to explore
          </p>
          <Link 
            to="/gallery"
            className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <span className="text-xs font-black text-white uppercase tracking-widest">View Full Gallery</span>
            <ArrowRight size={16} className="text-ndc-purple group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySliderSection;
