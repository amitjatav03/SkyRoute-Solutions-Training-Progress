import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  function clickHandler() {
    // move to support page
    navigate('/support')
  }

  return (
    <div>
      <div>
        This is About Page
      </div>
      <button onClick={clickHandler} className='bg-zinc-800 text-zinc-100 px-4 py-2 rounded-md cursor-pointer'>Move to Support Page</button>
    </div>
  )
}

export default About