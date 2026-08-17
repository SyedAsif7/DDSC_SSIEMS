import { CheckCircle2, Award, ShieldCheck, University } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

const CollegeHeader = () => {
  const infoItems = [
    {
      label: "AICTE & DTE Approved",
      fullLabel: "Approved by AICTE New Delhi & DTE Maharashtra",
      icon: <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-400 shrink-0" />,
    },
    {
      label: "NAAC 'B' Grade",
      fullLabel: "Accredited with \"B\" Grade by NAAC",
      icon: <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-amber-400 shrink-0" />,
    },
    {
      label: "ISO 9001:2015",
      fullLabel: "ISO 9001:2015 Certified",
      icon: <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-sky-400 shrink-0" />,
    },
    {
      label: "DBATU Affiliated",
      fullLabel: "Affiliated to DBATU, Lonere",
      icon: <University className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-indigo-400 shrink-0" />,
    },
  ];

  return (
    <header className="w-full relative z-40">
      {/* Primary brand bar */}
      <div className="relative bg-slate-950/90 border-b border-white/10">
        <div className="section-container">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-5 md:gap-6 py-2.5 sm:py-3 md:py-3.5">
            {/* Left: College logo */}
            <div className="shrink-0">
              <img
                src={getAssetPath("/images/college/ssiems-logo.png")}
                alt="SSIEMS Logo"
                className="h-9 sm:h-11 md:h-12 w-auto object-contain drop-shadow-lg"
              />
            </div>

            {/* Center: Institution identity */}
            <div className="min-w-0 text-center px-1 sm:px-2">
              <p className="font-primary text-[10px] sm:text-[11px] md:text-xs font-semibold tracking-[0.14em] uppercase text-gray-300 mb-1 leading-none">
                Marathwada Shikshan Prasarak Mandal&apos;s
              </p>
              <h1 className="font-heading text-[11px] sm:text-sm md:text-base lg:text-lg font-bold tracking-tight text-white leading-snug">
                Shri Shivaji Institute of Engineering and Management Studies
                <span className="text-sky-400 font-extrabold">, Parbhani</span>
              </h1>
            </div>

            {/* Right: Institutional marks */}
            <div className="shrink-0 flex items-center gap-2 sm:gap-3 md:gap-4">
              <img
                src={getAssetPath("/images/college/ssiems-ganesh.webp")}
                alt="Ganesh"
                className="h-7 sm:h-9 md:h-10 w-auto object-contain drop-shadow-md"
              />
              <img
                src={getAssetPath("/images/college/ssiems-naac.webp")}
                alt="NAAC B Grade"
                className="h-7 sm:h-9 md:h-10 w-auto object-contain drop-shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Accreditation strip */}
      <div className="relative backdrop-blur-md bg-slate-950/50 border-b border-white/5">
        <div className="section-container py-2 sm:py-2.5">
          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 sm:gap-x-5 md:gap-x-8">
            {infoItems.map((item) => (
              <li
                key={item.fullLabel}
                className="flex items-center gap-1.5 sm:gap-2 text-gray-200"
                title={item.fullLabel}
              >
                {item.icon}
                <span className="font-primary text-[10px] sm:text-xs font-medium leading-none">
                  <span className="sm:hidden">{item.label}</span>
                  <span className="hidden sm:inline">{item.fullLabel}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default CollegeHeader;
