import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return (
        <div className='px-6'>
            <h1 className='font-bold text-white text-lg md:text-3l py-4'>{title}</h1>

                    <div className='flex overflow-x-scroll'>
                    <div className='flex'>

                        {movies?.map((movie) => (
                            <MovieCard key={movie.id} poster_path={movie.poster_path} />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default MovieList
