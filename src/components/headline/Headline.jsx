import React from 'react'
import './Headline.css'

const Headline = ({ title, subtitle}) => {
  return (
    <div className='headline'>
        <div className='headline-title'>
            <div></div> <p className='p-small'>{title}</p>
        </div>

        <div className='headline-subtitle'>
            <h2>{subtitle}</h2>
        </div>
    </div>
  )
}

export default Headline
