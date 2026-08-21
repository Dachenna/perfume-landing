import { useState } from "react";
import {
  Search,
  ShoppingBag,
  Truck,
  RotateCcw,
  ShieldCheck,
  Headphones,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Play,
  Star,
} from "lucide-react";

const NAV_LINKS = ["Home", "Shop", "Collections", "About", "Lookbook", "Contact"];

const CATEGORIES = [
  {
    name: "El dravoir",
    count: "24 Items",
    img: "https://images.unsplash.com/photo-1458538977777-0549b2370168?w=600&q=80",
  },
  {
    name: "Topez demantú",
    count: "18 Items",
    img: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=600&q=80",
  },
  {
    name: "Di Goioi",
    count: "20 Items",
    img: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=600&q=80",
  },
  {
    name: "Gentleman",
    count: "16 Items",
    img: "https://images.unsplash.com/photo-1588514912908-8f5891714f8d?w=600&q=80",
  },
  {
    name: "Blue de Channels",
    count: "12 Items",
    img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&q=80"
  }
];

const FEATURES = [
  { icon: Truck, title: "Free Shipping", subtitle: "On orders over $100" },
  { icon: RotateCcw, title: "Easy Returns", subtitle: "30-day return policy" },
  { icon: ShieldCheck, title: "Secure Payment", subtitle: "100% protected" },
  { icon: Headphones, title: "24/7 Support", subtitle: "We're here to help" },
];
export default function ModezaLanding() {
  const [catIndex, setCatIndex] = useState(0);

  return (
    <div className="min-h-screen bg-[#FBF8F3] text-[#2B2622] font-sans">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-[#EAE3D8]">
        <span className="text-2xl font-serif tracking-tight">Modeza.</span>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href="#"
              className={
                i === 0
                  ? "text-[#C4602A] font-medium"
                  : "text-[#2B2622]/70 hover:text-[#2B2622] transition-colors"
              }
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Search size={18} className="hidden sm:block cursor-pointer" strokeWidth={1.75} />
          <div className="relative cursor-pointer">
            <ShoppingBag size={18} strokeWidth={1.75} />
            <span className="absolute -top-2 -right-2 bg-[#C4602A] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              1
            </span>
          </div>
          <button className="hidden sm:inline-block bg-[#2B2622] text-white text-sm px-5 py-2.5 rounded-full hover:bg-[#1a1714] transition-colors">
            Shop Now
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 md:px-12 py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
        <div>
          <p className="text-xs tracking-[0.2em] text-[#C4602A] font-medium mb-3">
            NEW COLLECTION 2026
          </p>
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] mb-2">
            The Scent of
            <br />
            <span className="italic text-[#C4602A]">Elegance</span>
          </h1>
          <p className="text-[#2B2622]/60 mt-5 max-w-md leading-relaxed">
            A fragrance is more than a scent. It is the memory you leave behind.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <button className="bg-[#2B2622] text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#1a1714] transition-colors">
              Explore Collection <ArrowRight size={16} />
            </button>
            <button className="flex items-center gap-2 text-sm font-medium border border-[#2B2622]/20 px-5 py-3 rounded-full hover:bg-black/5 transition-colors">
              <Play size={14} fill="currentColor" /> Watch Latest Show
            </button>
          </div>

          <div className="flex items-center gap-8 mt-10">
            <Stat icon={<ShoppingBag size={16} />} value="10K+" label="Happy Customers" />
            <Stat
              icon={<Star size={16} fill="currentColor" className="text-[#C4602A]" />}
              value="4.9"
              label="Customer Rating"
            />
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="absolute right-6 md:right-10 top-4 w-64 h-64 md:w-80 md:h-80 bg-[#C4602A] rounded-full" />
          <img
            src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&q=80"
            alt="Image of a luxury perfume"
            className="relative z-10 w-72 md:w-96 rounded-3xl object-cover shadow-xl"
          />
          <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur rounded-2xl px-4 py-2 shadow-sm text-xs">
            <p className="font-semibold">Premium</p>
            <p className="text-[#2B2622]/50">Quality Assured</p>
          </div>
        </div>
      </section>

      {/* Features bar */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto -mt-2 mb-16">
        <div className="bg-white rounded-2xl shadow-sm border border-[#EAE3D8] grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#EAE3D8]">
          {FEATURES.map(({ icon: Icon, title, subtitle }) => (
            <div key={title} className="flex items-center gap-3 px-5 py-5">
              <Icon size={20} strokeWidth={1.5} className="text-[#2B2622]/70 shrink-0" />
              <div>
                <p className="text-sm font-medium leading-tight">{title}</p>
                <p className="text-xs text-[#2B2622]/45 leading-tight">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by category */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-3xl">
            Shop by <span className="italic text-[#C4602A]">Category</span>
          </h2>
          <a
            href="#"
            className="hidden sm:flex items-center gap-1 text-sm text-[#C4602A] font-medium"
          >
            View All Categories <ArrowRight size={14} />
          </a>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CATEGORIES.map((cat) => (
              <div key={cat.name} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-[#EAE3D8]">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div>
                    <p className="font-medium text-sm">{cat.name}</p>
                    <p className="text-xs text-[#2B2622]/45">{cat.count}</p>
                  </div>
                  <button className="w-7 h-7 rounded-full border border-[#2B2622]/15 flex items-center justify-center hover:bg-[#2B2622] hover:text-white transition-colors">
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setCatIndex((i) => Math.max(0, i - 1))}
            aria-label="Previous categories"
            className="hidden md:flex absolute -left-4 top-1/3 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md items-center justify-center border border-[#EAE3D8]"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => setCatIndex((i) => i + 1)}
            aria-label="Next categories"
            className="hidden md:flex absolute -right-4 top-1/3 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md items-center justify-center border border-[#EAE3D8]"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </section>

      {/* Sale banner */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-16">
        <div className="bg-[#F1E4D3] rounded-3xl overflow-hidden grid md:grid-cols-2 items-center">
          <div className="p-8 md:p-14">
            <p className="text-xs tracking-[0.2em] text-[#C4602A] font-medium mb-3">
              SUMMER SALE
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-4">
              Up to 50% Off
            </h2>
            <p className="text-[#2B2622]/60 max-w-sm mb-6 leading-relaxed">
              Refresh your style this season with our exclusive collection.
              Limited time offer!
            </p>
            <button className="bg-[#2B2622] text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#1a1714] transition-colors">
              Shop the Sale <ArrowRight size={16} />
            </button>
          </div>
          <div className="relative h-64 md:h-full">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 right-6 bg-white rounded-full w-16 h-16 flex flex-col items-center justify-center text-center text-[10px] font-semibold shadow-md leading-tight">
              Limited
              <br />
              Offer
            </div>
          </div>
        </div>
      </section>
      
      {/*  Story banner*/}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-16">
        <div className="bg-[#4A2018] rounded-3xl overflow-hidden grid md:grid-cols-2 items-center">
          <div className="p-8 md:p-14">
            <p className="text-xs tracking-[0.2em] text-[#F8F3ED] font-medium mb-3">
              FROM EARTH TO ESSENCE
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
              The Story Behind the Scent
            </h2>
            <p className="text-white/60 max-w-sm mb-6 leading-relaxed">
              Every note is intentionally chosen to mirror the balance of raw
              nature. From wild-harvested botanicals to consciously distilled
              essential oils, we work directly with local growers to ensure
              purity, sustainability, and unmatched depth in every single
              bottle.
            </p>
            <button className="bg-white text-[#4A2018] px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-white/90 transition-colors">
              Discover Our Process <ArrowRight size={16} />
            </button>
          </div>

          <div className="relative h-72 md:h-full min-h-[320px] p-6 md:p-10">
            <img
              src="https://images.unsplash.com/photo-1687878267753-cb6421710196?w=500&q=80"
              alt="Wild-harvested lavender, one of the botanical ingredients"
              className="absolute top-6 left-6 md:top-10 md:left-10 w-[62%] aspect-[4/5] object-cover rounded-2xl shadow-xl rotate-[-4deg]"
            />
            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500&q=80"
              alt="Hands holding a distilled essence bottle during the extraction process"
              className="absolute bottom-6 right-6 md:bottom-10 md:right-10 w-[55%] aspect-[4/5] object-cover rounded-2xl shadow-xl rotate-[3deg] border-4 border-[#4A2018]"
            />
            
          </div>
        </div>
      </section>

      {/* Fragrance notes */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-16">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.2em] text-[#C4602A] font-medium mb-3">
            THE COMPOSITION
          </p>
          <h2 className="font-serif text-3xl md:text-4xl">
            Fragrance <span className="italic text-[#C4602A]">Notes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {NOTES.map((note, i) => (
            <div
              key={note.stage}
              className="bg-white rounded-2xl border border-[#EAE3D8] p-8 text-center"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F1E4D3] text-[#C4602A] text-sm font-semibold mb-4">
                {i + 1}
              </span>
              <p className="text-xs tracking-[0.15em] text-[#C4602A] font-medium mb-2">
                {note.stage.toUpperCase()}
              </p>
              <h3 className="font-serif text-xl mb-3">{note.name}</h3>
              <p className="text-sm text-[#2B2622]/55 leading-relaxed">{note.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>     
  );
}

function Stat({ icon, value, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[#2B2622]/70">{icon}</span>
      <div>
        <p className="text-sm font-semibold leading-tight">{value}</p>
        <p className="text-[11px] text-[#2B2622]/45 leading-tight">{label}</p>
      </div>
    </div>
  );
}
