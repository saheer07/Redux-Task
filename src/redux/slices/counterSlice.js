import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => {
        if (state > 0) {
          return state - 1;
        }
        return state; 
      },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
