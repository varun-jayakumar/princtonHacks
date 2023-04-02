import { createSlice } from "@reduxjs/toolkit";

export const LockSlice = createSlice({
  name: "learnings",
  initialState: { lock_no: 0 },
  reducers: {
    unlock: (state, action) => {
      state.lock_no++;
    },
    update: (state, action) => {
      state.lock_no = action.payload;
    },
  },
});

export const LockSliceActions = LockSlice.actions;

export default LockSlice.reducer;
