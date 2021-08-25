import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "counterTwo",
  initialState: 5,
  reducers: {
    incrementTwo: (state) => state + 1,
    decrementTwo: (state) => state - 1,
    reset: () => 5
  }
});

export const { incrementTwo, decrementTwo, reset } = testSlice.actions;

export default testSlice.reducer;
