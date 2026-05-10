import SectionHeader from "@/components/ui/SectionHeader";
import { Info, Target, Rocket } from "lucide-react";

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
        
        <div className="grid md:grid-cols-2 gap-8 mb-16 mt-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="p-8 space-y-6 rounded-[2rem] border backdrop-blur-md md:backdrop-blur-xl bg-slate-900/40 border-white/10 shadow-2xl shadow-ndc-purple/10 hover:scale-[1.02] transition-all duration-500 group">
            <div className="w-14 h-14 rounded-2xl bg-ndc-purple/10 flex items-center justify-center text-ndc-purple mb-6 group-hover:scale-110 transition-transform">
              <Target size={28} />
            </div>
            <h3 className="heading-sm text-ndc-purple uppercase tracking-tight">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To build a vibrant community of passionate developers who collaborate, innovate, and lead in the 
              ever-evolving world of technology.
            </p>
          </div>
          
          <div className="p-8 space-y-6 rounded-[2rem] border backdrop-blur-md md:backdrop-blur-xl bg-slate-900/40 border-white/10 shadow-2xl shadow-ndc-blue/10 hover:scale-[1.02] transition-all duration-500 group">
            <div className="w-14 h-14 rounded-2xl bg-ndc-blue/10 flex items-center justify-center text-ndc-blue mb-6 group-hover:scale-110 transition-transform">
              <Rocket size={28} />
            </div>
            <h3 className="heading-sm text-ndc-blue uppercase tracking-tight">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To provide students with opportunities to work on real-world projects, learn cutting-edge technologies, 
              build strong portfolios, and connect with industry professionals and like-minded peers.
            </p>
          </div>
        </div>

        {/* Track Record / Achievements Summary */}
        <div className="mt-20 animate-fade-in">
          <div className="p-8 md:p-12 rounded-[3rem] border border-white/10 bg-slate-900/40 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-ndc-purple/10 blur-[100px] -mr-32 -mt-32 transition-all duration-700 group-hover:bg-ndc-purple/20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-ndc-blue/10 blur-[100px] -ml-32 -mb-32 transition-all duration-700 group-hover:bg-ndc-blue/20"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-black mb-4 text-white">Proven Track Record</h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  DCode members have consistently showcased their technical excellence across national stages like Smart India Hackathon and IIT Bombay Techfest. 
                  Our journey is defined by participation in high-stakes innovation challenges and competitive coding arenas.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-ndc-purple animate-pulse"></div>
                    <span className="text-sm font-bold text-gray-200 uppercase tracking-wider">SIH Nationalists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-ndc-blue animate-pulse"></div>
                    <span className="text-sm font-bold text-gray-200 uppercase tracking-wider">IIT-B Finalists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-ndc-green animate-pulse"></div>
                    <span className="text-sm font-bold text-gray-200 uppercase tracking-wider">National Rankers</span>
                  </div>
                </div>
              </div>
              
              <div className="flex-shrink-0 grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-[1.5rem] border border-white/10 text-center hover:bg-ndc-purple/10 hover:border-ndc-purple/30 transition-all hover:scale-105 group/stat">
                  <div className="text-3xl font-black text-ndc-purple mb-1 group-hover:scale-110 transition-transform">08+</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-gray-300 transition-colors">SIH Squads</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-[1.5rem] border border-white/10 text-center hover:bg-ndc-blue/10 hover:border-ndc-blue/30 transition-all hover:scale-105 group/stat">
                  <div className="text-3xl font-black text-ndc-blue mb-1 group-hover:scale-110 transition-transform">4th</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-gray-300 transition-colors">Techfest Rank</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
