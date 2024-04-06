import { createSlice } from "@reduxjs/toolkit";

export interface FilerSliceState {
  value: number;
}

const initialState: FilerSliceState = {
  value: 1
};

export const filerSlice = createSlice({
  name: "filer",
  initialState,
  reducers: (creator) => ({
    inc: creator.reducer(state => {
      state.value++;
    }),
    dec: creator.reducer(state => {
      state.value--;
    })
  }),
  selectors: {
    selectValue: sliceState => sliceState.value
  }
});

export const { inc, dec } = filerSlice.actions;
export const { selectValue } = filerSlice.selectors;
