import { GraduationCap, Award, Linkedin } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

const SpeakerAndRoadmap = () => {
  const certifications = [
    "AWS UG", "GDE", "Docker Captain", "CKS", "CKA", "CKD", "SCE", "LFCE", "RHCA XI", "SCI", "RHCI", "JBCI"
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-transparent">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-ndc-purple/5 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-ndc-blue/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* GDE Speaker Spotlight */}
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ndc-purple/10 border border-ndc-purple/20 text-ndc-purple mb-6">
                <GraduationCap className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Speaker Spotlight</span>
              </div>
              <h2 className="heading-md">Meet the <span className="gradient-text">Expert</span></h2>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-ndc-purple to-ndc-blue rounded-[2.5rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 overflow-hidden shadow-2xl">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                  <div className="relative flex-shrink-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-ndc-purple/20 to-ndc-blue/20 border border-white/10 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500 shadow-inner">
                      <img 
                        src={getAssetPath("images/Ashutosh S. Bhakare.jpg")} 
                        alt="Ashutosh S. Bhakare" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-ndc-blue p-2.5 rounded-xl shadow-lg border border-white/10 animate-bounce">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                      <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">Ashutosh S. Bhakare</h3>
                      <a 
                        href="https://linkedin.com/in/abhakare" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-ndc-blue hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
                      >
                        <Linkedin className="w-4 h-4" />
                        Connect
                      </a>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-ndc-purple font-black uppercase text-[10px] tracking-[0.3em]">Red Hat Security Specialist</p>
                      <p className="text-gray-400 text-xs font-bold uppercase">Unnati Development & Training Centre</p>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed font-medium">
                      Google Developer Expert, Docker Captain, and Red Hat Certified Architect. Expertise in Kubernetes, OpenShift, and Cloud-Native AI solutions.
                    </p>

                    <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-2">
                      {certifications.map((cert) => (
                        <span key={cert} className="px-2 py-1 rounded-lg bg-white/5 border border-white/5 text-[8px] font-bold text-gray-400 uppercase tracking-widest">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerAndRoadmap;
