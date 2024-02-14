import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Analytics from './Component/Analytics'
import NewsLetter from './Component/NewsLetter'
import Cards from './Component/Cards'
import Footer from './Component/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <NewsLetter/>
      <Cards />
      <Footer/>
    </div>
  )
}

export default App