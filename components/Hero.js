import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 px-[5%] relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #ddf4ff 40%, #f7f8fa 100%)' }}>

      {/* Bg blobs */}
      <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,159,227,0.12) 0%, transparent 70%)' }} />
      <div className="absolute bottom-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(189,239,255,0.6) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 text-[13px] font-semibold text-brand mb-6"
          >
            <span className="w-2 h-2 bg-trust rounded-full animate-pulse" />
            New Drop — Limited Edition
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sora font-extrabold text-navy leading-[1.05] tracking-tight mb-4"
            style={{ fontSize: 'clamp(38px, 5vw, 68px)', letterSpacing: '-2px' }}
          >
            Say hello to your<br />
            <em className="not-italic text-brand">new favorite</em><br />
            drinking buddy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted mb-9 font-normal max-w-md"
          >
            …and goodbye to rough mornings. Hydration reimagined for the modern lifestyle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-4 flex-wrap"
          >
            <Link href="#products"
              className="bg-brand text-white rounded-full px-8 py-4 text-base font-semibold flex items-center gap-2 no-underline transition-all hover:bg-hoverblu hover:-translate-y-0.5 hover:shadow-xl"
              style={{ boxShadow: '0 8px 24px rgba(0,159,227,0)' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,159,227,0.3)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,159,227,0)'}
            >
              Shop Recovery →
            </Link>
            <Link href="#"
              className="bg-transparent text-navy border-2 border-border rounded-full px-8 py-4 text-base font-semibold no-underline transition-all hover:border-brand hover:text-brand hover:-translate-y-0.5"
            >
              Subscribe &amp; Save
            </Link>
          </motion.div>
        </div>

        {/* Bottles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[480px] lg:h-[560px]"
        >
          <div className="absolute right-[8%] top-1/2 -translate-y-1/2 animate-float" style={{ zIndex: 2 }}>
            <Image src="/images/bottle-insulated.png" alt="AQUA Insulated Bottle" width={200} height={340}
              className="object-contain drop-shadow-2xl" style={{ filter: 'drop-shadow(0 30px 60px rgba(0,159,227,0.2))' }} />
          </div>
          <div className="absolute right-[50%] top-[55%] -translate-y-1/2 animate-float-slow" style={{ zIndex: 1, opacity: 0.85 }}>
            <Image src="/images/bottle-glass.png" alt="AQUA Glass Bottle" width={150} height={260}
              className="object-contain" style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))' }} />
          </div>

          {/* Floating tags */}
          <div className="absolute top-[12%] left-0 bg-white rounded-2xl px-4 py-3 shadow-lg text-[13px] font-semibold text-trust z-10">
            <span className="font-sora text-xl font-extrabold block text-trust">★ 4.9</span>
            Top Rated
          </div>
          <div className="absolute bottom-[18%] right-0 bg-white rounded-2xl px-4 py-3 shadow-lg text-[13px] font-semibold text-brand z-10">
            <span className="font-sora text-xl font-extrabold block text-brand">1,600+</span>
            Reviews
          </div>
        </motion.div>
      </div>
    </section>
  )
}
