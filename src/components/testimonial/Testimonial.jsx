import React from 'react'
import './Testimonial.css'
import { AiFillStar } from "react-icons/ai";
import { images } from '../../constants';

const Testimonial = () => {

    const starIcons = Array(5).fill().map((_, index) => (
        <AiFillStar className='icon' />
    ));

  return (
    <div className='testimonial'>
      <div className='testimonial-content'>
        <div>
            {starIcons}
        </div>

        <p>
            Afolabi is a skilled Frontend Developer who effortlessly combines design finesse with technical expertise, creating exceptional user experiences and making complex ideas accessible to all.
        </p>

        <div className='profile'>
            <div className='profile-img'>
                <img src={images.tobi} alt='tobi' />
            </div>

            <div className='details'>
                <span className='name'>
                    Tobi Oyebanji
                </span>

                <span className='p-small'>
                    HOO - MakeKnown
                </span>
            </div>
        </div>
      </div>

      <div className='experience'>

      </div>
    </div>
  )
}

export default Testimonial
