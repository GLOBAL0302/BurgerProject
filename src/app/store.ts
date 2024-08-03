import { configureStore } from '@reduxjs/toolkit';
import { navReducer } from '../store/navSlice.ts';

export const store = configureStore({
  reducer: {
    nav:navReducer
  },
});

export type RootState = ReturnType<typeof store.dispatch>;
export type AppDispatch = typeof store.dispatch;
