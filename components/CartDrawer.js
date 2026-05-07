import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useCart } from './CartContext'

export default function CartDrawer() {
  const { cart, removeFromCart, changeQty, total, count, isOpen, setIsOpen } = useCart()

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-[200] cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={false}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
        className="fixed right-0 top-0 bottom-0 w-[420px] max-w-full bg-white z-[201] flex flex-col shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h3 className="font-sora text-xl font-bold text-navy">Your Cart</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 rounded-full bg-offwhite flex items-center justify-center text-lg hover:bg-border transition-colors"
          >✕</button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 text-muted">
              <div className="text-5xl mb-3">🛒</div>
              <p className="font-medium">Your cart is empty</p>
              <p className="text-sm mt-1">Add a bottle to get started</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex gap-4 py-4 border-b border-border">
                <div className="w-20 h-20 bg-skyblue rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <Image src={item.img} alt={item.name} width={70} height={70} className="object-contain h-[70px] w-auto" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[15px] text-navy mb-1">{item.name}</p>
                  <p className="font-sora font-bold text-brand text-base mb-2">${item.price}</p>
                  <div className="flex items-center gap-3">
                    <button onClick={() => changeQty(item.id, -1)} className="w-7 h-7 rounded-full border border-border bg-white flex items-center justify-center text-base hover:bg-brand hover:text-white hover:border-brand transition-all">−</button>
                    <span className="font-bold text-[15px] text-navy w-5 text-center">{item.qty}</span>
                    <button onClick={() => changeQty(item.id, 1)} className="w-7 h-7 rounded-full border border-border bg-white flex items-center justify-center text-base hover:bg-brand hover:text-white hover:border-brand transition-all">+</button>
                    <button onClick={() => removeFromCart(item.id)} className="ml-2 text-muted hover:text-red-500 transition-colors text-lg">🗑</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="px-6 py-5 border-t border-border">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-navy text-base">Subtotal</span>
              <span className="font-sora font-extrabold text-brand text-xl">${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-navy text-white rounded-full py-4 font-sora font-bold text-base hover:bg-brand transition-colors">
              Checkout →
            </button>
          </div>
        )}
      </motion.div>
    </>
  )
}
