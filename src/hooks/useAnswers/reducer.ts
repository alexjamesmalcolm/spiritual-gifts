import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AnswersState {
  questions: { number: number; answer: 0 | 1 | 2 | 3 }[];
}

const initialState: AnswersState = {
  questions: [],
};

export const answersSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {
    clearAllAnswers: (state) => ({
      questions: [],
    }),
    clearAnswerOfQuestionNumbered: (state, action: PayloadAction<number>) => ({
      questions: state.questions.filter(
        (question) => question.number !== action.payload
      ),
    }),
    setAnswerOfQuestionNumbered: (
      state,
      action: PayloadAction<{ number: number; answer: 0 | 1 | 2 | 3 }>
    ) => {
      const { answer, number } = action.payload;
      if (state.questions.some((question) => question.number === number)) {
        return {
          questions: state.questions.map((question) =>
            question.number === number ? { ...question, answer } : question
          ),
        };
      } else {
        return { questions: state.questions.concat([{ number, answer }]) };
      }
    },
  },
});

// export const { increment, decrement, incrementByAmount } = answersSlice.actions;
export const {
  clearAllAnswers,
  clearAnswerOfQuestionNumbered,
  setAnswerOfQuestionNumbered,
} = answersSlice.actions;

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

export default answersSlice.reducer;
