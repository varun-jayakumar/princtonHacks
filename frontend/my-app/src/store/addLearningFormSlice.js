import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  learning: "",
  durationoflearning: "",
  hoursoflearning: "",
  proficiency: "",
  roadmap: {},
};

export const addLearningFormSlice = createSlice({
  name: "addLearningForm",
  initialState,
  reducers: {
    updateData: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.roadmap = action.payload;
    },
  },
});

export const addLearningFormActions = addLearningFormSlice.actions;

export default addLearningFormSlice.reducer;
