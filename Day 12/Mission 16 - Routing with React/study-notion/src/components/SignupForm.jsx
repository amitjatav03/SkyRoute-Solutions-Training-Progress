import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [accountType, setAccountType] = useState('student')

    function changeHandler(event) {
        const {name, value} = event.target
        setFormData(prevData => (
            {
                ...prevData,
                [name]: value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault()
        
        if(formData.password != formData.confirmPassword) {
            toast.error('Password do not match')
            return;
        }

        setIsLoggedIn(true)
        toast.success('Account Created')

        const accountData = {
            ...formData
        }

        const finalAccountData = {
            ...formData,
            accountType
        }

        console.log('Printing Final Account Data')
        console.log(finalAccountData)
        
        navigate('/dashboard')
    }

  return (
    <div>
        {/* student-instructor tab */}
        <div className='flex bg-zinc-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button
            className={`${accountType === 'student' 
            ? 'bg-zinc-900 text-zinc-100 py-2 px-5 rounded-full transition-all duration-200 cursor-pointer' 
            : 'bg-transparent text-zinc-400 py-2 px-5 rounded-full transition-all duration-200 cursor-pointer'
            }`}
            onClick={() => setAccountType("student")}>
                Student
            </button>
            <button
            className={`${accountType === 'instructor' 
            ? 'bg-zinc-900 text-zinc-100 py-2 px-5 rounded-full transition-all duration-200 cursor-pointer' 
            : 'bg-transparent text-zinc-400 py-2 px-5 rounded-full transition-all duration-200 cursor-pointer'
            }`}
            onClick={() => setAccountType("instructor")}>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler}>
            {/* firstName and lastName */}
            <div className='flex gap-x-4 mt-[20px]'>
                {/* firstName */}
                <label className='w-full'>
                    <p className='text-[0.875rem] text-zinc-100 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
                    <input 
                        required
                        type='text'
                        name='firstName'
                        onChange={changeHandler}
                        placeholder="Enter First Name"
                        value={formData.firstName}
                        className='bg-zinc-800 rounded-[0.5rem] text-zinc-100 w-full px-[12px] py-[10px]'
                    />
                </label>

                {/* lastName */}
                <label className='w-full'>
                    <p className='text-[0.875rem] text-zinc-100 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                    <input 
                        required
                        type='text'
                        name='lastName'
                        onChange={changeHandler}
                        placeholder="Enter Last Name"
                        value={formData.lastName}
                        className='bg-zinc-800 rounded-[0.5rem] text-zinc-100 w-full px-[12px] py-[10px]'
                    />
                </label>
            </div>

            {/* email address */}
            <div className='mt-[20px]'>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-zinc-100 mb-1 leading-[1.375rem]'>
                        Email Address<sup className='text-pink-200'>*</sup>
                    </p>
                    <input 
                        required 
                        type='email'
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder='Enter Email Address'
                        name='email'
                        className='bg-zinc-800 rounded-[0.5rem] text-zinc-100 w-full px-[12px] py-[10px]'
                    />
                </label>
            </div>

            {/* password and confirmPassword */}
            <div className='flex w-full gap-x-4 mt-[20px]'>
                {/* password */}
                <label className='relative w-full'>
                    <p className='text-[0.875rem] text-zinc-100 mb-1 leading-[1.375rem]'>
                        Create Password<sup className='text-pink-200'>*</sup>
                    </p>
                    <input 
                        required 
                        type= {showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={changeHandler}
                        placeholder='Enter Password'
                        name='password'
                        className='bg-zinc-800 rounded-[0.5rem] text-zinc-100 w-full px-[12px] py-[10px]'
                    />
                    <span className='absolute right-3 top-1/2 cursor-pointer' onClick={() => setShowPassword(prev => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />
                    )}
                    </span>
                </label>

                {/* confirmPassword */}
                <label className='relative w-full'>
                    <p className='text-[0.875rem] text-zinc-100 mb-1 leading-[1.375rem]'>
                        Confirm Password<sup className='text-pink-200'>*</sup>
                    </p>
                    <input 
                        required 
                        type= {showConfirmPassword ? 'text' : 'password'}
                        value={formData.confirmPassword}
                        onChange={changeHandler}
                        placeholder='Confirm Password'
                        name='confirmPassword'
                        className='bg-zinc-800 rounded-[0.5rem] text-zinc-100 w-full px-[12px] py-[10px]'
                    />
                    <span className='absolute right-3 top-1/2 cursor-pointer' onClick={() => setShowConfirmPassword(prev => !prev)}>
                        {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />
                    )}
                    </span>
                </label>
            </div>

            <button className='w-full bg-yellow-500 rounded-[8px] font-medium text-zinc-900 px-[12px] py-[8px] cursor-pointer mt-6'>
                Create Account
            </button>
            
        </form>

    </div>
  )
}

export default SignupForm