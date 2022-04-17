import { createSlice } from '@reduxjs/toolkit';

export const createPlaylistSlice = createSlice({
  name: 'createPlaylist',
  initialState: {
    id: '',
    name: '',
    description: '',
  },
  reducers: {
    setCreatePlaylist: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.description = action.payload.description;
    },
  },
});

export const { setCreatePlaylist } = createPlaylistSlice.actions;

export default createPlaylistSlice.reducer;
