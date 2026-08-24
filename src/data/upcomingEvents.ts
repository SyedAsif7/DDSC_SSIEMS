/**
 * upcomingEvents.ts
 * Centralized upcoming events data for Hackathons, Workshops, Competitions, and Podcasts.
 */

export type UpcomingEventIcon =
  | "hackathons"
  | "workshops"
  | "competitions"
  | "podcast";

export type UpcomingEventCtaVariant =
  | "primary-gradient"
  | "primary-solid"
  | "outline"
  | "ghost-disabled";

export interface UpcomingEventCta {
  label: string;
  href?: string;
  variant: UpcomingEventCtaVariant;
  disabled?: boolean;
}

export interface UpcomingEventSponsor {
  name: string;
  logo: string;
  tier: string;
}

export interface UpcomingEventItem {
  title: string;
  description: string;
  image: string;
  points: string[];
  icon: UpcomingEventIcon;
  categoryLabel: string;
  badge?: string;
  date: string;
  time?: string;
  venue?: string;
  sponsor?: UpcomingEventSponsor;
  cta: UpcomingEventCta;
}

export const upcomingEvents: UpcomingEventItem[] = [
  {
    title: "The Asif Talks",
    description:
      "A youth, leadership, and educational media platform founded by Syed Asif, bridging the gap between ambitious students from Tier-2 and Tier-3 cities and prominent leaders across technology, public administration, entrepreneurship, and research. Delivering in-depth podcasts, leadership interviews, live seminars, keynotes, and structured technical sessions in collaboration with DDSC, SSIEMS Parbhani, and Vertex Institute of Technology.",
    image: "/images/the-asif-talks-logo.jpg",
    icon: "podcast",
    categoryLabel: "Podcast · Media Platform",
    badge: "Syed Asif · Official Platform",
    date: "Launching Soon",
    time: "Episodes Weekly",
    venue: "YouTube · Instagram · Live Seminars",
    points: [
      "Public Governance & Leadership Dialogues",
      "Tech, Startups & Entrepreneurship Tracks",
      "Campus-to-Career Offline & Live Sessions",
      "AI, Cloud, Open Source & Research Journeys"
    ],
    cta: {
      label: "View Full Details",
      href: "/the-asif-talks",
      variant: "primary-gradient",
      disabled: false
    }
  },
  {
    title: "DDSC Mega Fest",
    description:
      "The Grand Tech Celebration and Chapter 2 Finale. A multi-day festival featuring high-stakes hackathons, a tech exhibition for innovative student projects, and industry-led workshops — followed by networking, community showcases and exclusive swags.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2070",
    icon: "competitions",
    categoryLabel: "Festival · Hackathon · Expo",
    badge: "Chapter 2 Finale",
    date: "TBA · Coming Soon",
    points: [
      "24-Hour Mega Hackathon with big prizes",
      "Tech Expo: Showcase your innovative projects",
      "GDE-led workshops and networking mixers",
      "Exclusive swags and networking with experts"
    ],
    cta: {
      label: "Coming Soon",
      variant: "ghost-disabled",
      disabled: true
    }
  }
];
