import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies)
  return( movies.nowPlayingMovies && (
    <div className='bg-black'>
      <div className=' mt-0 md:-mt-52 md:pl-12 pl-4 relative '>
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Upcoming"} movies={movies?.nowPlayingMovies} />
</div>
      {/*
      MovieList - Horror
       MovieCards * n
      MovieList - now playing
      MovieList- Trending
      MovieList- Popular
       */}
    </div>
  )
  );
};

export default SecondaryContainer
