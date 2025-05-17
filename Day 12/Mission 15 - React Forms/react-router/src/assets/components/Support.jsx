import React from 'react'
import { useNavigate } from 'react-router-dom'

const Support = () => {
  const navigate = useNavigate();

  function clickHandler() {
    // move to labs page
    navigate('/labs')
  }

  function backHandler() {
    // back 
    navigate(-1)
  }

  return (
    <div>
      <div>
        This is Support Page
      </div>
      <button onClick={clickHandler} className='bg-zinc-800 text-zinc-100 px-4 py-2 rounded-md cursor-pointer'>Move to Labs Page</button>

      <br />

      <button onClick={backHandler} className='bg-blue-800 text-zinc-100 px-4 py-2 rounded-md cursor-pointer'>Go Back</button>
    </div>
  )
}

export default Support