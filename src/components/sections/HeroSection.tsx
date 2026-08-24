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
  Crown
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
      theme: "Governance · Youth Mindset",
      image: "/images/sanjaysinh-chavan.png"
    }
  ],
  meta: { left: "4K Studio · Live Audience", right: "YouTube · Instagram" }
};

/* -------------------------------------------------------------------------- */
/*  Section root                                                               */
/* -------------------------------------------------------------------------- */

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-transparent pt-12 sm:pt-16 md:pt-20 pb-12 scroll-mt-28"
    >
      <div className="section-container relative z-10">
        <div className="relative rounded-3xl md:rounded-[2rem] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] bg-gradient-to-br from-slate-950 via-slate-950 to-indigo-950/40 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-ndc-purple/20 blur-3xl opacity-80" />
            <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-pink-500/20 blur-3xl opacity-80" />
            <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-ndc-blue/10 blur-3xl opacity-80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] [background-size:24px_24px] opacity-30" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 md:gap-10 p-6 sm:p-10 md:p-12 lg:p-14 items-start">
            {/* ============================================================ */}
            {/* LEFT COLUMN — headline, stats, CTAs                         */}
            {/* ============================================================ */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-8 md:space-y-10 text-center md:text-left"
            >
              {/* 1. Headline zone */}
              <div className="space-y-6 md:space-y-7">
                {/* H1 */}
                <div className="space-y-4">
                  <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.98] text-white">
                    <span className="block">{headline.titlePrimary}</span>
                    <span className="block gradient-text drop-shadow-[0_0_30px_rgba(236,72,153,0.25)]">
                      {headline.titleSecondary}
                    </span>
                  </h1>

                  {/* Tagline with divider */}
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <div className="h-px w-10 bg-gradient-to-r from-ndc-purple to-transparent opacity-70" />
                    <p className="text-violet-300 text-xs md:text-sm font-semibold uppercase tracking-[0.18em]">
                      {headline.tagline}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-on-glass-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                  {headline.description}
                </p>
              </div>

              {/* Actions zone */}
              <section aria-label="Primary actions">
                <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 justify-center md:justify-start pt-1">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 px-7 rounded-2xl bg-gradient-to-r from-ndc-purple to-ndc-blue text-white shadow-xl shadow-ndc-purple/25 hover:shadow-ndc-purple/40 hover:-translate-y-0.5 transition-all font-bold"
                  >
                    <Link to="/the-asif-talks" className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      The Asif Talks Series
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 px-7 rounded-2xl bg-white/5 border-white/10 text-white hover:bg-white/10 font-bold"
                  >
                    <a href="#join" className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Join DDSC Community
                    </a>
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
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-sm lg:max-w-none lg:sticky lg:top-24">
                <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-pink-500/20 via-ndc-purple/20 to-ndc-blue/20 blur-2xl opacity-70" />
                <article className="relative rounded-[2rem] border border-white/10 bg-slate-950/70 backdrop-blur-xl p-6 sm:p-8 shadow-2xl overflow-hidden">
                  {/* Subtle pattern */}
                  <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(45deg,#ffffff_25%,transparent_25%,transparent_75%,#ffffff_75%),linear-gradient(45deg,#ffffff_25%,transparent_25%,transparent_75%,#ffffff_75%)] [background-size:24px_24px] [background-position:0_0,12px_12px] pointer-events-none" />

                  <div className="relative z-10 space-y-6 md:space-y-7">
                    {/* A. Status bar */}
                    <header className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="relative flex h-3 w-3 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400" />
                        </span>
                        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-300 truncate">
                          {flagshipSpotlight.status}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="rounded-md bg-white/5 border-white/10 text-amber-300 text-[10px] font-black uppercase tracking-[0.18em] shrink-0 gap-1.5"
                      >
                        <Crown className="w-3.5 h-3.5" />
                        Flagship
                      </Badge>
                    </header>

                    {/* B. Artwork / Title */}
                    <Link
                      to="/the-asif-talks"
                      className="group block aspect-[16/10] sm:aspect-[4/3] w-full rounded-2xl bg-slate-900 border border-white/15 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl hover:border-indigo-400/50 hover:shadow-indigo-500/20 transition-all"
                    >
                      <img
                        src="/images/the-asif-talks-logo.jpg"
                        alt="The Asif Talks Official Platform"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-black/60 border border-white/20 backdrop-blur-md shadow-lg group-hover:bg-indigo-600/80 transition-colors">
                        <ChevronRight className="w-3.5 h-3.5 text-white" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                          Explore Series
                        </span>
                      </div>
                    </Link>

                    {/* C. Episode lineup */}
                    <section aria-label="Upcoming episodes" className="space-y-2.5">
                      <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-gray-400">
                        <Radio className="w-3.5 h-3.5 text-pink-400" />
                        Episode 1 Premiere
                      </div>
                      <ul className="space-y-2">
                        {flagshipSpotlight.episodes.map((ep, idx) => (
                          <li
                            key={ep.id}
                            className="group/item flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/5 hover:bg-white/[0.08] hover:border-white/15 transition-all"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="relative shrink-0 w-10 h-10 rounded-xl overflow-hidden border border-white/20 bg-slate-900 shadow-md">
                                <img
                                  src={ep.image}
                                  alt={ep.title}
                                  className="w-full h-full object-cover object-top"
                                />
                              </div>
                              <div className="min-w-0">
                                <p className="text-xs font-bold text-white truncate">
                                  {ep.title}
                                </p>
                                <p className="text-[10px] font-semibold text-gray-400 truncate">
                                  {ep.role} · {ep.theme}
                                </p>
                              </div>
                            </div>
                            <div className="text-right shrink-0">
                              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-ndc-purple">
                                {ep.date}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </section>

                    {/* D. Meta row & Social handles */}
                    <div className="pt-2 space-y-3">
                      <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                        <div
                          className="h-full w-2/3 rounded-full bg-gradient-to-r from-ndc-purple via-pink-500 to-amber-400 animate-[shimmer_2s_infinite]"
                          style={{ backgroundSize: "200% 100%" }}
                        />
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.18em] text-gray-400">
                        <span>{flagshipSpotlight.meta.left}</span>
                        <span>{flagshipSpotlight.meta.right}</span>
                      </div>

                      <div className="flex items-center justify-between gap-2 pt-1 border-t border-white/5">
                        <a
                          href="https://www.youtube.com/@TheAsifTalks"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 hover:border-red-500/40 border border-white/10 text-xs font-bold text-gray-200 transition-colors"
                        >
                          <span className="text-red-400">▶</span> YouTube
                        </a>
                        <a
                          href="https://www.instagram.com/theasiftalks"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-pink-500/20 hover:border-pink-500/40 border border-white/10 text-xs font-bold text-gray-200 transition-colors"
                        >
                          <span className="text-pink-400">📸</span> Instagram
                        </a>
                        <a
                          href="https://www.linkedin.com/in/the-syed-asif"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-blue-500/20 hover:border-blue-500/40 border border-white/10 text-xs font-bold text-gray-200 transition-colors"
                        >
                          <span className="text-blue-400">in</span> LinkedIn
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
