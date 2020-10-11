import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import answersReducer from "hooks/useAnswers/reducer";
import serviceWorkerReducer from "hooks/useServiceWorker/reducer";

export const store = configureStore({
  reducer: {
    answers: answersReducer,
    serviceWorker: serviceWorkerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
