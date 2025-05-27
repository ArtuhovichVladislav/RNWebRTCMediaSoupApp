import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    login: builder.mutation<
      { token: string },
      { username: string; password: string }
    >({
      async queryFn() {
        return new Promise(resolve => {
          setTimeout(async () => {
            const mockToken = 'mocked-token-123456';

            resolve({ data: { token: mockToken } });
          }, 1000);
        });
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
