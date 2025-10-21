import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import FAQ from '../pages/FAQ'
// import Testimonials from '../pages/Testimonials'
import Gallery from '../pages/Gallery'
// import Privacy from '../pages/Privacy'
// import Terms from '../pages/Terms'
import NotFound from '../pages/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      {/* <Route path="/pricing" element={<Pricing />} /> */}
      <Route path="/gallery" element={<Gallery />} />
      {/* <Route path="/testimonials" element={<Testimonials />} /> */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      {/* <Route path="/privacy" element={<Privacy />} /> */}
      {/* <Route path="/terms" element={<Terms />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
