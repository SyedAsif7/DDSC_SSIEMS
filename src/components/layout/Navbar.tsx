/**
 * Navbar
 * Sticky site navigation with desktop and mobile menus and a Join CTA.
 * Uses route-aware links: hash anchors on home and Link navigation off home.
 */
import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import { getAssetPath } from '@/lib/utils';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { useTheme } from '@/hooks/use-theme';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#why-join', label: 'Why Join' },
  { href: '#upcoming-events', label: 'Events' },
  { href: '#achievements', label: 'Achievements' },
  { href: '/the-asif-talks', label: 'The Asif Talks', isPage: true },
  { href: '/gallery', label: 'Gallery', isPage: true },
  { href: '#timeline', label: 'Timeline' },
  { href: '#team', label: 'Team' },
  { href: '#partners', label: 'Partners' },
  { href: '#faq', label: 'FAQ' },
] as const;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();
  const isHomePage = location.pathname === '/';
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const resolveTo = (item: (typeof navLinks)[number]) => {
    if ('isPage' in item && item.isPage) return item.href;
    if (isHomePage) return item.href;
    return { pathname: '/', hash: item.href.replace('#', '') };
  };

  const linkBase =
    'relative px-2.5 xl:px-3 py-2 rounded-lg text-[13px] xl:text-sm font-semibold tracking-tight transition-colors duration-200 whitespace-nowrap';

  const linkTone = isDark
    ? 'text-gray-300 hover:text-white hover:bg-white/10'
    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/70';

  const renderNavLink = (item: (typeof navLinks)[number], mobile = false) => {
    const to = resolveTo(item);
    const isPage = 'isPage' in item && item.isPage;
    const className = mobile
      ? `flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-semibold tracking-tight transition-colors ${
          isDark ? 'text-gray-100 hover:bg-white/10' : 'text-gray-800 hover:bg-gray-100'
        }`
      : `${linkBase} ${linkTone}`;

    const content = <span>{item.label}</span>;
    const onClick = mobile ? () => setIsMenuOpen(false) : undefined;

    if (isPage || !isHomePage) {
      return (
        <Link key={item.href} to={to} className={className} onClick={onClick}>
          {content}
        </Link>
      );
    }

    return (
      <a key={item.href} href={item.href} className={className} onClick={onClick}>
        {content}
      </a>
    );
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-slate-950/95 border-b border-white/10 shadow-lg shadow-black/20'
            : 'bg-white/95 border-b border-gray-200 shadow-md'
          : isDark
            ? 'bg-slate-950/80'
            : 'bg-white/80'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between gap-4 h-16 md:h-[4.25rem]">
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3 shrink-0 group"
            aria-label="DCode Developers Club — Home"
          >
            <img
              src={getAssetPath('/images/club/Dcode-Logo.png')}
              alt=""
              className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />

            <div
              className={`hidden sm:block w-px h-8 ${
                isDark ? 'bg-white/20' : 'bg-gray-300'
              }`}
              aria-hidden="true"
            />

            <div className="flex flex-col justify-center gap-0.5 min-w-0">
              <span className="gradient-text text-base sm:text-lg md:text-xl font-black font-heading tracking-tight leading-none">
                DCode
              </span>
              <span
                className={`text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] uppercase leading-none ${
                  isDark ? 'text-gray-200' : 'text-gray-600'
                }`}
              >
                Developers Club
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <nav
            className={`hidden lg:flex items-center gap-0.5 xl:gap-1 px-1.5 py-1 rounded-xl border ${
              isDark
                ? 'bg-white/5 border-white/10'
                : 'bg-gray-100/90 border-gray-200'
            }`}
            aria-label="Primary"
          >
            {navLinks.map((item) => renderNavLink(item))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <ThemeToggle />

            <a
              href="https://forms.gle/CHamTqBMouu6ucYa7"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-gradient-to-r from-code-indigo via-code-purple to-code-pink text-white px-4 py-2 rounded-xl text-sm font-semibold tracking-tight transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-code-purple/40"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Join Us
            </a>

            <button
              type="button"
              className={`lg:hidden inline-flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-xl border transition-colors ${
                isDark
                  ? 'bg-white/10 border-white/15 text-white hover:bg-white/15'
                  : 'bg-gray-100 border-gray-200 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span
                className={`block h-0.5 w-4 rounded-full bg-current transition-transform duration-300 ${
                  isMenuOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-4 rounded-full bg-current transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-4 rounded-full bg-current transition-transform duration-300 ${
                  isMenuOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav
            className={`lg:hidden pb-4 border-t animate-fade-in ${
              isDark ? 'border-white/10' : 'border-gray-200'
            }`}
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((item) => renderNavLink(item, true))}
              <a
                href="https://forms.gle/CHamTqBMouu6ucYa7"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-code-indigo via-code-purple to-code-pink text-white shadow-lg"
              >
                <Sparkles className="w-4 h-4" />
                Join Us Now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
