import React from 'react'
import { Footer, Navbar, Seo } from '../components'
import { Allwork, Workhero } from '../containers'

const Home = () => {
  return (

    <>
      <Seo title='Works: Afolabi Abdullahi' description='Bringing stellar results for every client.' />
      
      <main>
        <Navbar />
        <Workhero />
        <Allwork />
        <Footer />
      </main>
    </>
  )
}

export default Home
