import { ExternalLink, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAssetPath } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

const PartnersSection = () => {
  const partners = [
    {
      name: "Shri Shivaji Institute of Engineering and Management Studies",
      description: "Our official academic partner providing resources, spaces, and academic support for the club's activities and growth.",
      logo: "images/ssiems-logo.png",
      label: "Official Academic Partner",
      labelColor: "text-ndc-blue",
      website: "https://ssiems.org.in/"
    },
  ];
  
  return (
    <section id="partners" className="py-24 bg-transparent scroll-mt-28 md:scroll-mt-32">
      <div className="section-container">
        <SectionHeader 
          badgeText="Collaborations"
          badgeIcon={Handshake}
          titlePrefix="Our"
          titleHighlight="Partners"
          description="We collaborate with leading organizations to bring the best opportunities to our members."
          centered
        />

        {/* Partners Grid */}
        <div className="max-w-4xl mx-auto mt-12">
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] border backdrop-blur-xl bg-slate-900/40 border-white/10 shadow-2xl hover:border-ndc-blue/40 transition-all duration-500 group"
            >
              <div className="flex flex-col md:flex-row gap-10 items-center md:items-start text-center md:text-left">
                {/* Logo with Glass Frame */}
                <div className="w-40 h-40 flex-shrink-0 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-105 transition-transform duration-500 shadow-inner">
                  <img 
                    src={getAssetPath(partner.logo)} 
                    alt={`${partner.name} Logo`} 
                    className="w-full h-full object-contain filter drop-shadow-lg"
                  />
                </div>
                
                {/* Content Area */}
                <div className="flex-1 space-y-6">
                  <div>
                    <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] bg-white/5 ${partner.labelColor} border border-white/5 mb-4`}>
                      {partner.label}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-tight">
                      {partner.name}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed">
                    {partner.description}
                  </p>

                  <Button 
                    variant="outline" 
                    className="h-12 px-8 rounded-xl border-white/10 bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-widest text-[10px] transition-all"
                    onClick={() => window.open(partner.website, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Official Website
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
