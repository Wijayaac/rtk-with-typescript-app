import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import kanyeReducer from "../features/kanye/kanyeSlice";

export const store = configureStore({
  reducer: {
    // This is where we add reducers.
    counter: counterReducer,
    kanyeQuote: kanyeReducer,
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
