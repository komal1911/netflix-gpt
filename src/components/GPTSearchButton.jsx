import React from 'react'
import { bgImg } from '../utils/constants'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import { useRef } from 'react'
import openai from '../utils/openAI'
import { showSearchedMovies } from '../utils/GPTSlice'
import { useDispatch } from 'react-redux'
import { options } from '../utils/constants' 
import MovieSuggestions from './MovieSuggestions'


const GPTSearchButton = () => {
  const dispatch=useDispatch();
  const langKey=useSelector((store)=>store.config.lang);
  console.log(lang[langKey].gptSearchPlaceholder);
  const searchText=useRef(null);



const searchMovieTMDB=async(movie)=>{
const data=await fetch('https://api.themoviedb.org/3/search/movie?query='
+movie+
'&include_adult=false&language=en-US&page=1', options);
const json=await data.json();
return json.results;
}
const handleGPTSearchClick=async()=>{
  console.log(searchText.current.value);

  const GPTSearchQuery='Act as a Movie recommendation system and suggest some movies for the query'+searchText.current.value+
"only give me name of 5 movies comma separated like the example given ahead.Example Result: Gadar,Don, Sholey, Golmaal, Koi Milgya";


  // make an api call to openai and get the movie results
  
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: GPTSearchQuery }],
      model: 'gpt-3.5-turbo',
    });
    if(!gptResults.choices){return null;}
 const gptMovies=(gptResults.choices?.[0]?.message?.content.split(","));
 const promiseArray=gptMovies.map((movie)=>
   searchMovieTMDB(movie)
)
const tmdbMovies=await Promise.all(promiseArray);
console.log(tmdbMovies);
console.log("gptMovies"+gptMovies);

dispatch(showSearchedMovies({movieNames:gptMovies, movieResults:tmdbMovies}));
}


  return (
    <div className='pt-[40%] md:pt-[10%] flex justify-center'>
      <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
        <input type="text" ref={searchText} className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder} />
        

        <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg' onClick={handleGPTSearchClick}>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GPTSearchButton
