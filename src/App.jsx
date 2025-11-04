import Hero from "./components/Hero";
import TrustAndServices from "./components/TrustAndServices";
import FeaturedExperiences from "./components/FeaturedExperiences";
import FinalCTA from "./components/FinalCTA";

function NavBar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight text-gray-900">Filippo Magnani</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#experiences" className="hover:text-amber-700">Experiences</a>
          <a href="#contact" className="hover:text-amber-700">Contact</a>
          <a href="#contact" className="inline-flex items-center rounded-md bg-amber-600 hover:bg-amber-700 px-4 py-2 text-white font-medium">Plan Your Journey</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Filippo Magnani • Fufluns Wine Tours</p>
          <div className="flex items-center gap-4">
            <a href="#experiences" className="hover:text-amber-700">Wine Experiences</a>
            <a href="#contact" className="hover:text-amber-700">Work With Me</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div id="top" className="min-h-screen w-full bg-white text-gray-900">
      <NavBar />
      <main className="pt-16">
        <Hero />
        <TrustAndServices />
        <FeaturedExperiences />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
