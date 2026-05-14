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
    <section id="upcoming-events" className="py-12 md:py-20 relative overflow-hidden scroll-mt-28 md:scroll-mt-32 bg-transparent">
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

        <div className="max-w-4xl mx-auto mt-12 md:mt-16 px-4">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-700 shadow-2xl overflow-hidden mb-8 md:mb-12"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-ndc-purple/10 blur-[120px] rounded-full -mr-48 -mt-48 transition-all duration-1000 group-hover:bg-ndc-purple/20"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="flex-shrink-0 relative">
                  <div className="w-40 h-40 xs:w-48 xs:h-48 md:w-64 md:h-64 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group-hover:scale-[1.02] transition-transform duration-700">
                    <img src={getAssetPath(event.image)} alt={event.title} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  {event.date && (
                    <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl bg-ndc-purple text-white font-black uppercase tracking-widest text-[8px] md:text-[10px] shadow-2xl animate-bounce-slow">
                      {event.date}
                    </div>
                  )}
                </div>

                <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-3">
                      <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-ndc-purple/10 border border-ndc-purple/20 text-ndc-purple text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em]">
                        <Sparkles size={10} className="animate-pulse" />
                        {event.badge || "Upcoming Event"}
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-[8px] md:text-[9px] font-bold uppercase tracking-widest">
                        {getIcon(event.icon)}
                        <span className="ml-1">{event.icon}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl xs:text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic leading-[1] md:leading-[0.9]">
                      {event.title.split(' ').map((word, i) => (
                        <span key={i} className={word === 'Vibe' || word === 'Coding:' || word === 'GenAI' ? 'gradient-text' : ''}>{word} </span>
                      ))}
                    </h3>
                    <p className="text-gray-400 text-xs md:text-base font-medium leading-relaxed max-w-xl">
                      {event.description}
                    </p>
                  </div>

                  {/* Highlights/Points List */}
                  {event.points && event.points.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 pt-1 md:pt-2">
                      {event.points.map((point, i) => (
                        <div key={i} className="flex items-center gap-2 md:gap-3 group/point">
                          <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-ndc-green/10 flex items-center justify-center border border-ndc-green/20 group-hover/point:scale-110 transition-transform">
                            <CheckCircle2 size={10} className="text-ndc-green" />
                          </div>
                          <span className="text-[9px] md:text-xs font-bold text-gray-300 uppercase tracking-tight leading-none group-hover/point:text-white transition-colors">{point}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-3 md:gap-4 justify-center md:justify-start pt-3 md:pt-4">
                    {event.title.includes("Vibe Coding") ? (
                      <Button asChild className="h-12 md:h-14 px-6 md:px-8 bg-white text-black hover:bg-gray-100 rounded-lg md:rounded-xl font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px] shadow-xl transition-all hover:-translate-y-1">
                        <Link to="/workshop" className="flex items-center gap-2">
                          View Roadmap
                          <ChevronRight size={14} />
                        </Link>
                      </Button>
                    ) : (
                      <Button className="h-12 md:h-14 px-6 md:px-8 bg-white/5 border border-white/10 text-white/50 cursor-not-allowed rounded-lg md:rounded-xl font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px]">
                        Coming Soon
                      </Button>
                    )}
                    
                    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                      {event.venue && (
                        <div className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-lg md:rounded-xl bg-white/5 border border-white/10 text-gray-400 group/info">
                          <MapPin size={12} className="text-ndc-blue group-hover/info:scale-110 transition-transform" />
                          <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest">{event.venue.split(',')[0]}</span>
                        </div>
                      )}
                      
                      {event.time && (
                        <div className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-lg md:rounded-xl bg-white/5 border border-white/10 text-gray-400 group/info">
                          <Clock size={12} className="text-ndc-green group-hover/info:scale-110 transition-transform" />
                          <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest">{event.time}</span>
                        </div>
                      )}
                    </div>

                    {event.sponsor && (
                      <div className="flex items-center gap-2.5 px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl bg-white/5 border border-white/10 group/sponsor">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg overflow-hidden border border-white/10 shrink-0 bg-white/5 flex items-center justify-center p-1">
                          <img src={getAssetPath(event.sponsor.logo)} alt={event.sponsor.name} className="w-full h-full object-contain" />
                        </div>
                        <div className="text-left">
                          <p className="text-[6px] md:text-[7px] font-black text-slate-400 uppercase tracking-[0.2em]">{event.sponsor.tier}</p>
                          <p className="text-[8px] md:text-[9px] font-bold text-white uppercase tracking-tight">{event.sponsor.name}</p>
                        </div>
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
