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

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#why-join', label: 'Why Join' },
    { href: '#events', label: 'Achievements' },
    { href: '#upcoming-events', label: 'Upcoming Events' },
    { href: '/gallery', label: 'Gallery', isPage: true },
    { href: '#timeline', label: 'Timeline' },
    { href: '#faq', label: 'FAQ' },
    { href: '#team', label: 'Team' },
    { href: '#partners', label: 'Sponsors' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Dynamic background classes based on theme
  const bgClasses = theme === 'dark'
    ? 'bg-slate-900/70 border-white/15 shadow-code-purple/10'
    : 'bg-white/70 border-gray-200 shadow-purple-500/10';

  const transparentBg = theme === 'dark' ? 'bg-transparent' : 'bg-transparent';

  const navBg = theme === 'dark' ? 'bg-slate-900/50 border-white/15' : 'bg-gray-100/80 border-gray-200';

  const linkHoverClass = theme === 'dark' ? 'hover:bg-white/5 text-gray-400 hover:text-white' : 'hover:bg-gray-200/60 text-gray-600 hover:text-gray-900';

  const mobileLinkClass = theme === 'dark' ? 'hover:bg-white/10 text-gray-200' : 'hover:bg-gray-200/60 text-gray-800';

  // Reusable NavLink component to avoid duplication
  const NavLink = ({ item }: { item: (typeof navLinks)[number] }) => {
    const isExternalPage = item.isPage;
    const baseClass = `relative group px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 rounded-xl flex items-center gap-1.5 ${linkHoverClass}`;

    if (isExternalPage) {
      return (
        <Link key={item.href} to={item.href} className={baseClass}>
          <span className="relative z-10">{item.label}</span>
          {item.isNew && <span className="flex h-2 w-2 rounded-full bg-ndc-purple animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>}
        </Link>
      );
    }

    if (isHomePage) {
      return (
        <a key={item.href} href={item.href} className={baseClass}>
          <span className="relative z-10">{item.label}</span>
          {item.isNew && <span className="flex h-2 w-2 rounded-full bg-ndc-purple animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>}
        </a>
      );
    }

    return (
      <Link key={item.href} to={`/${item.href}`} className={baseClass}>
        <span className="relative z-10">{item.label}</span>
        {item.isNew && <span className="flex h-2 w-2 rounded-full bg-ndc-purple animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>}
      </Link>
    );
  };

  // Reusable MobileNavLink component
  const MobileNavLink = ({ item }: { item: (typeof navLinks)[number] }) => {
    const isExternalPage = item.isPage;
    const baseClass = `px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-between ${mobileLinkClass}`;

    if (isExternalPage) {
      return (
        <Link
          key={item.href}
          to={item.href}
          onClick={() => setIsMenuOpen(false)}
          className={baseClass}
        >
          {item.label}
          {item.isNew && <span className="px-2 py-0.5 rounded-full text-[8px] font-black bg-ndc-purple text-white animate-pulse">NEW</span>}
        </Link>
      );
    }

    if (isHomePage) {
      return (
        <a
          key={item.href}
          href={item.href}
          onClick={() => setIsMenuOpen(false)}
          className={baseClass}
        >
          {item.label}
          {item.isNew && <span className="px-2 py-0.5 rounded-full text-[8px] font-black bg-ndc-purple text-white animate-pulse">NEW</span>}
        </a>
      );
    }

    return (
      <Link
        key={item.href}
        to={`/${item.href}`}
        onClick={() => setIsMenuOpen(false)}
        className={baseClass}
      >
        {item.label}
        {item.isNew && <span className="px-2 py-0.5 rounded-full text-[8px] font-black bg-ndc-purple text-white animate-pulse">NEW</span>}
      </Link>
    );
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md md:backdrop-blur-xl saturate-150 ${
        isScrolled ? `${bgClasses} border-b shadow-lg` : `${transparentBg}`
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Brand/Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-4 group cursor-pointer"
          >
            <div className="relative">
              <img
                src={getAssetPath('/images/club/Dcode-Logo.png')}
                alt="DCode Logo"
                className="h-8 sm:h-11 md:h-14 w-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-code-indigo to-code-purple rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            </div>
            <div className="flex flex-col justify-center leading-tight">
              <span
                className={`text-base sm:text-xl md:text-2xl font-black font-heading transition-all duration-500 group-hover:scale-105 uppercase italic tracking-tight ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                <span className="gradient-text">DCode</span>
              </span>
              <span
                className={`hidden sm:block text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                Developers Club
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center gap-1 ${navBg} p-1 rounded-2xl border backdrop-blur-xl`}>
            {navLinks.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </nav>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <a
              href="https://forms.gle/CHamTqBMouu6ucYa7"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hidden sm:inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-code-indigo via-code-purple to-code-pink hover:from-code-purple hover:via-code-pink hover:to-code-indigo text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-code-purple/50 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 group-hover:rotate-12 transition-transform" />
                <span className="hidden xs:inline">Join Us</span>
                <span className="xs:hidden">Join</span>
              </span>
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
            </a>

            {/* Sleek Mobile Menu Button */}
            <button
              type="button"
              className={`lg:hidden flex flex-col gap-1 items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-white/10 border border-white/20 hover:bg-white/20 text-white'
                  : 'bg-gray-100 border border-gray-300 hover:bg-gray-200 text-gray-800'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`h-0.5 w-4 sm:w-5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`h-0.5 w-4 sm:w-5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-4 sm:w-5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>
        </div>

        {/* Sleek Mobile Menu */}
        {isMenuOpen && (
          <nav
            className={`lg:hidden py-4 border-t transition-colors duration-300 animate-fade-in ${
              theme === 'dark' ? 'border-white/10' : 'border-gray-200'
            }`}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <MobileNavLink key={item.href} item={item} />
              ))}
              <a
                href="https://forms.gle/CHamTqBMouu6ucYa7"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 px-4 py-4 rounded-xl text-sm font-bold bg-gradient-to-r from-code-indigo via-code-purple to-code-pink text-white text-center shadow-lg active:scale-95"
              >
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
