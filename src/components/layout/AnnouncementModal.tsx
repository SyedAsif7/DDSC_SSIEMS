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
import { Calendar, Clock, MapPin, Sparkles, X, Cloud, Cpu, GraduationCap } from "lucide-react";

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

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[550px] bg-slate-950/95 backdrop-blur-2xl border-white/10 p-0 overflow-hidden rounded-[2.5rem] shadow-[0_0_50px_rgba(168,85,247,0.2)]">
        {/* Decorative Header Background */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-ndc-purple/20 via-ndc-blue/10 to-transparent -z-10"></div>
        
        <div className="p-8 md:p-10">
          <DialogHeader className="mb-8 relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ndc-purple/10 border border-ndc-purple/20 text-ndc-purple mb-6 w-fit animate-fade-in">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Special Announcement</span>
            </div>
            
            <DialogTitle className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight mb-4">
              Hands-On Workshop on <span className="gradient-text">Generative AI</span>
            </DialogTitle>
            
            <DialogDescription className="text-gray-400 font-medium text-lg leading-relaxed">
              Organized by <span className="text-white font-bold">DDSC</span> using Google Cloud Platform.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
            {/* GDE Highlight */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 group hover:border-ndc-purple/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-ndc-purple/10 flex items-center justify-center text-ndc-purple group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-0.5">Guest Speaker</p>
                <p className="text-sm font-bold text-white uppercase tracking-tight">Google Developer Expert (GDE)</p>
              </div>
            </div>

            {/* Event Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                <Calendar className="w-5 h-5 text-ndc-purple" />
                <div className="text-left">
                  <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Date</p>
                  <p className="text-xs font-bold text-white">16th May 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                <Clock className="w-5 h-5 text-ndc-blue" />
                <div className="text-left">
                  <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Time</p>
                  <p className="text-xs font-bold text-white">12:30 PM Sharp</p>
                </div>
              </div>
            </div>

            {/* Venue Highlight */}
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
              <MapPin className="w-5 h-5 text-ndc-green mt-0.5" />
              <div className="text-left">
                <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Venue</p>
                <p className="text-xs font-bold text-white leading-relaxed">
                  APJ Abdul Kalam Auditorium, SSIEMS Parbhani
                </p>
              </div>
            </div>
          </div>

          <DialogFooter className="mt-10 flex-col sm:flex-row gap-4">
            <Button 
              onClick={handleClose}
              variant="outline"
              className="w-full sm:w-auto rounded-xl border-white/10 text-gray-400 hover:text-white hover:bg-white/5 font-bold uppercase text-[10px] tracking-widest h-12"
            >
              Maybe Later
            </Button>
            <Button 
              asChild
              className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-ndc-purple to-ndc-blue text-white font-black uppercase text-[10px] tracking-widest h-12 shadow-lg shadow-ndc-purple/20 hover:scale-[1.02] transition-all"
            >
              <a href="https://forms.gle/GRLSPbasffrESu1R9" target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>
          </DialogFooter>
        </div>

        {/* Floating Icons Background */}
        <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none">
          <Cloud size={120} className="text-ndc-blue" />
        </div>
        <div className="absolute -top-10 -left-10 opacity-10 pointer-events-none">
          <Cpu size={120} className="text-ndc-purple" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AnnouncementModal;
