import { CheckCircle2, Award, ShieldCheck, GraduationCap } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

const CollegeHeader = () => {
  const infoItems = [
    {
      shortLabel: "AICTE & DTE Approved",
      fullLabel: "Approved by AICTE New Delhi & DTE Maharashtra",
      icon: <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-400 shrink-0" />,
    },
    {
      shortLabel: "NAAC 'B' Grade",
      fullLabel: "Accredited with \"B\" Grade by NAAC",
      icon: <Award className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-amber-400 shrink-0" />,
    },
    {
      shortLabel: "ISO 9001:2015",
      fullLabel: "ISO 9001:2015 Certified",
      icon: <ShieldCheck className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-sky-400 shrink-0" />,
    },
    {
      shortLabel: "DBATU Affiliated",
      fullLabel: "Affiliated to DBATU, Lonere",
      icon: <GraduationCap className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-indigo-400 shrink-0" />,
    },
  ];

  return (
    <header className="w-full relative z-40 bg-slate-950/95 border-b border-white/10">
      {/* Primary College Identity Bar */}
      <div className="section-container py-2 sm:py-3 md:py-3.5">
        {/* ========================================================================= */}
        {/* MOBILE VIEW (< 482px / sm) — Balanced 2-Row Stack with Zero Squishing   */}
        {/* ========================================================================= */}
        <div className="flex sm:hidden flex-col gap-1.5 text-center">
          {/* Top Logos Row */}
          <div className="flex items-center justify-between px-1">
            <img
              src={getAssetPath("/images/college/ssiems-logo.png")}
              alt="SSIEMS Logo"
              className="h-8 w-auto object-contain drop-shadow-md"
            />
            <div className="flex items-center gap-2">
              <img
                src={getAssetPath("/images/college/ssiems-ganesh.webp")}
                alt="Ganesh"
                className="h-6 w-auto object-contain drop-shadow-sm"
              />
              <img
                src={getAssetPath("/images/college/ssiems-naac.webp")}
                alt="NAAC B Grade"
                className="h-6 w-auto object-contain drop-shadow-sm"
              />
            </div>
          </div>

          {/* College Text */}
          <div className="px-0.5">
            <p className="font-primary text-[8.5px] font-semibold tracking-wider uppercase text-slate-400 leading-tight">
              Marathwada Shikshan Prasarak Mandal&apos;s
            </p>
            <h1 className="font-heading text-[10.5px] font-extrabold tracking-tight text-white leading-snug mt-0.5">
              Shri Shivaji Institute of Engineering &amp; Management Studies
              <span className="text-sky-400 font-black">, Parbhani</span>
            </h1>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP & TABLET VIEW (>= 482px / >= sm) — Wide 3-Column Grid            */}
        {/* ========================================================================= */}
        <div className="hidden sm:flex items-center justify-between gap-4 md:gap-6">
          {/* Left: SSIEMS College Logo */}
          <div className="shrink-0 flex items-center">
            <img
              src={getAssetPath("/images/college/ssiems-logo.png")}
              alt="SSIEMS Logo"
              className="h-11 md:h-14 w-auto object-contain drop-shadow-md"
            />
          </div>

          {/* Center: Institutional Identity */}
          <div className="min-w-0 flex-1 text-center px-2">
            <p className="font-primary text-[10px] md:text-xs font-semibold tracking-wider uppercase text-slate-400 leading-tight">
              Marathwada Shikshan Prasarak Mandal&apos;s
            </p>
            <h1 className="font-heading text-sm md:text-base lg:text-lg font-bold tracking-tight text-white leading-tight mt-0.5">
              Shri Shivaji Institute of Engineering and Management Studies
              <span className="text-sky-400 font-extrabold">, Parbhani</span>
            </h1>
          </div>

          {/* Right: Institutional Badges */}
          <div className="shrink-0 flex items-center gap-2.5 sm:gap-3">
            <img
              src={getAssetPath("/images/college/ssiems-ganesh.webp")}
              alt="Ganesh"
              className="h-9 md:h-11 w-auto object-contain drop-shadow-sm"
            />
            <img
              src={getAssetPath("/images/college/ssiems-naac.webp")}
              alt="NAAC B Grade"
              className="h-9 md:h-11 w-auto object-contain drop-shadow-sm"
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
