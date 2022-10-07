import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//Internal
import { baseQuery } from "../appApi";

export const movieList = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  tagTypes: ["Todo"],
  endpoints: (builder) => ({
    // Get todo
    getMovieList: builder.query({
      query: () => "trending/all/week?api_key=30ab18d429a3ea4ce7aa70c82e38281a",
      providesTags: ["todo"],
    }),
  }),
});
export const { useGetMovieListQuery } = movieList;
// movie/popular?api_key=<<api_key>>&language=en-US&page=1
