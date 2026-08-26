/**
 * UpcomingEventsSection
 * Displays upcoming Hackathons, Workshops, Competitions, and Podcast events.
 *
 * Structure per card:
 *  [ Visual column ] —  image + icon overlay + category chip + date stamp
 *  [ Content column ] — header row / title / description / highlights / meta chips / sponsor / cta
 */
import {
  Code2,
  Rocket,
  Globe,
  CheckCircle2,
  ChevronRight,
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Mic,
  Building2
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import { upcomingEvents as events } from "@/data/upcomingEvents";
import type {
  UpcomingEventItem,
  UpcomingEventIcon,
  UpcomingEventCtaVariant
} from "@/data/upcomingEvents";
import SectionHeader from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getAssetPath } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*  Per-icon category palette                                                  */
/* -------------------------------------------------------------------------- */

interface CategoryPalette {
  Icon: LucideIcon;
  label: string;
  chipBg: string;
  chipBorder: string;
  chipText: string;
  accentGlow: string;
  accentText: string;
  titleGradient: string;
  dividerBg: string;
}

const getPalette = (icon: UpcomingEventIcon): CategoryPalette => {
  switch (icon) {
    case "podcast":
      return {
        Icon: Mic,
        label: "podcast",
        chipBg: "bg-pink-500/10",
        chipBorder: "border-pink-500/30",
        chipText: "text-pink-300",
        accentGlow: "from-pink-500/15 via-ndc-purple/10 to-transparent",
        accentText: "text-pink-300",
        titleGradient: "gradient-text",
        dividerBg: "bg-gradient-to-r from-pink-500/60 via-ndc-purple/50 to-transparent"
      };
    case "competitions":
      return {
        Icon: Globe,
        label: "competitions",
        chipBg: "bg-ndc-green/10",
        chipBorder: "border-ndc-green/30",
        chipText: "text-ndc-green",
        accentGlow: "from-ndc-green/15 via-ndc-blue/10 to-transparent",
        accentText: "text-ndc-green",
        titleGradient: "gradient-text",
        dividerBg: "bg-gradient-to-r from-ndc-green/60 via-ndc-blue/50 to-transparent"
      };
    case "hackathons":
      return {
        Icon: Rocket,
        label: "hackathons",
        chipBg: "bg-ndc-purple/10",
        chipBorder: "border-ndc-purple/30",
        chipText: "text-ndc-purple",
        accentGlow: "from-ndc-purple/15 via-pink-500/10 to-transparent",
        accentText: "text-ndc-purple",
        titleGradient: "gradient-text",
        dividerBg: "bg-gradient-to-r from-ndc-purple/60 via-pink-500/50 to-transparent"
      };
    case "workshops":
      return {
        Icon: Code2,
        label: "workshops",
        chipBg: "bg-ndc-blue/10",
        chipBorder: "border-ndc-blue/30",
        chipText: "text-ndc-blue",
        accentGlow: "from-ndc-blue/15 via-ndc-purple/10 to-transparent",
        accentText: "text-ndc-blue",
        titleGradient: "gradient-text",
        dividerBg: "bg-gradient-to-r from-ndc-blue/60 via-ndc-purple/50 to-transparent"
      };
  }
};

/* -------------------------------------------------------------------------- */
/*  CTA renderer — fully typed variants, zero brittle string checks           */
/* -------------------------------------------------------------------------- */

interface CtaProps {
  cta: UpcomingEventItem["cta"];
  accentText: string;
  accentGlow: string;
}

const EventCta = ({ cta, accentText, accentGlow }: CtaProps) => {
  const base =
    "w-full sm:w-auto h-12 sm:h-11 px-6 rounded-2xl font-black uppercase tracking-[0.18em] text-[11px] transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center justify-center active:scale-[0.98]";

  if (cta.disabled) {
    return (
      <Button
        disabled
        className={`${base} bg-white/5 border border-white/10 text-white/70 cursor-not-allowed shadow-none`}
      >
        {cta.label}
      </Button>
    );
  }

  const content = (
    <span className="inline-flex items-center justify-center gap-2">
      {cta.label}
      <ChevronRight size={14} />
    </span>
  );

  switch (cta.variant) {
    case "primary-gradient":
      return (
        <Button
          asChild
          className={`${base} bg-gradient-to-r from-pink-500 to-ndc-purple text-white shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40`}
        >
          <Link to={cta.href ?? "#"}>{content}</Link>
        </Button>
      );
    case "primary-solid":
      return (
        <Button
          asChild
          className={`${base} bg-white text-black hover:bg-gray-100 shadow-xl`}
        >
          <Link to={cta.href ?? "#"}>{content}</Link>
        </Button>
      );
    case "outline":
      return (
        <Button
          asChild
          variant="outline"
          className={`${base} bg-white/5 border-white/10 text-white hover:bg-white/10`}
        >
          <Link to={cta.href ?? "#"}>{content}</Link>
        </Button>
      );
    case "ghost-disabled":
    default:
      return (
        <Button
          disabled
          className={`${base} bg-white/5 border border-white/10 text-white/70 cursor-not-allowed`}
        >
          {cta.label}
        </Button>
      );
  }
};

/* -------------------------------------------------------------------------- */
/*  Event card — the atomic row                                                */
/* -------------------------------------------------------------------------- */

const EventCard = ({ event, index }: { event: UpcomingEventItem; index: number }) => {
  const palette = getPalette(event.icon);
  const { Icon, accentText } = palette;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-3xl md:rounded-[2.5rem] bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-700 shadow-2xl"
    >
      {/* Decorative glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-br ${palette.accentGlow} blur-[100px] opacity-80 group-hover:opacity-100 transition-opacity duration-700`}
        />
        <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.6)_1px,transparent_0)] [background-size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
      </div>

      <div className="relative z-10 grid lg:grid-cols-12 gap-5 sm:gap-6 md:gap-10 p-4 sm:p-6 md:p-8 lg:p-10">
        {/* ================== Visual column ================== */}
        <div className="lg:col-span-5">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] lg:aspect-[5/4] group/img">
            <img
              src={getAssetPath(event.image)}
              alt={event.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover grayscale-[0.15] group-hover/img:grayscale-0 group-hover/img:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

            {/* Category chip (top left) */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <Badge
                variant="outline"
                className={`rounded-full ${palette.chipBg} ${palette.chipBorder} ${palette.chipText} px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] backdrop-blur-md`}
              >
                <Icon size={11} />
                <span className="ml-1">{palette.label}</span>
              </Badge>
            </div>

            {/* Date stamp (top right) */}
            <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/70 border border-white/15 backdrop-blur-md shadow-xl">
              <Calendar size={11} className={accentText} />
              <span className="text-[10px] font-black uppercase tracking-[0.16em] text-white">
                {event.date}
              </span>
            </div>

            {/* Icon watermark + date (bottom) */}
            <div className="absolute left-0 right-0 bottom-0 p-5 md:p-6">
              <div className="flex items-end justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500 ${accentText}`}
                  >
                    <Icon size={26} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-300/80">
                      Category
                    </p>
                    <p className="text-sm md:text-base font-bold text-white leading-tight">
                      {event.categoryLabel}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================== Content column ================== */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-6">
          <div className="space-y-4 md:space-y-5">
            {/* 1. Header row */}
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              {event.badge && (
                <Badge
                  variant="outline"
                  className="gap-2 rounded-full bg-white/5 border border-white/10 text-gray-100 px-3.5 py-1 text-[10px] font-black uppercase tracking-[0.2em]"
                >
                  <Sparkles size={11} className="text-ndc-purple animate-pulse" />
                  {event.badge}
                </Badge>
              )}
            </div>

            {/* 2. Title + divider */}
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-[1.05] text-white uppercase italic">
                <span className={palette.titleGradient}>{event.title}</span>
              </h3>
              <div className={`h-px w-24 md:w-32 ${palette.dividerBg} rounded-full`} />
            </div>

            {/* 3. Description */}
            <p className="text-sm md:text-base leading-relaxed text-gray-300/90 max-w-2xl">
              {event.description}
            </p>

            {/* 4. Highlights */}
            {event.points?.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Building2 size={13} className={`${accentText}`} />
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-400">
                    What&apos;s Inside
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-3">
                  {event.points.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 px-3.5 py-2.5 rounded-2xl bg-white/[0.025] border border-white/5 group/point hover:bg-white/[0.05] hover:border-white/10 transition-colors"
                    >
                      <div className="w-5 h-5 rounded-full bg-ndc-green/10 border border-ndc-green/20 flex items-center justify-center shrink-0 mt-0.5 group-hover/point:scale-110 transition-transform">
                        <CheckCircle2 size={11} className="text-ndc-green" />
                      </div>
                      <span className="text-[11px] md:text-xs font-bold leading-snug text-gray-200 group-hover/point:text-white transition-colors">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 5. Meta chips + Sponsor + CTA (footer bar) */}
          <div className="flex flex-col gap-5 pt-2 border-t border-white/5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2.5">
                {event.venue && (
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/[0.03] border border-white/5 text-gray-200 group/meta">
                    <MapPin size={12} className="text-ndc-blue group-hover/meta:scale-110 transition-transform" />
                    <span className="text-[10.5px] font-black uppercase tracking-[0.18em] truncate max-w-[240px]">
                      {event.venue}
                    </span>
                  </div>
                )}
                {event.time && (
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/[0.03] border border-white/5 text-gray-200 group/meta">
                    <Clock size={12} className="text-ndc-green group-hover/meta:scale-110 transition-transform" />
                    <span className="text-[10.5px] font-black uppercase tracking-[0.18em]">
                      {event.time}
                    </span>
                  </div>
                )}
              </div>

              {event.sponsor && (
                <div className="inline-flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-white/[0.03] border border-white/5 w-fit">
                  <div className="w-8 h-8 rounded-xl overflow-hidden bg-white border border-white/10 flex items-center justify-center p-1 shrink-0">
                    <img
                      src={getAssetPath(event.sponsor.logo)}
                      alt={event.sponsor.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">
                      {event.sponsor.tier}
                    </p>
                    <p className="text-[11px] font-bold text-white leading-tight">
                      {event.sponsor.name}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                Event · {event.categoryLabel}
              </p>
              <EventCta
                cta={event.cta}
                accentText={palette.accentText}
                accentGlow={palette.accentGlow}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

/* -------------------------------------------------------------------------- */
/*  Section root                                                               */
/* -------------------------------------------------------------------------- */

const UpcomingEventsSection = () => {
  return (
    <section
      id="upcoming-events"
      className="section-spacing relative overflow-hidden scroll-mt-28 md:scroll-mt-32 bg-transparent"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-ndc-purple/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-ndc-blue/5 blur-[120px] rounded-full" />
      </div>

      <div className="section-container relative z-10">
        <SectionHeader
          badgeText="Featured Opportunities"
          badgeIcon={Rocket}
          titlePrefix="Upcoming Events &amp;"
          titleHighlight="Competitions"
          centered
        />

        <div className="max-w-6xl mx-auto mt-10 md:mt-14 space-y-6 md:space-y-10">
          {events.map((event, index) => (
            <EventCard key={event.title} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;
