import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="get-started" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-fuchsia-500 to-rose-500 opacity-10" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gray-900 text-white p-10 sm:p-14 shadow-xl">
          <div className="grid sm:grid-cols-3 gap-8 items-center">
            <div className="sm:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-bold">Start tracking campaigns with AppTracker</h3>
              <p className="mt-2 text-white/80">Secure, fast, and built for teams. 14‑day free trial, cancel anytime.</p>
            </div>
            <div className="flex sm:justify-end items-center gap-3">
              <a href="#" className="inline-flex items-center rounded-lg bg-white text-gray-900 px-5 py-3 font-medium shadow-sm hover:bg-white/90">
                Create account
                <ArrowRight className="ml-2" size={18} />
              </a>
              <a href="#pricing" className="inline-flex items-center rounded-lg bg-transparent ring-1 ring-white/20 text-white px-5 py-3 font-medium hover:bg-white/10">
                Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
