import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//Internal
// import { getToken, DateSetToUtc } from "../utils";
import { BASE_URL } from "../config";
// import moment from "moment";

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  //   prepareHeaders: (headers) => {
  //     headers.set("UserUtcTime", DateSetToUtc(moment()));
  //     const token = getToken();
  //     if (token) {
  //       headers.set("Authorization", `Bearer ${token}`);
  //     }
  //     return headers;
  //   },
});
