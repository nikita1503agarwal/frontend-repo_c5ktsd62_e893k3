import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-white via-blue-50 to-purple-50 pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900"
              >
                Run your influencer campaigns with clarity
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-6 text-lg sm:text-xl text-gray-700 max-w-2xl"
              >
                AppTracker is the all‑in‑one workspace for agencies to manage campaigns, creators, invoices and payments — in one place.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-8 flex flex-col sm:flex-row gap-3"
              >
                <a href="#get-started" className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-6 py-3 font-medium shadow-sm hover:bg-black/90 transition-colors">
                  Get Started
                </a>
                <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-white/70 backdrop-blur px-6 py-3 font-medium text-gray-900 shadow-sm ring-1 ring-black/5 hover:bg-white">
                  See Features
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
              >
                {[
                  { metric: '500+', label: 'Creators managed' },
                  { metric: '120+', label: 'Active campaigns' },
                  { metric: '3M+', label: 'Audience reach' },
                  { metric: '$2.4M', label: 'Payments tracked' },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl bg-white/70 backdrop-blur px-4 py-3 ring-1 ring-black/5">
                    <p className="text-2xl font-bold text-gray-900">{item.metric}</p>
                    <p className="text-xs text-gray-600">{item.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  )
}
