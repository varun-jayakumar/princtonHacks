import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  learnings: [],
};

export const LearningsSlice = createSlice({
  name: "learnings",
  initialState,
  reducers: {
    updateData: (state, action) => {
      state.learnings = action.payload;
    },
  },
});

export const LearningsSliceActions = LearningsSlice.actions;

export default LearningsSlice.reducer;
