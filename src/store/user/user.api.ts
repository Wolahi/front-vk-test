import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserRead, BearerResponse } from "./user.types";

export const userApi = createApi({
  reducerPath: "api/product",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (build) => ({
    loginUser: build.query<BearerResponse, string>({
      query: (str: string) => `auth/jwt/login/${str}`,
    }),
    getCurUser: build.query<UserRead, any>({
      query: (obj) => `user/me`,
    }),
  }),
});

export const { useGetCurUserQuery, useLoginUserQuery } = userApi;
