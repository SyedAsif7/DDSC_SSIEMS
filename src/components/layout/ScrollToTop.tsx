import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to top on route change, or to a hash target when present.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = hash.replace('#', '');
    
    // Attempt scroll immediately, then retry once more in case lazy components are mounting
    const scrollTarget = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return true;
      }
      return false;
    };

    if (!scrollTarget()) {
      const timeoutId1 = window.setTimeout(scrollTarget, 100);
      const timeoutId2 = window.setTimeout(scrollTarget, 300);
      return () => {
        window.clearTimeout(timeoutId1);
        window.clearTimeout(timeoutId2);
      };
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
