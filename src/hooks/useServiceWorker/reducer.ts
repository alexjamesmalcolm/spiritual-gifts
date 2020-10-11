import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ServiceWorkerState {
  serviceWorkerInitialized: boolean;
  serviceWorkerUpdated: boolean;
  serviceWorkerRegistration: ServiceWorkerRegistration | null;
}

const initialState: ServiceWorkerState = {
  serviceWorkerInitialized: false,
  serviceWorkerUpdated: false,
  serviceWorkerRegistration: null,
};

export const serviceWorkerSlice = createSlice({
  name: "serviceWorker",
  initialState,
  reducers: {
    serviceWorkerInitialized: (
      state,
      action: PayloadAction<ServiceWorkerRegistration>
    ) => ({
      ...state,
      serviceWorkerInitialized: true,
      serviceWorkerRegistration: action.payload,
    }),
    serviceWorkerUpdated: (
      state,
      action: PayloadAction<ServiceWorkerRegistration>
    ) => ({
      ...state,
      serviceWorkerUpdated: true,
      serviceWorkerRegistration: action.payload,
    }),
    initiatedUpdate: (state) => ({ ...state, serviceWorkerUpdated: false }),
  },
});

// export const { increment, decrement, incrementByAmount } = serviceWorkerSlice.actions;
export const {
  serviceWorkerInitialized,
  serviceWorkerUpdated,
  initiatedUpdate,
} = serviceWorkerSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount: number): AppThunk => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export default serviceWorkerSlice.reducer;
