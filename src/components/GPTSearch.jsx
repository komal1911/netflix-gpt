import React from 'react'
import GPTSearchButton from "./GPTSearchButton"
import MovieSuggestions from './MovieSuggestions'
import { bgImg } from '../utils/constants'
const GPTSearch = () => {
  return (
    <div>
      <div className='fixed -z-10'>
        <img className ="h-screen object-cover w-screen" src={bgImg} alt="logo"  />
      </div>
      <div className=''>
      <GPTSearchButton/>
      <MovieSuggestions/>
    </div>
      
    </div>
  )
}

export default GPTSearch
