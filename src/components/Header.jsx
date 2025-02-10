import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO_URL, supportedLanguages } from '../utils/constants';
import { toggleGPTSearchView } from '../utils/GPTSlice';
import { changeLanguage } from '../utils/configSlice';
import GPTSearch from './GPTSearch';
const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user);
  const showGPTSearch=useSelector((store)=>store.gpt.showGPTSearch);
  const handleSignOut=()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });}
  const handleClick=()=>{
    dispatch(toggleGPTSearchView());
  }
  const handleChange=(e)=>{
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  }
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
      {showGPTSearch && (<select className='m-4 rounded-sm bg-gray-50' onChange={handleChange}>
        {supportedLanguages.map((lang)=>(<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))}
      </select>)}
      <button className='flex bg-purple-500 m-4 p-2 rounded-lg' onClick={handleClick}>
       {showGPTSearch ? "HomePage" : "GPTSearch"}
        </button>

    <img className='h-10 mt-2 w-10 bg-red-300 z-50'src={user?.photoURL} alt="userIcon" />
     <button onClick={handleSignOut} className=' text-white mt-2'> (Sign Out)</button>
    </div>)}
    </div>
)};
export default Header
