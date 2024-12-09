import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addInfo, delelteInfo, fetchInfo, toggleOrder } from "./ops";
import { selectFilter } from "./filterSlice";

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
      })
      .addCase(toggleOrder.fulfilled, (state, action) => {
        const item = state.items.find((item) => item.id === action.payload.id);
        item.completed = !item.completed;
      });
  },
});

export const selectInfo = (state) => state.info.items;
export const infoReducer = slice.reducer;

export const selectFilteredDataMemo = createSelector(
  [selectInfo, selectFilter],
  (info, filter) => {
    switch (filter) {
      case "active":
        return info.filter((text) => !text.completed);

      case "completed":
        return info.filter((text) => text.completed);

      default:
        return info;
    }
  }
);

export const selectUncompletedInfoMemo = createSelector(
  [selectInfo],
  (info) => {
    return info.reduce(
      (total, curr) => (curr.completed ? total : total + 1),
      0
    );
  }
);
