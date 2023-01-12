import React from 'react'
import cv from '../../assests/dipesh2.pdf'
import {
  Link
} from "react-router-dom";

export const CTA = () => {
  return (
    <>
    <div className='mt-8'>
        <a href={cv} download className='bg-blue-500  hover:text-blue-500 py-2 px-4 rounded-lg mx-2 hover:border hover:border-solid hover:border-blue-500 hover:bg-transparent'>Download CV</a>
        <Link to="/contact" className='bg-blue-500 hover:text-blue-500 py-2 px-4 rounded-lg mx-2 hover:border hover:border-solid hover:border-blue-500 hover:bg-transparent'>Let's Talk</Link>
    </div>
    </>
  )
}
