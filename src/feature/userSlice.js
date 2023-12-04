import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    name: 'bhumesh1'
  },
  {
    id: '2',
    name: 'bhumesh2'
  },
  {
    id: '3',
    name: 'bhumesh3'
  }
];

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {}
});

export const getUserSlice = state => state.userSlice;
export default userSlice.reducer;
