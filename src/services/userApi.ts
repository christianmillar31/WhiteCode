import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getUser: builder.query<{ name: string; email: string }, void>({
      query: () => 'user',
    }),
  }),
});

export const { useGetUserQuery } = userApi; 