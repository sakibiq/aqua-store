import Head from 'next/head'
import Navbar from '../components/Navbar'
import CartDrawer from '../components/CartDrawer'
import Hero from '../components/Hero'
import { SocialProof, FeatureBar } from '../components/SocialProof'
import Products from '../components/Products'
import { About, HowItWorks, Testimonials, Newsletter, Footer } from '../components/Sections'

export default function Home() {
  return (
    <>
      <Head>
        <title>AQUA — Premium Hydration</title>
        <meta name="description" content="Say hello to your new favorite drinking buddy. Premium hydration bottles crafted with purpose." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <CartDrawer />

      <main>
        <Hero />
        <SocialProof />
        <FeatureBar />
        <Products />
        <About />
        <HowItWorks />
        <Testimonials />
        <Newsletter />
      </main>

      <Footer />
    </>
  )
}
