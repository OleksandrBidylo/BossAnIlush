import { configureStore } from "@reduxjs/toolkit";
import { infoReducer } from "./slice";

export const store = configureStore({
  reducer: {
    info: infoReducer,
  },
});
