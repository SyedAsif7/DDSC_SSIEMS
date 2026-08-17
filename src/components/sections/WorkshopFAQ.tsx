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
      question: "Do I need to bring my own laptop?",
      answer: "Yes, this is a hands-on workshop. Please bring a laptop with a modern web browser and a stable internet connection (though we will provide Wi-Fi access)."
    },
    {
      question: "Is prior knowledge of Google Cloud Platform required?",
      answer: "No prior experience with GCP is necessary. We will cover the fundamentals of Generative AI and how to navigate the platform from scratch."
    },
    {
      question: "How will I receive my E-Certificate?",
      answer: "Digital certificates will be sent to your registered email address after the workshop is completed. Please note that attendance is mandatory; certificates will only be issued to participants who are physically present during the session."
    },
    {
      question: "Is there any registration fee?",
      answer: "No, registration for this workshop is completely free of cost for all participants. However, seats are limited and will be allocated on a first-come, first-served basis."
    },
    {
      question: "Who can attend this workshop?",
      answer: "The workshop is open to all students, developers, and tech enthusiasts interested in learning about the future of AI."
    }
  ];

  return (
    <section id="faq" className="section-spacing relative overflow-hidden bg-transparent scroll-mt-28 md:scroll-mt-32">
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            badgeText="Common Questions"
            badgeIcon={HelpCircle}
            titlePrefix="Workshop"
            titleHighlight="FAQ"
            description="Everything you need to know before joining the session."
          />

          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl px-6 md:px-8 overflow-hidden transition-all duration-300 data-[state=open]:border-ndc-purple/40 shadow-xl"
                >
                  <AccordionTrigger className="text-left text-white font-bold hover:no-underline py-6 md:text-lg tracking-tight">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-on-glass-muted text-base leading-relaxed pb-6">
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
