import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authApi } from '../authApi';

interface AuthState {
  token: string | null | undefined;
}

const initialState: AuthState = {
  token: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action) => {
        state.token = action.payload.token;
      },
    );
  },
});

export const { setToken } = authSlice.actions;
export default authSlice.reducer;
