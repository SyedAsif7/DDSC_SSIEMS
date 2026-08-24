import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeader from "@/components/ui/SectionHeader";
import { HelpCircle } from "lucide-react";

const WorkshopFAQ = () => {
  const faqs = [
    {
      question: "What is DCode Developers Club (DDSC) and who can join?",
      answer: "DCode Developers Club is the largest student-led developer community at SSIEMS Parbhani. It is open to all students across CSE, AI/DS, and allied engineering branches who are passionate about coding, software development, cloud computing, AI, hackathons, and leadership."
    },
    {
      question: "What is 'The Asif Talks' and how can students watch or attend?",
      answer: "The Asif Talks is a flagship studio-grade leadership and public governance talk series hosted by Syed Asif. It bridges regional youth with district administrators, tech leaders, and founders. Live studio sessions are hosted at the Dr. A.P.J. Abdul Kalam Auditorium, and all episodes are broadcast on YouTube (@TheAsifTalks) and Instagram (@theasiftalks)."
    },
    {
      question: "How does DDSC prepare students for Smart India Hackathon (SIH) & National Hackathons?",
      answer: "DDSC conducts internal college hackathons, mentorship sessions, problem statement breakdowns, and multidisciplinary guidance workshops. In SIH 2025, DDSC guided 15 teams and successfully sent 8 teams to the national level, along with securing 4th position at IIT Bombay Techfest."
    },
    {
      question: "Are workshops and events free of cost? How are certificates issued?",
      answer: "Yes, DDSC workshops and community tech sessions (like the Google Cloud Vibe Coding Workshop) are completely free of charge. Verified digital E-Certificates are issued to all attendees who actively participate and complete hands-on activities during the sessions."
    },
    {
      question: "Do I need prior coding experience before joining the club?",
      answer: "Not at all! DDSC is built on a peer-learning culture. Whether you are a beginner writing your first line of code or an experienced developer building full-stack applications, we have dedicated tracks, beginner workshops, and senior mentorship to guide your growth."
    },
    {
      question: "How can I join the club or apply for core team leadership roles?",
      answer: "You can apply anytime through our online membership form via the 'Apply to Join Now' button. Recruitment for core team divisions (Technical, Design, Event Management, Public Relations) opens annually with the announcement of each new club chapter."
    }
  ];

  return (
    <section id="faq" className="section-spacing relative overflow-hidden bg-transparent scroll-mt-28 md:scroll-mt-32">
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            badgeText="Got Questions?"
            badgeIcon={HelpCircle}
            titlePrefix="Frequently Asked"
            titleHighlight="Questions"
            description="Everything you need to know about DCode Developers Club, hackathons, workshops, and The Asif Talks."
            centered
          />

          <div className="animate-fade-in mt-12" style={{ animationDelay: '200ms' }}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl px-6 md:px-8 overflow-hidden transition-all duration-300 data-[state=open]:border-ndc-purple/40 hover:border-white/20 shadow-xl"
                >
                  <AccordionTrigger className="text-left text-white font-bold hover:no-underline py-6 text-base md:text-lg tracking-tight">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-on-glass-muted text-sm md:text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-ndc-purple/5 to-transparent -z-10"></div>
    </section>
  );
};

export default WorkshopFAQ;
