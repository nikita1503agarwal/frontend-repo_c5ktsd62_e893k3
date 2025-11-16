import { Megaphone, Receipt, Wallet, Users, ShieldCheck, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Megaphone,
    title: 'Campaigns',
    desc: 'Plan briefs, track deliverables, and monitor performance across all channels.'
  },
  {
    icon: Users,
    title: 'Creator CRM',
    desc: 'Manage influencer profiles, rates, contracts and communication in one place.'
  },
  {
    icon: Receipt,
    title: 'Invoices',
    desc: 'Generate branded invoices and reconcile against milestones effortlessly.'
  },
  {
    icon: Wallet,
    title: 'Payments',
    desc: 'Automated payouts with status tracking, approvals and audit trail.'
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    desc: 'Real-time campaign insights and ROI dashboards for your clients.'
  },
  {
    icon: ShieldCheck,
    title: 'Compliance',
    desc: 'Contracts, W-9/KYC, and disclosure guidance built-in.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Everything you need to run influencer ops</h2>
          <p className="mt-4 text-gray-600">Purpose-built tooling to move faster, stay compliant, and deliver better outcomes.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-600 via-fuchsia-500 to-rose-500 text-white flex items-center justify-center shadow-sm">
                <Icon size={24} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
