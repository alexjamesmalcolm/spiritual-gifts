import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import answersReducer from "hooks/useAnswers/reducer";
import serviceWorkerReducer from "hooks/useServiceWorker/reducer";

const persistentStateKey = "state";
const localStorageState = localStorage.getItem(persistentStateKey);
const persistentState = localStorageState ? JSON.parse(localStorageState) : {};

export const store = configureStore({
  reducer: {
    answers: answersReducer,
    serviceWorker: serviceWorkerReducer,
  },
  preloadedState: persistentState,
});

store.subscribe(() => {
  const state = store.getState();
  const serializedState = JSON.stringify(state);
  localStorage.setItem("state", serializedState);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
