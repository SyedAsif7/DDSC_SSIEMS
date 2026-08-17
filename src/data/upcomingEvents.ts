/**
 * upcomingEvents.ts
 * Centralized upcoming events data for Hackathons, Workshops, and Competitions.
 */
export interface UpcomingEventItem {
  title: string;
  description: string;
  image: string;
  points: string[];
  icon: 'hackathons' | 'workshops' | 'competitions' | 'podcast';
  badge?: string;
  date?: string;
  time?: string;
  venue?: string;
  sponsor?: {
    name: string;
    logo: string;
    tier: string;
  };
}

export const upcomingEvents: UpcomingEventItem[] = [
  {
    title: "The Asif Talks Podcast",
    description: "Exclusive tech podcast featuring candid conversations with industry experts, innovators, and student leaders. Get inspired by real stories, career insights, and the latest trends in technology.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=2070",
    icon: "podcast",
    badge: "New Season Coming",
    date: "Coming Soon",
    points: [
      "Interviews with industry leaders and experts",
      "Career guidance and tech trend discussions",
      "Student success stories and startup journeys",
      "Live Q&A sessions and community topics"
    ]
  },
  {
    title: "DDSC Mega Fest: The Grand Tech Celebration",
    description: "Prepare for the biggest event in the club's history. A multi-day festival featuring high-stakes hackathons, tech exhibitions, and workshops by industry leaders.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2070",
    icon: "competitions",
    badge: "Chapter 2 Finale",
    date: "TBA — Coming Soon",
    points: [
      "24-Hour Mega Hackathon with big prizes",
      "Tech Expo: Showcase your innovative projects",
      "GDE-led workshops and networking mixers",
      "Exclusive swags and networking with experts"
    ]
  }
];
