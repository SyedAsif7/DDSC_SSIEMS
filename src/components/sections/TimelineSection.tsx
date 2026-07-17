import SectionHeader from "@/components/ui/SectionHeader";
import { History } from "lucide-react";
import { motion } from "framer-motion";

const timelineItems = [
  {
    year: "2025",
    title: "SIH Internal Hackathon",
    description: "Successfully organized the internal hackathon with 15 teams and 90+ participants, selecting 8 teams for nationals.",
    icon: "🏆",
  },
  {
    year: "2025",
    title: "IIT Bombay Techfest",
    description: "Achieved 4th position in the national coding competition and qualified for finals in robotics.",
    icon: "🤖",
  },
  {
    year: "2025",
    title: "SIH Guidance Workshop",
    description: "Conducted a multidisciplinary workshop to prepare students for Smart India Hackathon 2025.",
    icon: "📚",
  },
  {
    year: "2026",
    title: "Vibe Coding Workshop",
    description: "Chapter 1: 200+ students learned to build and deploy GenAI apps on Google Cloud with GDEs.",
    icon: "🚀",
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-24 relative overflow-hidden bg-transparent">
      <div className="section-container relative z-10">
        <SectionHeader
          badgeText="Our Journey"
          badgeIcon={History}
          titlePrefix="Club"
          titleHighlight="Timeline"
          description="Key milestones and achievements of the DCode Developers Club."
          centered
        />

        <div className="mt-16 relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ndc-purple via-ndc-blue to-ndc-green -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="p-8 rounded-[2.5rem] bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-ndc-purple/30 transition-all duration-500 shadow-xl">
                    <span className="inline-block px-3 py-1 rounded-full bg-ndc-purple/10 text-ndc-purple text-sm font-bold mb-4">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-black text-white mb-2">
                      {item.icon} {item.title}
                    </h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>

                {/* Dot on timeline */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border-4 border-ndc-purple shadow-lg z-10">
                  <div className="w-4 h-4 rounded-full bg-ndc-purple animate-pulse"></div>
                </div>

                {/* Spacer for alternating alignment */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
