import me from '../assests/my2.jpg'
import React from 'react'
import {
  Link
} from "react-router-dom";
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import './About.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export const About = () => {
  return (
    <section
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{
      //   default: {
      //     duration: 20,
      //     ease: [0, 0.71, 0.2, 1.01]
      //   }
      // }}
      // exit={{ opacity: 1, transition: { duration: 20, ease: [0, 0.71, 0.2, 1.01] } }} 
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      // transition={{ duration: 1.8 }}
      id='about'>

      <div className='mt-8 mb-32 md:mb-0'>
        <div className='text-center'>
          <h2 className='text-md text-gray-400 mb-2 '>Get To Know</h2>
          <h2 className='text-[#4db5ff] text-3xl'>About Me</h2>
        </div>
        <div className='flex flex-col md:grid md:grid-cols-2 md:gap-4 md:mx-20 mt-20'>
          <div className=' mx-auto w-[18rem] sm:w-[20rem] md:w-[25rem] '>
            <div className='gradient h-[18rem] sm:-[20rem] md:h-[25rem] w-[100%] aspect-square rounded-[2rem]  '>
              <div className='overflow-hidden rounded-[2rem] rotate-[-10deg] h-[18rem] sm:-[20rem] md:h-[25rem] w-[100%] hover:rotate-0 transition'>
                <LazyLoadImage effect="blur" src={me}  alt="Image Alt" />
              </div>
            </div>
          </div>
          <div className='mt-20 md:mt-0'>
            <div className='flex flex-col md:grid md:grid-cols-3 md:gap-4 mb-8'>
              <div className='bg-blue-800 mx-auto md:mx-0 my-5 md:my-0 card rounded-3xl w-52 h-52  text-center py-9 hover:bg-transparent hover:border hover:border-solid  hover:border-blue-800'>
                <div className='child-card'>
                  <div className='flex mb-9'>
                    <i className='mx-auto text-3xl card-i text-[#4db5ff]'><FaAward /></i>
                  </div>
                  <h2 className='font-bold text-xl text-white mb-2'>Experience</h2>
                  <p className='text-[13px] text-gray-400'>1+ Years Working</p>
                </div>
              </div>
              <div className='bg-blue-800 mx-auto md:mx-0 my-5 md:my-0 card  rounded-3xl w-52 h-52  text-center py-9 hover:bg-transparent hover:border hover:border-solid  hover:border-blue-800'>
                <div className="child-card">
                  <div className='flex mb-9'>
                    <i className='mx-auto text-3xl text-[#4db5ff]'><FiUsers /></i>
                  </div>
                  <h2 className='font-bold text-xl text-white mb-2'>Clients</h2>
                  <p className='text-[13px] text-gray-400'>100+ Worldwide</p>
                </div>
              </div>
              <div className='bg-blue-800 mx-auto md:mx-0 my-5 md:my-0 rounded-3xl w-52 h-52  text-center py-9 hover:bg-transparent hover:border hover:border-solid  hover:border-blue-800 card'>
                <div className="child-card">
                  <div className='flex mb-9'>
                    <i className='mx-auto text-3xl text-[#4db5ff]'><VscFolderLibrary /></i>
                  </div>
                  <h2 className='font-bold text-xl text-white mb-2'>Projects</h2>
                  <p className='text-[13px] text-gray-400'>50+ Completed</p>
                </div>
              </div>
            </div>
            <div className='mx-10 md:mx-0'>
              <p className='text-gray-400 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore non consectetur, totam consequuntur sequi beatae facilis voluptas voluptatem praesentium minima animi autem cupiditate error officia culpa assumenda, deserunt porro laudantium.</p>
            </div>
            <div className='mt-8 pl-0 flex md:block'>
              <div className='mx-auto md:mx-0'>
              <Link to="/contact" className='bg-[#4db5ff] ml-0 transition-none hover:text-[#4db5ff] py-4 px-5 rounded-lg mx-2 hover:border hover:border-solid hover:border-[#4db5ff] hover:bg-transparent'>Let's Talk</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
