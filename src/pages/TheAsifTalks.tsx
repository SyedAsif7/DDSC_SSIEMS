import {
  ArrowLeft,
  Sparkles,
  Mic,
  Users,
  Building2,
  Briefcase,
  GraduationCap,
  Calendar,
  Headphones,
  MapPin,
  Handshake,
  CheckCircle2,
  ChevronRight,
  Globe,
  Quote,
  Target,
  Radio,
  Rocket,
  Star,
  Youtube,
  Instagram,
  Linkedin,
  FileText,
  Share2
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

const offerings = [
  {
    icon: Mic,
    title: "In-Depth Podcasts",
    desc: "Long-form conversations with leaders across governance, technology and entrepreneurship."
  },
  {
    icon: Radio,
    title: "Leadership Interviews",
    desc: "Focused interviews with administrators, founders, researchers and community builders."
  },
  {
    icon: Rocket,
    title: "Live Seminars & Keynotes",
    desc: "Power-packed offline and online sessions with actionable takeaways for students."
  },
  {
    icon: FileText,
    title: "Structured Technical Sessions",
    desc: "Hands-on technical tracks and workshops delivered with communities and partners."
  }
];

const partners = [
  {
    name: "DCode Developers Club",
    tagline: "DDSC",
    role: "Student Developer Community Partner",
    icon: Users
  },
  {
    name: "SSIEMS Parbhani",
    tagline: "SSIEMS",
    role: "Academic Institution Partner",
    icon: Building2
  },
  {
    name: "Vertex Institute of Technology",
    tagline: "Vertex",
    role: "Technical & Academic Partner",
    icon: GraduationCap
  }
];

const episodeTeasers = [
  {
    number: "EP.01",
    title: "Founder's Note — Why The Asif Talks",
    guest: "Syed Asif",
    guestRole: "Founder · The Asif Talks · President DDSC",
    duration: "35 min",
    badge: "Premiere Episode",
    topics: ["Youth Leadership", "Tier-2 Opportunity Gap", "The Vision"]
  },
  {
    number: "EP.02",
    title: "From Campus to Public Service",
    guest: "Guest Reveal Soon",
    guestRole: "Leader in Public Administration",
    duration: "45 min",
    badge: "Recorded Soon",
    topics: ["Civil Services", "Governance", "Student Mindset"]
  },
  {
    number: "EP.03",
    title: "Building Tech Careers from Small Cities",
    guest: "Guest Reveal Soon",
    guestRole: "Engineering Leader / Founder",
    duration: "40 min",
    badge: "Season Lineup",
    topics: ["AI & Cloud", "Open Source", "Career Roadmaps"]
  }
];

const highlights = [
  "Real roadmaps instead of abstract theory",
  "Leaders directly connected with regional students",
  "Digital + offline reach across YouTube, Instagram, campuses",
  "Collaborations with DDSC, SSIEMS Parbhani and Vertex Institute of Technology"
];

const TheAsifTalks = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 selection:bg-pink-500/20 custom-scrollbar">
      <Helmet>
        <title>The Asif Talks | Youth · Leadership · Educational Media Platform</title>
        <meta
          name="description"
          content="The Asif Talks is a youth, leadership and educational media platform founded by Syed Asif, bridging Tier-2 and Tier-3 students with leaders across technology, public administration, entrepreneurship and research."
        />
      </Helmet>

      <CollegeHeader />
      <Navbar />

      <main className="relative pt-6 md:pt-12 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[55%] h-[55%] bg-pink-500/10 blur-[160px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[55%] h-[55%] bg-ndc-purple/10 blur-[160px] rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-[35%] left-[35%] w-[30%] h-[30%] bg-ndc-blue/10 blur-[140px] rounded-full opacity-70"></div>
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]"></div>
        </div>

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8 md:mb-12"
          >
            <Link
              to="/#upcoming-events"
              className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 active:scale-95"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Back to Upcoming Events</span>
            </Link>
          </motion.div>

          <div className="mb-20 md:mb-28">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="lg:col-span-7 space-y-8"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="outline" className="gap-2 rounded-full bg-pink-500/10 border-pink-500/30 text-pink-300 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.22em]">
                    <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                    Youth · Leadership · Educational Media
                  </Badge>
                  <Badge variant="outline" className="gap-2 rounded-full bg-white/5 border-white/10 text-violet-200 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.22em]">
                    <Globe className="w-3.5 h-3.5 text-ndc-purple" />
                    Founded by Syed Asif · For Tier-2 &amp; Tier-3 India
                  </Badge>
                </div>

                <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-pink-500 to-ndc-purple flex items-center justify-center shadow-lg shadow-pink-500/30">
                    <Mic className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-pink-300/90">
                      Podcasts · Interviews · Seminars · Keynotes
                    </p>
                    <p className="text-sm font-bold text-white">The Asif Talks — Official Platform</p>
                  </div>
                </div>

                <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] text-white uppercase italic">
                  The Asif <br />
                  <span className="gradient-text drop-shadow-[0_0_35px_rgba(236,72,153,0.25)]">Talks Podcast</span>
                </h1>

                <div className="flex items-center gap-4 flex-wrap">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-pink-500/60"></div>
                  <p className="text-violet-300 text-xs md:text-sm font-semibold uppercase tracking-[0.2em]">
                    Bridging Students &amp; Leaders · Region to Nation
                  </p>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-ndc-purple/60"></div>
                </div>

                <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed font-medium max-w-3xl">
                  <p>
                    The Asif Talks is a dedicated youth, leadership, and educational media platform founded
                    by Syed Asif, created to bridge the gap between ambitious students — especially those from
                    Tier-2 and Tier-3 cities — and prominent leaders across technology, public administration,
                    entrepreneurship, and research.
                  </p>
                  <p>
                    Through in-depth podcasts, leadership interviews, live seminars, keynotes, and structured
                    technical sessions, The Asif Talks brings practical knowledge and real-world experiences
                    closer to regional students.
                  </p>
                  <p className="text-white font-black italic border-l-4 border-pink-500 pl-6 py-2 bg-white/5 rounded-r-xl text-base md:text-xl">
                    "High-level leaders, administrators, entrepreneurs and professionals — directly to
                    regional students."
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
                  {[
                    { icon: Calendar, label: "Premiere", value: "Launching Soon" },
                    { icon: Headphones, label: "Episodes", value: "Weekly" },
                    { icon: MapPin, label: "Presence", value: "Digital + Campuses" },
                    { icon: Share2, label: "Platforms", value: "YT · IG · LinkedIn" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/5">
                      <item.icon className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500">
                          {item.label}
                        </p>
                        <p className="text-sm font-bold text-white leading-tight mt-1">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 pt-2">
                  <Button
                    size="lg"
                    className="h-12 px-7 rounded-2xl bg-gradient-to-r from-pink-500 to-ndc-purple text-white shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 hover:-translate-y-0.5 transition-all"
                  >
                    <Radio className="w-4 h-4 mr-2" />
                    Subscribe for Premiere
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 px-7 rounded-2xl bg-white/5 border-white/10 text-white hover:bg-white/10"
                  >
                    <a href="#pillars" className="flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Explore the 3 Pillars
                    </a>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:col-span-5 relative"
              >
                <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-pink-500/20 via-ndc-purple/20 to-ndc-blue/20 blur-2xl opacity-70"></div>
                <div className="relative rounded-[2.5rem] border border-white/10 bg-slate-950/70 backdrop-blur-xl p-8 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(45deg,#ffffff_25%,transparent_25%,transparent_75%,#ffffff_75%),linear-gradient(45deg,#ffffff_25%,transparent_25%,transparent_75%,#ffffff_75%)] [background-size:24px_24px] [background-position:0_0,12px_12px]"></div>

                  <div className="relative flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ndc-green opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-ndc-green"></span>
                      </span>
                      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-300">
                        Season 01 · Filming
                      </p>
                    </div>
                    <Badge variant="outline" className="rounded-md bg-pink-500/15 border-pink-500/30 text-pink-300 text-[10px] font-black uppercase tracking-[0.18em]">
                      Syed Asif
                    </Badge>
                  </div>

                  <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-pink-500 via-ndc-purple to-indigo-700 flex items-center justify-center overflow-hidden mb-8 shadow-inner">
                    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.55),transparent_55%)]"></div>
                    <div className="relative flex flex-col items-center">
                      <div className="w-40 h-40 rounded-full bg-slate-950/40 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-white/15 to-white/5 border border-white/20 flex items-center justify-center">
                          <Mic
                            className="w-16 h-16 text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.55)]"
                            strokeWidth={1.75}
                          />
                        </div>
                      </div>
                      <p className="mt-6 text-white/90 text-[11px] font-black uppercase tracking-[0.3em]">
                        The Asif Talks
                      </p>
                    </div>
                  </div>

                  <div className="relative space-y-2.5">
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                        Mission Highlights
                      </p>
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-pink-300 flex items-center gap-1.5">
                        <Headphones className="w-3.5 h-3.5" />
                        30–60 min
                      </p>
                    </div>
                    <div className="space-y-1.5">
                      {highlights.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/5 border border-white/5"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span className="text-[11px] md:text-xs font-semibold text-white/90 leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div id="pillars" className="mb-20 md:mb-28 relative">
            <SectionHeader
              badgeText="The 3 Pillars"
              badgeIcon={Target}
              titlePrefix="Built Around"
              titleHighlight="Three Focus Areas"
              description="Governance & leadership, technology & entrepreneurship, and campus-to-career initiatives — engineered to close the opportunity gap."
              centered
            />
            <div className="grid lg:grid-cols-3 gap-8 mt-14 relative z-10">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`group relative p-10 rounded-[3rem] bg-slate-900/40 border border-white/5 backdrop-blur-3xl shadow-2xl overflow-hidden transition-all duration-700 ${pillar.border}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${pillar.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all duration-700 group-hover:scale-125 group-hover:rotate-12">
                    <pillar.icon size={120} />
                  </div>

                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className={`w-16 h-16 rounded-2xl bg-white/[0.03] flex items-center justify-center border border-white/10 shadow-inner group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 ${pillar.color}`}>
                        <pillar.icon size={32} />
                      </div>
                      <span className={`text-4xl font-black italic opacity-30 ${pillar.color}`}>{pillar.step}</span>
                    </div>
                    <div className="space-y-3">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 group-hover:text-gray-300 transition-colors">
                        {pillar.subtitle}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-black text-white uppercase italic leading-[0.95] tracking-tighter group-hover:gradient-text transition-all duration-500">
                        {pillar.title}
                      </h3>
                    </div>
                    <ul className="space-y-2.5">
                      {pillar.points.map((point, p) => (
                        <li key={p} className="flex items-start gap-2.5">
                          <CheckCircle2 className={`w-4 h-4 ${pillar.color} shrink-0 mt-0.5`} />
                          <span className="text-xs md:text-sm font-semibold text-gray-300/90 leading-relaxed group-hover:text-white/90 transition-colors">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-20 md:mb-28">
            <SectionHeader
              badgeText="What the Platform Delivers"
              badgeIcon={Star}
              titlePrefix="Formats &"
              titleHighlight="Offerings"
              description="From long-form podcasts and leadership interviews to live keynotes and structured technical sessions — every format is built for real impact."
              centered
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
              {offerings.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl hover:border-white/15 transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/20 via-ndc-purple/20 to-ndc-blue/20 flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-pink-300" />
                  </div>
                  <h4 className="text-xl font-black text-white uppercase italic tracking-tight mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm font-medium text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-20 md:mb-28">
            <SectionHeader
              badgeText="Season 01 Teaser"
              badgeIcon={Radio}
              titlePrefix="Upcoming"
              titleHighlight="Episodes"
              description="A first look at the conversations designed to go far beyond inspiration — into roadmaps, systems, and real outcomes."
              centered
            />
            <div className="grid md:grid-cols-3 gap-6 mt-14">
              {episodeTeasers.map((ep, i) => (
                <motion.article
                  key={ep.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative p-8 rounded-[2.5rem] bg-slate-900/40 border border-white/5 backdrop-blur-xl overflow-hidden hover:border-white/15 transition-all duration-500 shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-ndc-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="rounded-xl bg-white/5 border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">
                        {ep.number}
                      </Badge>
                      <Badge className="rounded-xl bg-pink-500/15 border border-pink-500/30 text-pink-300 text-[10px] font-black uppercase tracking-[0.18em]">
                        {ep.badge}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase italic leading-[0.95] tracking-tighter group-hover:gradient-text transition-all duration-500">
                      {ep.title}
                    </h3>
                    <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/5">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ndc-purple/30 to-pink-500/20 border border-white/10 flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white leading-tight">{ep.guest}</p>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mt-0.5">
                          {ep.guestRole}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {ep.topics.map((t) => (
                        <Badge
                          key={t}
                          variant="outline"
                          className="rounded-full bg-white/5 border-white/10 text-[10px] font-bold uppercase tracking-widest text-gray-300"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-white/5">
                      <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-gray-400">
                        <Headphones className="w-3.5 h-3.5 text-pink-400" />
                        {ep.duration}
                      </div>
                      <Button
                        size="sm"
                        disabled
                        className="h-9 rounded-xl bg-white/5 border border-white/10 text-white/70 cursor-not-allowed text-[10px] font-black uppercase tracking-[0.2em]"
                      >
                        Premiere Soon
                      </Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="mb-20 md:mb-28">
            <div className="max-w-5xl mx-auto p-8 md:p-12 rounded-[3rem] bg-gradient-to-br from-slate-900/60 to-slate-950 border border-white/10 relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-72 h-72 bg-pink-500/10 blur-[120px] rounded-full -translate-y-32 translate-x-32 group-hover:bg-pink-500/20 transition-all"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-ndc-purple/10 blur-[120px] rounded-full translate-y-32 -translate-x-32 group-hover:bg-ndc-purple/20 transition-all"></div>

              <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-8 space-y-6">
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-pink-300">
                    <Quote size={16} />
                    <span className="text-xs font-black uppercase tracking-widest">The Mission</span>
                  </div>
                  <p className="text-white font-black italic text-2xl md:text-4xl leading-tight tracking-tight">
                    Replace abstract theory with practical career guidance and actionable roadmaps —
                    empower young people to turn their background into a competitive advantage.
                  </p>
                  <p className="text-gray-400 font-medium leading-relaxed max-w-3xl">
                    Built in collaboration with student developer communities such as DDSC, academic
                    institutions like SSIEMS Parbhani, and technical partners including Vertex Institute
                    of Technology, The Asif Talks focuses on the opportunity gap faced by students in
                    smaller cities — where limited exposure, mentorship, and professional networks can
                    become barriers to growth.
                  </p>
                </div>
                <div className="lg:col-span-4 grid grid-cols-2 gap-4">
                  {[
                    { icon: Target, label: "Focus", value: "Tier-2 & Tier-3" },
                    { icon: Users, label: "Audience", value: "Students & Builders" },
                    { icon: Globe, label: "Reach", value: "Digital + Offline" },
                    { icon: Star, label: "Promise", value: "Roadmaps · Not Talks" }
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="p-5 rounded-3xl bg-white/[0.03] border border-white/5 text-center hover:border-white/20 transition-all"
                    >
                      <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mx-auto mb-3">
                        <s.icon className="w-4 h-4 text-pink-300" />
                      </div>
                      <p className="text-lg md:text-xl font-black text-white italic tracking-tighter">
                        {s.value}
                      </p>
                      <p className="text-[9px] font-black uppercase tracking-[0.22em] text-gray-500 mt-1">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20 md:mb-28">
            <SectionHeader
              badgeText="Built With"
              badgeIcon={Handshake}
              titlePrefix="Community &"
              titleHighlight="Institutional Partners"
              description="The Asif Talks is co-built with communities and institutions that share a belief in investing in Tier-2 and Tier-3 talent."
              centered
            />
            <div className="grid md:grid-cols-3 gap-6 mt-14">
              {partners.map((partner, i) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative p-8 md:p-10 rounded-[3rem] bg-slate-900/40 border border-white/5 backdrop-blur-xl hover:border-white/20 transition-all duration-500 shadow-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-ndc-purple/5 via-transparent to-ndc-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-pink-500/20 via-ndc-purple/20 to-ndc-blue/20 border border-white/10 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <partner.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="space-y-3 text-center md:text-left">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-ndc-purple mb-1">
                          {partner.role}
                        </p>
                        <h4 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter leading-none">
                          {partner.tagline}
                        </h4>
                      </div>
                      <p className="text-sm font-bold text-white/90">{partner.name}</p>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">
                          Official Collaboration
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto space-y-10"
            >
              <div className="space-y-6">
                <h3 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-[0.95]">
                  The Right Stories. <br />
                  <span className="gradient-text">The Right Roadmaps.</span>
                </h3>
                <p className="text-gray-400 text-sm md:text-lg leading-relaxed font-medium max-w-3xl mx-auto">
                  Follow The Asif Talks on YouTube, Instagram and LinkedIn. Season 01 premieres soon —
                  with episodes, seminars and campus sessions crafted to take students from ambition
                  to action.
                </p>
              </div>

              <div className="p-10 rounded-[3rem] bg-gradient-to-br from-pink-500/20 via-ndc-purple/10 to-transparent border border-pink-500/30 shadow-[0_0_50px_rgba(236,72,153,0.12)] relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                <div className="relative z-10 space-y-4">
                  <p className="text-pink-300 font-black uppercase tracking-[0.4em] text-xs">
                    Season 01 Premiere
                  </p>
                  <h4 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
                    Launching Soon
                  </h4>
                  <p className="text-ndc-blue font-black uppercase tracking-[0.4em] text-xl">
                    Stay Tuned 🔥
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-8">
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    { icon: Youtube, label: "The Asif Talks", url: "#" },
                    { icon: Instagram, label: "@theasiftalks", url: "#" },
                    { icon: Linkedin, label: "The Asif Talks", url: "#" }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all group"
                    >
                      <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                      <span className="text-[10px] font-black uppercase tracking-widest">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
                <div className="pt-8 border-t border-white/5 w-full max-w-xs">
                  <p className="text-gray-500 font-black italic uppercase tracking-widest text-sm">
                    Background into Advantage 💫
                  </p>
                  <p className="text-gray-700 font-black uppercase tracking-[0.4em] text-[10px] mt-2">
                    — The Asif Talks
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TheAsifTalks;
