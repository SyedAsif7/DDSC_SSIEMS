/**
 * UpcomingEventsSection
 * Displays upcoming Hackathons, Workshops, and Competitions using centralized data.
 * Premium cards: icon + title + badge + bullet list + gradient CTA.
 */
import { Code2, Rocket, Globe, CheckCircle2, ChevronRight, Calendar, Clock, MapPin, Info, Sparkles, Mic } from "lucide-react";
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
      case "podcast":
        return <Mic className="w-7 h-7 text-pink-500" />;
      default:
        return <Rocket className="w-7 h-7 text-ndc-purple" />;
    }
  };

  return (
    <section id="upcoming-events" className="section-spacing relative overflow-hidden scroll-mt-28 md:scroll-mt-32 bg-transparent">
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
          centered
        />

        <div className="max-w-4xl mx-auto mt-8 md:mt-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative p-5 md:p-8 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-700 shadow-2xl overflow-hidden mb-6 md:mb-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-ndc-purple/10 blur-[100px] rounded-full -mr-32 -mt-32 transition-all duration-1000 group-hover:bg-ndc-purple/20"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
                <div className="flex-shrink-0 relative">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group-hover:scale-[1.02] transition-transform duration-700">
                    <img src={getAssetPath(event.image)} alt={event.title} loading="lazy" decoding="async" className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  {event.date && (
                    <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl bg-ndc-purple text-white font-black uppercase tracking-widest text-[10px] md:text-xs shadow-2xl">
                      {event.date}
                    </div>
                  )}
                </div>

                <div className="flex-1 space-y-3 md:space-y-4 text-center md:text-left">
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-3">
                      <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1 rounded-full bg-ndc-purple/10 border border-ndc-purple/20 text-ndc-purple text-[10px] md:text-xs font-black uppercase tracking-[0.16em]">
                        <Sparkles size={10} className="animate-pulse" />
                        {event.badge || "Upcoming Event"}
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-200 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                        {getIcon(event.icon)}
                        <span className="ml-1">{event.icon}</span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-snug">
                      {event.title.split(' ').map((word, i) => (
                        <span key={i} className={word.includes('Vibe') || word.includes('Coding') || word.includes('GenAI') || word.includes('Mega') || word.includes('Fest') ? 'gradient-text drop-shadow-[0_0_20px_rgba(168,85,247,0.2)]' : ''}>{word} </span>
                      ))}
                    </h3>
                    <p className="text-on-glass-muted text-xs md:text-sm leading-relaxed max-w-xl">
                      {event.description}
                    </p>
                  </div>

                  {/* Highlights/Points List */}
                  {event.points && event.points.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-2.5 pt-1">
                      {event.points.map((point, i) => (
                        <div key={i} className="flex items-center gap-2 group/point">
                          <div className="w-4 h-4 rounded-full bg-ndc-green/10 flex items-center justify-center border border-ndc-green/20 group-hover/point:scale-110 transition-transform">
                            <CheckCircle2 size={10} className="text-ndc-green" />
                          </div>
                          <span className="text-[10px] md:text-xs font-bold text-gray-200 uppercase tracking-tight leading-none group-hover/point:text-white transition-colors">{point}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start pt-2 md:pt-3">
                    {event.title.includes("Vibe Coding") ? (
                      <Button asChild className="h-10 md:h-11 px-5 md:px-6 bg-white text-black hover:bg-gray-100 rounded-lg md:rounded-xl font-black uppercase tracking-[0.2em] text-[10px] md:text-xs shadow-xl transition-all hover:-translate-y-1">
                        <Link to="/workshop" className="flex items-center gap-2">
                          View Roadmap
                          <ChevronRight size={14} />
                        </Link>
                      </Button>
                    ) : (
                      <Button className="h-10 md:h-11 px-5 md:px-6 bg-white/5 border border-white/10 text-white/75 cursor-not-allowed rounded-lg md:rounded-xl font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">
                        Coming Soon
                      </Button>
                    )}
                    
                    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                      {event.venue && (
                        <div className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-lg md:rounded-xl bg-white/5 border border-white/10 text-gray-200 group/info">
                          <MapPin size={12} className="text-ndc-blue group-hover/info:scale-110 transition-transform" />
                          <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">{event.venue.split(',')[0]}</span>
                        </div>
                      )}
                      
                      {event.time && (
                        <div className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-lg md:rounded-xl bg-white/5 border border-white/10 text-gray-200 group/info">
                          <Clock size={12} className="text-ndc-green group-hover/info:scale-110 transition-transform" />
                          <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">{event.time}</span>
                        </div>
                      )}
                    </div>

                    {event.sponsor && (
                      <div className="flex items-center gap-2.5 px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl bg-white/5 border border-white/10 group/sponsor">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg overflow-hidden border border-white/10 shrink-0 bg-white/5 flex items-center justify-center p-1">
                          <img src={getAssetPath(event.sponsor.logo)} alt={event.sponsor.name} loading="lazy" decoding="async" className="w-full h-full object-contain" />
                        </div>
                        <div className="text-left">
                          <p className="text-[9px] md:text-[10px] font-black text-gray-300 uppercase tracking-[0.16em]">{event.sponsor.tier}</p>
                          <p className="text-[10px] md:text-xs font-bold text-white uppercase tracking-tight">{event.sponsor.name}</p>
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
