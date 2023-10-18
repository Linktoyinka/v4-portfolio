import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { About, Home, Work } from './pages'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
    </Routes>
  )
}

export default App
