import React from 'react'
import { addTrailerVideo } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { options } from '../utils/constants';

const useTrailerVideo = (movieId) => {
    const dispatch=useDispatch();
      const getTrailerVideo= async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", options)
        const json =await(data.json());
        const results= (json.results); 
        console.log(json.results);
        const filteredData= results.filter((video)=>video.type==="Trailer")
        const trailer= (filteredData.length)?filteredData[1]:results[0];
        console.log(trailer);
        dispatch(addTrailerVideo(trailer));
       }
        useEffect(()=>{
        getTrailerVideo();
      },[]);
  return (
    <div>
      
    </div>
  )
}

export default useTrailerVideo
