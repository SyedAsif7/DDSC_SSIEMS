/**
 * UpcomingEventsSection
 * Displays upcoming Hackathons, Workshops, and Competitions using centralized data.
 * Premium cards: icon + title + badge + bullet list + gradient CTA.
 */
import { Code2, Rocket, Globe, CheckCircle2, ChevronRight, Calendar, Clock, MapPin, Info } from "lucide-react";
import { upcomingEvents } from "@/data/upcomingEvents";
import { Link } from "react-router-dom";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mt-12">
          {upcomingEvents.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 border backdrop-blur-xl bg-slate-900/40 border-white/10 hover:border-ndc-purple/40 overflow-hidden shadow-2xl"
            >
              {/* Background Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-ndc-purple to-ndc-blue rounded-[2.5rem] blur opacity-0 group-hover:opacity-10 transition duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-ndc-purple group-hover:scale-110 group-hover:bg-ndc-purple/10 transition-all duration-500 backdrop-blur-md">
                      {getIcon(item.icon)}
                    </div>
                    <h3 className="text-2xl font-black text-white tracking-tight">{item.title}</h3>
                  </div>
                  {item.badge && (
                    <span className="px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest bg-ndc-purple/20 text-ndc-purple border border-ndc-purple/30 animate-pulse">
                      {item.badge}
                    </span>
                  )}
                </div>

                {(item.date || item.time || item.venue) && (
                  <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md group-hover:bg-white/[0.05] transition-all duration-500">
                    {item.date && (
                      <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 border border-white/5 hover:border-ndc-purple/20 transition-all">
                        <Calendar className="w-4 h-4 text-ndc-purple" />
                        <span className="text-xs font-bold text-gray-300 tracking-tight">{item.date}</span>
                      </div>
                    )}
                    {item.time && (
                      <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 border border-white/5 hover:border-ndc-blue/20 transition-all">
                        <Clock className="w-4 h-4 text-ndc-blue" />
                        <span className="text-xs font-bold text-gray-300 tracking-tight">{item.time}</span>
                      </div>
                    )}
                    {item.venue && (
                      <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 border border-white/5 hover:border-ndc-green/20 transition-all sm:col-span-2">
                        <MapPin className="w-4 h-4 text-ndc-green flex-shrink-0" />
                        <span className="text-xs font-bold text-gray-300 tracking-tight leading-tight">{item.venue}</span>
                      </div>
                    )}
                  </div>
                )}

                <ul className="space-y-4 mb-10">
                  {item.points.map((p, i) => (
                    <li key={i} className="text-sm text-gray-300 flex items-start gap-4 group/item">
                      <div className="mt-1 p-1 rounded-full bg-ndc-purple/10 border border-ndc-purple/20 group-hover/item:bg-ndc-purple/20 transition-all">
                        <CheckCircle2 className="w-3 h-3 text-ndc-purple group-hover/item:scale-110 transition-transform" />
                      </div>
                      <span className="leading-relaxed font-medium group-hover/item:text-white transition-colors">{p}</span>
                    </li>
                  ))}
                </ul>

                {item.title === "Generative AI Workshop" && (
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://forms.gle/GRLSPbasffrESu1R9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-500 bg-gradient-to-r from-ndc-purple to-ndc-blue text-white shadow-xl hover:shadow-ndc-purple/40 hover:scale-105 active:scale-95"
                    >
                      Register Now
                      <ChevronRight className="w-5 h-5" />
                    </a>
                    <Link
                      to="/workshop"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-500 bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                    >
                      <Info className="w-5 h-5" />
                      View Details
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;
