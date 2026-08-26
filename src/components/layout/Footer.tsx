import { Instagram, Linkedin, Youtube, Mail, MapPin, ExternalLink } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Why Join", href: "#why-join" },
    { name: "The Asif Talks", href: "/the-asif-talks" },
    { name: "Achievements", href: "#achievements" },
    { name: "Upcoming Events", href: "#upcoming-events" },
    { name: "Our Team", href: "#team" },
    { name: "Partners", href: "#partners" },
    { name: "FAQ", href: "#faq" },
    { name: "Join Us", href: "#join" },
  ];

  return (
    <footer
      id="contact"
      className="relative pt-16 pb-8 overflow-hidden bg-transparent backdrop-blur-xl border-t border-white/10"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-ndc-purple/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-ndc-blue/20 blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src={getAssetPath("/images/club/Dcode-Logo.png")}
                alt=""
                className="h-11 w-auto object-contain"
              />
              <div className="w-px h-9 bg-white/20" aria-hidden="true" />
              <div className="flex flex-col gap-0.5">
                <span className="gradient-text text-xl font-black font-heading tracking-tight leading-none">
                  DCode
                </span>
                <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-gray-200 leading-none">
                  Developers Club
                </span>
              </div>
            </div>

            <p className="text-on-glass-muted text-base leading-relaxed max-w-md">
              Empowering students through technology, innovation, leadership, and community at
              Shri Shivaji Institute of Engineering and Management Studies (SSIEMS), Parbhani.
            </p>

            <div className="space-y-2 pt-1">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Official Socials &amp; Channels</p>
              <div className="flex flex-wrap items-center gap-2.5">
                {[
                  {
                    href: "https://www.youtube.com/@TheAsifTalks",
                    label: "YouTube (@TheAsifTalks)",
                    icon: <Youtube className="h-5 w-5" />,
                    hover: "hover:border-red-400/40 hover:text-red-400 hover:bg-red-500/10",
                  },
                  {
                    href: "https://www.instagram.com/theasiftalks",
                    label: "Instagram (@theasiftalks)",
                    icon: <Instagram className="h-5 w-5" />,
                    hover: "hover:border-pink-400/40 hover:text-pink-300 hover:bg-pink-500/10",
                  },
                  {
                    href: "https://www.instagram.com/ddsc_club/",
                    label: "Instagram (@ddsc_club)",
                    icon: <Instagram className="h-5 w-5" />,
                    hover: "hover:border-purple-400/40 hover:text-purple-300 hover:bg-purple-500/10",
                  },
                  {
                    href: "https://www.linkedin.com/in/the-syed-asif",
                    label: "LinkedIn (Syed Asif)",
                    icon: <Linkedin className="h-5 w-5" />,
                    hover: "hover:border-blue-400/40 hover:text-blue-300 hover:bg-blue-500/10",
                  },
                  {
                    href: "https://www.linkedin.com/in/dcodeclub",
                    label: "LinkedIn (DDSC)",
                    icon: <Linkedin className="h-5 w-5" />,
                    hover: "hover:border-sky-400/40 hover:text-sky-300 hover:bg-sky-500/10",
                  },
                  {
                    href: "mailto:ddsc.team@gmail.com",
                    label: "Email (ddsc.team@gmail.com)",
                    icon: <Mail className="h-5 w-5" />,
                    hover: "hover:border-amber-400/40 hover:text-amber-300 hover:bg-amber-500/10",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                    title={social.label}
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white transition-all ${social.hover}`}
                  >
                    {social.icon}
                  </a>
                ))}
                <a
                  href="https://chat.whatsapp.com/GzsHCCMYjeAIYGmhpQnXC6"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Community"
                  title="WhatsApp Community"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white transition-all hover:border-green-400/40 hover:text-green-300 hover:bg-green-500/10"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.690" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-white mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white text-[15px] font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-white mb-5">
              Contact
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-ndc-blue mt-1 shrink-0" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Email</p>
                  <a
                    href="mailto:ddsc.team@gmail.com"
                    className="text-gray-200 hover:text-white text-sm font-medium transition-colors"
                  >
                    ddsc.team@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-ndc-green mt-1 shrink-0" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Location</p>
                  <a
                    href="https://maps.app.goo.gl/UjZkHVEQpabCZZuTA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white text-sm leading-relaxed transition-colors block group"
                  >
                    <span>SSIEMS, Vasmat Road,<br />Parbhani – 431401, Maharashtra</span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-ndc-blue group-hover:text-sky-300 font-semibold mt-1 transition-colors">
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ExternalLink className="h-4 w-4 text-ndc-purple mt-1 shrink-0" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Website</p>
                  <a
                    href="https://ssiems.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-white text-sm font-medium transition-colors"
                  >
                    ssiems.org.in
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} DCode Developers Club. All rights reserved.
            </p>
            <p className="text-sm text-gray-300">
              Designed &amp; Developed by{" "}
              <a
                href="https://www.linkedin.com/in/the-syed-asif"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white hover:text-ndc-blue transition-colors"
              >
                Syed Asif
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
