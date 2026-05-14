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
    }, 800);

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
      <DialogContent className="w-[90vw] sm:max-w-[480px] bg-black/95 backdrop-blur-3xl border border-white/10 p-0 overflow-hidden rounded-[1.5rem] shadow-[0_0_80px_rgba(168,85,247,0.25)] focus:outline-none ring-1 ring-white/10 max-h-[85vh] overflow-y-auto custom-scrollbar [&>button:last-child]:hidden">
        {/* Custom Close Button for ALL screens */}
        <div className="absolute right-4 top-4 z-[60]">
          <button 
            onClick={handleClose}
            className="p-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all active:scale-95"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute -top-24 -right-24 w-48 h-48 bg-ndc-purple/20 blur-[80px] rounded-full"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.08, 0.12, 0.08] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 1 }}
            className="absolute -bottom-24 -left-24 w-48 h-48 bg-ndc-blue/20 blur-[80px] rounded-full"
          />
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        
        <motion.div 
          className="relative p-4 sm:p-6 flex flex-col h-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header Section */}
          <DialogHeader className="mb-3 sm:mb-5 items-center text-center space-y-2 sm:space-y-3">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ndc-purple/10 border border-ndc-purple/20 text-ndc-purple">
              <Sparkles className="w-3 h-3 sm:w-3 h-3 animate-pulse" />
              <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em]">Featured Event</span>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-1 sm:space-y-1.5">
              <DialogTitle className="text-lg sm:text-2xl md:text-3xl font-black text-white leading-[1.1] tracking-tighter uppercase">
                Vibe Coding: <span className="gradient-text italic">GenAI Apps</span>
              </DialogTitle>
              <div className="flex flex-col items-center gap-1.5">
                <DialogDescription className="text-gray-400 font-medium text-[8px] sm:text-[10px] uppercase tracking-[0.15em] leading-relaxed w-full text-center">
                  Building & Deploying on <span className="text-white font-bold">Google Cloud</span>
                </DialogDescription>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-1 px-3 py-1 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-[8px] sm:text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5"
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
                  </span>
                  Registrations Closed
                </motion.div>
              </div>
            </motion.div>
          </DialogHeader>

          {/* Registration Closed Message */}
          <motion.div 
            variants={itemVariants}
            className="mb-4 p-4 sm:p-5 rounded-[1.25rem] bg-slate-900/40 backdrop-blur-xl border border-white/10 text-center space-y-2 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-red-500/5 blur-2xl rounded-full -translate-y-6 translate-x-6 group-hover:bg-red-500/10 transition-colors"></div>
            
            <div className="relative z-10 space-y-1">
              <p className="text-xs sm:text-base font-black text-white uppercase italic tracking-tighter">
                Thank you for the <span className="gradient-text">Massive Response.</span>
              </p>
              <p className="text-[8px] sm:text-[10px] font-medium text-gray-400 uppercase tracking-widest leading-relaxed">
                Slots are full. See you soon!
              </p>
            </div>

            <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 pt-1">
              <div className="flex items-center gap-1 text-[7px] sm:text-[8px] font-black uppercase tracking-[0.2em] text-ndc-purple">
                <Calendar className="w-2.5 h-2.5" />
                16th May
              </div>
              <div className="w-0.5 h-0.5 rounded-full bg-white/20"></div>
              <div className="flex items-center gap-1 text-[7px] sm:text-[8px] font-black uppercase tracking-[0.2em] text-ndc-blue">
                <MapPin className="w-2.5 h-2.5" />
                APJ Auditorium
              </div>
            </div>

            <div className="pt-1">
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[6px] sm:text-[7px] font-black uppercase tracking-[0.2em]">
                <Terminal className="w-2 h-2" />
                Laptop Compulsory
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col gap-3 mt-auto">
            <div className="flex flex-row gap-2">
              <div className="flex-1">
                <Button 
                  asChild
                  variant="outline"
                  className="w-full rounded-lg border-white/10 bg-white/5 hover:bg-white/10 text-white font-black uppercase text-[7px] sm:text-[9px] tracking-[0.2em] h-9 sm:h-10 transition-all"
                >
                  <Link to="/workshop">Roadmap</Link>
                </Button>
              </div>
              
              <div className="flex-1">
                <Button 
                  disabled
                  className="w-full rounded-lg bg-gray-800 text-gray-500 font-black uppercase text-[7px] sm:text-[9px] tracking-[0.2em] h-9 sm:h-10 cursor-not-allowed opacity-50"
                >
                  Slots Full
                </Button>
              </div>
            </div>

            <Button 
              onClick={handleClose}
              className="w-full rounded-lg bg-white text-black hover:bg-gray-200 font-black uppercase text-[8px] sm:text-[10px] tracking-[0.2em] h-10 sm:h-11 shadow-[0_10px_20px_rgba(255,255,255,0.1)] transition-all"
            >
              Close
            </Button>
          </motion.div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default AnnouncementModal;
