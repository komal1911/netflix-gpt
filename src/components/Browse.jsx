import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies';
import { useSelector } from 'react-redux';
import GPTSearch from './GPTSearch';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  const gptSearch=useSelector((store)=>store.gpt);
  
  return (
    <div>
   <Header/>
   {gptSearch?.showGPTSearch ? <GPTSearch/>
   :
   <>
   <MainContainer/>
   <SecondaryContainer/>
   </>
}
   {/*
    Main Container
     -Video Background
     -Video Title
    Secondary Container
     -MovieList * n
     -cards*n
   */}
    </div>
  )
}

export default Browse
