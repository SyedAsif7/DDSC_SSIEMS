import { CheckCircle2, Award, ShieldCheck, GraduationCap } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

const CollegeHeader = () => {
  const infoItems = [
    {
      shortLabel: "AICTE & DTE Approved",
      fullLabel: "Approved by AICTE New Delhi & DTE Maharashtra",
      icon: <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />,
    },
    {
      shortLabel: "NAAC 'B' Grade",
      fullLabel: "Accredited with \"B\" Grade by NAAC",
      icon: <Award className="h-3.5 w-3.5 text-amber-400 shrink-0" />,
    },
    {
      shortLabel: "ISO 9001:2015",
      fullLabel: "ISO 9001:2015 Certified",
      icon: <ShieldCheck className="h-3.5 w-3.5 text-sky-400 shrink-0" />,
    },
    {
      shortLabel: "DBATU Affiliated",
      fullLabel: "Affiliated to DBATU, Lonere",
      icon: <GraduationCap className="h-3.5 w-3.5 text-indigo-400 shrink-0" />,
    },
  ];

  return (
    <header className="w-full relative z-40 bg-slate-950/95 border-b border-white/10">
      {/* Primary College Identity Bar — Left Logo · Center Text · Right Logos */}
      <div className="section-container py-2 sm:py-3 md:py-3.5">
        <div className="flex items-center justify-between gap-1.5 sm:gap-4 md:gap-6">
          {/* Left: SSIEMS College Logo */}
          <div className="shrink-0 flex items-center">
            <img
              src={getAssetPath("/images/college/ssiems-logo.png")}
              alt="SSIEMS Logo"
              className="h-8 sm:h-11 md:h-14 w-auto object-contain drop-shadow-md"
            />
          </div>

          {/* Center: Institutional Identity (Between Logos) */}
          <div className="min-w-0 flex-1 text-center px-1 sm:px-2">
            <p className="font-primary text-[8px] sm:text-[10px] md:text-xs font-semibold tracking-wider uppercase text-slate-400 leading-tight truncate">
              Marathwada Shikshan Prasarak Mandal&apos;s
            </p>
            <h1 className="font-heading text-[9.5px] min-[380px]:text-[10.5px] sm:text-sm md:text-base lg:text-lg font-bold tracking-tight text-white leading-tight mt-0.5">
              Shri Shivaji Institute of Engineering and Management Studies
              <span className="text-sky-400 font-extrabold">, Parbhani</span>
            </h1>
          </div>

          {/* Right: Institutional Badges */}
          <div className="shrink-0 flex items-center gap-1 sm:gap-2.5">
            <img
              src={getAssetPath("/images/college/ssiems-ganesh.webp")}
              alt="Ganesh"
              className="h-6 sm:h-9 md:h-11 w-auto object-contain drop-shadow-sm"
            />
            <img
              src={getAssetPath("/images/college/ssiems-naac.webp")}
              alt="NAAC B Grade"
              className="h-6 sm:h-9 md:h-11 w-auto object-contain drop-shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Accreditation Strip (Strictly Hidden on screens below 482px / 640px) */}
      <div className="accreditation-strip hidden sm:block bg-slate-950/70 border-t border-white/5 backdrop-blur-md">
        <div className="section-container py-2">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-8">
            {infoItems.map((item) => (
              <li
                key={item.fullLabel}
                className="flex items-center gap-1.5 text-slate-300 justify-start"
                title={item.fullLabel}
              >
                {item.icon}
                <span className="font-primary text-xs font-medium leading-tight whitespace-nowrap">
                  {item.fullLabel}
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
