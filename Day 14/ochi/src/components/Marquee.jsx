import React from 'react'
import {motion} from 'framer-motion'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".01" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className="text border-t-1 border-b-1 border-zinc-300 flex whitespace-nowrap overflow-hidden">
            <motion.h1 
            initial={{x: 0}}
            animate={{x: "-100%"}}
            transition={{
              ease: "linear",
              repeat: Infinity,
              duration: 5 
            }}
            className='text-[25vw] uppercase leading-none font-[FoundersGrotesk] -mt-[5.2vw] -mb-[2vw] pr-20'
            >
              we are ochi
            </motion.h1>
            <motion.h1 
            initial={{x: 0}}
            animate={{x: "-100%"}}
            transition={{
              ease: "linear",
              repeat: Infinity,
              duration: 5
            }}
            className='text-[25vw] uppercase leading-none font-[FoundersGrotesk] -mt-[5.2vw] -mb-[2vw] pr-20'
            >
              we are ochi
            </motion.h1>
        </div>
    </div>
  )
}

export default Marquee