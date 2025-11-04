import { Calendar, Mail, Phone } from "lucide-react";
import { useState } from "react";

export default function FinalCTA() {
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("Thank you. Your request has been received.");
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Ready to Discover Italy's Wine Soul?
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Share a few details and we’ll craft a bespoke journey centered on your interests and timeframe.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-6 rounded-xl border bg-gray-50">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input required type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-amber-500 focus:ring-amber-500" placeholder="Your name" />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input required type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-amber-500 focus:ring-amber-500" placeholder="you@example.com" />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700">Preferred Dates</label>
                <div className="mt-1 relative">
                  <input type="text" className="w-full rounded-md border-gray-300 focus:border-amber-500 focus:ring-amber-500 pl-10" placeholder="e.g., September 10–15" />
                  <Calendar className="h-4 w-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700">Destination Focus</label>
                <input type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-amber-500 focus:ring-amber-500" placeholder="Tuscany, Piedmont, Veneto..." />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Interests & Notes</label>
                <textarea rows={4} className="mt-1 w-full rounded-md border-gray-300 focus:border-amber-500 focus:ring-amber-500" placeholder="Tell us about your wine preferences, travel style, and any special requests." />
              </div>
              <div className="md:col-span-2 flex items-center justify-between">
                <p className="text-sm text-gray-600">By submitting, you agree to be contacted regarding your request.</p>
                <button type="submit" className="inline-flex items-center rounded-md bg-amber-600 hover:bg-amber-700 px-6 py-2.5 text-white font-medium">
                  Request Proposal
                </button>
              </div>
              {status && (
                <div className="md:col-span-2 text-green-700 bg-green-50 border border-green-200 rounded-md px-4 py-2">
                  {status}
                </div>
              )}
            </form>
          </div>
          <div className="p-6 rounded-xl border">
            <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
            <p className="mt-2 text-sm text-gray-600">Prefer a direct conversation? Get in touch.</p>
            <div className="mt-4 space-y-3 text-sm">
              <a href="mailto:info@fufluns.com" className="flex items-center text-gray-700 hover:text-amber-700">
                <Mail className="h-4 w-4 mr-2" /> info@fufluns.com
              </a>
              <a href="tel:+390000000000" className="flex items-center text-gray-700 hover:text-amber-700">
                <Phone className="h-4 w-4 mr-2" /> +39 000 000 000
              </a>
              <p className="text-gray-500 text-xs mt-6">Fufluns Wine Tours — Established 1999</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
