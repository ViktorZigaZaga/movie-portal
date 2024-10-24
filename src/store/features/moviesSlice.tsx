import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '../store'
import { moviesApi, MoviesListData } from "../services/movies";

interface InitialState {
  movies: MoviesListData[] | null,
}

const initialState: InitialState = {
  movies: null,
}

export const slice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(moviesApi.endpoints.getListMovies.matchFulfilled, (state, action) => {
        state.movies = action.payload.Search;
      })
  }
})

export const { logout } = slice.actions;
export default slice.reducer;

export const selectMovies = (state: RootState) => state.movies;