import React from 'react'
import './App.css'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from './assets/components/Home'
import About from './assets/components/About'
import Labs from './assets/components/Labs'
import Support from './assets/components/Support'
import NotFound from './assets/components/NotFound'
import MainHeader from './assets/components/MainHeader'

const App = () => {
  return (
    <div className='App'>
        <nav>
          <ul className='w-full h-20 bg-zinc-900 text-zinc-400 flex justify-center items-center gap-6 text-xl'>
            <li>
              {/* <Link to='/'>Home</Link> */}
              <NavLink to=''>Home</NavLink>
            </li>
            <li>
              {/* <Link to='/about'>About</Link> */}
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              {/* <Link to='/labs'>Labs</Link> */}
              <NavLink to='/labs'>Labs</NavLink>
            </li>
            <li>
              
              {/* <Link to='/support'>Support</Link> */}
              <NavLink to='/support'>Support</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* <Route path='/' element={<Home />} />
          <Route path='/support' element={<Support />} />
          <Route path='/about' element={<About />} />
          <Route path='/labs' element={<Labs />} />
          {
          <Route path='*' element={<NotFound />} />  */}
          
          <Route path='/' element={<MainHeader />} >
            {/* default route  */}
            <Route index element={<Home />} /> 

            
            <Route path='/support' element={<Support />} />
            <Route path='/about' element={<About />} />
            <Route path='/labs' element={<Labs />} />
            {/* if apart from above path entered below will execute  */}
            <Route path='*' element={<NotFound />} /> 
          </Route>
        </Routes>
    </div>
  )
}

export default App