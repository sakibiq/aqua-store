import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCart } from './CartContext'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['Shop', 'Subscribe', 'Learn', 'Blog', 'Guarantee', 'Find a Store']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, setIsOpen } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 px-[5%] transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm' : ''}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between h-[72px]">
          <Link href="/" className="font-sora font-extrabold text-xl text-brand tracking-tight">◉ AQUA</Link>

          <ul className="hidden lg:flex gap-7 list-none">
            {links.map(l => (
              <li key={l}>
                <Link href="#" className="text-sm font-medium text-navy opacity-70 hover:opacity-100 hover:text-brand transition-all no-underline">
                  {l}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 bg-brand text-white rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:bg-hoverblu hover:-translate-y-0.5"
            >
              🛒 Cart
              <span className="bg-white text-brand rounded-full w-5 h-5 text-xs font-bold flex items-center justify-center">{count}</span>
            </button>
            <button className="lg:hidden flex flex-col gap-1.5 p-1" onClick={() => setMobileOpen(v => !v)}>
              <span className="w-6 h-0.5 bg-navy rounded block transition-all" />
              <span className="w-6 h-0.5 bg-navy rounded block transition-all" />
              <span className="w-6 h-0.5 bg-navy rounded block transition-all" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-[72px] left-0 right-0 bg-white z-40 px-[5%] shadow-xl"
          >
            {links.map(l => (
              <Link key={l} href="#" className="block py-4 text-navy font-medium border-b border-border text-base no-underline hover:text-brand transition-colors">
                {l}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
