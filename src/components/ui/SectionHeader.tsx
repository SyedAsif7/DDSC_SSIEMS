import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  badgeText: string;
  badgeIcon: LucideIcon;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  className?: string;
  centered?: boolean;
}

/**
 * SectionHeader
 * Shared section intro for consistent hierarchy across the homepage.
 */
const SectionHeader = ({
  badgeText,
  badgeIcon: BadgeIcon,
  titlePrefix,
  titleHighlight,
  description,
  className = "",
  centered = true,
}: SectionHeaderProps) => {
  return (
    <div
      className={`max-w-3xl ${centered ? "mx-auto text-center" : "text-left"} mb-12 md:mb-14 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ndc-purple/10 border border-ndc-purple/20 text-ndc-purple mb-5 backdrop-blur-md ${
          !centered ? "justify-start" : ""
        }`}
      >
        <BadgeIcon className="w-3.5 h-3.5" />
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em]">
          {badgeText}
        </span>
      </motion.div>

      <h2 className="font-heading text-3xl sm:text-4xl md:text-[2.75rem] font-black mb-4 text-white leading-tight tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
        {titlePrefix}{" "}
        <span className="gradient-text">{titleHighlight}</span>
      </h2>

      <div
        className={`flex items-center ${centered ? "justify-center" : "justify-start"} gap-3 mb-5`}
      >
        <div className="h-px w-10 bg-gradient-to-r from-transparent to-ndc-purple" />
        <div className="w-1.5 h-1.5 rounded-full bg-ndc-purple shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
        <div className="h-px w-10 bg-gradient-to-l from-transparent to-ndc-blue" />
      </div>

      <p
        className={`text-[15px] md:text-base text-on-glass-muted ${
          centered ? "mx-auto" : ""
        } max-w-2xl leading-relaxed`}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
