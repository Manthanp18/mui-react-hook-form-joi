import { configureStore, isRejectedWithValue } from "@reduxjs/toolkit";

import { movieList } from "../store";
import { tvList } from "./API/tv";

export default configureStore({
  reducer: {
    // common: commonReducer,

    [movieList.reducerPath]: movieList.reducer,
    [tvList.reducerPath]: tvList.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieList.middleware, tvList.middleware),
});
