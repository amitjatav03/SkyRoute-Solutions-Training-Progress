import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-16 gap-5 font-[NeueMontreal]'>
        <div className="cardcontainer w-1/2 h-[60vh]">
            <div className="card relative w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 text-[#CDEA68] text-sm'>&copy;2019-2022</button>
            </div>
        </div> 
        <div className="cardcontainer flex gap-5 w-1/2 h-[60vh]">
            <div className="card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#585858]">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 text-sm'>RATING 5.0 ON CLUTCH</button>
            </div>
            <div className="card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#212121]">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 text-sm'>BUSINESS BOOTCAMP ALUMNI</button>
            </div>
        </div>
    </div>
  )
}

export default Cards