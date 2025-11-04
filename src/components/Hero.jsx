import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop"
        alt="Tuscan vineyard at sunset"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <p className="uppercase tracking-[0.3em] text-sm/relaxed text-white/80 mb-4">
          Filippo Magnani • Wine Travel Expert & Writer, DipWSET
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Connecting You to Italy's Finest Wines & Winemakers Since 1999
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          Exclusive Wine Journeys Curated by DipWSET Expert
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-amber-500 hover:bg-amber-600 px-6 py-3 text-base font-medium shadow-lg shadow-amber-500/20 transition"
          >
            Plan Your Wine Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#experiences"
            className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 px-6 py-3 text-base font-medium backdrop-blur border border-white/20"
          >
            Explore Wine Experiences
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
          <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
            <p className="text-2xl font-semibold">25+</p>
            <p className="text-sm text-white/80">Years of Expertise</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
            <p className="text-2xl font-semibold">DipWSET</p>
            <p className="text-sm text-white/80">Certified</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
            <p className="text-2xl font-semibold">1000+</p>
            <p className="text-sm text-white/80">Journeys Curated</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
            <p className="text-2xl font-semibold">Global</p>
            <p className="text-sm text-white/80">Featured & Published</p>
          </div>
        </div>
      </div>
    </section>
  );
}
