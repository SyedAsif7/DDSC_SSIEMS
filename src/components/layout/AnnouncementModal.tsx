import { useState, useEffect } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Sparkles, X, GraduationCap, Award, ChevronRight, Users, Zap, Terminal, Star } from "lucide-react";
import { getAssetPath } from "@/lib/utils";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

const AnnouncementModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsOpen(false);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[95vw] sm:max-w-[700px] bg-black/90 backdrop-blur-2xl border border-white/10 p-0 overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_0_80px_rgba(168,85,247,0.15)] focus:outline-none ring-1 ring-white/5 max-h-[90vh] overflow-y-auto custom-scrollbar">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute -top-24 -right-24 w-64 h-64 bg-ndc-purple/20 blur-[100px] rounded-full"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.08, 0.12, 0.08] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 1 }}
            className="absolute -bottom-24 -left-24 w-64 h-64 bg-ndc-blue/20 blur-[100px] rounded-full"
          />
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        
        <motion.div 
          className="relative p-5 sm:p-10 flex flex-col h-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header Section */}
          <DialogHeader className="mb-6 sm:mb-8 items-center text-center space-y-3 sm:space-y-4">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ndc-purple/10 border border-ndc-purple/20 text-ndc-purple">
              <Sparkles className="w-3 h-3 sm:w-3.5 h-3.5 animate-pulse" />
              <span className="text-[9px] sm:text-xs font-bold uppercase tracking-[0.2em]">Featured Event</span>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-1 sm:space-y-2">
              <DialogTitle className="text-lg sm:text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter uppercase">
                Vibe Coding: <span className="gradient-text italic">GenAI Apps</span>
              </DialogTitle>
              <DialogDescription className="text-gray-400 font-medium text-[10px] sm:text-base uppercase tracking-[0.15em] leading-relaxed w-full text-center">
                Building & Deploying on <span className="text-white font-bold">Google Cloud</span>
              </DialogDescription>
            </motion.div>
          </DialogHeader>

          {/* Main Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {/* Logistics Column */}
            <div className="space-y-3 sm:space-y-4">
              <motion.div variants={itemVariants} className="flex flex-col gap-2.5 sm:gap-3">
                <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors group">
                  <div className="w-9 h-9 sm:w-10 h-10 rounded-xl bg-ndc-blue/10 flex items-center justify-center border border-ndc-blue/20 group-hover:scale-110 transition-transform">
                    <Calendar className="w-4 h-4 sm:w-5 h-5 text-ndc-blue" />
                  </div>
                  <div>
                    <p className="text-[8px] sm:text-[10px] text-gray-500 font-bold uppercase tracking-wider">Date</p>
                    <p className="text-xs sm:text-base font-bold text-white uppercase tracking-tight">May 16, 2026</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors group">
                  <div className="w-9 h-9 sm:w-10 h-10 rounded-xl bg-ndc-green/10 flex items-center justify-center border border-ndc-green/20 group-hover:scale-110 transition-transform">
                    <Clock className="w-4 h-4 sm:w-5 h-5 text-ndc-green" />
                  </div>
                  <div>
                    <p className="text-[8px] sm:text-[10px] text-gray-500 font-bold uppercase tracking-wider">Time</p>
                    <p className="text-xs sm:text-base font-bold text-white uppercase tracking-tight">12:30 PM Onwards</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-ndc-purple/10 to-transparent border border-ndc-purple/20 hover:from-ndc-purple/15 transition-all group">
                  <div className="w-9 h-9 sm:w-10 h-10 rounded-xl bg-ndc-purple/10 flex items-center justify-center border border-ndc-purple/20 group-hover:scale-110 transition-transform">
                    <MapPin className="w-4 h-4 sm:w-5 h-5 text-ndc-purple" />
                  </div>
                  <div>
                    <p className="text-[8px] sm:text-[10px] text-gray-500 font-bold uppercase tracking-wider">Venue</p>
                    <p className="text-xs sm:text-base font-bold text-white uppercase tracking-tight">APJ Auditorium</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Speakers Column */}
            <div className="space-y-3 sm:space-y-4">
              <motion.p variants={itemVariants} className="text-[9px] sm:text-[10px] text-gray-500 font-black uppercase tracking-[0.3em] pl-1 flex items-center gap-2">
                <Star className="w-3 h-3 text-ndc-purple" />
                Expert Mentors
              </motion.p>
              <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
                {[
                  { name: "Ashutosh S. Bhakare", role: "Red Hat Specialist", img: "Ashutosh S. Bhakare.jpeg" },
                  { name: "Rachana Bhakare", role: "Platform Instructor", img: "Rachana Bhakare.jpeg" }
                ].map((speaker, i) => (
                  <motion.div 
                    key={i} 
                    variants={itemVariants}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all group"
                  >
                    <div className="relative shrink-0">
                      <div className="w-10 h-10 sm:w-12 h-12 rounded-xl overflow-hidden border border-white/10 group-hover:scale-105 transition-transform duration-500 shadow-lg">
                        <img 
                          src={getAssetPath(`images/${speaker.img}`)} 
                          alt={speaker.name} 
                          className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 sm:w-4 h-4 rounded-full bg-ndc-purple border-2 border-black flex items-center justify-center shadow-lg">
                        <Zap className="w-2 h-2 text-white fill-current animate-pulse" />
                      </div>
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[11px] sm:text-sm font-black text-white uppercase tracking-tight truncate group-hover:text-ndc-purple transition-colors">{speaker.name}</h4>
                      <p className="text-[8px] sm:text-[9px] font-bold text-gray-500 uppercase tracking-widest">{speaker.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div variants={itemVariants} className="flex items-center gap-2.5 p-3 rounded-2xl bg-ndc-green/5 border border-ndc-green/10 backdrop-blur-sm group hover:bg-ndc-green/10 transition-colors">
                <Award className="w-4 h-4 text-ndc-green group-hover:rotate-12 transition-transform" />
                <span className="text-[9px] sm:text-[10px] font-black text-ndc-green uppercase tracking-[0.1em]">Verifiable Certification Included</span>
              </motion.div>
            </div>
          </div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <MagneticButton className="flex-1 order-2 sm:order-1">
              <Button 
                asChild
                variant="outline"
                onClick={handleClose}
                className="w-full rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 text-white font-black uppercase text-[10px] sm:text-xs tracking-[0.2em] h-12 sm:h-14 transition-all"
              >
                <Link to="/workshop">View Roadmap</Link>
              </Button>
            </MagneticButton>
            
            <MagneticButton className="flex-1 order-1 sm:order-2">
              <Button 
                asChild
                className="w-full rounded-2xl bg-gradient-to-r from-ndc-purple via-ndc-blue to-ndc-purple bg-[length:200%_auto] animate-gradient hover:scale-[1.02] active:scale-[0.98] text-white font-black uppercase text-[10px] sm:text-xs tracking-[0.2em] h-12 sm:h-14 shadow-2xl shadow-ndc-purple/20 transition-all group"
              >
                <a href="https://forms.gle/GRLSPbasffrESu1R9" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  Secure Your Spot
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default AnnouncementModal;