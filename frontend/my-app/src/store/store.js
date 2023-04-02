import { configureStore } from "@reduxjs/toolkit";
import addLearningFormReducer from "./addLearningFormSlice";
import learningsReducer from "./LearningsSlice";
import lockSliceReducer from "./LockSlice";

export const store = configureStore({
  reducer: {
    addLearningForm: addLearningFormReducer,
    learnings: learningsReducer,
    lock: lockSliceReducer,
  },
});
