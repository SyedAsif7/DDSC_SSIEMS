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
    date: "16th May 2026",
    time: "12:30 PM Sharp",
    venue: "APJ Abdul Kalam Auditorium, SSIEMS Parbhani",
    points: [
      "Hands-On Workshop on GCP",
      "Conducted by a Google Developer Expert (GDE)",
      "Generative AI & LLM Fundamentals"
    ]
  },
  {
    title: "Hackathons",
    icon: "hackathons",
    points: ["National-level challenges", "Team formation & ideation", "Problem statements TBA"]
  },
  {
    title: "Workshops",
    icon: "workshops",
    points: ["Hands-on sessions", "Expert-led guidance", "Schedule TBA"]
  },
  {
    title: "Competitions",
    icon: "competitions",
    points: ["Coding contests", "Robotics & automation", "Registration TBA"]
  }
];
