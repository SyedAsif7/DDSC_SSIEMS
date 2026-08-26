/**
 * HeroSection — DCode Developers Club Home Page Hero
 *
 * Structure:
 *   [Brand rails]       — community announcement tags + institutional tag
 *   [Headline zone]     — club badge / eyebrow / h1 / tagline / description
 *   [Four pillars]      — Build · Learn · Compete · Connect
 *   [Community stats]   — Members · SIH Squads · Techfest Rank · Events/Year
 *   [Actions]           — primary (Events) + secondary (Join) CTA
 *   [Featured card]     — Flagship program spotlight (The Asif Talks S01)
 */
import type { LucideIcon } from "lucide-react";
import {
  Users,
  ChevronRight,
  Calendar,
  Mic,
  Radio,
  Headphones,
  Crown,
  ClipboardList
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* -------------------------------------------------------------------------- */
/*  Typed content model                                                        */
/* -------------------------------------------------------------------------- */

const headline = {
  titlePrimary: "DCode",
  titleSecondary: "Developers Club",
  tagline: "Where Curiosity Becomes Code · And Code Becomes Impact",
  description:
    "DCode Developers Club is the largest student-run developer community at Shri Shivaji Institute of Engineering and Management Studies, Parbhani. We build real-world projects, run hands-on workshops, lead national-level hackathon teams — and are the official home of The Asif Talks leadership talk series."
};

const flagshipSpotlight = {
  status: "SEASON 01 · PREMIERING SOON",
  program: "The Asif Talks",
  tagline: "Leadership & Governance Talk Series",
  duration: "60+ min / episode",
  episodes: [
    {
      id: "ep-01",
      title: "Shri Sanjaysinh Chavan (IAS)",
      role: "Collector & DM · Parbhani",
      date: "Aug 31, 2026",
      theme: "Governance · Youth Mindset"
    }
  ],
  meta: "Live Audience · YouTube · Instagram"
};

/* -------------------------------------------------------------------------- */
/*  Section root                                                               */
/* -------------------------------------------------------------------------- */

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-transparent pt-4 sm:pt-12 md:pt-16 pb-8 sm:pb-12 scroll-mt-28"
    >
      <div className="section-container relative z-10">
        <div className="relative rounded-3xl md:rounded-[2rem] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] bg-gradient-to-br from-slate-950 via-slate-950 to-indigo-950/40 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-ndc-purple/20 blur-3xl opacity-80" />
            <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-pink-500/20 blur-3xl opacity-80" />
            <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-ndc-blue/10 blur-3xl opacity-80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] [background-size:24px_24px] opacity-30" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 md:gap-10 p-3.5 min-[400px]:p-5 sm:p-8 md:p-12 lg:p-14 items-start">
            {/* ============================================================ */}
            {/* LEFT COLUMN — headline, stats, CTAs                         */}
            {/* ============================================================ */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1 lg:col-span-7 space-y-6 sm:space-y-8 md:space-y-10 text-center md:text-left"
            >
              {/* 1. Headline zone */}
              <div className="space-y-4 sm:space-y-6 md:space-y-7">
                {/* H1 */}
                <div className="space-y-3 sm:space-y-4">
                  <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] sm:leading-[0.98] text-white">
                    <span className="block">{headline.titlePrimary}</span>
                    <span className="block gradient-text drop-shadow-[0_0_30px_rgba(236,72,153,0.25)]">
                      {headline.titleSecondary}
                    </span>
                  </h1>

                  {/* Tagline with divider */}
                  <div className="flex items-center justify-center md:justify-start gap-2.5 sm:gap-3">
                    <div className="h-px w-6 sm:w-10 bg-gradient-to-r from-ndc-purple to-transparent opacity-70" />
                    <p className="text-violet-300 text-[10px] min-[400px]:text-xs md:text-sm font-semibold uppercase tracking-[0.14em] sm:tracking-[0.18em]">
                      {headline.tagline}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-on-glass-muted text-xs sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                  {headline.description}
                </p>
              </div>

              {/* Actions zone */}
              <section aria-label="Primary actions">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 md:gap-4 justify-center md:justify-start pt-1 w-full sm:w-auto">
                  <Button
                    asChild
                    size="lg"
                    className="w-full sm:w-auto h-11 sm:h-12 px-5 sm:px-7 rounded-2xl bg-gradient-to-r from-ndc-purple to-ndc-blue text-white shadow-xl shadow-ndc-purple/25 hover:shadow-ndc-purple/40 hover:-translate-y-0.5 transition-all font-bold text-xs sm:text-sm active:scale-[0.98]"
                  >
                    <a
                      href="https://syedasif7.github.io/The-Asif-Talks-Registration-Form/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ClipboardList className="w-4 h-4 shrink-0 text-white" />
                      <span>Register</span>
                      <ChevronRight className="w-4 h-4 shrink-0" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-11 sm:h-12 px-5 sm:px-7 rounded-2xl bg-white/5 border-white/10 text-white hover:bg-white/10 font-bold text-xs sm:text-sm active:scale-[0.98]"
                  >
                    <Link to="/the-asif-talks" className="flex items-center justify-center gap-2">
                      <Calendar className="w-4 h-4 shrink-0 text-indigo-300" />
                      <span>The Asif Talks Series</span>
                    </Link>
                  </Button>
                </div>
              </section>
            </motion.div>

            {/* ============================================================ */}
            {/* RIGHT COLUMN — Flagship program spotlight card              */}
            {/* ============================================================ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="order-1 lg:order-2 lg:col-span-5 relative w-full"
            >
              <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none lg:sticky lg:top-24">
                <div className="absolute -inset-4 sm:-inset-6 rounded-[2rem] bg-gradient-to-br from-pink-500/20 via-ndc-purple/20 to-ndc-blue/20 blur-2xl opacity-70 pointer-events-none" />
                <article className="relative rounded-2xl sm:rounded-[2rem] border border-white/10 bg-slate-950/80 backdrop-blur-xl p-3.5 min-[400px]:p-5 sm:p-6 md:p-8 shadow-2xl overflow-hidden">
                  {/* Subtle pattern */}
                  <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(45deg,#ffffff_25%,transparent_25%,transparent_75%,#ffffff_75%),linear-gradient(45deg,#ffffff_25%,transparent_25%,transparent_75%,#ffffff_75%)] [background-size:24px_24px] [background-position:0_0,12px_12px] pointer-events-none" />

                  <div className="relative z-10 space-y-4 sm:space-y-6 md:space-y-7">
                    {/* A. Status bar */}
                    <header className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="relative flex h-2.5 w-2.5 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
                        </span>
                        <p className="text-[9px] min-[400px]:text-[10px] font-black uppercase tracking-[0.16em] text-gray-300 truncate">
                          {flagshipSpotlight.status}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="rounded-md bg-white/5 border-white/10 text-amber-300 text-[9px] min-[400px]:text-[10px] font-black uppercase tracking-[0.14em] shrink-0 gap-1 px-2 py-0.5"
                      >
                        <Crown className="w-3 h-3" />
                        Flagship
                      </Badge>
                    </header>

                    {/* B. Artwork / Title */}
                    <Link
                      to="/the-asif-talks"
                      className="group block aspect-square w-full max-w-[340px] sm:max-w-none mx-auto rounded-2xl bg-slate-950 border border-white/15 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl hover:border-indigo-400/50 hover:shadow-indigo-500/20 transition-all"
                    >
                      <img
                        src="/images/the-asif-talks-logo.jpg"
                        alt="The Asif Talks Official Platform"
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      <div className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-black/70 border border-white/20 backdrop-blur-md shadow-lg group-hover:bg-indigo-600/90 transition-colors">
                        <ChevronRight className="w-3.5 h-3.5 text-white" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                          Explore Series
                        </span>
                      </div>
                    </Link>

                    {/* C. Episode lineup */}
                    <section aria-label="Upcoming episodes" className="space-y-2">
                      <div className="flex items-center gap-1.5 text-[9.5px] min-[400px]:text-[10px] font-black uppercase tracking-[0.18em] text-gray-400">
                        <Radio className="w-3 h-3 text-pink-400" />
                        Episode 1 Premiere
                      </div>
                      <ul className="space-y-2">
                        {flagshipSpotlight.episodes.map((ep) => (
                          <li
                            key={ep.id}
                            className="group/item flex items-center justify-between gap-2 px-2.5 min-[400px]:px-3.5 py-2 min-[400px]:py-2.5 rounded-xl bg-white/[0.04] border border-white/5 hover:bg-white/[0.08] hover:border-white/15 transition-all"
                          >
                            <div className="flex items-center gap-2 min-w-0 flex-1">
                              <div className="relative shrink-0 w-8 h-8 min-[400px]:w-9 min-[400px]:h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-white/20 bg-slate-950 shadow-md flex items-center justify-center">
                                <span className="font-heading font-black text-xs sm:text-base text-indigo-300 select-none">
                                  ?
                                </span>
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-[11px] min-[400px]:text-xs font-bold text-white truncate">
                                  {ep.title}
                                </p>
                                <p className="text-[9px] min-[400px]:text-[10px] font-semibold text-gray-400 truncate">
                                  {ep.role} · {ep.theme}
                                </p>
                              </div>
                            </div>
                            <div className="text-right shrink-0 pl-1">
                              <p className="text-[8.5px] min-[400px]:text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider text-ndc-purple whitespace-nowrap">
                                {ep.date}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </section>

                    {/* D. Meta row & Social handles */}
                    <div className="pt-1.5 space-y-2.5 sm:space-y-3">
                      <div className="h-1.5 sm:h-2 w-full rounded-full bg-white/5 overflow-hidden">
                        <div
                          className="h-full w-2/3 rounded-full bg-gradient-to-r from-ndc-purple via-pink-500 to-amber-400 animate-[shimmer_2s_infinite]"
                          style={{ backgroundSize: "200% 100%" }}
                        />
                      </div>
                      <div className="flex items-center justify-center text-[9px] min-[400px]:text-[10px] font-black uppercase tracking-[0.14em] sm:tracking-[0.18em] text-gray-400 text-center">
                        <span>{flagshipSpotlight.meta}</span>
                      </div>

                      <div className="grid grid-cols-3 gap-1 min-[400px]:gap-2 pt-1 border-t border-white/5">
                        <a
                          href="https://www.youtube.com/@TheAsifTalks"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1 px-1.5 min-[400px]:px-2.5 py-1.5 min-[400px]:py-2 rounded-xl bg-white/5 hover:bg-red-500/20 hover:border-red-500/40 border border-white/10 text-[10px] min-[400px]:text-xs font-bold text-gray-200 transition-colors"
                        >
                          <span className="text-red-400">▶</span> <span className="truncate">YouTube</span>
                        </a>
                        <a
                          href="https://www.instagram.com/theasiftalks"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1 px-1.5 min-[400px]:px-2.5 py-1.5 min-[400px]:py-2 rounded-xl bg-white/5 hover:bg-pink-500/20 hover:border-pink-500/40 border border-white/10 text-[10px] min-[400px]:text-xs font-bold text-gray-200 transition-colors"
                        >
                          <span className="text-pink-400">📸</span> <span className="truncate">Insta</span>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/the-syed-asif"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1 px-1.5 min-[400px]:px-2.5 py-1.5 min-[400px]:py-2 rounded-xl bg-white/5 hover:bg-blue-500/20 hover:border-blue-500/40 border border-white/10 text-[10px] min-[400px]:text-xs font-bold text-gray-200 transition-colors"
                        >
                          <span className="text-blue-400 font-black">in</span> <span className="truncate">LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
