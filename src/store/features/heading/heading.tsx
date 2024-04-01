import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface HeadingState {
  value: string;
}

const initialState: HeadingState = {
  value: "home",
};

export const headingSlice = createSlice({
  name: "heading",
  initialState,
  reducers: {
    headingChange: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { headingChange } = headingSlice.actions;

export default headingSlice.reducer;
