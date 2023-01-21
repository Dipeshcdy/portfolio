import React from 'react'
import { CTA } from './CTA'
import { Social } from './Social'
import me from '../../assests/mycrop1.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// import { motion } from 'framer-motion'

export const Header = () => {
  return (

    <section
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{
      //   default: {
      //     duration: 10,
      //     ease: [0, 0.71, 0.2, 1.01]
      //   }
      // }}
      // exit={{ opacity: 1, transition: { duration: 20, ease: [0, 0.71, 0.2, 1.01] } }}

     
      className=' sm:mt-32 mt-5 md:mt-10'>
      <div className='flex'>
        <div className='mx-auto text-center'>
          <h2 className='font-semibold text-md '>hello, I'm</h2>
          <h1 className='text-3xl my-2.5 font-bold'>Dipesh Chaudhary</h1>
          <h2 className='text-[12px] font-semibold'>Fullstack Developer</h2>
          <CTA />
        </div>

      </div>
      <div className=' md:flex mt-10 mx-10 md:mx-44'>
        <div className='my-auto '><Social /></div>
        <div className='gradient rounded-t-full h-[24rem] sm:h-[28rem] md:h-[31.8rem] w-full md:w-[40%] overflow-hidden mx-auto pt-16 '><LazyLoadImage className='w-[80%] mx-auto ' effect="blur" src={me} alt="" /></div>
        {/* <div className='flex flex-col text-sm  font-bold mr-10 '><h2 className='cursor-pointer mt-auto mb-40 rotate-90'>Scroll Down</h2></div> */}
      </div>
    </section>

  )
}
