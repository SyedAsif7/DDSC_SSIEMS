import { useEffect, useRef } from 'react';
import { getAssetPath } from "@/lib/utils";

const GlobalBackgroundVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Let the autoPlay attribute handle the initial play
    // This effect is mainly for safety or manual controls if needed
  }, []);

  return (
    <div className="video-bg-container" aria-hidden="true">
      <video 
        ref={videoRef}
        className="video-bg-content" 
        autoPlay
        muted 
        loop 
        playsInline
        preload="auto"
        poster={getAssetPath("/images/college/ssiems-campus.webp")}
      >
        <source src={getAssetPath("/background_video.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>
    </div>
  );
};

export default GlobalBackgroundVideo;
