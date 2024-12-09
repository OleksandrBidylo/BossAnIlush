import { configureStore } from "@reduxjs/toolkit";
import { infoReducer } from "./slice";
import { filterReducer } from "./filterSlice";

export const store = configureStore({
  reducer: {
    info: infoReducer,
    filter: filterReducer,
  },
});
