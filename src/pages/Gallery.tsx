import { useState, useMemo } from "react";
import { ChevronLeft, X, LayoutGrid, Image as ImageIcon, Search, ZoomIn, ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { getAssetPath } from "@/lib/utils";
import CollegeHeader from "@/components/layout/CollegeHeader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTopButton from "@/components/layout/ScrollToTopButton";
import { Helmet } from "react-helmet-async";

/**
 * Gallery Page
 * Displays all club photos in a filterable grid with a premium lightbox.
 */
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Comprehensive gallery data from the images directory
  const galleryItems = useMemo(() => [
    // SIH Internal Hackathon
    { url: "images/competition/SIH Internal Hackathon images/SIH 1.jpg", category: "Hackathons", title: "SIH Internal Hackathon 2024", date: "Jan 2024" },
    { url: "images/competition/SIH Internal Hackathon images/SIH 2.jpg", category: "Hackathons", title: "SIH Internal Hackathon 2024", date: "Jan 2024" },
    { url: "images/competition/SIH Internal Hackathon images/SIH 3.jpg", category: "Hackathons", title: "SIH Internal Hackathon 2024", date: "Jan 2024" },
    { url: "images/competition/SIH Internal Hackathon images/SIH 4.jpg", category: "Hackathons", title: "SIH Internal Hackathon 2024", date: "Jan 2024" },
    
    // SIH Workshop
    { url: "images/competition/SIH One Day Workshop images/Workshop conducted for Sih 1.jpg", category: "Workshops", title: "SIH Preparation Workshop", date: "Feb 2024" },
    { url: "images/competition/SIH One Day Workshop images/Workshop conducted for Sih 2.jpg", category: "Workshops", title: "SIH Preparation Workshop", date: "Feb 2024" },
    
    // Techfest
    { url: "images/competition/Techfest images/Techfest zonal codecode.jpg", category: "Competitions", title: "IIT Bombay Techfest Zonal", date: "Dec 2023" },
    { url: "images/competition/Techfest images/Techfest zonal linefollower.jpg", category: "Competitions", title: "IIT Bombay Techfest Zonal", date: "Dec 2023" },
    
    // Eclearnix
    { url: "images/competition/eclearnix hackathon 360 images/eclearnix hackathon 360.png", category: "Hackathons", title: "Eclearnix Hackathon 360", date: "Mar 2024" },
    
    // Club Meetings & Sessions (Original Gallery Items)
    { url: "images/5e6f6f4e-3e10-4db7-8c58-1abdecf9cb21.png", category: "Events", title: "First DDSC Meeting", date: "Aug 2023" },
    { url: "images/371c7355-893e-47ba-aee5-6b71e894e9ac.png", category: "Events", title: "Collaboration Session", date: "Sep 2023" },
    { url: "images/8b55aaf1-820b-4689-838d-0cb2feb287e1.png", category: "Events", title: "Knowledge Sharing", date: "Oct 2023" },
    { url: "images/42e7bbe7-c7ee-40ce-afc1-ed364cc71526.png", category: "Events", title: "Strategic Planning", date: "Nov 2023" },
    
    // Campus & Misc
    { url: "images/ssiems-campus.webp", category: "Campus", title: "SSIEMS Campus", date: "General" },
    { url: "images/DDSC Main Committe.jpeg", category: "Events", title: "DDSC Main Committee", date: "Aug 2023" },
  ], []);

  const categories = ["All", "Events", "Hackathons", "Workshops", "Competitions", "Campus"];

  const filteredItems = useMemo(() => {
    return galleryItems.filter(item => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, galleryItems]);

  const openLightbox = (index: number) => {
    document.body.style.overflow = 'hidden';
    setSelectedImage(index);
  };
  
  const closeLightbox = () => {
    document.body.style.overflow = 'auto';
    setSelectedImage(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };
  
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 selection:bg-ndc-purple/30">
      <Helmet>
        <title>Our Gallery | DCode Developers Club</title>
        <meta name="description" content="Explore the journey of DCode Developers Club through our photo gallery. Moments from hackathons, workshops, and community events." />
      </Helmet>

      <CollegeHeader />
      <Navbar />

      <main className="relative pt-12 pb-24 overflow-hidden">
        {/* Advanced Background Decorations */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-ndc-purple/10 blur-[160px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-ndc-blue/10 blur-[160px] rounded-full animate-pulse delay-1000"></div>
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="section-container relative z-10">
          {/* Top Navigation & Actions */}
          <div className="flex items-center justify-between mb-12 animate-fade-in">
            <Link 
              to="/" 
              className="group flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 active:scale-95"
            >
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
              <span className="text-xs font-bold uppercase tracking-widest">Back to Home</span>
            </Link>

            <div className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
              <div className="w-1.5 h-1.5 rounded-full bg-ndc-purple animate-ping"></div>
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500">Live Gallery Feed</span>
            </div>
          </div>

          {/* Header Section */}
          <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-ndc-purple/10 border border-ndc-purple/20 text-ndc-purple mb-8 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
              <Sparkles className="w-4 h-4" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em]">Capturing Excellence</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-white leading-none">
              Our Visual <span className="gradient-text">Journey</span>
            </h1>
            
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-[1.5px] w-16 bg-gradient-to-r from-transparent via-ndc-purple/50 to-transparent"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-ndc-purple shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
              <div className="h-[1.5px] w-16 bg-gradient-to-r from-transparent via-ndc-blue/50 to-transparent"></div>
            </div>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Explore the moments that define DCode — from high-stakes hackathons to collaborative learning workshops.
            </p>
          </div>

          {/* Filter & Search Bar - Premium Design */}
          <div className="sticky top-24 z-30 mb-16 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="p-4 rounded-[2.5rem] bg-slate-900/40 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-500 border flex items-center gap-2 min-h-[44px] ${
                      activeCategory === cat
                        ? "bg-ndc-purple text-white border-ndc-purple shadow-[0_8px_20px_rgba(168,85,247,0.3)] scale-105"
                        : "bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:text-white hover:border-white/10"
                    }`}
                  >
                    {cat === "All" && <LayoutGrid size={14} />}
                    {cat}
                  </button>
                ))}
              </div>

              <div className="relative w-full lg:w-80">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search by event or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-6 py-3.5 rounded-[1.5rem] text-[11px] font-bold uppercase tracking-widest bg-black/40 text-gray-200 border border-white/10 placeholder:text-gray-600 focus:outline-none focus:border-ndc-purple/50 focus:ring-4 focus:ring-ndc-purple/10 transition-all min-h-[48px]"
                />
              </div>
            </div>
          </div>

          {/* Gallery Grid - Masonry-like spacing */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
              {filteredItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/5 bg-slate-900/20 cursor-pointer hover:border-ndc-purple/40 transition-all duration-700 hover:-translate-y-2 will-change-transform shadow-2xl"
                >
                  <img
                    src={getAssetPath(item.url)}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                  />
                  
                  {/* Premium Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest bg-ndc-purple text-white">
                          {item.category}
                        </span>
                        {item.date && (
                          <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{item.date}</span>
                        )}
                      </div>
                      <h3 className="text-white font-black text-xl leading-tight tracking-tight drop-shadow-lg">{item.title}</h3>
                    </div>
                  </div>

                  {/* Zoom Indicator */}
                  <div className="absolute top-6 right-6 p-3 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100">
                    <ZoomIn size={18} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 animate-fade-in">
              <div className="inline-flex p-8 rounded-[2.5rem] bg-white/5 border border-white/10 mb-8 shadow-inner">
                <ImageIcon className="w-16 h-16 text-gray-700" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight">No moments found</h3>
              <p className="text-lg text-gray-500 max-w-md mx-auto">We couldn't find any photos matching your current filters. Try exploring other categories.</p>
              <button 
                onClick={() => {setActiveCategory("All"); setSearchQuery("");}}
                className="mt-8 px-8 py-3 rounded-2xl bg-ndc-purple/10 border border-ndc-purple/30 text-ndc-purple font-bold text-xs uppercase tracking-widest hover:bg-ndc-purple hover:text-white transition-all duration-300"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Bottom Call to Action */}
          <div className="mt-32 text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="p-12 rounded-[3rem] border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent max-w-4xl mx-auto relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-ndc-purple/10 rounded-full blur-[100px] group-hover:bg-ndc-purple/20 transition-all duration-1000"></div>
              
              <h4 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">Want to be in the next shot?</h4>
              <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto font-medium">Join our community today and participate in our upcoming national-level events and workshops.</p>
              
              <Link 
                to="/#join"
                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-ndc-purple to-ndc-blue text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl hover:shadow-ndc-purple/30 transition-all duration-500 hover:scale-105 active:scale-95"
              >
                Join the Squad
                <Sparkles className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Advanced Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-2xl animate-fade-in p-4 md:p-12"
          onClick={closeLightbox}
        >
          {/* Controls */}
          <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-[120]">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                <ImageIcon className="w-5 h-5 text-ndc-purple" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Viewing Moment</p>
                <p className="text-xs font-bold text-white uppercase tracking-widest">{selectedImage + 1} of {filteredItems.length}</p>
              </div>
            </div>
            
            <button 
              className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all active:scale-90"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>
          </div>
          
          <button 
            onClick={prevImage}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-5 rounded-3xl bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 hover:border-ndc-purple/40 transition-all z-[110] active:scale-90 group"
          >
            <ChevronLeft size={40} className="transition-transform group-hover:-translate-x-1" />
          </button>
          
          <button 
            onClick={nextImage}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-5 rounded-3xl bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 hover:border-ndc-purple/40 transition-all z-[110] active:scale-90 group"
          >
            <ChevronLeft size={40} className="rotate-180 transition-transform group-hover:translate-x-1" />
          </button>

          <div className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center gap-8" onClick={e => e.stopPropagation()}>
            <div className="relative group/image w-full flex justify-center">
              <div className="absolute -inset-4 bg-ndc-purple/20 blur-3xl rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity duration-1000"></div>
              <img 
                src={getAssetPath(filteredItems[selectedImage].url)} 
                alt={filteredItems[selectedImage].title}
                className="max-w-full max-h-[75vh] object-contain rounded-[2rem] shadow-[0_20px_80px_rgba(0,0,0,0.8)] border border-white/10 relative z-10"
              />
            </div>
            
            <div className="text-center animate-slide-up relative z-10">
              <span className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] bg-ndc-purple text-white mb-4 inline-block shadow-lg">
                {filteredItems[selectedImage].category}
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-2 drop-shadow-2xl">
                {filteredItems[selectedImage].title}
              </h2>
              {filteredItems[selectedImage].date && (
                <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs">{filteredItems[selectedImage].date}</p>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Gallery;

