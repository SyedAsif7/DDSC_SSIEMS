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
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mt-12 p-8 md:p-12 backdrop-blur-xl rounded-[3rem] border bg-slate-900/40 border-white/10 shadow-2xl relative group overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-ndc-purple/5 blur-3xl rounded-full pointer-events-none"></div>
          
          <div className="text-center relative z-10">
            <div className="w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner">
              <img src={getAssetPath("images/Dcode-Logo.png")} alt="DCode Logo" className="h-14 w-auto drop-shadow-2xl" />
            </div>
            
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-6">Membership Application</h3>
            
            <p className="text-gray-400 text-lg mb-10 font-medium leading-relaxed max-w-md mx-auto">
              Become part of a elite community that shapes the future. Apply today to unlock exclusive resources and opportunities.
            </p>

            <Button 
              onClick={handleJoinClick} 
              className="w-full max-w-sm h-16 bg-gradient-to-r from-ndc-purple to-ndc-blue text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-2xl hover:shadow-ndc-purple/30 transition-all hover:translate-y-[-4px]"
            >
              Apply to Join
              <ChevronRight size={20} className="ml-2" />
            </Button>
            
            <p className="mt-8 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              Join 100+ passionate developers
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinSection;
