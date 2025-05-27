import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { RootState } from '.';

type UserData = {
  id: string;
  name: string;
};

export const apiWithAuth = createApi({
  reducerPath: 'apiWithAuth',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.webrtctest.org',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    getUserData: builder.query<UserData, void>({
      query: () => '/users/private',
    }),
  }),
});

export const { useGetUserDataQuery } = apiWithAuth;
