import {
  Users,
  Building2,
  GraduationCap,
  Calendar,
  Headphones,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Globe,
  Quote,
  Target,
  Radio,
  Youtube,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Camera,
  Cpu,
  Shield,
  Award,
  Clapperboard,
  UserCircle2,
  BookOpen,
  ScrollText,
  Megaphone,
  UsersRound,
  Wrench,
  Palette
} from "lucide-react";
import { Link } from "react-router-dom";
import CollegeHeader from "@/components/layout/CollegeHeader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const pillars = [
  {
    step: "01",
    color: "text-indigo-300",
    accent: "from-indigo-500/20 to-violet-500/10",
    border: "hover:border-indigo-400/30",
    icon: Building2,
    title: "Public Governance & Leadership Dialogues",
    subtitle: "Administration · Civil Services · Civic Leadership",
    points: [
      "Interactions with administrators and public leaders",
      "Technology-driven governance and policy insights",
      "Civil services preparation and mindset roadmaps",
      "Civic leadership, community impact and ethics"
    ]
  },
  {
    step: "02",
    color: "text-pink-300",
    accent: "from-pink-500/20 to-rose-500/10",
    border: "hover:border-pink-400/30",
    icon: Briefcase,
    title: "Technology, Startups & Entrepreneurship",
    subtitle: "AI · Cloud · Research · Startup Journeys",
    points: [
      "AI, cloud, software and research deep-dives",
      "Startup journeys from idea to execution",
      "Open source, hackathons and builder culture",
      "Conversations with founders and engineering leaders"
    ]
  },
  {
    step: "03",
    color: "text-emerald-300",
    accent: "from-emerald-500/20 to-teal-500/10",
    border: "hover:border-emerald-400/30",
    icon: GraduationCap,
    title: "Campus to Career",
    subtitle: "Mentorship · Blueprints · Direct Access",
    points: [
      "Offline campus sessions and interactive Q&A",
      "Career blueprints for Tier-2 and Tier-3 students",
      "Competitive programming and research guidance",
      "Direct conversations with decision-makers and recruiters"
    ]
  }
];

const institutionalPartners = [
  {
    name: "Shri Shivaji Institute of Engineering and Management Studies",
    tagline: "SSIEMS Parbhani",
    role: "Institutional Patron · Venue Host",
    icon: Building2,
    accent: "from-indigo-500/20 to-blue-500/10",
    iconColor: "text-indigo-300",
    details: [
      "Venue patron: Dr. A.P.J. Abdul Kalam Auditorium",
      "Administrative backing & academic endorsement",
      "Student audience mobilization & outreach",
      "Leadership Patron: Dr. Anand K. Pathrikar (Director, SSIEMS Parbhani)"
    ]
  },
  {
    name: "DCode Developers Club",
    tagline: "DDSC Student Chapter",
    role: "Organizing Student Body",
    icon: Users,
    accent: "from-pink-500/20 to-rose-500/10",
    iconColor: "text-pink-300",
    details: [
      "Technical execution & floor operations",
      "Stage management & registration screening",
      "Media handling & production coordination",
      "Community of 300+ engineering undergraduates"
    ]
  },
  {
    name: "Vertex Institute of Technology",
    tagline: "Vertex Institute",
    role: "Technical & Industry Partner",
    icon: GraduationCap,
    accent: "from-emerald-500/20 to-teal-500/10",
    iconColor: "text-emerald-300",
    details: [
      "Co-branding & technological incubation",
      "Digital network amplification",
      "Technical advisory & mentorship support",
      "Title Partner for Season 01 Premier Broadcast"
    ]
  }
];

const episodeSpotlight = {
  badgeTag: "SEASON 01 • INAUGURAL EPISODE",
  mainTitle: "Public Governance, Digital Administration & The Youth Mindset",
  guest: "Shri Sanjaysinh Chavan (IAS)",
  guestTitle: "District Collector & District Magistrate, Parbhani",
  overview: [
    "In the inaugural live studio session of The Asif Talks, host Syed Asif sits down with the administrative head of Parbhani district, Shri Sanjaysinh Chavan (IAS).",
    "Recorded live before an audience of over 250 engineering undergraduates, innovators, and civil service aspirants at the Dr. A.P.J. Abdul Kalam Auditorium, this session dives into the realities of district-level public administration, the transformative role of e-governance and technology in public service delivery, and actionable roadmaps for youth from Tier-2 and Tier-3 regions aiming for national-level impact."
  ],
  keyDiscussionThemes: [
    {
      title: "District Governance & Ground Realities",
      desc: "Navigating public welfare, resource management, and administrative decision-making during high-stakes district challenges."
    },
    {
      title: "Technology & E-Governance",
      desc: "How data systems, digital grievance portals, and IT infrastructure are modernizing administrative transparency and citizen services."
    },
    {
      title: "Breaking the Regional Barrier",
      desc: "Strategies for students in Tier-2 and Tier-3 cities to overcome exposure gaps, leverage digital resources, and build competitive strength."
    },
    {
      title: "Civil Services Preparation Blueprint",
      desc: "Balancing core technical education with the consistency, mental resilience, and analytical mindset needed for UPSC and MPSC examinations."
    }
  ],
  aboutGuest: "Shri Sanjaysinh Chavan (IAS) serves as the District Collector & District Magistrate of Parbhani, Maharashtra. As the chief administrative and executive officer of the district, he oversees revenue administration, law and order, district development planning, and the execution of state and national welfare schemes. His administrative approach emphasizes efficient public service delivery, transparent civic systems, and youth empowerment across the region.",
  production: {
    host: "Syed Asif · President, DCode Developers Club",
    date: "Monday, August 31, 2026",
    venue: "Dr. A.P.J. Abdul Kalam Auditorium, SSIEMS Campus, Parbhani",
    standard: "4K Multi-Camera Studio Array with High-Fidelity Audio Mastering",
    presented: "DCode Developers Club (DDSC) | SSIEMS Parbhani",
    partner: "Vertex Institute of Technology"
  }
};

const seasonGuests = [
  {
    episode: "EPISODE #1",
    focus: "Administrative Governance",
    date: "Monday, August 31, 2026",
    guest: "Shri Sanjaysinh Chavan (IAS)",
    role: "District Collector & Magistrate, Parbhani",
    color: "from-indigo-500/25 via-violet-500/10 to-purple-500/5",
    border: "hover:border-indigo-400/40",
    theme: "text-indigo-300",
    themes: [
      "District Administration, E-Governance, and Bridging the Tier-3 Youth Exposure Gap",
    ],
    topics: [
      "Public administration challenges, disaster response, and real-time governance",
      "Deployment of digital infrastructure and IT automation in district public delivery",
      "Strategic guidance, focus, and mindset for engineering students preparing for UPSC/MPSC"
    ],
    featured: true
  },

];

const hostProfile = {
  name: "Syed Asif Syed Gaffar",
  designation: "Host · The Asif Talks",
  role: "President · DCode Developers Club (DDSC)",
  bio: "CSE Undergraduate at SSIEMS Parbhani, developer community builder, and youth advocate committed to bringing high-caliber leadership exposure to Tier-2 and Tier-3 regions.",
  image: "/images/team/Syed asif.jpeg",
  linkedin: "https://www.linkedin.com/in/the-syed-asif"
};

const productionTeam = [
  {
    role: "Faculty Advisor",
    name: "Prof. Shelke S.B.",
    dept: "CSE Department, SSIEMS",
    icon: BookOpen,
    color: "text-blue-300"
  },
  {
    role: "Vice President & Floor Direction",
    name: "Gayatri Shriram Bharose",
    dept: "Stage & Auditorium Operations",
    icon: UsersRound,
    color: "text-pink-300"
  },
  {
    role: "Secretary & Official Documentation",
    name: "Sandip Balasaheb Ayewar",
    dept: "Records & Official Correspondence",
    icon: ScrollText,
    color: "text-emerald-300"
  },
  {
    role: "Treasurer & Registration Gate Head",
    name: "Arpita Mukund Jondhale",
    dept: "Finance · Check-in · Audience Entry",
    icon: Shield,
    color: "text-purple-300"
  },
  {
    role: "Technical & Sound Lead",
    name: "Sanjivani Jaiprakash Jadhav",
    dept: "Audio Engineering · Mixer · Mics",
    icon: Headphones,
    color: "text-amber-300"
  },
  {
    role: "Multi-Camera Operations Lead",
    name: "Siddi Yaseen Hussain",
    dept: "Cinematography · Camera Array",
    icon: Camera,
    color: "text-indigo-300"
  },
  {
    role: "Social Media & PR Lead",
    name: "Rushikesh Deshmukh",
    dept: "YouTube · Instagram · LinkedIn",
    icon: Megaphone,
    color: "text-rose-300"
  },
  {
    role: "Design & Visual Brand Lead",
    name: "Supriya Satish Shahane",
    dept: "Posters · Motion Graphics · Branding",
    icon: Palette,
    color: "text-teal-300"
  },
  {
    role: "Event & Crowd Management Lead",
    name: "Sarvadnya Annarao Kshirsagar",
    dept: "Seating · Ushering · Crowd Flow",
    icon: Wrench,
    color: "text-violet-300"
  }
];

const TheAsifTalks = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 custom-scrollbar">
      <Helmet>
        <title>The Asif Talks | Shaping Regional Ambition Through Dialogue</title>
        <meta
          name="description"
          content="The Asif Talks — a studio-grade leadership and public governance talk series bridging regional youth with top administrative leaders, public officials, and innovators. Season 01 launching August 31, 2026."
        />
      </Helmet>

      <CollegeHeader />
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 space-y-16">
        {/* --- Back Button + Meta --- */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white font-medium transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Upcoming Events
          </Link>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="font-semibold">Season 01 · Premiere</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-indigo-400" />
              August 31, 2026
            </span>
            <span className="inline-flex items-center gap-1.5">
              <UserCircle2 className="w-4 h-4 text-indigo-400" />
              Founded by Syed Asif · For Tier-2 &amp; Tier-3 India
            </span>
          </div>
        </div>

        {/* --- Hero --- */}
        <section className="relative rounded-[2rem] border border-white/10 bg-slate-950/70 backdrop-blur-xl p-6 sm:p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(45deg,#ffffff_25%,transparent_25%,transparent_75%,#ffffff_75%),linear-gradient(45deg,#ffffff_25%,transparent_25%,transparent_75%,#ffffff_75%)] [background-size:24px_24px] [background-position:0_0,12px_12px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl opacity-70 pointer-events-none" />
          <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-ndc-blue/10 blur-3xl opacity-70 pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 xl:col-span-8">
              <Badge className="mb-5 bg-white/5 text-indigo-300 border-white/10 hover:bg-white/10 rounded-full text-xs font-semibold px-3 py-1">
                Studio-Grade Leadership Talk Series
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.1] max-w-4xl">
                The Asif Talks — Official Platform
              </h1>
              <h2 className="mt-3 text-2xl md:text-3xl font-extrabold tracking-tight text-white max-w-4xl">
                Shaping Regional <span className="text-indigo-400">Ambition</span> Through Dialogue
              </h2>
              <p className="mt-2 text-base md:text-lg text-slate-400 font-medium">
                Bridging Students &amp; Leaders · Region to Nation
              </p>

              <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-5xl">
                <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                  <p>
                    The Asif Talks is a studio-grade leadership and public governance talk series bridging
                    regional youth with top administrative leaders, public officials, and innovators.
                  </p>
                  <p>
                    Created to bridge the gap between ambitious students — especially those from Tier-2 and
                    Tier-3 cities — and prominent leaders across technology, public administration,
                    entrepreneurship, and research.
                  </p>
                </div>
                <figure className="relative border-l-4 border-indigo-500 pl-6 bg-white/5 rounded-r-xl py-4 self-start backdrop-blur">
                  <Quote className="absolute -left-4 top-1 w-8 h-8 text-indigo-400 bg-slate-950 rounded-full p-1 border border-white/10" />
                  <blockquote className="text-base sm:text-lg font-semibold text-white italic leading-snug">
                    "High-level leaders, administrators, entrepreneurs and professionals — directly to regional students."
                  </blockquote>
                </figure>
              </div>

              {/* Metrics row */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 text-center sm:text-left">
                  <p className="text-2xl font-black text-white">300+</p>
                  <p className="text-xs text-slate-400 font-medium mt-1">Seated Undergraduates (Live Audience)</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 text-center sm:text-left">
                  <p className="text-2xl font-black text-white">10,000+</p>
                  <p className="text-xs text-slate-400 font-medium mt-1">Projected Viewership (Digital Reach)</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 text-center sm:text-left">
                  <p className="text-2xl font-black text-white">4K</p>
                  <p className="text-xs text-slate-400 font-medium mt-1">Multi-Camera Studio (Production)</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-ndc-blue text-white hover:shadow-indigo-500/25 hover:shadow-xl rounded-xl h-12 sm:h-11 px-6 font-bold active:scale-[0.98] justify-center"
                  onClick={() => window.open("https://www.youtube.com/@TheAsifTalks", "_blank")}
                >
                  <Youtube className="w-4 h-4 mr-2 text-red-400 shrink-0" />
                  <span>Subscribe on YouTube</span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border-white/15 rounded-xl h-12 sm:h-11 px-6 font-bold active:scale-[0.98] justify-center"
                  onClick={() => {
                    const el = document.getElementById("guests");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  <Users className="w-4 h-4 mr-2 shrink-0" />
                  <span>View Season 01 Guests</span>
                </Button>
              </div>

              {/* Sub-bar */}
              <div className="mt-8 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full font-semibold backdrop-blur">
                  <Clapperboard className="w-4 h-4 text-indigo-400" />
                  Season 01 · Premiere August 31
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full font-semibold backdrop-blur">
                  <UserCircle2 className="w-4 h-4 text-indigo-400" />
                  Syed Asif · The Asif Talks
                </span>
              </div>
            </div>

            {/* Official Logo Banner Column */}
            <div className="lg:col-span-5 xl:col-span-4 flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border-2 border-indigo-500/30 shadow-[0_0_60px_rgba(99,102,241,0.25)] bg-slate-950 ring-4 ring-white/10 group">
                <img
                  src="/images/the-asif-talks-logo.jpg"
                  alt="The Asif Talks Official Logo"
                  className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* --- 3 Pillars --- */}
        <section>
          <SectionHeader
            badgeText="The 3 Pillars"
            badgeIcon={Target}
            titlePrefix="Built Around"
            titleHighlight="Three Focus Areas"
            description="Governance & leadership, technology & entrepreneurship, and campus-to-career initiatives — engineered to close the opportunity gap."
            centered
          />
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <article
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/[0.07] hover:border-white/15 transition"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${p.color}`} />
                    </div>
                    <span className="font-black text-2xl text-white/15">{p.step}</span>
                  </div>
                  <p className={`text-xs font-bold uppercase tracking-wider ${p.color} mb-1`}>
                    {p.subtitle}
                  </p>
                  <h3 className="text-lg font-extrabold text-white mb-3 leading-snug">
                    {p.title}
                  </h3>
                  <ul className="space-y-2">
                    {p.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="text-indigo-400 mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        {/* --- Institutional Partners --- */}
        <section>
          <SectionHeader
            badgeText="Institutional Collaborators"
            badgeIcon={Building2}
            titlePrefix="Institutional"
            titleHighlight="Collaborators &amp; Alliances"
            description="Powered by a three-way institutional alliance — SSIEMS Parbhani as patron, DDSC as student engine, and Vertex Institute as technical backbone."
            centered
          />
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {institutionalPartners.map((p, i) => {
              const Icon = p.icon;
              return (
                <article key={i} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/[0.07] transition">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${p.iconColor}`} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Partner 0{i + 1}
                    </span>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-1">
                    {p.role}
                  </p>
                  <p className="text-sm text-slate-400 mb-1">{p.tagline}</p>
                  <h4 className="text-lg font-extrabold text-white mb-4 leading-tight">{p.name}</h4>
                  <ul className="space-y-2 border-t border-white/10 pt-4">
                    {p.details.map((d, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        {/* --- Episode Spotlight --- */}
        <section id="spotlight">
          <SectionHeader
            badgeText="Episode Spotlight · Live"
            badgeIcon={Radio}
            titlePrefix="Episode"
            titleHighlight="Spotlight #1"
            description="The inaugural live episode of The Asif Talks — a landmark session recorded in the presence of Parbhani District's highest administrative authority."
            centered
          />

          <article className="mt-8 rounded-[2rem] border border-white/10 bg-slate-950/70 backdrop-blur-xl overflow-hidden">
            {/* Top Metadata */}
            <div className="bg-white/5 border-b border-white/10 p-6 grid md:grid-cols-4 gap-5">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-indigo-300 mb-1">
                  {episodeSpotlight.badgeTag}
                </p>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Episode Title
                </p>
                <h3 className="font-black text-white mt-1 leading-tight">
                  {episodeSpotlight.mainTitle}
                </h3>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Recording
                </p>
                <p className="font-bold text-white">{episodeSpotlight.production.date}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Live Audience
                </p>
                <p className="font-bold text-white">250+ Students &amp; Aspirants</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Session Host
                </p>
                <p className="font-bold text-white flex items-center gap-1.5">
                  <UserCircle2 className="w-4 h-4 text-indigo-400" />
                  {episodeSpotlight.production.host}
                </p>
              </div>
            </div>

            {/* Guest Banner */}
            <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-ndc-purple text-white p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl shrink-0 bg-slate-950 ring-4 ring-white/10 flex items-center justify-center">
                <span className="font-heading font-black text-5xl sm:text-6xl text-indigo-300 drop-shadow-[0_0_20px_rgba(99,102,241,0.6)] select-none">
                  ?
                </span>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-80 mb-1">
                  Featured Guest
                </p>
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight">
                  {episodeSpotlight.guest}
                </h4>
                <p className="mt-1.5 text-indigo-100 text-base md:text-lg font-semibold">
                  {episodeSpotlight.guestTitle}
                </p>
                <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="inline-flex items-center gap-1 text-xs font-bold bg-white/15 px-3 py-1 rounded-full text-white backdrop-blur">
                    District Collector &amp; DM
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold bg-white/15 px-3 py-1 rounded-full text-white backdrop-blur">
                    Parbhani District
                  </span>
                </div>
              </div>
            </div>

            {/* Overview */}
            <div className="p-6 md:p-8">
              <h5 className="text-lg font-black text-white mb-3">Episode Overview</h5>
              <div className="space-y-3 text-slate-300 leading-relaxed">
                {episodeSpotlight.overview.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* 4 Themes */}
              <h5 className="text-lg font-black text-white mt-8 mb-4">4 Key Discussion Themes</h5>
              <div className="grid sm:grid-cols-2 gap-4">
                {episodeSpotlight.keyDiscussionThemes.map((th, i) => (
                  <div key={i} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-black text-lg text-indigo-300">0{i + 1}</span>
                      <h6 className="font-bold text-white">{th.title}</h6>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{th.desc}</p>
                  </div>
                ))}
              </div>

              {/* About Guest */}
              <h5 className="text-lg font-black text-white mt-8 mb-3">About the Guest</h5>
              <div className="flex flex-col sm:flex-row gap-6 items-start rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-white/20 shrink-0 bg-slate-950 flex items-center justify-center">
                  <span className="font-heading font-black text-4xl text-indigo-300 select-none">
                    ?
                  </span>
                </div>
                <div className="space-y-2 flex-1">
                  <h6 className="text-xl font-black text-white">{episodeSpotlight.guest}</h6>
                  <p className="text-sm font-semibold text-indigo-300">{episodeSpotlight.guestTitle}</p>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base pt-1">
                    {episodeSpotlight.aboutGuest}
                  </p>
                </div>
              </div>

              {/* Production Details */}
              <h5 className="text-lg font-black text-white mt-8 mb-3">Production &amp; Event Details</h5>
              <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm border border-white/10 rounded-2xl p-5 bg-white/5 backdrop-blur">
                {[
                  ["Host", episodeSpotlight.production.host, UserCircle2],
                  ["Recording Date", episodeSpotlight.production.date, Calendar],
                  ["Venue", episodeSpotlight.production.venue, MapPin],
                  ["Production Standard", episodeSpotlight.production.standard, Clapperboard],
                  ["Presented by", episodeSpotlight.production.presented, Award],
                  ["Technical Partner", episodeSpotlight.production.partner, Cpu]
                ].map(([label, value, Icon]) => (
                  <div key={label as string} className="flex items-start gap-2.5">
                    {(Icon as any) && <Icon className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />}
                    <div>
                      <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {label}
                      </dt>
                      <dd className="font-semibold text-white leading-snug">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        </section>

        {/* --- Season 01 Lineup --- */}
        <section id="guests">
          <SectionHeader
            badgeText="Season 01 Lineup"
            badgeIcon={Users}
            titlePrefix="Season #1"
            titleHighlight="Guest Directory"
            description="The inaugural broadcast of The Asif Talks — a landmark administrative governance session with Parbhani District's highest public authority."
            centered
          />

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {seasonGuests.map((g, i) => (
              <article
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-8 hover:bg-white/[0.07] transition"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-indigo-300 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                    {g.episode}
                  </span>
                  <span className={`text-xs font-bold uppercase tracking-wider ${g.theme}`}>
                    {g.focus}
                  </span>
                </div>

                <div className="mb-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Airdate
                  </p>
                  <p className="font-bold text-white flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-indigo-400" />
                    {g.date}
                  </p>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-white/20 shrink-0 bg-slate-950 flex items-center justify-center">
                    <span className="font-heading font-black text-3xl sm:text-4xl text-indigo-300 select-none">
                      ?
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-black text-white leading-tight">{g.guest}</h4>
                    <p className="text-slate-400 font-semibold mt-1 text-sm">{g.role}</p>
                  </div>
                </div>

                <div className="mt-5 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Episode Focus
                  </p>
                  {g.themes.map((t, idx) => (
                    <p key={idx} className="font-bold text-white leading-snug">
                      {t}
                    </p>
                  ))}
                </div>

                <div className="mt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Core Themes Covered
                  </p>
                  <ul className="space-y-1.5">
                    {g.topics.map((t, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* --- Host & Production Team --- */}
        <section>
          <SectionHeader
            badgeText="Host & Creator"
            badgeIcon={Clapperboard}
            titlePrefix="The Host &amp;"
            titleHighlight="Executive Production"
            description="The driving force and the complete student committee powering every episode, from stage to broadcast."
            centered
          />

          <div className="mt-8 grid lg:grid-cols-5 gap-6">
            {/* Host profile */}
            <article className="lg:col-span-2 rounded-[2rem] border border-white/10 bg-slate-950/70 backdrop-blur-xl p-6 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row gap-5 items-start">
                  <div className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-indigo-500/30 shadow-2xl shrink-0 bg-slate-900 ring-2 ring-white/10">
                    <img
                      src={hostProfile.image}
                      alt={hostProfile.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.18em] bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-2">
                      Host &amp; Creator
                    </span>
                    <h4 className="text-2xl font-black text-white leading-tight">{hostProfile.name}</h4>
                    <p className="text-sm font-bold text-indigo-200 mt-0.5">{hostProfile.designation}</p>
                    <p className="text-xs text-slate-400 font-semibold mt-1">{hostProfile.role}</p>
                  </div>
                </div>
                <p className="mt-5 text-slate-300 leading-relaxed text-sm md:text-base">{hostProfile.bio}</p>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3 relative z-10">
                <a
                  href={hostProfile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600/30 hover:bg-indigo-600 border border-indigo-400/40 text-white transition-all text-xs font-bold shadow-lg active:scale-[0.98]"
                >
                  <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </article>

            {/* Team grid */}
            <div className="lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <UsersRound className="w-4 h-4 text-indigo-400" />
                Executive Committee · DDSC Production · Production Leads
              </p>
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3.5">
                {productionTeam.map((m, i) => {
                  const Icon = m.icon;
                  return (
                    <div
                      key={i}
                      className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all backdrop-blur-md group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                          <Icon className={`w-4 h-4 ${m.color}`} />
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-white text-sm leading-tight group-hover:text-indigo-300 transition-colors">{m.name}</p>
                          <p className="text-xs font-semibold text-slate-300 mt-0.5 leading-snug">
                            {m.role}
                          </p>
                          <p className="text-[11px] text-slate-400 mt-1 leading-snug">{m.dept}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* --- Season 01 Premiere Callout --- */}
        <section className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-indigo-600 via-indigo-700 to-ndc-purple text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 shadow-2xl relative overflow-hidden border border-white/10">
          <div className="space-y-1">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-indigo-200">
              Season 01 Premiere Broadcast
            </p>
            <h3 className="text-2xl sm:text-3xl font-black leading-tight">
              Aug 31, 2026 <span className="text-indigo-200 font-semibold text-lg sm:text-2xl">· Dr. A.P.J. Abdul Kalam Auditorium</span>
            </h3>
          </div>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-white text-indigo-950 hover:bg-slate-100 rounded-xl h-12 px-6 font-black shadow-xl shrink-0 active:scale-[0.98]"
            onClick={() => window.open("https://www.youtube.com/@TheAsifTalks", "_blank")}
          >
            <Youtube className="w-4 h-4 mr-2 text-red-600" />
            Subscribe on YouTube
          </Button>
        </section>

        {/* --- Connectivity --- */}
        <section>
          <SectionHeader
            badgeText="Official Connectivity"
            badgeIcon={Globe}
            titlePrefix="Inquiries &amp;"
            titleHighlight="Partnerships"
            description="Direct lines for sponsorship inquiries, institutional collaborations and student participation questions."
            centered
          />
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            <article className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/[0.08] transition group">
              <div className="flex items-center gap-2.5 text-indigo-400 mb-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</p>
              </div>
              <a href="mailto:theasiftalks@gmail.com" className="text-lg font-bold text-white hover:text-indigo-300 transition-colors">
                theasiftalks@gmail.com
              </a>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/[0.08] transition group">
              <div className="flex items-center gap-2.5 text-emerald-400 mb-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Office Phone</p>
              </div>
              <a href="tel:+918788740090" className="text-lg font-bold text-white hover:text-emerald-300 transition-colors">
                +91 8788740090
              </a>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/[0.08] transition group">
              <div className="flex items-center gap-2.5 text-purple-400 mb-3">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Recording Headquarters</p>
              </div>
              <p className="font-semibold text-slate-200 leading-relaxed text-sm">
                Dr. A.P.J. Abdul Kalam Auditorium,
                <br />
                SSIEMS Campus, Vasmat Road,
                <br />
                Parbhani, Maharashtra – 431401
              </p>
            </article>
          </div>

          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {[
              [Youtube, "YouTube Channel", "@TheAsifTalks", "text-red-400", "https://www.youtube.com/@TheAsifTalks"],
              [Instagram, "Instagram Official", "@theasiftalks", "text-pink-400", "https://www.instagram.com/theasiftalks"],
              [Linkedin, "LinkedIn Profile", "Syed Asif", "text-blue-400", "https://www.linkedin.com/in/the-syed-asif"]
            ].map(([Icon, label, handle, color, link], i) => (
              <a
                key={i}
                href={link as string}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-2xl p-4 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                  <Icon className={`w-5 h-5 ${color as string}`} />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{label}</p>
                  <p className="font-bold text-white text-base leading-tight group-hover:text-indigo-300 transition-colors">{handle}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 ml-auto group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl md:text-2xl font-black text-white italic tracking-tight">
              Background into Advantage 💫
            </p>
            <p className="text-slate-400 font-semibold mt-1 text-sm">— The Asif Talks · DDSC</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TheAsifTalks;
