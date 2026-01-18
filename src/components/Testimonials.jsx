import React from 'react'
import { testimonialsData, assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonails = () => {
  return (
    <motion.div
      initial={{opacity: 0, x: 200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x: 0}}
      viewport={{once: true}}
    className='container mx-auto py-10 px-6 lg:px-32 w-full overflow-hidden' id='Testimonails'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 decoration-1 font-light'>Testimonials</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Real Stories from Those Who Found Home with Us</p>
    
        <div className='flex flex-col md:flex-row justify-center items-start gap-8'>
          {testimonialsData.map((testimonials, index) => (
            <div key={index} className='w-full md:w-1/3 max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
              <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonials.image} alt={testimonials.alt} />
              <h2 className='text-xl text-gray-700 font-medium'>{testimonials.name}</h2>
              <p className='text-gray-500 text-sm mb-4'>{testimonials.title}</p>
              <div className='flex justify-center gap-1 mb-4'>
                {Array.from({ length: testimonials.rating }, (item, index) => (
                  <img key={index} src={assets.star_icon} alt="star icon" className='w-5'/>
                ))}
              </div>
              <p className='text-gray-600 text-sm'>{testimonials.text}</p>
            </div>
          ))}
        </div>
    </motion.div>
  )
}

export default Testimonails