import { ArrowRight } from "lucide-react";

const experiences = [
  {
    title: "Tuscany Hidden Gems",
    desc: "Discover family-run estates and authentic terroirs beyond the beaten path.",
    duration: "3–5 days",
    image:
      "https://images.unsplash.com/photo-1518562923427-19e694fbd8e9?q=80&w=1500&auto=format&fit=crop",
  },
  {
    title: "Barolo & Barbaresco Masterclass",
    desc: "An in-depth journey through Piedmont’s legendary Nebbiolo crus.",
    duration: "4 days",
    image:
      "https://images.unsplash.com/photo-1606942561495-73e0d8c69cc1?q=80&w=1500&auto=format&fit=crop",
  },
  {
    title: "Super Tuscan Discovery",
    desc: "Taste iconic blends and meet the visionaries behind them on the coast.",
    duration: "2–3 days",
    image:
      "https://images.unsplash.com/photo-1517178315651-1c7ed1900b81?q=80&w=1500&auto=format&fit=crop",
  },
  {
    title: "Amarone & Valpolicella Highlights",
    desc: "Explore appassimento tradition with private cellars and paired dining.",
    duration: "3 days",
    image:
      "https://images.unsplash.com/photo-1501446529957-6226bd447c46?q=80&w=1500&auto=format&fit=crop",
  },
];

export default function FeaturedExperiences() {
  return (
    <section id="experiences" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
              Featured Experiences
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl">
              A selection of signature journeys blending iconic wineries with rare, authentic encounters.
            </p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center text-amber-700 hover:text-amber-800 font-medium">
            Plan Your Journey <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {experiences.map((ex, idx) => (
            <div key={idx} className="group rounded-xl overflow-hidden border bg-white shadow-sm hover:shadow-lg transition">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={ex.image} alt={ex.title} className="h-full w-full object-cover group-hover:scale-[1.03] transition" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">{ex.title}</h3>
                  <span className="text-xs rounded-full bg-amber-50 text-amber-700 px-3 py-1 border border-amber-200">
                    {ex.duration}
                  </span>
                </div>
                <p className="mt-2 text-gray-600 text-sm">{ex.desc}</p>
                <a href="#contact" className="mt-4 inline-flex items-center text-amber-700 hover:text-amber-800 font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
