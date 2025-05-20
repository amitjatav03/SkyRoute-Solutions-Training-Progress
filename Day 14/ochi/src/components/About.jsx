import React from 'react'

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.07" className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-[NeueMontreal] text-[3.5vw] leading-[4vw] tracking-tight'>
            Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1> 

        <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
            <div className='w-1/2'>
                <h1 className='text-7xl'>Our approach:</h1>
                <button className='flex gap-10 items-center px-10 py-6 bg-zinc-900 rounded-full text-white uppercase mt-10'>Read More
                    <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            
            <div className="w-1/2 h-[70vh] rounded-3xl bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg')] bg-cover bg-center">
            </div>
        </div>
    </div>
  )
}

export default About