import React from 'react'
import { Helmet } from 'react-helmet-async'
import { images } from '../../constants'

const Seo = ({ title, description }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content='https://afolabi.me'/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description} />
      <meta property="og:image" content={images.ogimage}/>

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content='https://afolabi.me'/>
      <meta property="twitter:title" content={title}/>
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={images.ogimage}/>
    </Helmet>
  )
}

export default Seo
