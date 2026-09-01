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
  venueMapUrl?: string;
  sponsor?: UpcomingEventSponsor;
  cta: UpcomingEventCta;
}

export const upcomingEvents: UpcomingEventItem[] = [
  {
    title: "The Asif Talks — Episode #2",
    description:
      "A flagship youth leadership media platform hosted by Syed Asif. Live Episode #2 features Hon. Mayor Syed Iqbal Syed Khwaja, Mayor of Parbhani Municipal Corporation, exploring urban city infrastructure, Smart City initiatives, civic youth engagement, and public service leadership in collaboration with DDSC, SSIEMS Parbhani, and Vertex Institute of Technology.",
    image: "/images/syed-iqbal.png",
    icon: "podcast",
    categoryLabel: "Podcast · Live Leadership Dialogue",
    badge: "Episode #2 · Hon. Mayor Syed Iqbal",
    date: "Thursday, September 3, 2026",
    time: "12:30 PM Sharp",
    venue: "Dr. A.P.J. Abdul Kalam Auditorium, SSIEMS Parbhani",
    venueMapUrl: "https://maps.app.goo.gl/UjZkHVEQpabCZZuTA",
    points: [
      "Local Governance & Mayoral Civic Leadership",
      "Urban Infrastructure, Roads & Smart City Projects",
      "Youth, Public Spaces & Student Engagement",
      "Audience Q&A with Hon. Mayor Syed Iqbal Syed Khwaja"
    ],
    cta: {
      label: "Register for Episode #2",
      href: "https://syedasif7.github.io/The-Asif-Talks-Registration-Form/",
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
