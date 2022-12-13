import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productsDataSlice from './redux/reducers/productsDataSlice';

export const store = configureStore({
  reducer: {
    productsData: productsDataSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
