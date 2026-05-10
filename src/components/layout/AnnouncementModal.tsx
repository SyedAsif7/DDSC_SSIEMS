import { useState, useEffect } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Sparkles, X, Cloud, Cpu, GraduationCap, Award, Info } from "lucide-react";
import { getAssetPath } from "@/lib/utils";
import { Link } from "react-router-dom";

const AnnouncementModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after a short delay when the website opens
    const timer = setTimeout(() => {
      const hasSeenAnnouncement = sessionStorage.getItem("hasSeenWorkshopAnnouncement");
      if (!hasSeenAnnouncement) {
        setIsOpen(true);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenWorkshopAnnouncement", "true");
  };

  const onOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      sessionStorage.setItem("hasSeenWorkshopAnnouncement", "true");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-slate-950/95 backdrop-blur-2xl border-white/10 p-0 overflow-hidden rounded-[2.5rem] shadow-[0_0_50px_rgba(168,85,247,0.3)] group">
        {/* Decorative Header Background */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-br from-ndc-purple/30 via-ndc-blue/10 to-transparent -z-10"></div>
        
        {/* Close Button - More visible for mobile */}
        <button 
          onClick={handleClose}
          className="absolute top-6 right-6 z-50 p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all active:scale-90"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8">
          <DialogHeader className="mb-6 relative text-center items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ndc-purple/10 border border-ndc-purple/20 text-ndc-purple mb-6 w-fit animate-fade-in">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Special Announcement</span>
            </div>
            
            <DialogTitle className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tighter mb-4 uppercase">
              Hands-On <span className="gradient-text">Generative AI</span> Workshop
            </DialogTitle>
            
            <DialogDescription className="text-gray-400 font-medium text-base leading-relaxed max-w-sm">
              Master the future of AI with industry leading experts at <span className="text-white font-bold">SSIEMS Parbhani</span>.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
            {/* Guest Speaker Spotlight - Enhanced */}
            <div className="relative p-5 rounded-3xl bg-white/5 border border-white/10 overflow-hidden group/speaker hover:border-ndc-purple/40 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-ndc-purple/10 to-transparent opacity-0 group-hover/speaker:opacity-100 transition-opacity"></div>
              <div className="relative flex items-center gap-5">
                <div className="relative flex-shrink-0">
                  <div className="absolute -inset-1 bg-gradient-to-r from-ndc-purple to-ndc-blue rounded-2xl blur-md opacity-0 group-hover/speaker:opacity-50 transition-opacity"></div>
                  <img 
                    src={getAssetPath("images/Ashutosh S. Bhakare.jpg")} 
                    alt="Ashutosh S. Bhakare" 
                    className="relative w-16 h-16 rounded-2xl object-cover border border-white/20"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-ndc-purple p-1 rounded-lg border border-white/20 shadow-lg">
                    <Award className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-black text-ndc-purple uppercase tracking-widest mb-1">Guest Speaker</p>
                  <h4 className="text-lg font-black text-white leading-tight mb-1">Ashutosh S. Bhakare</h4>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight flex items-center gap-1.5">
                    <img src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png" alt="Google" className="w-3 h-3 opacity-80" />
                    Google Developer Expert (GDE)
                  </p>
                </div>
              </div>
            </div>

            {/* Event Info Grid - Compact for mobile */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-3.5 h-3.5 text-ndc-purple" />
                  <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Date</span>
                </div>
                <p className="text-[11px] font-bold text-white leading-tight">16th May 2026</p>
              </div>
              <div className="flex flex-col gap-1 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-3.5 h-3.5 text-ndc-blue" />
                  <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Time</span>
                </div>
                <p className="text-[11px] font-bold text-white leading-tight">12:30 PM Sharp</p>
              </div>
            </div>

            {/* Venue Card */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="p-2.5 rounded-xl bg-ndc-green/10 text-ndc-green flex-shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1">Venue</p>
                <p className="text-[11px] font-bold text-white leading-relaxed">
                  APJ Abdul Kalam Auditorium, SSIEMS Parbhani
                </p>
              </div>
            </div>
            
            {/* Certificate Alert */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-ndc-purple/10 border border-ndc-purple/20 animate-pulse">
              <div className="p-2.5 rounded-xl bg-ndc-purple/20 text-ndc-purple flex-shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <p className="text-[11px] font-bold text-white tracking-tight">
                E-Certificate provided to all participants
              </p>
            </div>
          </div>

          <DialogFooter className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button 
              asChild
              variant="outline"
              onClick={handleClose}
              className="w-full sm:flex-1 rounded-2xl border-white/10 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 font-bold uppercase text-[10px] tracking-[0.15em] h-14"
            >
              <Link to="/workshop" className="flex items-center justify-center gap-2">
                <Info className="w-4 h-4" />
                Details
              </Link>
            </Button>
            <Button 
              asChild
              className="w-full sm:flex-1 rounded-2xl bg-gradient-to-r from-ndc-purple to-ndc-blue text-white font-black uppercase text-[10px] tracking-[0.15em] h-14 shadow-xl shadow-ndc-purple/20 hover:scale-[1.02] transition-all active:scale-95"
            >
              <a href="https://forms.gle/GRLSPbasffrESu1R9" target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>
          </DialogFooter>
        </div>

        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </DialogContent>
    </Dialog>
  );
};

export default AnnouncementModal;
