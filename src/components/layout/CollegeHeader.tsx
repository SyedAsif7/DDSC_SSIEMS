import { CheckCircle2, Award, ShieldCheck, University } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

const CollegeHeader = () => {
  const infoItems = [
    {
      label: "Approved by AICTE New Delhi & DTE Maharashtra",
      icon: <CheckCircle2 className="h-4 w-4 text-emerald-400" />,
    },
    {
      label: "Accredited with \"B\" Grade by NAAC",
      icon: <Award className="h-4 w-4 text-amber-400" />,
    },
    {
      label: "ISO 9001:2015 Certified",
      icon: <ShieldCheck className="h-4 w-4 text-sky-400" />,
    },
    {
      label: "Affiliated to DBATU, Lonere",
      icon: <University className="h-4 w-4 text-indigo-400" />,
    },
  ];

  return (
    <header className="w-full relative z-40">
      {/* Main header - Enhanced with better visual hierarchy */}
      <div className="relative backdrop-blur-2xl bg-slate-900/60 border-b border-white/10 shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between gap-2 sm:gap-4 py-1.5 sm:py-2 md:py-3">
            {/* Left: College logo with enhanced presentation */}
            <div className="flex-shrink-0 group">
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-75"></div>
                <img
                  src={getAssetPath("images/ssiems-logo.png")}
                  alt="Shri Shivaji Institute of Engineering and Management Studies Logo"
                  className="relative h-7 sm:h-10 md:h-12 w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
  
            {/* Center: Trust name + college name with better typography */}
            <div className="flex-1 text-center leading-tight px-1 sm:px-4">
              <p className="relative text-[5px] xs:text-[7px] sm:text-[8px] md:text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 mb-0.5 sm:mb-1">
                Marathwada Shikshan Prasarak Mandal's
              </p>
              <h1 className="text-[7px] xs:text-[9px] sm:text-[11px] md:text-sm lg:text-base font-black tracking-tight text-white drop-shadow-lg leading-tight uppercase italic">
                Shri Shivaji Institute of Engineering <br className="xs:hidden" /> and Management Studies
                <span className="text-ndc-blue ml-1.5">Parbhani</span>
              </h1>
            </div>
  
            {/* Right: Ganesh statue + NAAC badge with enhanced display */}
            <div className="flex-shrink-0 flex items-center justify-end gap-1.5 sm:gap-3 md:gap-4">
              <div className="group relative">
                <img
                  src={getAssetPath("images/ssiems-ganesh.webp")}
                  alt="Traditional Ganesh statue"
                  className="relative h-5 sm:h-8 md:h-9 w-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="group relative">
                <img
                  src={getAssetPath("images/ssiems-naac.webp")}
                  alt="NAAC B Grade Accreditation"
                  className="relative h-5 sm:h-8 md:h-9 w-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div className="relative backdrop-blur-md bg-gradient-to-r from-slate-950/60 via-slate-900/40 to-slate-950/60 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-2">
          <div className="flex flex-wrap items-center justify-center gap-x-1.5 sm:gap-x-3 gap-y-1 text-[7px] xs:text-[8px] sm:text-[9px] md:text-xs text-gray-300">
            {infoItems.map((item, index) => (
              <div 
                key={item.label} 
                className="flex items-center gap-0.5 sm:gap-1 px-0.5 sm:px-1 py-0.5 rounded-lg hover:bg-white/5 transition-all duration-300"
              >
                <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 scale-75 sm:scale-100">
                  {item.icon}
                </div>
                <span className="whitespace-nowrap sm:whitespace-normal text-center font-medium group-hover:text-white transition-colors duration-300">
                  {item.label}
                </span>
                {index < infoItems.length - 1 && (
                  <span className="hidden sm:inline-block w-px h-2.5 bg-white/10 mx-0.5"></span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default CollegeHeader;
