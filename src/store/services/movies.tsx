import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MovieData } from "../../types/interfaces";


export type MoviesListData = Pick<MovieData, "Title" | "Year" | "imdbID" | "Type" | "Poster">

export interface MovieSearchResponse {
  Search: MoviesListData[];
  totalResults: string;
  Response: string;
}
  
export interface MovieSearchRequest {
  searchParam: string;
  page?: string | number;
  type?: string;
}

interface GetMovieByIdRequest {
  movieId: string;
}

const apiKey = "7929b2e6"

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.omdbapi.com" }),
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    getListMovies: builder.query<MovieSearchResponse, MovieSearchRequest>({
      query: ({ searchParam, page, type }) => ({
        url: `/?apikey=${apiKey}&s=${searchParam ? searchParam : 'baby'}&page=${page}&type=${type}`,
      }),
    }),
    getMovieById: builder.query<MovieData, GetMovieByIdRequest>({
      query: ({ movieId }) => ({
        url: `/?apikey=${apiKey}&i=${movieId}`,
      }),
    }),
    getFavoritesById: builder.query<MoviesListData[], { ids: string[] }>({
      queryFn: async ({ ids }, _queryApi, _extraOptions, fetchWithBQ) => {
        try {
          const requests = ids.map((id) => fetchWithBQ(`/?apikey=${apiKey}&i=${id}`));
          const responses = await Promise.all(requests);

          const data = responses.map((response) => {
            if ('error' in response) {
              throw new Error('One or more requests failed');
            }
            return response.data as MoviesListData;
          });
          return { data };
        }catch(err: any) {
          return { error: err.message }
        }
      },
    }),
  })
})

export const { useGetListMoviesQuery, useGetMovieByIdQuery, useGetFavoritesByIdQuery } = moviesApi;
export const { endpoints: {getListMovies, getMovieById, getFavoritesById }} = moviesApi;


