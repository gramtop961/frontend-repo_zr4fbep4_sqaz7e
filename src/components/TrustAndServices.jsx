import { CheckCircle, MapPin } from "lucide-react";

const services = [
  {
    title: "Private Wine Tours",
    desc: "Tailor-made luxury itineraries across Italy with privileged access to top estates.",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Group Experiences",
    desc: "Immersive small-group journeys led by an expert host and storyteller.",
    image:
      "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Wine Consulting & Writing",
    desc: "Editorial, education, and brand advisory built on 25+ years in the field.",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c76fd?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function TrustAndServices() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Years of Experience", value: "25+" },
            { label: "DipWSET Certified", value: "WSET Diploma" },
            { label: "Journeys Curated", value: "1000+" },
            { label: "Italy • Tuscany", value: <span className="inline-flex items-center"><MapPin className="h-4 w-4 mr-1"/>Suvereto</span> },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
              <p className="text-sm text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="mt-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Signature Services
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Connecting discerning travelers with Italy’s most compelling wines, people, and places.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, idx) => (
              <div key={idx} className="group rounded-xl overflow-hidden border bg-white shadow-sm hover:shadow-lg transition">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={s.image} alt={s.title} className="h-full w-full object-cover group-hover:scale-[1.03] transition" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
                  <div className="mt-4 inline-flex items-center text-amber-600 font-medium">
                    <CheckCircle className="h-4 w-4 mr-2" /> Curated access
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
