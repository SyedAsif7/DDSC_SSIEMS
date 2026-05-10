/**
 * upcomingEvents.ts
 * Centralized upcoming events data for Hackathons, Workshops, and Competitions.
 */
export interface UpcomingEventItem {
  title: string;
  points: string[];
  icon: 'hackathons' | 'workshops' | 'competitions';
  badge?: string;
  date?: string;
  time?: string;
  venue?: string;
}

export const upcomingEvents: UpcomingEventItem[] = [
  {
    title: "Generative AI Workshop",
    icon: "workshops",
    badge: "Featured Event",
    date: "16th May 2026 (Saturday)",
    time: "12:30 PM Sharp",
    venue: "APJ Abdul Kalam Auditorium, SSIEMS Parbhani",
    points: [
      "Learn Generative AI concepts & real-world use cases",
      "Hands-on experience with Google Cloud Platform",
      "Build and deploy AI-powered solutions",
      "Learn from a Google Developer Expert (GDE)",
      "E-Certificate will be provided to all participants"
    ]
  },
  {
    title: "National Hackathons",
    icon: "hackathons",
    badge: "Coming Soon",
    points: ["National-level technical challenges", "Smart India Hackathon (SIH) prep", "Collaborative team building"]
  },
  {
    title: "Tech Workshops",
    icon: "workshops",
    badge: "Monthly",
    points: ["Web & Mobile development", "Cloud & DevOps sessions", "Open-source contributions"]
  },
  {
    title: "Coding Contests",
    icon: "competitions",
    badge: "Seasonal",
    points: ["Competitive programming rounds", "Logic & algorithm challenges", "Win exclusive rewards"]
  }
];
