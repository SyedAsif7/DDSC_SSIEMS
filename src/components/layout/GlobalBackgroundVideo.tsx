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
        src={getAssetPath("images/background_video.mp4")}
        autoPlay
        muted 
        loop 
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        poster={getAssetPath("images/ssiems-campus.webp")}
      />
      <div className="video-overlay"></div>
    </div>
  );
};

export default GlobalBackgroundVideo;
