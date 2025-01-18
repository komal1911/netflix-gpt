import React from 'react'
import { movieImgCDN } from '../utils/constants'

const MovieCard = ({poster_path}) => {
    if(!poster_path) return null;
  return (
    <div>
      <div className='w-40 pr-2 md:w-48 pl-2'>
      <img alt="movie_logo" src={movieImgCDN+poster_path}  />
      </div>
    </div>
  )
}

export default MovieCard
