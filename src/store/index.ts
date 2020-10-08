import {
  configureStore,
  ThunkAction,
  Action,
  AnyAction,
  Reducer,
} from "@reduxjs/toolkit";
import answersReducer from "hooks/useAnswers/reducer";
import { reducer as useResourceReducer } from "@alexjamesmalcolm/use-resource";

export const store = configureStore({
  reducer: {
    answers: answersReducer,
    useResource: (useResourceReducer as unknown) as Reducer<{}, AnyAction>,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
