import { createSlice } from '@reduxjs/toolkit';
import { TrackTypes } from '../../type/TrackTypes';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchResult: <TrackTypes[]>[],
  },
  reducers: {
    setSearch: (state, action) => {
      state.searchResult = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
