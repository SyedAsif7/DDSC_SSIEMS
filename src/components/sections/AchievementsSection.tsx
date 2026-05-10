/**
 * AchievementsSection
 * Renders the Participations & Achievements grid with category filters and search.
 * Includes a premium header, responsive grid cards, and a bottom CTA to join.
 */
import { useState, useMemo } from "react";
import { Code, Terminal, Cpu, Zap, Trophy, Award, ExternalLink, Sparkles, Calendar, MapPin, ChevronRight, LayoutGrid } from "lucide-react";
import { Link } from "react-router-dom";
import { achievements } from "@/data/achievements";
import { getAssetPath } from "@/lib/utils";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const AchievementsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = useMemo(() => {
    const cats = ["All", ...new Set(achievements.map(a => a.category))];
    return cats;
  }, []);

  const filteredAchievements = useMemo(() => {
    const byCategory = activeCategory === "All" ? achievements : achievements.filter(a => a.category === activeCategory);
    const term = searchTerm.trim().toLowerCase();
    if (!term) return byCategory;
    return byCategory.filter(a => 
      a.title.toLowerCase().includes(term) ||
      (a.description?.toLowerCase().includes(term))
    );
  }, [activeCategory, searchTerm]);

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'code': return <Code className="w-4 h-4" />;
      case 'terminal': return <Terminal className="w-4 h-4" />;
      case 'cpu': return <Cpu className="w-4 h-4" />;
      case 'zap': return <Zap className="w-4 h-4" />;
      default: return <Code className="w-4 h-4" />;
    }
  };

  return (
    <section id="events" className="py-24 relative overflow-hidden bg-transparent scroll-mt-28 md:scroll-mt-32">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-ndc-purple/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-ndc-blue/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="section-container relative z-10">
        <SectionHeader 
          badgeText="Excellence in Action"
          badgeIcon={Trophy}
          titlePrefix="Participations &"
          titleHighlight="Achievements"
          description="Celebrating technical excellence and innovation from national hackathons to premier technical festivals."
          centered
        />

        {/* Category Filters - Refined UI */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 mt-12 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <div className="flex flex-wrap items-center justify-center gap-3 p-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-ndc-purple to-ndc-blue text-white shadow-lg shadow-ndc-purple/20 scale-105"
                    : "text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat === "All" && <LayoutGrid size={14} />}
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative group">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search achievements..."
              className="w-full sm:w-72 px-6 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-widest bg-white/5 text-gray-200 border border-white/10 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-ndc-purple/40 focus:border-transparent transition-all backdrop-blur-md"
              aria-label="Search achievements"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-ndc-purple transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredAchievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                to={`/achievement/${item.id}`}
                className="group relative flex flex-col h-full rounded-[2rem] bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-ndc-purple/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-2xl min-h-[400px]"
              >
                {/* Background Photo for specific categories */}
                {item.images && item.images.length > 0 && (
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={getAssetPath(item.images[0])} 
                      alt={item.title} 
                      className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
                  </div>
                )}

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-ndc-purple/10 to-ndc-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-1"></div>
                
                <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-ndc-purple group-hover:scale-110 group-hover:bg-ndc-purple/10 transition-all duration-500 backdrop-blur-md">
                      {getIcon(item.icon)}
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest bg-ndc-purple/20 text-ndc-purple border border-ndc-purple/30 backdrop-blur-md">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-black text-white mb-4 leading-tight group-hover:text-ndc-purple transition-colors duration-300 tracking-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm font-medium leading-relaxed mb-8 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/10 group-hover:border-ndc-purple/20 transition-colors">
                    <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-ndc-purple font-black uppercase text-[10px] tracking-widest group-hover:gap-3 transition-all px-3 py-1.5 rounded-lg bg-ndc-purple/5 border border-ndc-purple/10 backdrop-blur-sm group-hover:bg-ndc-purple/10">
                      View Details
                      <ChevronRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Premium Callout */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="p-10 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md max-w-4xl mx-auto group hover:border-ndc-purple/20 transition-all duration-500">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div className="text-left">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">Ready to join our success story?</h4>
                <p className="text-gray-500 font-medium text-base">Be part of our next national-level challenge and grow your skills.</p>
              </div>
              <a 
                href="https://forms.gle/CHamTqBMouu6ucYa7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-ndc-purple to-ndc-blue text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all hover:shadow-lg active:scale-95 whitespace-nowrap"
              >
                Join the Squad
                <Sparkles className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Simple Filter Icon for UI
const FilterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
  </svg>
);

export default AchievementsSection;
