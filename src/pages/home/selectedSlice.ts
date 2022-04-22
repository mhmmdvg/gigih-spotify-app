import { createSlice } from '@reduxjs/toolkit';

export const selectSlice = createSlice({
  name: 'selectTrack',
  initialState: {
    selectedTrack: [],
  },
  reducers: {
    setSelectedTrack: (state, action) => {
      state.selectedTrack = action.payload;
    },
  },
});

export const { setSelectedTrack } = selectSlice.actions;

export default selectSlice.reducer;
