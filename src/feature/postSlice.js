import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'bhumesh1',
    content: 'react js like it'
  },
  {
    id: '2',
    title: 'bhumesh2',
    content: 'vuejs like it'
  }
];
const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    //business logic actions of post
    postAdded: {
      reducer(state, action) {
        console.log('state', state);
        console.log('action', action);
        state.push(action.payload);
        console.log('state after', state);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title: title,
            content: content
          }
        };
      }
    }
  }
});
export const getpostSlice = state => state.postSlice;
export const { postAdded } = postSlice.actions;
export default postSlice.reducer;
