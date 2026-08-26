import { motion } from "framer-motion";

interface AudioWaveformProps {
  className?: string;
  barColor?: string;
  size?: "xs" | "sm" | "md" | "lg";
  isPlaying?: boolean;
}

export const AudioWaveform = ({
  className = "",
  barColor = "bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500",
  size = "md",
  isPlaying = true
}: AudioWaveformProps) => {
  const heights = {
    xs: { h: "h-3", w: "w-[2px]", gap: "gap-[1.5px]" },
    sm: { h: "h-4", w: "w-[2.5px]", gap: "gap-[2px]" },
    md: { h: "h-5", w: "w-[3px]", gap: "gap-[2.5px]" },
    lg: { h: "h-7", w: "w-[4px]", gap: "gap-[3px]" }
  };

  const { h, w, gap } = heights[size];

  const bars = [
    { duration: 0.7, delay: 0.05, maxH: 85, minH: 25 },
    { duration: 1.1, delay: 0.2, maxH: 100, minH: 30 },
    { duration: 0.6, delay: 0.1, maxH: 70, minH: 20 },
    { duration: 1.3, delay: 0.25, maxH: 95, minH: 35 },
    { duration: 0.85, delay: 0.15, maxH: 75, minH: 20 }
  ];

  return (
    <div
      className={`inline-flex items-end ${h} ${gap} ${className}`}
      aria-hidden="true"
      title="Studio Live Audio"
    >
      {bars.map((bar, i) => (
        <motion.span
          key={i}
          className={`${w} rounded-full ${barColor} shadow-sm`}
          initial={{ height: `${bar.minH}%` }}
          animate={
            isPlaying
              ? {
                  height: [
                    `${bar.minH}%`,
                    `${bar.maxH}%`,
                    `${(bar.minH + bar.maxH) / 2}%`,
                    `${bar.maxH * 0.9}%`,
                    `${bar.minH}%`
                  ]
                }
              : { height: `${bar.minH}%` }
          }
          transition={{
            duration: bar.duration,
            repeat: isPlaying ? Infinity : 0,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: bar.delay
          }}
          style={{ minHeight: "3px" }}
        />
      ))}
    </div>
  );
};

export default AudioWaveform;
