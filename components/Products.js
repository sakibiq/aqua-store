import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from './CartContext'

const PRODUCTS = {
  play: [
    { id: 1, name: 'Ocean Glass Edition', desc: 'Sacred geometry meets premium glass', price: 79, img: '/images/bottle-glass.png', badge: 'Bestseller', reviews: 247 },
    { id: 2, name: 'Active Insulated', desc: 'Double-wall vacuum insulation', price: 89, img: '/images/bottle-insulated.png', badge: 'New', reviews: 183 },
    { id: 3, name: 'Beach Bundle', desc: 'Glass + Insulated combo set', price: 149, img: '/images/bottle-glass.png', badge: 'Save 20%', reviews: 92 },
  ],
  work: [
    { id: 4, name: 'Desk Edition Glass', desc: 'Perfect pour for focus sessions', price: 79, img: '/images/bottle-glass.png', badge: 'Popular', reviews: 156 },
    { id: 5, name: 'Pro Insulated', desc: '24hr cold, 12hr hot technology', price: 99, img: '/images/bottle-insulated.png', badge: 'Top Rated', reviews: 312 },
    { id: 6, name: 'Office Bundle', desc: 'Two insulated + carry bag', price: 189, img: '/images/bottle-insulated.png', badge: 'Bundle', reviews: 74 },
  ],
  sleep: [
    { id: 7, name: 'Night Glass Edition', desc: 'Calm your system before bed', price: 79, img: '/images/bottle-glass.png', badge: 'Calming', reviews: 118 },
    { id: 8, name: 'Sleep Insulated', desc: 'Herbal infuser lid included', price: 95, img: '/images/bottle-insulated.png', badge: 'New', reviews: 67 },
    { id: 9, name: 'Dream Bundle', desc: 'Everything for your wind-down', price: 159, img: '/images/bottle-glass.png', badge: 'Complete', reviews: 43 },
  ],
}

function ProductCard({ product }) {
  const { addToCart, cart } = useCart()
  const inCart = cart.find(i => i.id === product.id)
  const [justAdded, setJustAdded] = useState(false)

  const handleAdd = () => {
    addToCart(product)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 2000)
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-[28px] overflow-hidden cursor-pointer"
      style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
    >
      <div className="h-64 bg-skyblue flex items-center justify-center relative overflow-hidden group">
        <Image
          src={product.img}
          alt={product.name}
          width={180}
          height={220}
          className="object-contain h-[220px] w-auto transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-4 left-4 bg-brand text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
          {product.badge}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-sora font-bold text-lg text-navy mb-1">{product.name}</h3>
        <p className="text-sm text-muted mb-3">{product.desc}</p>
        <div className="flex items-center gap-2 text-xs text-muted mb-4">
          <span className="text-yellow-400 text-sm">★★★★★</span>
          <span>({product.reviews} reviews)</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-sora font-extrabold text-xl text-navy">${product.price}</span>
          <button
            onClick={handleAdd}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:scale-105 ${
              inCart || justAdded
                ? 'bg-trust text-white'
                : 'bg-brand text-white hover:bg-hoverblu'
            }`}
          >
            {inCart || justAdded ? '✓ Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Products() {
  const [tab, setTab] = useState('play')

  return (
    <section className="py-24 px-[5%] bg-offwhite" id="products">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[13px] font-bold text-brand tracking-[2px] uppercase mb-3">Our Collection</p>
          <h2 className="font-sora font-extrabold text-navy mb-4" style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-1.5px' }}>
            Designed for every moment
          </h2>
          <p className="text-lg text-muted">Whether you're playing, working, or sleeping — we've got a bottle for that.</p>
        </div>

        <div className="flex gap-1 bg-white border border-border rounded-full p-1 w-fit mx-auto mb-12">
          {['play', 'work', 'sleep'].map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`capitalize px-7 py-2.5 rounded-full text-sm font-semibold transition-all ${
                tab === t ? 'bg-brand text-white' : 'text-muted hover:text-navy'
              }`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {PRODUCTS[tab].map(p => <ProductCard key={p.id} product={p} />)}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
