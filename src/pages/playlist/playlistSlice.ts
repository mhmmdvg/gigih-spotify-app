import { createSlice } from '@reduxjs/toolkit';

export const playlistSlice = createSlice({
  name: 'playlist',
  initialState: {
    current: [],
  },
  reducers: {
    setCurrentPlaylist: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { setCurrentPlaylist } = playlistSlice.actions;

export default playlistSlice.reducer;
