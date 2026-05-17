/**
 * upcomingEvents.ts
 * Centralized upcoming events data for Hackathons, Workshops, and Competitions.
 */
export interface UpcomingEventItem {
  title: string;
  description: string;
  image: string;
  points: string[];
  icon: 'hackathons' | 'workshops' | 'competitions';
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
  },
  {
    title: "National Hackathons",
    description: "Join our squads for the next national-level innovation challenges. We provide mentorship, resources, and a platform to build world-changing solutions.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070",
    icon: "hackathons",
    badge: "Coming Soon",
    date: "August 2026",
    points: ["National-level technical challenges", "Smart India Hackathon (SIH) prep", "Collaborative team building"]
  },
  {
    title: "Tech Workshops",
    description: "Monthly deep-dives into the latest tech stacks. From Full-stack development to DevOps, we cover everything you need to stay ahead.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070",
    icon: "workshops",
    badge: "Monthly Series",
    date: "Monthly",
    points: ["Web & Mobile development", "Cloud & DevOps sessions", "Open-source contributions"]
  }
];
