import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './slice';
// import reducer from './reducer';

export default configureStore({
  reducer: {
    // auth: reducer,
    auth: AuthSlice,
  },
});
