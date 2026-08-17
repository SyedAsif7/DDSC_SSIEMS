/**
 * HeroSection
 * Landing hero for The Asif Talks platform.
 *
 * Structure:
 *  [Brand rails]   — announcement tags + formats tag
 *  [Headline zone] — show badge / h1 / divider / tagline / mission description
 *  [Pillars zone]  — 3 focus pillars (Governance · Tech · Campus)
 *  [Stats zone]    — Launch / Episodes / Seminars / Partners
 *  [Actions zone]  — primary + secondary CTA
 *  [Preview card]  — podcast artwork + status row + focus tracks + meta row
 */
import type { LucideIcon } from "lucide-react";
import {
  Mic,
  Calendar,
  Headphones,
  Sparkles,
  ChevronRight,
  Users,
  Building2,
  Briefcase,
  GraduationCap,
  Globe2,
  Handshake,
  MapPin,
  Radio
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* -------------------------------------------------------------------------- */
/*  Typed content model — single source of truth for every rendered block     */
/* -------------------------------------------------------------------------- */

type HeroPaletteColor = "indigo" | "pink" | "emerald" | "purple" | "green" | "blue";

interface PillarItem {
  id: string;
  label: string;
  summary: string;
  icon: LucideIcon;
  color: HeroPaletteColor;
}

interface StatItem {
  id: string;
  label: string;
  value: string;
  icon: LucideIcon;
  color: HeroPaletteColor;
}

interface FocusTrack {
  id: string;
  label: string;
  track: string;
  icon: LucideIcon;
  color: HeroPaletteColor;
}

const colorMap: Record<HeroPaletteColor, { iconText: string; chipBg?: string }> = {
  indigo: { iconText: "text-indigo-300" },
  pink: { iconText: "text-pink-400" },
  emerald: { iconText: "text-emerald-400" },
  purple: { iconText: "text-ndc-purple" },
  green: { iconText: "text-ndc-green" },
  blue: { iconText: "text-ndc-blue" }
};

const announcementChips = [
  {
    id: "platform",
    label: "A Youth · Leadership · Educational Media Platform",
    variant: "brand" as const,
    icon: Sparkles
  },
  {
    id: "origin",
    label: "Founded by Syed Asif · For Tier-2 & Tier-3 India",
    variant: "neutral" as const,
    icon: Globe2
  }
];

const showBadge = {
  formats: "Podcasts · Live Seminars · Keynotes",
  brandName: "The Asif Talks"
};

const headline = {
  eyebrow: "The Asif Talks",
  title: "Podcast",
  tagline: "Bridging Students & Leaders · Region to Nation",
  description:
    "The Asif Talks connects ambitious students from smaller cities with leaders in technology, public administration, entrepreneurship, and research. Practical career guidance, actionable roadmaps, and direct access to decision-makers — powered by DDSC, SSIEMS Parbhani, and Vertex Institute of Technology."
};

const pillars: PillarItem[] = [
  {
    id: "governance",
    label: "Governance & Leadership",
    summary: "Administration · Civil Services · Tech Policy",
    icon: Building2,
    color: "indigo"
  },
  {
    id: "tech",
    label: "Tech & Entrepreneurship",
    summary: "AI · Cloud · Startups · Research",
    icon: Briefcase,
    color: "pink"
  },
  {
    id: "campus",
    label: "Campus to Career",
    summary: "Mentorship · Roadmaps · Q&A",
    icon: GraduationCap,
    color: "emerald"
  }
];

const stats: StatItem[] = [
  { id: "launch", label: "Launch", value: "Soon", icon: Calendar, color: "purple" },
  { id: "episodes", label: "Episodes", value: "Weekly", icon: Headphones, color: "pink" },
  { id: "seminars", label: "Live & Offline", value: "Seminars", icon: MapPin, color: "green" },
  { id: "partners", label: "Partners", value: "DDSC · SSIEMS", icon: Handshake, color: "blue" }
];

const statusBar = {
  status: "Season 01 · Filming",
  founder: "Syed Asif",
  duration: "30–60 min"
};

const focusTracks: FocusTrack[] = [
  {
    id: "track-01",
    label: "Governance & Leadership",
    track: "Track 01",
    icon: Building2,
    color: "indigo"
  },
  {
    id: "track-02",
    label: "Tech · Startups · Research",
    track: "Track 02",
    icon: Briefcase,
    color: "pink"
  },
  {
    id: "track-03",
    label: "Campus to Career",
    track: "Track 03",
    icon: GraduationCap,
    color: "emerald"
  }
];

const metaRow = {
  left: "Premiere · Launch Soon",
  right: "YouTube · Instagram"
};

/* -------------------------------------------------------------------------- */
/*  Shared UI atoms                                                            */
/* -------------------------------------------------------------------------- */

const Pill = ({
  variant,
  children,
  icon: Icon
}: {
  variant: "brand" | "neutral";
  children: React.ReactNode;
  icon: LucideIcon;
}) => {
  const classes =
    variant === "brand"
      ? "bg-pink-500/10 border-pink-500/30 text-pink-300"
      : "bg-white/5 border-white/10 text-violet-200";
  const iconClass =
    variant === "brand" ? "text-pink-300 animate-pulse" : "text-ndc-purple";
  return (
    <Badge
      variant="outline"
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] backdrop-blur-md ${classes}`}
    >
      <Icon className="w-3.5 h-3.5 shrink-0" />
      <span>{children}</span>
    </Badge>
  );
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
        {/* Outer shell with decorative backdrop */}
        <div className="relative rounded-3xl md:rounded-[2rem] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] bg-gradient-to-br from-slate-950 via-slate-950 to-indigo-950/40 overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-ndc-purple/20 blur-3xl opacity-80" />
            <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-pink-500/20 blur-3xl opacity-80" />
            <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-ndc-blue/10 blur-3xl opacity-80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] [background-size:24px_24px] opacity-30" />
          </div>

          {/* Two-column grid */}
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 md:gap-10 p-6 sm:p-10 md:p-12 lg:p-14 items-start">
            {/* ========================================================== */}
            {/* LEFT COLUMN — Brand rails, headline, pillars, stats, CTAs */}
            {/* ========================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-8 md:space-y-10 text-center md:text-left"
            >
              {/* 1. Brand rails — two announcement chips */}
              <div className="flex flex-col items-center md:items-start gap-3">
                {announcementChips.map((chip) => (
                  <Pill key={chip.id} variant={chip.variant} icon={chip.icon}>
                    {chip.label}
                  </Pill>
                ))}
              </div>

              {/* 2. Headline zone */}
              <div className="space-y-6 md:space-y-7">
                {/* Show badge */}
                <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 mx-auto md:mx-0">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-ndc-purple flex items-center justify-center shadow-lg shadow-pink-500/30">
                    <Mic className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-pink-300/90">
                      {showBadge.formats}
                    </p>
                    <p className="text-sm font-bold text-white leading-tight">
                      {showBadge.brandName}
                    </p>
                  </div>
                </div>

                {/* H1 */}
                <div className="space-y-4">
                  <p className="text-[11px] md:text-xs font-black uppercase tracking-[0.35em] text-violet-300/90">
                    {headline.eyebrow}
                  </p>
                  <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.98] text-white">
                    <span className="block">{headline.eyebrow}</span>
                    <span className="block gradient-text drop-shadow-[0_0_30px_rgba(236,72,153,0.25)]">
                      {headline.title}
                    </span>
                  </h1>

                  {/* Tagline with divider */}
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <div className="h-px w-10 bg-gradient-to-r from-pink-500 to-transparent opacity-70" />
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

              {/* 3. Pillars zone */}
              <section aria-label="Platform pillars">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                  <Radio className="w-3.5 h-3.5 text-pink-400" />
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400">
                    The Three Pillars
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto md:mx-0">
                  {pillars.map((pillar) => {
                    const palette = colorMap[pillar.color];
                    const Icon = pillar.icon;
                    return (
                      <div
                        key={pillar.id}
                        className="group flex items-start gap-2.5 px-3.5 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-left hover:bg-white/[0.06] hover:border-white/15 transition-colors"
                      >
                        <div
                          className={`mt-0.5 shrink-0 w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${palette.iconText}`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-gray-400">
                            {pillar.label}
                          </p>
                          <p className="text-[11px] md:text-xs font-semibold text-white/90 leading-snug mt-0.5">
                            {pillar.summary}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* 4. Stats zone */}
              <section aria-label="Key facts">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-ndc-purple" />
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400">
                    Quick Look
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto md:mx-0">
                  {stats.map((stat) => {
                    const palette = colorMap[stat.color];
                    const Icon = stat.icon;
                    return (
                      <div
                        key={stat.id}
                        className="group flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.06] hover:border-white/15 transition-colors"
                      >
                        <div className={`shrink-0 ${palette.iconText}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[9px] font-black uppercase tracking-[0.16em] text-gray-500 truncate">
                            {stat.label}
                          </p>
                          <p className="text-sm font-bold text-white leading-tight mt-0.5">
                            {stat.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* 5. Actions zone */}
              <section aria-label="Primary actions">
                <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 justify-center md:justify-start pt-1">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 px-7 rounded-2xl bg-gradient-to-r from-pink-500 to-ndc-purple text-white shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 hover:-translate-y-0.5 transition-all"
                  >
                    <Link to="/the-asif-talks" className="flex items-center gap-2">
                      <Radio className="w-4 h-4" />
                      Explore The Asif Talks
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 px-7 rounded-2xl bg-white/5 border-white/10 text-white hover:bg-white/10"
                  >
                    <a href="#join" className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Join DDSC Community
                    </a>
                  </Button>
                </div>
              </section>
            </motion.div>

            {/* ========================================================== */}
            {/* RIGHT COLUMN — Preview card                               */}
            {/* ========================================================== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-sm lg:max-w-none lg:sticky lg:top-24">
                <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-pink-500/20 via-ndc-purple/20 to-ndc-blue/20 blur-2xl opacity-70" />
                <article className="relative rounded-[2rem] border border-white/10 bg-slate-950/70 backdrop-blur-xl p-6 sm:p-8 shadow-2xl overflow-hidden">
                  {/* Card subtle pattern */}
                  <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(45deg,#ffffff_25%,transparent_25%,transparent_75%,#ffffff_75%),linear-gradient(45deg,#ffffff_25%,transparent_25%,transparent_75%,#ffffff_75%)] [background-size:24px_24px] [background-position:0_0,12px_12px] pointer-events-none" />

                  <div className="relative z-10 space-y-6 md:space-y-7">
                    {/* A. Status bar */}
                    <header className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="relative flex h-3 w-3 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ndc-green opacity-75" />
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-ndc-green" />
                        </span>
                        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-300 truncate">
                          {statusBar.status}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="rounded-md bg-pink-500/15 border-pink-500/30 text-pink-300 text-[10px] font-black uppercase tracking-[0.18em] shrink-0"
                      >
                        {statusBar.founder}
                      </Badge>
                    </header>

                    {/* B. Artwork */}
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-pink-500 via-ndc-purple to-indigo-700 flex items-center justify-center relative overflow-hidden shadow-inner">
                      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.5),transparent_50%)]" />
                      <div className="relative flex flex-col items-center gap-5">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-slate-950/40 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl">
                          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-white/15 to-white/5 border border-white/20 flex items-center justify-center">
                            <Mic
                              className="w-12 h-12 sm:w-16 sm:h-16 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                              strokeWidth={1.75}
                            />
                          </div>
                        </div>
                        <p className="text-white/90 text-[11px] font-black uppercase tracking-[0.28em]">
                          {showBadge.brandName}
                        </p>
                      </div>
                    </div>

                    {/* C. Focus tracks */}
                    <section aria-label="Focus tracks" className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-400">
                          Focus Areas
                        </p>
                        <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-pink-300">
                          <Headphones className="w-3.5 h-3.5" />
                          {statusBar.duration}
                        </div>
                      </div>
                      <ul className="space-y-1.5">
                        {focusTracks.map((track) => {
                          const palette = colorMap[track.color];
                          const Icon = track.icon;
                          return (
                            <li
                              key={track.id}
                              className="flex items-center justify-between gap-3 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/5"
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                <Icon
                                  className={`w-3.5 h-3.5 shrink-0 ${palette.iconText}`}
                                />
                                <span className="text-[11px] font-semibold text-white truncate">
                                  {track.label}
                                </span>
                              </div>
                              <span className="text-[9px] font-black uppercase tracking-[0.18em] text-gray-500 shrink-0">
                                {track.track}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </section>

                    {/* D. Progress */}
                    <div className="space-y-2.5">
                      <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                        <div
                          className="h-full w-0 rounded-full bg-gradient-to-r from-pink-500 via-ndc-purple to-ndc-blue animate-[shimmer_2s_infinite]"
                          style={{ backgroundSize: "200% 100%" }}
                        />
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.18em] text-gray-500">
                        <span>{metaRow.left}</span>
                        <span>{metaRow.right}</span>
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
