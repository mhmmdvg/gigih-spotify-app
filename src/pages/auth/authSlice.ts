import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    tokenType: '',
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setTypeToken: (state, action) => {
      state.tokenType = action.payload;
    },
  },
});

export const { setToken, setTypeToken } = authSlice.actions;

export default authSlice.reducer;
