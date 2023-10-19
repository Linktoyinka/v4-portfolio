import React from 'react'
import { Helmet } from 'react-helmet'
import { images } from '../../constants'

const Seo = ({ title, description }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
        <title>{title}</title>
        <meta property="og:description" content={description} />
        <meta property="og:image" content={images.ogimage} />
    </Helmet>
  )
}

export default Seo
