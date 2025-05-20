import { Power4 } from 'gsap/all';
import { motion, useAnimation } from 'motion/react'
import React, { useState } from 'react'

const Featured = () => {
    const cards = [useAnimation(), useAnimation()];

    const handleHover = (index) => {
        cards[index].start({y: "0"})
    }
 
    const handleHoverEnd = (index) => {
        cards[index].start({y: "100%"})
    }


    return (
        <div className='w-full py-20'>
            <div className='w-full px-20 border-b-1 border-zinc-700 pb-20'>
                <h1 className='text-8xl font-[NeueMontreal]tracking-tight'>Featured projects</h1>
            </div>
            <div className='px-20'>
                <div className="cards w-full flex gap-10 mt-10">
                    <motion.div 
                    onHoverStart={()=>handleHover(0)} 
                    onHoverEnd={()=>handleHoverEnd(0)}
                    className="cardcontainer relative w-1/2 h-[75vh]"
                    >
                        <h1 className='absolute flex text-[#CDEA68] left-full top-1/2 -translate-y-1/2 -translate-x-1/2 z-[9] leading-none text-8xl font-[FoundersGrotesk] overflow-hidden'>
                            {"FYDE".split('').map((item, index) => (
                                <motion.span 
                                initial={{y: "100%"}} 
                                animate={cards[0]}
                                transition={{ease: [0.22, 1, 0.36, 1], delay: index*0.1}}
                                className='inline-block'>
                                    {item}
                                </motion.span>))}
                        </h1>
                        <div className='w-full h-full overflow-hidden rounded-xl'>
                            <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="" />
                        </div>
                    </motion.div>
                    <motion.div 
                    onHoverStart={()=>handleHover(1)} 
                    onHoverEnd={()=>handleHoverEnd(1)}
                    className="cardcontainer relative w-1/2 h-[75vh]"
                    >
                        <h1 className='absolute flex text-[#CDEA68] right-full top-1/2 -translate-y-1/2 translate-x-1/2 z-[9] leading-none text-8xl font-[FoundersGrotesk] overflow-hidden'>
                            {"VISE".split('').map((item, index) => (
                                    <motion.span 
                                    initial={{y: "100%"}} 
                                    animate={cards[1]}
                                    transition={{ease: [0.22, 1, 0.36, 1], delay: index*0.1}}
                                    className='inline-block'>
                                        {item}
                                    </motion.span>))}
                        </h1>
                        <div className='w-full h-full overflow-hidden rounded-xl'>
                            <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Featured