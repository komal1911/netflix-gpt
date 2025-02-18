import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 px-6 md:px-2 no-underline w-screen aspect-video absolute text-white bg-gradient-to-r from-black '>
      <h1 className=' font-bold md:text-2xl ml-10 mt-1 text-lg md:mt-7'>{title}</h1>
      <br/>
      <p className='hidden md:inline-block no-underline text-base w-1/4 ml-10'>{overview}</p>
      <div className='my-4 md:m-0'>
      <button className='rounded-md mt-4 ml-10 py-1 md:py-4 px-3 md:px-12 text-base bg text-black bg-white'>▶Play</button>
      <button className='text-white mt-4 hidden md:inline-block bg-gray-600 ml-10 p-4 text-base rounded-md'>ℹ More Info</button>
    </div>
    </div>
  )
}

export default VideoTitle
