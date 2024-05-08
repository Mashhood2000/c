import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice.js';

export const store = configureStore({
  reducer: { user: userReducer }, // Corrected import name to userReducer
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});
