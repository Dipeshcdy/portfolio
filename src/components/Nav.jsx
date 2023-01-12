import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {GrTechnology} from 'react-icons/gr'
import { BiMessageSquareDetail } from 'react-icons/bi'
import 'animate.css';
import { motion } from "framer-motion";
import {
  Link,
  useLocation
} from "react-router-dom";

export const Nav = () => {

  const location=useLocation();
  return (
    <motion.nav 
    // initial={{opacity:0, y: 300}}
    //   animate={{opacity:1, y: 10 ,duration:10 }}
    //   ttransition={{
    //     delay: 10,
    //     x: { duration: 100 },
    //     default: { ease: "linear" }

        initial={{ opacity: 0, y:300,}}
      animate={{ opacity: 1, y:10,}}
      transition={{
        default: {
          duration: 4.5,
          ease: [0, 0.71, 0.2, 1.01]
        },
        // scale: {
        //   type: "spring",
        //   damping: 5,
        //   stiffness: 100,
        //   restDelta: 0.001
        // }
      }}
    className=' fixed px-2 pt-2 pb-1 z-10 bottom-10 gap-3 rounded-[3rem] backdrop-blur-md left-[5%] md:left-[40%] bg-[rgba(0,0,0,0.3)] w-max'>
      <Link id='headernav'  to="/"  className={'list inline-block mx-2 bg-transparent p-[0.9rem] rounded-full text-[rgba(255,255,255,0.6)] text-[1.5rem] hover:bg-[rgba(0,0,0,0.3) hover:scale-[1.2] mytransition '+(location.pathname === '/' ? 'active' : '')}><AiOutlineHome/></Link>
      <Link id='aboutnav'  to="/about" className={'list inline-block mx-2 bg-transparent p-[0.9rem] rounded-full text-[rgba(255,255,255,0.6)] text-[1.5rem] hover:bg-[rgba(0,0,0,0.3) hover:scale-[1.2] mytransition '+(location.pathname === '/about' ? 'active' : '')}><AiOutlineUser/></Link>
      <Link id='skillsnav'  to="/skills" className={'list inline-block mx-2 bg-transparent p-[0.9rem] rounded-full text-[rgba(255,255,255,0.6)] text-[1.5rem] hover:bg-[rgba(0,0,0,0.3) hover:scale-[1.2] mytransition '+(location.pathname === '/skills' ? 'active' : '')}><GrTechnology/></Link>
      <Link id='servicesnav'  to="/services" className={'list inline-block mx-2 bg-transparent p-[0.9rem] rounded-full text-[rgba(255,255,255,0.6)] text-[1.5rem] hover:bg-[rgba(0,0,0,0.3) hover:scale-[1.2] mytransition '+(location.pathname === '/services' ? 'active' : '')}><RiServiceLine/></Link>
      <Link id='contactnav'  to="/contact" className={'list inline-block mx-2 bg-transparent p-[0.9rem] rounded-full text-[rgba(255,255,255,0.6)] text-[1.5rem] hover:bg-[rgba(0,0,0,0.3) hover:scale-[1.2] mytransition '+(location.pathname === '/contact' ? 'active' : '')}><BiMessageSquareDetail/></Link>
      
    </motion.nav>
  )
}
