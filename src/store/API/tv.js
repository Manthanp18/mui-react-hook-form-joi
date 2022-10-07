import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//Internal
import { baseQuery } from "../appApi";

export const tvList = createApi({
  reducerPath: "tvApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  tagTypes: ["Tv"],
  endpoints: (builder) => ({
    // Get todo
    getTvList: builder.query({
      query: () => "trending/tv/week?api_key=30ab18d429a3ea4ce7aa70c82e38281a",
      providesTags: ["tv"],
    }),
  }),
});
export const { useGetTvListQuery } = tvList;
// movie/popular?api_key=<<api_key>>&language=en-US&page=1
