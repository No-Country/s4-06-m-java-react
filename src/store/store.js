import { configureStore } from '@reduxjs/toolkit';
import { useApi } from './api';
import { userSlice } from './slices/user/userSlice';


export const store = configureStore({
  reducer: {
      user: userSlice.reducer,

      [useApi.reducerPath]: useApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat( useApi.middleware )
})