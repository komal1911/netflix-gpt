import React from 'react'
import { options } from '../utils/constants'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import useTrailerVideo from '../hooks/useTrailerVideo'
import { useState } from 'react'
import { useSelector } from 'react-redux'
const VideoBackground =  ({movieId}) => {

    //const [trailerId,setTrailerId]=useState(null);
    const trailerVideo=useSelector((store)=>store.movies?.trailerVideo)
    useTrailerVideo(movieId);

 
  return (
    <div className='w-screen z-50'>
    <iframe className='w-screen aspect-video'  src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground
