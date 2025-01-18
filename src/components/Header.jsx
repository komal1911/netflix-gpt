import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO_URL } from '../utils/constants';
const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user);
  const handleSignOut=()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });}

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName,photoURL} = user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
      navigate("/browse");
    } else {
      dispatch(removeUser());
      navigate("/");
    }}) 
    return ()=> unsubscribe();
  },[])

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src={LOGO_URL} alt="logo"/>
    
    {user && 
    (<div className='flex p-2'>
    <img className='h-10 w-10'src={user?.photoURL} alt="userIcon" />
     <button onClick={handleSignOut} className=' text-white'> (Sign Out)</button>
    </div>)}
    </div>
)};
export default Header
