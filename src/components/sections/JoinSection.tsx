import { Button } from "@/components/ui/button";
import { getAssetPath } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";
import { UserPlus, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const JoinSection = () => {
  const handleJoinClick = () => {
    window.open("https://forms.gle/CHamTqBMouu6ucYa7", "_blank");
  };

  return (
    <section id="join" className="py-24 relative bg-transparent overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-ndc-purple/10 blur-[140px] animate-pulse"></div>
      </div>
      
      <div className="section-container relative z-10">
        <SectionHeader 
          badgeText="Become a Member"
          badgeIcon={UserPlus}
          titlePrefix="Ready to"
          titleHighlight="Join Us?"
          description="Take the first step towards an exciting journey of learning, building, and growing with a community of tech enthusiasts."
          centered
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-16 p-1 rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent shadow-2xl relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-3xl rounded-[3rem]"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-ndc-purple/10 blur-[100px] rounded-full -mr-32 -mt-32 transition-all duration-700 group-hover:bg-ndc-purple/20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-ndc-blue/10 blur-[100px] rounded-full -ml-32 -mb-32 transition-all duration-700 group-hover:bg-ndc-blue/20"></div>
          
          <div className="relative z-10 p-10 md:p-20 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
            <div className="flex-shrink-0 relative group">
              <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-700"></div>
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center justify-center relative z-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
                <img src={getAssetPath("/images/club/Dcode-Logo.png")} alt="DCode Logo" className="h-20 md:h-24 w-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]" />
              </div>
            </div>
            
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none italic">
                  Membership <br className="hidden md:block" /> <span className="gradient-text">Application</span>
                </h3>
                <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                  Become part of an elite community that shapes the future. Apply today to unlock exclusive resources and opportunities.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Button 
                  onClick={handleJoinClick} 
                  className="w-full sm:w-auto h-20 px-12 bg-white text-black hover:bg-gray-100 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-[0_20px_50px_rgba(255,255,255,0.1)] transition-all hover:scale-105 active:scale-95"
                >
                  Apply to Join Now
                  <ChevronRight size={20} className="ml-2" />
                </Button>
                <div className="flex flex-col items-center sm:items-start gap-1">
                  <p className="text-white font-black text-lg tracking-tight leading-none">100+</p>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Active Members</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinSection;
