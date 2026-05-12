import { GraduationCap, Award, Linkedin, Terminal, Zap, Sparkles, MapPin, CheckCircle2, ChevronRight } from "lucide-react";
import { getAssetPath } from "@/lib/utils";
import { motion } from "framer-motion";

const SpeakerAndRoadmap = () => {
  const roadmapSteps = [
    {
      step: "01",
      title: "Prototype",
      desc: "with Google AI Studio",
      icon: Sparkles,
      color: "text-ndc-purple",
      bg: "bg-ndc-purple/10"
    },
    {
      step: "02",
      title: "Generate",
      desc: "with Gemini Models",
      icon: Zap,
      color: "text-ndc-blue",
      bg: "bg-ndc-blue/10"
    },
    {
      step: "03",
      title: "Build",
      desc: "GenAI Microservice",
      icon: Terminal,
      color: "text-ndc-green",
      bg: "bg-ndc-green/10"
    },
    {
      step: "04",
      title: "Deploy",
      desc: "to Cloud Run",
      icon: MapPin,
      color: "text-ndc-purple",
      bg: "bg-ndc-purple/10"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 -translate-y-1/2 w-96 h-96 bg-ndc-purple/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 translate-y-1/2 w-96 h-96 bg-ndc-blue/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="section-container relative z-10">
        
        {/* 1. Vibe Coding Roadmap Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 mb-6"
            >
              <Terminal className="w-4 h-4 text-ndc-purple" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">The Process</span>
            </motion.div>
            <h2 className="heading-md mb-6 uppercase italic">The <span className="gradient-text">Vibe Coding</span> Roadmap</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
              Experience the future of development. We'll take you from a blank canvas to a globally deployed AI application in record time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapSteps.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative p-10 rounded-[3rem] bg-[#0A0A0A] border border-white/5 group hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 overflow-hidden shadow-2xl"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${item.bg} blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                
                <span className={`text-5xl font-black ${item.color} opacity-10 group-hover:opacity-100 transition-opacity duration-500 mb-8 block tracking-tighter italic`}>
                  {item.step}
                </span>
                
                <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>

                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3">{item.title}</h3>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-ndc-blue/10 border border-ndc-blue/20 text-ndc-blue shadow-lg shadow-ndc-blue/5">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-xs font-black uppercase tracking-[0.2em]">From blank editor to live URL in minutes!</span>
            </div>
          </motion.div>
        </div>

        {/* 2. Experts Speaker Spotlight */}
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <div className="text-center mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ndc-purple/10 border border-ndc-purple/20 text-ndc-purple mb-6"
              >
                <GraduationCap className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Speaker Spotlight</span>
              </motion.div>
              <h2 className="heading-md uppercase italic">Meet the <span className="gradient-text">Experts</span></h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Speaker 1: Ashutosh Bhakare */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-ndc-purple/20 to-ndc-blue/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 hover:bg-white/[0.05] transition-all duration-300 h-full flex flex-col">
                  <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start text-center sm:text-left mb-auto">
                    <div className="relative shrink-0">
                      <div className="w-28 h-28 md:w-32 md:h-32 rounded-3xl overflow-hidden border-2 border-ndc-purple/30 group-hover:border-ndc-purple transition-colors shadow-2xl">
                        <img 
                          src={getAssetPath("images/Ashutosh S. Bhakare.jpeg")} 
                          alt="Ashutosh S. Bhakare" 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-ndc-purple p-2 rounded-xl shadow-xl border border-white/10">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">Ashutosh S. Bhakare</h3>
                        <p className="text-ndc-purple font-bold text-[10px] md:text-xs uppercase tracking-widest mt-2 leading-none">Red Hat Security Specialist</p>
                      </div>
                      
                      <p className="text-gray-400 text-xs md:text-sm font-medium leading-relaxed italic">
                        "Vibe Coding: Rapidly Building and Deploying GenAI Apps on Google Cloud"
                      </p>
                      
                      <div className="flex flex-wrap gap-2 pt-1">
                        <span className="text-[9px] font-black text-white/40 uppercase tracking-widest px-2.5 py-1 rounded-lg bg-white/5 border border-white/5">Google Developer Expert</span>
                      </div>
                      
                      <a 
                        href="https://linkedin.com/in/abhakare" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-ndc-blue hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest mt-2 group/link"
                      >
                        <Linkedin className="w-4 h-4" />
                        Connect Professional
                        <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Speaker 2: Rachana Bhakare */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-ndc-blue/20 to-ndc-purple/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 hover:bg-white/[0.05] transition-all duration-300 h-full flex flex-col">
                  <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start text-center sm:text-left mb-auto">
                    <div className="relative shrink-0">
                      <div className="w-28 h-28 md:w-32 md:h-32 rounded-3xl overflow-hidden border-2 border-ndc-blue/30 group-hover:border-ndc-blue transition-colors shadow-2xl">
                        <img 
                          src={getAssetPath("images/Rachana Bhakare.jpeg")} 
                          alt="Rachana Bhakare" 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-ndc-blue p-2 rounded-xl shadow-xl border border-white/10">
                        <GraduationCap className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">Rachana Bhakare</h3>
                        <p className="text-ndc-blue font-bold text-[10px] md:text-xs uppercase tracking-widest mt-2 leading-none">Senior Platform Instructor</p>
                      </div>
                      
                      <p className="text-gray-400 text-xs md:text-sm font-medium leading-relaxed italic">
                        "Demystifying Containers and AI Apps: From Basics to Intelligent Apps"
                      </p>
                      
                      <a 
                        href="https://www.linkedin.com/in/rachana-bhakare-a82490249/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-ndc-blue hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest mt-2 group/link"
                      >
                        <Linkedin className="w-4 h-4" />
                        Connect Professional
                        <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerAndRoadmap;

export default SpeakerAndRoadmap;
