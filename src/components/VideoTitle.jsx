import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 no-underline w-screen aspect-video absolute text-white bg-gradient-to-r from-black '>
      <h1 className=' font-bold text-2xl ml-10 mt-7'>{title}</h1>
      <br/>
      <p className='no-underline text-base w-1/4 ml-10'>{overview}</p>
      <button className='rounded-md mt-4 ml-10 p-4 text-base bg text-black bg-white'>▶Play</button>
      <button className='text-white mt-4 bg-gray-600 ml-10 p-4 text-base rounded-md'>ℹ More Info</button>
    </div>
  )
}

export default VideoTitle
