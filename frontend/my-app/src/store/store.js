import { configureStore } from "@reduxjs/toolkit";
import addLearningFormReducer from "./addLearningFormSlice";
import learningsReducer from "./LearningsSlice";

export const store = configureStore({
  reducer: {
    addLearningForm: addLearningFormReducer,
    learnings: learningsReducer,
  },
});
