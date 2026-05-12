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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16 px-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 md:p-10 rounded-[2.5rem] bg-slate-900/40 backdrop-blur-xl border border-white/5 hover:border-white/20 transition-all duration-500 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full translate-x-16 -translate-y-16 group-hover:bg-white/10 transition-colors"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-ndc-blue mb-8 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-inner">
                  <benefit.icon size={32} />
                </div>
                
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter mb-4 italic leading-tight">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
