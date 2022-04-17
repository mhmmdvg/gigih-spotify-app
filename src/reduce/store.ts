import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from '../pages/auth/authSlice';
import CreatePlaylistSlice from '../pages/home/createPlaylistSlice';

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    createPlaylist: CreatePlaylistSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
