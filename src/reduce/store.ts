import { configureStore } from '@reduxjs/toolkit';
import SearchSlice from '../components/search-form/searchSlice';
import AuthSlice from '../pages/auth/authSlice';
import CreatePlaylistSlice from '../components/create-playlist/createPlaylistSlice';
import SelectSlice from '../pages/home/selectedSlice';
import PlaylistSlice from '../pages/playlist/playlistSlice';

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    search: SearchSlice,
    createPlaylist: CreatePlaylistSlice,
    selectTrack: SelectSlice,
    playlist: PlaylistSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
