import {
  ArrowLeft,
  Users,
  Building2,
  Briefcase,
  GraduationCap,
  Calendar,
  Headphones,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Globe,
  Radio,
  Youtube,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Camera,
  Shield,
  Clapperboard,
  UserCircle2,
  BookOpen,
  ScrollText,
  Megaphone,
  UsersRound,
  Wrench,
  Palette,
  ClipboardList,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";
import CollegeHeader from "@/components/layout/CollegeHeader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import SectionHeader from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { getAssetPath } from "@/lib/utils";
import AudioWaveform from "@/components/ui/AudioWaveform";

const pillars = [
  {
    step: "01",
    color: "text-indigo-300",
    icon: Building2,
    title: "Public Governance & Leadership",
    subtitle: "Administration · Civil Services",
    desc: "Dialogues with district collectors and public administrators on real-world governance, e-governance infrastructure, and civil service roadmaps."
  },
  {
    step: "02",
    color: "text-pink-300",
    icon: Briefcase,
    title: "Technology & Startups",
    subtitle: "AI · Software · Innovation",
    desc: "Deep-dives with founders and engineering leaders on software architecture, startup building, open source, and artificial intelligence."
  },
  {
    step: "03",
    color: "text-emerald-300",
    icon: GraduationCap,
    title: "Campus to Career",
    subtitle: "Mentorship · Roadmaps",
    desc: "Actionable blueprints for students from Tier-2 and Tier-3 cities to bridge the exposure gap and access national-tier opportunities."
  }
];

const institutionalPartners = [
  {
    name: "SSIEMS Parbhani",
    fullName: "Shri Shivaji Institute of Engineering & Management Studies",
    role: "Institutional Patron & Venue Host",
    logo: "/images/alliances/ssiems-logo.png",
    bgClass: "bg-white",
    desc: "Providing academic patronage, administrative backing, and the Dr. A.P.J. Abdul Kalam Auditorium venue.",
    mapUrl: "https://maps.app.goo.gl/UjZkHVEQpabCZZuTA"
  },
  {
    name: "DCode Developers Club",
    fullName: "DDSC Student Community",
    role: "Organizing Student Engine",
    logo: "/images/alliances/dcode-logo.jpg",
    bgClass: "bg-slate-950",
    desc: "Leading stage management, technical execution, registration operations, and student outreach."
  },
  {
    name: "Vertex Institute of Technology",
    fullName: "Industry & Innovation Partner",
    role: "Technical & Industry Backbone",
    logo: "/images/alliances/vertex-logo.jpg",
    bgClass: "bg-white",
    desc: "Title partner for technological incubation, digital network amplification, and technical mentorship."
  }
];

const episodeSpotlight = {
  badge: "SEASON 01 • INAUGURAL EPISODE",
  title: "Public Governance, Digital Administration & The Youth Mindset",
  date: "Monday, August 31, 2026",
  guest: "Shri Sanjaysinh Chavan (IAS)",
  guestRole: "District Collector & District Magistrate, Parbhani",
  overview: "In the inaugural live studio session of The Asif Talks, host Syed Asif hosts Parbhani District Collector Shri Sanjaysinh Chavan (IAS) before an audience of 250+ undergraduates and civil service aspirants.",
  themes: [
    { title: "District Governance & Ground Realities", desc: "Public administration decision-making and civic management during high-stakes challenges." },
    { title: "Technology & E-Governance", desc: "How digital infrastructure and IT automation modernize public service delivery." },
    { title: "Breaking the Regional Gap", desc: "Actionable strategies for Tier-2 & Tier-3 students to build competitive national strength." },
    { title: "Civil Services Blueprint", desc: "Mental resilience, strategic discipline, and analytical mindset needed for UPSC & MPSC exams." }
  ],
  venue: "Dr. A.P.J. Abdul Kalam Auditorium, SSIEMS Parbhani",
  venueMapUrl: "https://maps.app.goo.gl/UjZkHVEQpabCZZuTA",
  production: "4K Multi-Camera Cinema Array with High-Fidelity Audio Mastering"
};

const hostProfile = {
  name: "Syed Asif Syed Gaffar",
  designation: "Host · The Asif Talks",
  role: "President · DCode Developers Club (DDSC)",
  bio: "CSE Undergraduate at SSIEMS Parbhani, community builder, and youth advocate dedicated to bringing high-caliber leadership dialogues to regional engineering students.",
  image: "/images/team/Syed asif.jpeg",
  linkedin: "https://www.linkedin.com/in/the-syed-asif"
};

const productionTeam = [
  { role: "Faculty Advisor", name: "Prof. Shelke S.B.", icon: BookOpen, color: "text-blue-300" },
  { role: "Vice President & Floor Direction", name: "Gayatri Shriram Bharose", icon: UsersRound, color: "text-pink-300" },
  { role: "Secretary & Documentation", name: "Sandip Balasaheb Ayewar", icon: ScrollText, color: "text-emerald-300" },
  { role: "Treasurer & Registration Head", name: "Arpita Mukund Jondhale", icon: Shield, color: "text-purple-300" },
  { role: "Technical & Audio Lead", name: "Sanjivani Jaiprakash Jadhav", icon: Headphones, color: "text-amber-300" },
  { role: "Multi-Camera Operations Lead", name: "Siddi Yaseen Hussain", icon: Camera, color: "text-indigo-300" },
  { role: "Social Media & PR Lead", name: "Rushikesh Deshmukh", icon: Megaphone, color: "text-rose-300" },
  { role: "Design & Visual Brand Lead", name: "Supriya Satish Shahane", icon: Palette, color: "text-teal-300" },
  { role: "Event & Crowd Operations Lead", name: "Sarvadnya Annarao Kshirsagar", icon: Wrench, color: "text-violet-300" }
];

const TheAsifTalks = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 custom-scrollbar">
      <Helmet>
        <title>The Asif Talks | Leadership & Public Governance Talk Series</title>
        <meta
          name="description"
          content="The Asif Talks — a flagship studio-grade leadership talk series hosted by Syed Asif. Inaugural Episode featuring District Collector Shri Sanjaysinh Chavan (IAS) on August 31, 2026."
        />
        <link rel="canonical" href="https://www.dcode.club/the-asif-talks" />

        {/* OpenGraph / Facebook / WhatsApp */}
        <meta property="og:type" content="video.episode" />
        <meta property="og:site_name" content="The Asif Talks · DCode Developers Club" />
        <meta property="og:url" content="https://www.dcode.club/the-asif-talks" />
        <meta property="og:title" content="The Asif Talks · Season 01 Premiere with Shri Sanjaysinh Chavan (IAS)" />
        <meta property="og:description" content="A flagship studio dialogue series hosted by Syed Asif. Connecting students & innovators with top administrative leaders and founders. Aug 31, 2026 at SSIEMS Parbhani." />
        <meta property="og:image" content="https://www.dcode.club/images/the-asif-talks-logo.jpg" />
        <meta property="og:image:secure_url" content="https://www.dcode.club/images/the-asif-talks-logo.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="The Asif Talks Official Key Artwork" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.dcode.club/the-asif-talks" />
        <meta name="twitter:title" content="The Asif Talks · Season 01 Premiere" />
        <meta name="twitter:description" content="Studio dialogue series hosted by Syed Asif featuring Parbhani Collector Shri Sanjaysinh Chavan (IAS)." />
        <meta name="twitter:image" content="https://www.dcode.club/images/the-asif-talks-logo.jpg" />
        <meta name="twitter:creator" content="@TheAsifTalks" />
      </Helmet>

      <CollegeHeader />
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 space-y-16 sm:space-y-20">
        {/* --- Top Navigation Header --- */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/5 pb-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white font-medium transition active:scale-[0.98]"
          >
            <ArrowLeft className="w-4 h-4 text-indigo-400" />
            <span>Back to Home</span>
          </Link>
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full font-semibold text-indigo-300">
              <Calendar className="w-3.5 h-3.5 text-indigo-400" />
              Season 01 · August 31, 2026
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="text-slate-400 font-medium">Dr. A.P.J. Abdul Kalam Auditorium</span>
          </div>
        </div>

        {/* --- Hero Stage --- */}
        <section className="relative rounded-[2rem] border border-white/10 bg-slate-950/70 backdrop-blur-xl p-6 sm:p-8 md:p-12 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(45deg,#ffffff_25%,transparent_25%,transparent_75%,#ffffff_75%),linear-gradient(45deg,#ffffff_25%,transparent_25%,transparent_75%,#ffffff_75%)] [background-size:24px_24px] pointer-events-none" />
          <div className="absolute -bottom-28 -left-20 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl opacity-70 pointer-events-none" />
          <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-ndc-blue/10 blur-3xl opacity-70 pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="inline-flex items-center gap-2.5 mb-4 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-bold shadow-inner">
                <AudioWaveform size="xs" barColor="bg-gradient-to-t from-indigo-400 via-pink-400 to-amber-300" />
                <span>Studio Leadership Talk Series</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500" />
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05]">
                The Asif Talks
              </h1>
              <p className="mt-2 text-xl sm:text-2xl font-extrabold tracking-tight text-indigo-300">
                Bridging Regional Ambition with National Leadership
              </p>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                A studio-grade leadership talk series connecting ambitious students and innovators from Tier-2 &amp; Tier-3 regions with top administrative leaders, public officials, and founders.
              </p>

              {/* Metrics */}
              <div className="mt-6 grid grid-cols-3 gap-3 max-w-lg">
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-3.5 text-center sm:text-left">
                  <p className="text-xl sm:text-2xl font-black text-white">300+</p>
                  <p className="text-[11px] text-slate-400 font-medium mt-0.5 leading-tight">Live Audience</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-3.5 text-center sm:text-left">
                  <p className="text-xl sm:text-2xl font-black text-white">10k+</p>
                  <p className="text-[11px] text-slate-400 font-medium mt-0.5 leading-tight">Digital Reach</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-3.5 text-center sm:text-left">
                  <p className="text-xl sm:text-2xl font-black text-white">4K</p>
                  <p className="text-[11px] text-slate-400 font-medium mt-0.5 leading-tight">Studio Cinema</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-ndc-blue text-white hover:shadow-indigo-500/25 hover:shadow-xl rounded-xl h-12 px-7 font-bold active:scale-[0.98] justify-center"
                  onClick={() => window.open("https://syedasif7.github.io/The-Asif-Talks-Registration-Form/", "_blank")}
                >
                  <ClipboardList className="w-4 h-4 mr-2 text-indigo-200 shrink-0" />
                  <span>Register for Season 01</span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border-white/15 rounded-xl h-12 px-7 font-bold active:scale-[0.98] justify-center"
                  onClick={() => window.open("https://www.youtube.com/@TheAsifTalks", "_blank")}
                >
                  <Youtube className="w-4 h-4 mr-2 text-red-400 shrink-0" />
                  <span>Subscribe on YouTube</span>
                </Button>
              </div>
            </div>

            {/* Right Emblem */}
            <div className="lg:col-span-5 xl:col-span-4 flex justify-center">
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2 border-indigo-500/30 shadow-[0_0_60px_rgba(99,102,241,0.25)] bg-slate-950 ring-4 ring-white/10 group flex items-center justify-center">
                <img
                  src={getAssetPath("/images/the-asif-talks-logo.jpg")}
                  alt="The Asif Talks Official Logo"
                  loading="lazy"
                  className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- The 3 Core Pillars --- */}
        <section>
          <SectionHeader
            badgeText="Core Focus"
            badgeIcon={Building2}
            titlePrefix="Built Around"
            titleHighlight="Three Key Pillars"
            description="Focused dialogues designed to turn regional student background into a distinct competitive strength."
            centered
          />
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <article
                  key={i}
                  className="rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl p-6 hover:bg-white/[0.07] hover:border-white/20 transition-all shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <Icon className={`w-5 h-5 ${p.color}`} />
                      </div>
                      <span className="font-black text-xl text-white/20">{p.step}</span>
                    </div>
                    <p className={`text-xs font-bold uppercase tracking-wider ${p.color} mb-1`}>
                      {p.subtitle}
                    </p>
                    <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* --- Episode 1 Spotlight --- */}
        <section id="spotlight">
          <SectionHeader
            badgeText="Live Studio Recording"
            badgeIcon={Radio}
            titlePrefix="Episode #1"
            titleHighlight="Spotlight"
            description="Inaugural administrative governance session recorded with Parbhani District's highest public authority."
            centered
          />

          <article className="mt-8 rounded-[2rem] border border-white/10 bg-slate-950/70 backdrop-blur-xl overflow-hidden shadow-2xl">
            {/* Top Bar */}
            <div className="bg-white/5 border-b border-white/10 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <AudioWaveform size="xs" barColor="bg-gradient-to-t from-indigo-400 to-pink-400" />
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-300">
                    {episodeSpotlight.badge}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5 leading-tight">
                  {episodeSpotlight.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-slate-300 self-start sm:self-auto">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                <span>{episodeSpotlight.date}</span>
              </div>
            </div>

            {/* Featured Guest Card */}
            <div className="p-6 sm:p-8 bg-gradient-to-r from-indigo-950/80 via-slate-900 to-slate-950 flex flex-col sm:flex-row items-center gap-6 border-b border-white/10">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-indigo-400/30 shadow-2xl shrink-0 bg-slate-950 ring-4 ring-white/10 flex items-center justify-center">
                <span className="font-heading font-black text-5xl text-indigo-300 drop-shadow-[0_0_20px_rgba(99,102,241,0.6)] select-none">
                  ?
                </span>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-300 mb-1">
                  Featured Guest
                </p>
                <h4 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  {episodeSpotlight.guest}
                </h4>
                <p className="mt-1 text-slate-300 text-sm sm:text-base font-semibold">
                  {episodeSpotlight.guestRole}
                </p>
                <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-3xl">
                  {episodeSpotlight.overview}
                </p>
              </div>
            </div>

            {/* Discussion Themes Grid */}
            <div className="p-6 sm:p-8 space-y-4">
              <h5 className="text-sm font-black uppercase tracking-wider text-slate-400">4 Key Discussion Themes</h5>
              <div className="grid sm:grid-cols-2 gap-4">
                {episodeSpotlight.themes.map((th, i) => (
                  <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <h6 className="font-bold text-white text-sm">{th.title}</h6>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-6.5">{th.desc}</p>
                  </div>
                ))}
              </div>

              {/* Venue & Location Bar */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-start sm:items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-wider text-indigo-300">Official Premiere Venue</p>
                    <p className="text-sm font-bold text-white leading-snug">{episodeSpotlight.venue}</p>
                    <p className="text-xs text-slate-400">Vasmat Road, Parbhani – 431401, Maharashtra</p>
                  </div>
                </div>
                <a
                  href={episodeSpotlight.venueMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 hover:border-indigo-400 text-xs font-bold text-indigo-200 hover:text-white transition-all shadow-md shrink-0 group"
                >
                  <MapPin className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform shrink-0" />
                  <span>View Venue on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* --- Institutional Alliance --- */}
        <section>
          <SectionHeader
            badgeText="Alliances"
            badgeIcon={Building2}
            titlePrefix="Institutional"
            titleHighlight="Alliances"
            description="Powered by a three-way collaboration between academia, student engineering, and industry innovation."
            centered
          />
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {institutionalPartners.map((p, i) => (
              <article
                key={i}
                className="rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl p-5 hover:bg-white/[0.07] hover:border-white/20 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${p.bgClass} border border-white/10 flex items-center justify-center p-2 mb-4 shadow-lg group-hover:scale-105 transition-transform overflow-hidden`}>
                    <img
                      src={getAssetPath(p.logo)}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-indigo-300 mb-1">{p.role}</p>
                  <h4 className="text-base font-extrabold text-white mb-1.5 leading-tight">{p.name}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                  {"mapUrl" in p && p.mapUrl && (
                    <a
                      href={p.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-200 transition-colors mt-3"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* --- Host & Executive Committee --- */}
        <section>
          <SectionHeader
            badgeText="The Team"
            badgeIcon={Clapperboard}
            titlePrefix="Host &amp;"
            titleHighlight="Executive Committee"
            description="The student developers and student leadership committee powering the production."
            centered
          />

          <div className="mt-8 grid lg:grid-cols-5 gap-6 items-start">
            {/* Host Card */}
            <article className="lg:col-span-2 rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur-xl p-6 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex gap-4 items-center mb-4">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-indigo-500/30 shadow-xl shrink-0 bg-slate-900">
                    <img
                      src={getAssetPath(hostProfile.image)}
                      alt={hostProfile.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-1">
                      Host &amp; Creator
                    </span>
                    <h4 className="text-lg font-black text-white leading-tight">{hostProfile.name}</h4>
                    <p className="text-xs font-bold text-indigo-200">{hostProfile.designation}</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{hostProfile.bio}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10">
                <a
                  href={hostProfile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full justify-center inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600/30 hover:bg-indigo-600 border border-indigo-400/40 text-white transition-all text-xs font-bold shadow-md active:scale-[0.98]"
                >
                  <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </article>

            {/* Committee Leads List */}
            <div className="lg:col-span-3 grid sm:grid-cols-3 gap-3">
              {productionTeam.map((m, i) => {
                const Icon = m.icon;
                return (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3 hover:bg-white/[0.08] transition-all">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        <Icon className={`w-3.5 h-3.5 ${m.color}`} />
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-white text-xs truncate">{m.name}</p>
                        <p className="text-[10px] text-slate-400 truncate">{m.role}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- Season 01 Premiere Callout & Connectivity --- */}
        <section className="space-y-6">
          <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-indigo-600 via-indigo-700 to-ndc-purple text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 shadow-2xl relative overflow-hidden border border-white/10">
            <div className="space-y-1">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-indigo-200">
                Season 01 Premiere Broadcast
              </p>
              <h3 className="text-2xl sm:text-3xl font-black leading-tight">
                Aug 31, 2026 <span className="text-indigo-200 font-semibold text-lg sm:text-2xl">· Dr. A.P.J. Abdul Kalam Auditorium</span>
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-indigo-950 hover:bg-slate-100 rounded-xl h-12 px-6 font-black shadow-xl shrink-0 active:scale-[0.98] justify-center"
                onClick={() => window.open("https://syedasif7.github.io/The-Asif-Talks-Registration-Form/", "_blank")}
              >
                <ClipboardList className="w-4 h-4 mr-2 text-indigo-700 shrink-0" />
                <span>Register Now</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/20 rounded-xl h-12 px-6 font-bold shrink-0 active:scale-[0.98] justify-center"
                onClick={() => window.open("https://www.youtube.com/@TheAsifTalks", "_blank")}
              >
                <Youtube className="w-4 h-4 mr-2 text-red-400 shrink-0" />
                <span>YouTube Channel</span>
              </Button>
            </div>
          </div>

          {/* Quick Contact, Socials & Venue Maps Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="mailto:theasiftalks@gmail.com"
              className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition group"
            >
              <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email Inquiries</p>
                <p className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-indigo-300">theasiftalks@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.youtube.com/@TheAsifTalks"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition group"
            >
              <div className="w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                <Youtube className="w-4 h-4 text-red-400" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">YouTube Broadcasts</p>
                <p className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-red-300">@TheAsifTalks</p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/theasiftalks"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition group"
            >
              <div className="w-9 h-9 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0">
                <Instagram className="w-4 h-4 text-pink-400" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Instagram Official</p>
                <p className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-pink-300">@theasiftalks</p>
              </div>
            </a>

            <a
              href="https://maps.app.goo.gl/UjZkHVEQpabCZZuTA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition group"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Venue Location</p>
                <p className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-emerald-300 flex items-center gap-1">
                  <span>SSIEMS Parbhani</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400/80" />
                </p>
              </div>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TheAsifTalks;
