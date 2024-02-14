import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Analytics from './Component/Analytics'
import NewsLetter from './Component/NewsLetter'
import Cards from './Component/Cards'
import Footer from './Component/Footer'

const App = () => {

  const scrollToTop=() =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics scrollToTop={scrollToTop}/>
      <NewsLetter scrollToTop={scrollToTop}/>
      <Cards scrollToTop={scrollToTop}/>
      <Footer scrollToTop={scrollToTop}/>
    </div>
  )
}

export default App