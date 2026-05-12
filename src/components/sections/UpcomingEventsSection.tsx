/**
 * UpcomingEventsSection
 * Displays upcoming Hackathons, Workshops, and Competitions using centralized data.
 * Premium cards: icon + title + badge + bullet list + gradient CTA.
 */
import { Code2, Rocket, Globe, CheckCircle2, ChevronRight, Calendar, Clock, MapPin, Info, Sparkles } from "lucide-react";
import { upcomingEvents as events } from "@/data/upcomingEvents";
import { Link } from "react-router-dom";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getAssetPath } from "@/lib/utils";

const UpcomingEventsSection = () => {
  const getIcon = (key: string) => {
    switch (key) {
      case "hackathons":
        return <Rocket className="w-7 h-7 text-ndc-purple" />;
      case "workshops":
        return <Code2 className="w-7 h-7 text-ndc-blue" />;
      case "competitions":
        return <Globe className="w-7 h-7 text-ndc-green" />;
      default:
        return <Rocket className="w-7 h-7 text-ndc-purple" />;
    }
  };

  return (
    <section id="upcoming-events" className="py-16 md:py-24 relative overflow-hidden scroll-mt-28 md:scroll-mt-32 bg-transparent">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-ndc-purple/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-ndc-blue/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="section-container relative z-10">
        <SectionHeader 
          badgeText="Featured Opportunities"
          badgeIcon={Rocket}
          titlePrefix="Upcoming Events &"
          titleHighlight="Competitions"
          description="Stay updated with the latest hackathons, workshops, and coding challenges coming your way."
          centered
        />

        <div className="max-w-4xl mx-auto mt-16 px-4">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative p-8 md:p-12 rounded-[3rem] bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-700 shadow-2xl overflow-hidden mb-12"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-ndc-purple/10 blur-[120px] rounded-full -mr-48 -mt-48 transition-all duration-1000 group-hover:bg-ndc-purple/20"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">
                <div className="flex-shrink-0 relative">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group-hover:scale-[1.02] transition-transform duration-700">
                    <img src={getAssetPath(event.image)} alt={event.title} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  {event.date && (
                    <div className="absolute -bottom-4 -right-4 px-6 py-3 rounded-2xl bg-ndc-purple text-white font-black uppercase tracking-widest text-[10px] shadow-2xl animate-bounce-slow">
                      {event.date}
                    </div>
                  )}
                </div>

                <div className="flex-1 space-y-8 text-center md:text-left">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-ndc-purple/10 border border-ndc-purple/20 text-ndc-purple text-[10px] font-black uppercase tracking-[0.2em]">
                      <Sparkles size={12} className="animate-pulse" />
                      {event.badge || "Upcoming Event"}
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic leading-[0.9]">
                      {event.title.split(' ').map((word, i) => (
                        <span key={i} className={word === 'Vibe' || word === 'Coding:' || word === 'GenAI' ? 'gradient-text' : ''}>{word} </span>
                      ))}
                    </h3>
                    <p className="text-gray-400 text-base md:text-lg font-medium leading-relaxed max-w-xl">
                      {event.description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
                    {event.title.includes("Vibe Coding") ? (
                      <Button asChild className="w-full sm:w-auto h-16 px-10 bg-white text-black hover:bg-gray-100 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] shadow-xl transition-all hover:-translate-y-1">
                        <Link to="/workshop" className="flex items-center gap-2">
                          Get Details
                          <ChevronRight size={16} />
                        </Link>
                      </Button>
                    ) : (
                      <Button className="w-full sm:w-auto h-16 px-10 bg-white/5 border border-white/10 text-white/50 cursor-not-allowed rounded-2xl font-black uppercase tracking-[0.2em] text-[10px]">
                        Details Soon
                      </Button>
                    )}
                    {event.venue && (
                      <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10">
                        <MapPin size={16} className="text-ndc-blue" />
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{event.venue.split(',')[0]}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;
