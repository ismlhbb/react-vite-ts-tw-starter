import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from 'components/counter/counter.reducer';
import exampleReducer from 'components/example/example.reducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    example: exampleReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
