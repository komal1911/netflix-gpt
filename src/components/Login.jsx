import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react';
import { validateData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { user_avatar } from '../utils/constants';

const Login = () => {
  
  const dispatch=useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage]=useState(null);
  
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);

  }
  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);
  const handleSubmitClick=()=>{
    const message=validateData(email.current.value,password.current.value);
    //console.log(email)
    //console.log(password);
   // console.log(message);
   setErrorMessage(message);
   if(message) return;

if(!isSignInForm){
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    updateProfile(user, {
      displayName: name.current.value, photoURL: user_avatar,
    }).then(() => {
       const {uid,email,displayName,photoURL} = auth.currentUser;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
      // Profile updated!
    
    }).catch((error) => {
      setErrorMessage(error.message)
    });
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
 
    // ..
  });
}
else{
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    setErrorMessage(errorMessage+"-"+errorCode);

    // ..
  });
}
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
      <form onSubmit={(e)=>e.preventDefault()} className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white'>
      <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        <input ref={email} type='text' placeholder='Email or mobile number' className='p-2 m-2 w-full bg-gray-700'/>
        {!isSignInForm && <input type='name' placeholder='Name' ref={name} className='p-2 m-2 w-full bg-gray-700'/>}
        <input ref={password} type='password' placeholder='Password' className='p-2 m-2 w-full bg-gray-700 '/>
        <p className='text-red-500 py-4 text-lg'>{errorMessage}</p>
        <button className='p-2 m-4 w-full bg-red-700 rounded-lg' onClick={handleSubmitClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
      <p onClick={toggleSignInForm}className="text-lg py-4 cursor-pointer">{isSignInForm ? "New to Netflix?Sign Up Now" : "Already registered?Sign In Now"}</p>

      </form>
      </div>
    </div>
  )
}

export default Login
