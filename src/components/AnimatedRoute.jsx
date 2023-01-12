import {
    Routes,
    Route,
    useLocation
} from "react-router-dom";
import React from 'react'
import { Header } from '../components/header/Header';
import { AnimatePresence } from "framer-motion";
import { About } from '../components/About';
import { Contact } from '../components/Contact';
//  import { Footer } from './components/Footer';
import { Services } from '../components/Services';
import Skills from "./Skills";
import { motion } from 'framer-motion'


function AnimatedRoute() {
    const location = useLocation();
    return (
        <>
            <AnimatePresence exitBeforeEnter >
                <Routes key={location.pathname} location={location} >

                    <Route exact path="/" element={
                        <>
                            <motion.section

                                // initial={{ opacity: 0 }}
                                // animate={{ opacity: 1 }}
                                // transition={{
                                //     default: {
                                //         duration: 10,
                                //         ease: [0, 0.71, 0.2, 1.01]
                                //     }
                                // }}
                                // exit={{ opacity: 1, transition: { duration: 20, ease: [0, 0.71, 0.2, 1.01] } }}
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration:0.4 }}
                            >
                                <Header />
                            </motion.section>
                        </>
                    }>
                    </Route>
                    <Route exact path="/about" element={
                        <>
                            <motion.section

                                // initial={{ opacity: 0 }}
                                // animate={{ opacity: 1 }}
                                // transition={{
                                //     default: {
                                //         duration: 10,
                                //         ease: [0, 0.71, 0.2, 1.01]
                                //     }
                                // }}
                                // exit={{ opacity: 1, transition: { duration: 20, ease: [0, 0.71, 0.2, 1.01] } }}

                            // initial={{ opacity: 0 ,  duration: 1.8  }}
                            //     animate={{ opacity: 1 ,  duration: 1.8  }}
                            //     exit={{ opacity: 0 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            >
                                <About />
                            </motion.section></>

                    }>
                    </Route>
                    <Route exact path="/skills" element={
                        <>
                            <motion.section
                                // initial={{ opacity: 0 }}
                                // animate={{ opacity: 1 }}
                                // transition={{
                                //     default: {
                                //         duration: 10,
                                //         ease: [0, 0.71, 0.2, 1.01]
                                //     }
                                // }}
                                // exit={{ opacity: 1, transition: { duration: 20, ease: [0, 0.71, 0.2, 1.01] } }}
                            // initial={{ opacity: 0 ,  duration: 1.8  }}
                            //     animate={{ opacity: 1 ,  duration: 1.8  }}
                            //     exit={{ opacity: 0 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            >
                                <Skills />
                            </motion.section></>
                    }>
                    </Route>
                    <Route exact path="/services" element={
                        <>
                            <motion.section
                                // initial={{ opacity: 0 }}
                                // animate={{ opacity: 1 }}
                                // transition={{
                                //     default: {
                                //         duration: 10,
                                //         ease: [0, 0.71, 0.2, 1.01]
                                //     }
                                // }}
                                // exit={{ opacity: 1, transition: { duration: 20, ease: [0, 0.71, 0.2, 1.01] } }}
                            // initial={{ opacity: 0 ,  duration: 1.8  }}
                            //     animate={{ opacity: 1 ,  duration: 1.8  }}
                            // exit={{ opacity: 0 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            >
                                <Services />
                            </motion.section></>
                    }></Route>
                    
                    <Route exact path="/contact" element={
                        <>
                            <motion.section
                                // initial={{ opacity: 0 }}
                                // animate={{ opacity: 1 }}
                                // transition={{
                                //     default: {
                                //         duration: 10,
                                //         ease: [0, 0.71, 0.2, 1.01]
                                //     }
                                // }}
                                // exit={{ opacity: 1, transition: { duration: 20, ease: [0, 0.71, 0.2, 1.01] } }}
                            // initial={{ opacity: 0 ,  duration: 1.8  }}
                            //     animate={{ opacity: 1 ,  duration: 1.8  }}
                            //     exit={{ opacity: 0 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            >
                                <Contact />
                            </motion.section></>
                    }>
                    </Route>
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default AnimatedRoute