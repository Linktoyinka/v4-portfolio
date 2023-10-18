import React from 'react'
import { Footer, Navbar } from '../components'
import { Helmet } from 'react-helmet'
import { images } from '../constants'
import { Allwork, Workhero } from '../containers'

const Home = () => {
  return (

    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Works: Afolabi Abdullahi</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta property="og:description" content="Bringing stellar results for every client." />
        <meta property="og:image" content={images.portrait01} />
      </Helmet>
      
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
