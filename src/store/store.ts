// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import signupReducer from './signup/slice';

export const store = configureStore({
  reducer: {
    signup: signupReducer,
    // ... other reducers
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;