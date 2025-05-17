import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => {
  const navigate = useNavigate();

  function clickHandler() {
    // move to about page
    navigate('/about')
  }

  return (
    <div>
      <div>
        This is Labs Page
      </div>
      <button onClick={clickHandler} className='bg-zinc-800 text-zinc-100 px-4 py-2 rounded-md cursor-pointer'>Move to About Page</button>
    </div>
  )
}

export default Labs