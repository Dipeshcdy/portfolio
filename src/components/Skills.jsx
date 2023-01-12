import React from 'react'
import { BiBadgeCheck } from 'react-icons/bi'

function Skills() {
    return (
        <section>
            <div className='text-center mt-14'>
                <h2 className='text-md text-gray-400 mb-2 '>What Skills I Have</h2>
                <h2 className='text-[#4db5ff] text-3xl'>My Experience</h2>
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-20 mx-10 md:mx-40 mt-12  md:mt-7 mb-10 md:mb-0 flex flex-col'>

                <div className='bg-blue-800 skill-card mx-auto md:mx-0 mb-10 md:mb-0 rounded-3xl px-10 md:px-24 py-10 h-[38rem] md:h-[36rem] hover:bg-transparent hover:border hover:border-solid hover:border-blue-800 hover:text-blue-800'>
                    <div className='child'>
                        <h2 className='text-xl font-bold'>Frontend Development</h2>
                        <div className='mt-4'>
                            <i className='text-xl'><BiBadgeCheck /></i>
                            <h2 className='font-bold'>HTML</h2>
                            <p className='text-[13px] text-gray-400'>Experienced</p>
                        </div>
                        <div className='mt-2'>
                            <i className='text-xl '><BiBadgeCheck /></i>
                            <h2 className='font-bold'>CSS</h2>
                            <p className='text-[13px] text-gray-400'>Intermediate</p>
                        </div>
                        <div className='mt-2'>
                            <i className='text-xl'><BiBadgeCheck /></i>
                            <h2 className='font-bold'>JavaScript</h2>
                            <p className='text-[13px] text-gray-400'>Experienced</p>
                        </div>
                        <div className='mt-2'>
                            <i className='text-xl'><BiBadgeCheck /></i>
                            <h2 className='font-bold'>BootStrap</h2>
                            <p className='text-[13px] text-gray-400'>Experienced</p>
                        </div>
                        <div className='mt-2'>
                            <i className='text-xl'><BiBadgeCheck /></i>
                            <h2 className='font-bold'>Tailwind</h2>
                            <p className='text-[13px] text-gray-400'>Experienced</p>
                        </div>
                        <div className='mt-2'>
                            <i className='text-xl'><BiBadgeCheck /></i>
                            <h2 className='font-bold'>React</h2>
                            <p className='text-[13px] text-gray-400'>Experienced</p>
                        </div>

                    </div>
                </div>
                <div className='bg-blue-800 skill-card mx-auto md:mx-0  rounded-3xl px-10 md:px-24 py-10 h-[38rem] md:h-[36rem] hover:bg-transparent hover:border hover:border-solid hover:border-blue-800 hover:text-blue-800'>
                    <div className="child">
                        <h2 className='text-xl font-bold'>Backend Development</h2>

                        <div className='mt-4'>
                            <i className='text-xl '><BiBadgeCheck /></i>
                            <h2 className='font-bold'>PHP</h2>
                            <p className='text-[13px] text-gray-400'>Intermediate</p>
                        </div>
                        <div className='mt-2'>
                            <i className='text-xl'><BiBadgeCheck /></i>
                            <h2 className='font-bold'>Laravel</h2>
                            <p className='text-[13px] text-gray-400'>Intermediate</p>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills