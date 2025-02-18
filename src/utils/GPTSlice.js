import { createSlice } from "@reduxjs/toolkit";
const GPTSlice=createSlice({
    name:"gpt",
    initialState:{
          showGPTSearch:false,
          movieNames:null,
          movieResults:null
    },
    reducers:{
         toggleGPTSearchView:(state)=>{
            state.showGPTSearch= !state.showGPTSearch
         },
         showSearchedMovies:(state,action)=>{
            const {movieNames, movieResults}=action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults;
         }
    }
})

export const {toggleGPTSearchView, showSearchedMovies}=GPTSlice.actions;

export default GPTSlice.reducer;