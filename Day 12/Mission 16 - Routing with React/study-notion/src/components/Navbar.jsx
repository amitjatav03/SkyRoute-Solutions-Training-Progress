import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import { toast } from 'react-hot-toast'


const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn
    let setIsLoggedIn = props.setIsLoggedIn

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to='/'>
            <img src={logo} alt='logo' width={160} height={32} loading='lazy' /> 
        </Link>

        <nav>
            <ul className='text-zinc-300 flex gap-x-6'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/'>About</Link>
                </li>
                <li>
                    <Link to='/'>Contact</Link>
                </li>
            </ul>
        </nav>

        {/* Login - SignUp - LogOut - Dashboard */}
        <div className='flex items-center gap-4'>
            { !isLoggedIn && 
                <Link to='/login'>
                    <button className='bg-zinc-900 text-zinc-300 py-[8px] px-[12px] rounded-[8px] border border-zinc-800 cursor-pointer'>
                        Login
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to='/signup'>
                    <button className='bg-zinc-900 text-zinc-300 py-[8px] px-[12px] rounded-[8px] border border-zinc-800 cursor-pointer'>
                        Sign up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to='/'>
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out")
                    }} className='bg-zinc-900 text-zinc-300 py-[8px] px-[12px] rounded-[8px] border border-zinc-800 cursor-pointer'>
                        Log Out
                    </button>
                </Link>
            } 
            { isLoggedIn &&
                <Link to='/dashboard'>
                    <button className='bg-zinc-900 text-zinc-300 py-[8px] px-[12px] rounded-[8px] border border-zinc-800 cursor-pointer'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>

    </div>
  )
}

export default Navbar