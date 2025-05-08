import React, { useEffect, useState } from 'react'

const App = () => {
  const [text, setText] = useState('')
  const [name, setName] = useState('love')

  // useEffect - allow component to perform side-effects
  // jis bhi component ke andar aap useEffect hook likhte hain, wo us component ke render hone ke baad iske andar jo bhi code likha hoga uska render krega

  // variation-1: every render
  // useEffect(() => {
  //   console.log('UI RENDERING DONE')
  // })

  // variation-2: first render
  // useEffect(() => {
  //   console.log('UI RENDERING DONE')
  // }, [])

  // variation-3: on first render + whenever dependency changes
  // useEffect(() => {
  //   console.log('Change observed')
  // }, [name])

  // variation-4: to handle unmounting of a component
  useEffect(() => {
    // add event listener
    console.log('Listener added');

    return () => {
      console.log('Listener removed');
    }
  }, [text])


  function changeHandler(event) {
    console.log(text)
    setText(event.target.value)
  }


  return (
    <div className='App'>
      <input type="text" onChange={changeHandler} />
    </div>
  )
}

export default App