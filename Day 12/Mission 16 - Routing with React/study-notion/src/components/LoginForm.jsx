import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const LoginForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({email: '', password: ''})

    const [showPassword, setShowPassword] = useState(false)

    function changeHandler(event) {
        setFormData( prevData => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault()
        setIsLoggedIn(true)
        console.log("Printing the form data: ")
        console.log(formData)
        toast.success('Logged In')
        navigate('/dashboard')
    }

  return (
    <form onSubmit={submitHandler}
    className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'>
            <p className='text-[0.875rem] text-zinc-100 mb-1 leading-[1.375rem]'>
                Email Address<sup className='text-pink-200'>*</sup>
            </p>
            <input 
                required 
                type='email'
                value={formData.email}
                onChange={changeHandler}
                placeholder='Enter email address'
                name='email'
                className='bg-zinc-800 rounded-[0.5rem] text-zinc-100 w-full px-[12px] py-[10px]'
            />
        </label>
        <label className='w-full relative'>
            <p className='text-[0.875rem] text-zinc-100 mb-1 leading-[1.375rem]'>
                Password<sup className='text-pink-200'>*</sup>
            </p>
            <input 
                required 
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={changeHandler}
                placeholder='Enter password'
                name='password'
                className='bg-zinc-800 rounded-[0.5rem] text-zinc-100 w-full px-[12px] py-[10px]'
            />

            <span
            className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer' 
            onClick={() => setShowPassword(prev => !prev)}>
                {showPassword ? 
                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : 
                (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
            </span>

            <Link to='#'>
                <p className='text-xs mt-1 text-blue-400 max-w-max ml-auto'>
                    Forgot Password
                </p>
            </Link>
        </label>

        <button className='bg-yellow-500 rounded-[8px] font-medium text-zinc-900 px-[12px] py-[8px] cursor-pointer mt-6'>
            Sign In
        </button>
    </form>
  )
}

export default LoginForm