import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export function About() {
  return (
    <section className="py-24 px-[5%] bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative h-[420px] lg:h-[500px]">
          <div className="absolute left-0 top-0 w-[65%] rounded-3xl overflow-hidden" style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.12)' }}>
            <Image src="/images/bottle-glass.png" alt="Glass bottle" width={400} height={340} className="w-full h-[340px] object-cover object-center" />
          </div>
          <div className="absolute right-0 bottom-0 w-[55%] rounded-3xl overflow-hidden" style={{ boxShadow: '0 20px 50px rgba(0,159,227,0.2)' }}>
            <Image src="/images/bottle-insulated.png" alt="Insulated bottle" width={340} height={260} className="w-full h-[260px] object-cover object-center" />
          </div>
          <div className="absolute top-[42%] left-[36%] bg-white rounded-2xl p-4 text-center z-10" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <span className="font-sora text-3xl font-extrabold text-brand block">7+</span>
            <span className="text-[13px] font-semibold text-navy">Years of Craft</span>
          </div>
        </div>

        <div>
          <p className="text-[13px] font-bold text-brand tracking-[2px] uppercase mb-3">More about us</p>
          <h2 className="font-sora font-extrabold text-navy mb-5" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', letterSpacing: '-1px' }}>
            Hydration born from purpose
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-5">
            We started AQUA because we believed hydration could be beautiful. Not just functional, but an experience — a ritual you look forward to every single morning.
          </p>
          <p className="text-lg text-muted leading-relaxed mb-6">
            Every bottle is crafted with intention. From the sacred geometry etched into our glass editions to the precision engineering in our insulated line.
          </p>
          <ul className="mb-8 space-y-3">
            {[
              'Handcrafted with premium borosilicate glass',
              'Double-wall vacuum insulation technology',
              'BPA-free, phthalate-free, and toxin-free',
              'Ships carbon-neutral with zero plastic packaging',
            ].map(item => (
              <li key={item} className="flex items-center gap-3 text-[15px] font-medium text-navy">
                <span className="text-trust font-bold text-base">✓</span> {item}
              </li>
            ))}
          </ul>
          <Link href="#products" className="inline-flex items-center gap-2 bg-brand text-white rounded-full px-8 py-4 font-semibold text-base no-underline hover:bg-hoverblu transition-colors">
            Explore Collection →
          </Link>
        </div>
      </div>
    </section>
  )
}

export function HowItWorks() {
  const steps = [
    { num: 1, title: 'Morning Recovery', desc: 'Start your day with the Glass Edition. Electrolytes meet sacred geometry — rise with intention.' },
    { num: 2, title: 'Liquid Focus', desc: 'Take the Insulated Edition to work. Stays cold 24h, hot 12h. Your thinking is clearer when hydrated.' },
    { num: 3, title: 'Dream Well', desc: 'Wind down with our calming night formula. Prepare your body and mind for deep, restorative sleep.' },
  ]

  return (
    <section className="py-24 px-[5%] bg-offwhite">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[13px] font-bold text-brand tracking-[2px] uppercase mb-3">The System</p>
        <h2 className="font-sora font-extrabold text-navy mb-4" style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-1px' }}>
          Your daily hydration ritual
        </h2>
        <p className="text-lg text-muted mb-16">Three moments, three bottles. A complete system for how you actually live.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-0.5"
            style={{ background: 'linear-gradient(90deg, #009FE3, #BDEFFF)' }} />
          {steps.map(s => (
            <div key={s.num} className="relative z-10 group">
              <div className="w-20 h-20 bg-brand text-white rounded-full flex items-center justify-center font-sora text-3xl font-extrabold mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ boxShadow: '0 8px 24px rgba(0,159,227,0.3)' }}>
                {s.num}
              </div>
              <h3 className="font-sora font-bold text-xl text-navy mb-2">{s.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const reviews = [
  { text: "I've tried every hydration product on the market. AQUA is simply on another level. The glass bottle is stunning — it's become my morning ritual.", name: 'Sarah L.', role: 'Yoga Instructor, LA', init: 'SL' },
  { text: 'The insulated bottle keeps my coffee hot for literally 12 hours. I\'ve dropped it three times and it looks brand new. Worth every penny.', name: 'Mark K.', role: 'Software Engineer, NYC', init: 'MK' },
  { text: 'Finally a wellness brand that walks the walk. Zero plastic packaging, incredible product. I gifted one to everyone in my family.', name: 'Jamie R.', role: 'Environmental Consultant', init: 'JR' },
]

export function Testimonials() {
  return (
    <section className="py-24 px-[5%] bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[13px] font-bold text-brand tracking-[2px] uppercase mb-3">What People Say</p>
          <h2 className="font-sora font-extrabold text-navy" style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-1px' }}>Loved by thousands</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-offwhite rounded-3xl p-7 border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-white">
              <div className="text-yellow-400 tracking-widest mb-4">★★★★★</div>
              <p className="text-[15px] text-navy leading-relaxed mb-5 italic">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-skyblue text-brand flex items-center justify-center font-bold text-sm flex-shrink-0">{r.init}</div>
                <div>
                  <div className="font-bold text-sm text-navy">{r.name}</div>
                  <div className="text-xs text-muted">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  const subscribe = () => {
    if (!email || !email.includes('@')) { setMsg('Please enter a valid email.'); return }
    setMsg('🎉 Welcome! Your 15% discount is on its way.')
    setEmail('')
  }

  return (
    <div className="mx-[5%] mb-16 rounded-[32px] px-16 py-20 text-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0A3B5C 0%, #0f5080 100%)' }}>
      <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,159,227,0.2), transparent 60%)' }} />
      <h2 className="font-sora font-extrabold text-white mb-3 relative" style={{ fontSize: 'clamp(24px, 4vw, 48px)', letterSpacing: '-1px' }}>
        Get 15% off your first order
      </h2>
      <p className="text-white/70 text-lg mb-9 relative">Join 20,000+ hydration enthusiasts. Exclusive drops, tips, and discounts — delivered.</p>
      <div className="flex gap-3 max-w-md mx-auto flex-wrap justify-center relative">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 min-w-[240px] px-6 py-4 rounded-full bg-white/10 border-2 border-white/20 text-white placeholder-white/50 text-[15px] outline-none focus:border-brand transition-colors"
        />
        <button
          onClick={subscribe}
          className="bg-brand text-white rounded-full px-8 py-4 text-[15px] font-semibold whitespace-nowrap hover:bg-white hover:text-brand transition-colors"
        >
          Subscribe →
        </button>
      </div>
      {msg && <p className="mt-4 text-white/80 text-sm">{msg}</p>}
    </div>
  )
}

export function Footer() {
  const cols = [
    { title: 'Shop', links: ['Glass Edition', 'Insulated Series', 'Bundles', 'Accessories', 'Gift Cards'] },
    { title: 'Company', links: ['About Us', 'Sustainability', 'Press', 'Careers'] },
    { title: 'Support', links: ['FAQ', 'Shipping', 'Returns', 'Contact Us', 'Wholesale'] },
  ]

  return (
    <footer className="bg-navy px-[5%] pt-16 pb-8 text-white/70">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <span className="font-sora font-extrabold text-2xl text-brand block mb-3">◉ AQUA</span>
            <p className="text-sm leading-relaxed max-w-[260px]">Premium hydration crafted with purpose. Every bottle is a ritual, every sip a step toward your best self.</p>
          </div>
          {cols.map(col => (
            <div key={col.title}>
              <h4 className="font-sora font-bold text-sm text-white uppercase tracking-widest mb-4">{col.title}</h4>
              {col.links.map(l => (
                <Link key={l} href="#" className="block text-sm text-white/60 no-underline mb-2.5 hover:text-white transition-colors">{l}</Link>
              ))}
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[13px]">© 2025 AQUA Hydration. All rights reserved.</p>
          <div className="flex gap-6 flex-wrap">
            {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map(l => (
              <Link key={l} href="#" className="text-[13px] text-white/50 no-underline hover:text-white transition-colors">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
