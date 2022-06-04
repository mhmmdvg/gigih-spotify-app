import { createSlice } from '@reduxjs/toolkit';

export const playlistSlice = createSlice({
  name: 'playlist',
  initialState: {
    current: [],
    currentSidebar: [],
  },
  reducers: {
    setCurrentPlaylists: (state, action) => {
      state.current = action.payload;
    },
    setCurrentSidebar: (state, action) => {
      state.currentSidebar = action.payload;
    },
  },
});

export const { setCurrentPlaylists, setCurrentSidebar } = playlistSlice.actions;

export default playlistSlice.reducer;
