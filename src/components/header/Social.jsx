import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'

export const Social = () => {
  return (
    <div className='flex sm:mt-28 mb-9 md:mt-0 md:mb-0'>
        <div className='mx-auto md:mx-0 flex gap-5  md:flex-col'>
        <a href="https://linkedin.com" className='text-2xl'  target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" className='text-2xl' target="_blank"><BsGithub/></a>
        <a href="https://facebook.com" className='text-2xl' target="_blank"><BsFacebook/></a>

        </div>
    </div>
  )
}
