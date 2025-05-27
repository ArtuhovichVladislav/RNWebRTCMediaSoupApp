import { createListenerMiddleware } from '@reduxjs/toolkit';

import { TokenManager } from '../../services/token-manager';
import { logout } from '../actions/logout';
import { authApi } from '../authApi';

export const auth = createListenerMiddleware();

auth.startListening({
  actionCreator: logout,
  effect: () => {
    TokenManager.clearToken();
  },
});

auth.startListening({
  matcher: authApi.endpoints.login.matchFulfilled,
  effect: action => {
    const token = action.payload.token;
    TokenManager.saveToken(token);
  },
});
