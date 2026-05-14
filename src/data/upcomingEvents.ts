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
    title: "Vibe Coding: GenAI Apps",
    description: "Master the art of rapid application development using Google Gemini and Cloud Run. Learn to build and deploy production-ready AI apps in record time.",
    image: "/images/events/Hands-on workshop on Vibe Coding.jpg",
    icon: "workshops",
    badge: "Featured Workshop",
    date: "May 16, 2026",
    time: "12:30 PM Sharp",
    venue: "APJ Abdul Kalam Auditorium, SSIEMS Parbhani",
    sponsor: {
      name: "HP World, Parbhani",
      logo: "/images/sponsors/sponser_hpworldparbhani.jpeg",
      tier: "Silver Sponsor"
    },
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
    description: "Join our squads for the next national-level innovation challenges. We provide mentorship, resources, and a platform to build world-changing solutions.",
    image: "/images/hackathon-placeholder.webp",
    icon: "hackathons",
    badge: "Coming Soon",
    date: "August 2026",
    points: ["National-level technical challenges", "Smart India Hackathon (SIH) prep", "Collaborative team building"]
  },
  {
    title: "Tech Workshops",
    description: "Monthly deep-dives into the latest tech stacks. From Full-stack development to DevOps, we cover everything you need to stay ahead.",
    image: "/images/workshop-placeholder.webp",
    icon: "workshops",
    badge: "Monthly Series",
    date: "Monthly",
    points: ["Web & Mobile development", "Cloud & DevOps sessions", "Open-source contributions"]
  }
];
