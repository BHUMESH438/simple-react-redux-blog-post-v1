import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0
};

//function small letter / component big letter
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // actions
    increment: state => {
      state.count += 1;
    },
    decrement: state => {
      state.count -= 1;
    },
    reset: state => {
      state.count = 0;
    },
    incrementBy: (state, action) => {
      console.log(action);
      state.count = state.count + action.payload;
    }
  }
});

//export actions and defaultly export the reducer obj in counterslice module
export const { increment, decrement, reset, incrementBy } = counterSlice.actions;
// export default counterSlice.reducer ;
// if we didnt provide the reducer obj then we need named import in the store
