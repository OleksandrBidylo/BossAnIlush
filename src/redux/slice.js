import { createSlice } from "@reduxjs/toolkit";
import { addInfo, delelteInfo, fetchInfo } from "./ops";

const initialState = {
  items: [],
};

const slice = createSlice({
  name: "info",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchInfo.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addInfo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(delelteInfo.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export const selectInfo = (state) => state.info.items;
export const infoReducer = slice.reducer;
