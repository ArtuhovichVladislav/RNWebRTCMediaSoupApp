import { createAction } from '@reduxjs/toolkit';

export const LOGOUT = 'auth/logout';

export const logout = createAction<void>(LOGOUT);
