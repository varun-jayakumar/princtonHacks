import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const LockSlice = createSlice({
  name: "lock",
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
