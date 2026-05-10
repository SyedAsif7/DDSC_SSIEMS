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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[2.5rem] border transition-all duration-500 hover:scale-[1.02] group backdrop-blur-md md:backdrop-blur-xl bg-slate-900/40 border-white/10 hover:border-white/20 shadow-2xl relative overflow-hidden"
            >
              {/* Subtle Hover Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-br from-transparent via-transparent to-ndc-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="mb-6 p-4 rounded-2xl w-fit transition-transform duration-500 group-hover:scale-110 bg-white/5 border border-white/5 group-hover:bg-white/10">
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-black mb-4 text-white uppercase tracking-tight leading-tight group-hover:text-ndc-purple transition-colors">{benefit.title}</h3>
                <p className="leading-relaxed text-sm text-gray-400 font-medium group-hover:text-gray-300 transition-colors">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
