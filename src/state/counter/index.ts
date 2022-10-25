import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./slice";
import { RESOURCE } from "../../constants";

export const { reducer, actions } = createSlice({
  name: RESOURCE.COUNTER,
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
  },
});

export const { increment, decrement } = actions;

export default reducer;
