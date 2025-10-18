import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Portfolio from '../pages/Portfolio'
import Contact from '../pages/Contact'
import FAQ from '../pages/FAQ'
import NotFound from '../pages/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
