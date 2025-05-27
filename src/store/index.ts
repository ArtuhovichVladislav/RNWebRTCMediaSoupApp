import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/auth-slice';
import { authApi } from './authApi';
import { apiWithAuth } from './api-with-auth';
import { auth } from './middlewares';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [apiWithAuth.reducerPath]: apiWithAuth.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      apiWithAuth.middleware,
      auth.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
