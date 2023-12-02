import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../feature/counterSlice';
counterSlice;
import postSliceReducer from '../feature/postSlice';
//importing counterslice.reducer , the defaultly exported module from the  counterslice file to the store
//creating a property in the obj of reducer in the store,x
export const store = configureStore({
  reducer: {
    counterSlice: counterSlice.reducer, //slice 1,
    postSlice: postSliceReducer
  }
});
