import { getAssetPath } from "@/lib/utils";

/**
 * Static full-page atmosphere (no video).
 * A looping 30MB video under glass blur was the main source of lag.
 */
const GlobalBackgroundVideo = () => {
  return (
    <div className="video-bg-container" aria-hidden="true">
      <img
        src={getAssetPath("/images/college/ssiems-campus.webp")}
        alt=""
        className="video-bg-content"
        decoding="async"
        fetchPriority="low"
      />
      <div className="video-overlay"></div>
    </div>
  );
};

export default GlobalBackgroundVideo;
