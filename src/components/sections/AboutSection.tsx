import SectionHeader from "@/components/ui/SectionHeader";
import { Info, Target, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-transparent scroll-mt-28 md:scroll-mt-32">
      <div className="section-container">
        <SectionHeader 
          badgeText="Our Story"
          badgeIcon={Info}
          titlePrefix="About"
          titleHighlight="DCode"
          description="The DCode Developers Club is a student-driven community dedicated to empowering the next generation of technology leaders through hands-on learning, collaboration, and innovation."
          centered={true}
        />
        
        <div className="grid md:grid-cols-2 gap-8 mb-16 mt-16 px-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-12 space-y-8 rounded-[3rem] border backdrop-blur-xl bg-slate-900/40 border-white/10 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-ndc-purple/5 blur-3xl rounded-full"></div>
            <div className="w-16 h-16 rounded-[1.5rem] bg-ndc-purple/10 flex items-center justify-center text-ndc-purple mb-8 group-hover:scale-110 transition-transform shadow-inner">
              <Target size={32} />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter italic">Our Vision</h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed font-medium">
                To build a vibrant community of passionate developers who collaborate, innovate, and lead in the 
                ever-evolving world of technology.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-12 space-y-8 rounded-[3rem] border backdrop-blur-xl bg-slate-900/40 border-white/10 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-ndc-blue/5 blur-3xl rounded-full"></div>
            <div className="w-16 h-16 rounded-[1.5rem] bg-ndc-blue/10 flex items-center justify-center text-ndc-blue mb-8 group-hover:scale-110 transition-transform shadow-inner">
              <Rocket size={32} />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter italic">Our Mission</h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed font-medium">
                To provide students with opportunities to work on real-world projects, learn cutting-edge technologies, 
                build strong portfolios, and connect with industry professionals.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Track Record / Achievements Summary */}
        <div className="mt-20 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-16 rounded-[4rem] border border-white/10 bg-slate-900/40 backdrop-blur-3xl shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ndc-purple/10 blur-[150px] -mr-64 -mt-64 transition-all duration-1000 group-hover:bg-ndc-purple/20"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-ndc-blue/10 blur-[150px] -ml-64 -mb-64 transition-all duration-1000 group-hover:bg-ndc-blue/20"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 md:gap-20">
              <div className="flex-1 text-center lg:text-left space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic leading-none">Proven <br className="hidden md:block" /> <span className="gradient-text">Track Record</span></h3>
                  <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl">
                    DCode members have consistently showcased technical excellence across national stages like Smart India Hackathon and IIT Bombay Techfest. 
                  </p>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8">
                  {[
                    { label: "SIH Nationalists", color: "bg-ndc-purple" },
                    { label: "IIT-B Finalists", color: "bg-ndc-blue" },
                    { label: "National Rankers", color: "bg-ndc-green" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 group/item">
                      <div className={`w-2.5 h-2.5 rounded-full ${item.color} shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-pulse`}></div>
                      <span className="text-[11px] md:text-xs font-black text-gray-300 uppercase tracking-[0.2em] group-hover/item:text-white transition-colors">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex-shrink-0 grid grid-cols-2 gap-4 md:gap-6 w-full lg:w-auto">
                <div className="bg-white/5 backdrop-blur-2xl p-8 md:p-10 rounded-[2.5rem] border border-white/10 text-center hover:bg-ndc-purple/10 hover:border-ndc-purple/30 transition-all duration-500 hover:scale-105 group/stat shadow-xl">
                  <div className="text-4xl md:text-5xl font-black text-ndc-purple mb-2 group-hover:scale-110 transition-transform">08+</div>
                  <div className="text-[10px] md:text-[11px] font-black text-gray-500 uppercase tracking-[0.3em] group-hover:text-gray-300 transition-colors">SIH Squads</div>
                </div>
                <div className="bg-white/5 backdrop-blur-2xl p-8 md:p-10 rounded-[2.5rem] border border-white/10 text-center hover:bg-ndc-blue/10 hover:border-ndc-blue/30 transition-all duration-500 hover:scale-105 group/stat shadow-xl">
                  <div className="text-4xl md:text-5xl font-black text-ndc-blue mb-2 group-hover:scale-110 transition-transform">4th</div>
                  <div className="text-[10px] md:text-[11px] font-black text-gray-500 uppercase tracking-[0.3em] group-hover:text-gray-300 transition-colors">Techfest Rank</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
