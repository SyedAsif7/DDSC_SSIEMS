import { useState, useRef, useEffect } from "react";
import { getAssetPath } from "@/lib/utils";

interface ImageWithPlaceholderProps {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName?: string;
  priority?: boolean;
}

export default function ImageWithPlaceholder({
  src,
  alt,
  className = "",
  placeholderClassName = "",
  priority = false,
}: ImageWithPlaceholderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className={`relative overflow-hidden ${placeholderClassName}`}>
      {/* Placeholder */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 animate-pulse" />
      )}

      {/* Actual Image */}
      <img
        ref={imgRef}
        src={getAssetPath(src)}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${className}`}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
      />
    </div>
  );
}
