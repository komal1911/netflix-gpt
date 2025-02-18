import React, { useEffect } from 'react'
import {addPopularMovies} from "../utils/moviesSlice"
import { options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
const usePopularMovies = () => {
    const dispatch=useDispatch();
    const popularMovies = useSelector((store)=>store.movies.popularMovies);
    const getPopularMovies= async ()=>{
    const data= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    const json= await data.json();
    const results= json.results;
    console.log(json);
    dispatch(addPopularMovies(results));
    }
    useEffect(()=>{
      !popularMovies &&  getPopularMovies();
    },[])
  return (
    <div>
      
    </div>
  )
}

export default usePopularMovies
