import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { About, Home, Work } from './pages'
import TagManager from 'react-gtm-module'
import { HelmetProvider } from 'react-helmet-async';

const App = () => {

  const tagManagerArgs = {
    gtmId: 'GTM-PJJCSM'
  }

  TagManager.initialize(tagManagerArgs)

  return (
    <HelmetProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HelmetProvider>
  )
}

export default App
