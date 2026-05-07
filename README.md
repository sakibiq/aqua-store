# AQUA — Premium Hydration Store

Vercel LINK - https://aqua-store-livid.vercel.app/

A production-quality eCommerce landing page built with Next.js, Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 14** — React framework
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Smooth animations
- **React Context** — Cart state management

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

Push to GitHub, then import the repo at [vercel.com](https://vercel.com). Zero config needed.

## Project Structure

```
aqua-store/
├── components/
│   ├── CartContext.js     # Global cart state
│   ├── CartDrawer.js      # Slide-out cart
│   ├── Hero.js            # Hero section
│   ├── Navbar.js          # Sticky navbar
│   ├── Products.js        # Tabbed product grid
│   ├── Sections.js        # About, HowItWorks, Testimonials, Newsletter, Footer
│   └── SocialProof.js     # Social proof + Feature bar
├── pages/
│   ├── _app.js            # App wrapper with CartProvider
│   └── index.js           # Main page
├── public/
│   └── images/
│       ├── bottle-glass.png
│       └── bottle-insulated.png
├── styles/
│   └── globals.css
├── next.config.js
├── tailwind.config.js
└── package.json
```

## Features

- ✅ Sticky navbar (transparent → white on scroll)
- ✅ Mobile hamburger menu
- ✅ Slide-out cart drawer with animations
- ✅ Add/remove items, quantity controls
- ✅ Real-time cart counter badge
- ✅ Tabbed product section (Play / Work / Sleep)
- ✅ Scroll-triggered fade-up animations
- ✅ Floating bottle animations in hero
- ✅ Responsive — mobile, tablet, desktop
- ✅ Newsletter email capture
- ✅ Premium color palette: #009FE3 brand blue
