import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  counter_val: 0,
  max_counter_limit: 99,
};

const counter = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    increaseCounter: (state) => {
      state.counter_val = state.counter_val + 1;
    },
    decreaseCounter: (state) => {
      if(state.counter_val > 0)
        state.counter_val = state.counter_val - 1;
    },
    
  },
});

export const {
  increaseCounter,
  decreaseCounter,
  
} = counter.actions;

export default counter.reducer;