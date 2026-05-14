import { Terminal, Cpu, Zap, Share2, Rocket } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

const WhyJoinSection = () => {
  const benefits = [
    {
      icon: Terminal,
      title: "Hands-on Learning",
      description: "Work on real projects using the latest tools and frameworks in web development, mobile apps, and more.",
      color: "text-ndc-purple"
    },
    {
      icon: Cpu,
      title: "Cutting-edge Tech",
      description: "Gain practical experience with cloud computing, AI/ML, and modern development workflows.",
      color: "text-ndc-blue"
    },
    {
      icon: Zap,
      title: "Events & Workshops",
      description: "Attend tech talks, hackathons, and hands-on workshops led by industry experts and seniors.",
      color: "text-ndc-green"
    },
    {
      icon: Share2,
      title: "Community Growth",
      description: "Connect with like-minded individuals, build your network, and find collaboration opportunities.",
      color: "text-ndc-purple"
    }
  ];

  return (
    <section id="why-join" className="py-16 md:py-24 bg-transparent scroll-mt-28 md:scroll-mt-32">
      <div className="section-container">
        <SectionHeader 
          badgeText="Growth & Opportunity"
          badgeIcon={Rocket}
          titlePrefix="Why"
          titleHighlight="Join Us?"
          description="Being part of the DCode Developers Club opens doors to valuable learning experiences, professional growth, and a supportive community."
          centered={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-16 px-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-[2.5rem] bg-slate-900/40 backdrop-blur-xl border border-white/5 hover:border-white/20 transition-all duration-500 shadow-2xl relative overflow-hidden flex flex-col h-full"
            >
              {/* Top Accent Blur */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full translate-x-16 -translate-y-16 group-hover:bg-white/10 transition-colors`}></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>
                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center ${benefit.color} mb-8 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-inner shrink-0`}>
                  <benefit.icon size={28} />
                </div>
                
                <div className="space-y-4 flex-1">
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter italic leading-[1.1]">
                    {benefit.title.split(' ').map((word, i) => (
                      <span key={i} className="block">{word}</span>
                    ))}
                  </h3>
                  
                  <p className="text-gray-400 text-[13px] md:text-sm leading-relaxed font-medium line-clamp-4">
                    {benefit.description}
                  </p>
                </div>

                {/* Bottom Interactive Indicator */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className={`h-1 w-8 rounded-full bg-gradient-to-r from-white/10 to-transparent group-hover:w-16 transition-all duration-500`}></div>
                  <div className={`w-2 h-2 rounded-full ${benefit.color} opacity-20 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
