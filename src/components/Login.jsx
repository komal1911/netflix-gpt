import React from 'react'
import Header from './Header'
import { useState } from 'react';
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
        <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_small.jpg"
        alt="logo"
        />
      </div>
      <div>
      <form className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white'>
      {isSignInForm ?<h1 className='font-bold text-3xl py-4'>Sign Up</h1>:<h1 className='font-bold text-3xl py-4'>Sign In</h1>}
        <input type='text' placeholder='Email or mobile number' className='p-2 m-2 w-full bg-gray-700'/>
        {isSignInForm && <input type='full name' placeholder='Full Name' className='p-2 m-2 w-full bg-gray-700'/>}
        <input type='password' placeholder='Password' className='p-2 m-2 w-full bg-gray-700 '/>
        {isSignInForm?<button className='p-4 m-4 w-full bg-red-700 rounded-lg' >Sign Up</button>:
        <button className='p-4 my-10 w-full bg-red-700 rounded-lg'>Sign In</button>}
      <p onClick={toggleSignInForm}className="text-lg py-4 cursor-pointer">{!isSignInForm ? "New to Netflix?Sign Up Now" : "Already registered?Sign In Now"}</p>

      </form>
      </div>
    </div>
  )
}

export default Login
