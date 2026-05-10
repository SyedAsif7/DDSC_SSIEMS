import React from "react";
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
 * A shared component to maintain consistent branding and layout across all sections.
 */
const SectionHeader = ({
  badgeText,
  badgeIcon: BadgeIcon,
  titlePrefix,
  titleHighlight,
  description,
  className = "",
  centered = true
}: SectionHeaderProps) => {
  return (
    <div className={`max-w-4xl mx-auto ${centered ? 'text-center' : 'text-left'} mb-16 animate-fade-in ${className}`}>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ndc-purple/10 border border-ndc-purple/20 text-ndc-purple mb-6 backdrop-blur-md ${!centered && 'justify-start'}`}
      >
        <BadgeIcon className="w-3.5 h-3.5" />
        <span className="text-[10px] font-black uppercase tracking-[0.2em]">{badgeText}</span>
      </motion.div>
      
      <h2 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight tracking-tighter uppercase">
        {titlePrefix} <span className="gradient-text">{titleHighlight}</span>
      </h2>
      
      <div className={`flex items-center ${centered ? 'justify-center' : 'justify-start'} gap-3 mb-8`}>
        <div className="h-[1.5px] w-12 bg-gradient-to-r from-transparent to-ndc-purple"></div>
        <div className="w-2 h-2 rounded-full bg-ndc-purple shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
        <div className="h-[1.5px] w-12 bg-gradient-to-l from-transparent to-ndc-blue"></div>
      </div>

      <p className={`text-base md:text-lg text-gray-400 ${centered ? 'mx-auto' : ''} max-w-2xl leading-relaxed font-medium`}>
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
