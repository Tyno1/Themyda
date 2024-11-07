import { configureStore } from "@reduxjs/toolkit";
import sectionReducer from "./section/sectionSlice";

export const store = configureStore({
  reducer: {
    // Define your reducers here
    sections: sectionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
