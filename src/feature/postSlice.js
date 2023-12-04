import { createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';
import { cs } from 'date-fns/locale';

const initialState = [
  {
    id: '1',
    title: 'bhumesh1',
    content: 'react js like it',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0
    }
  },
  {
    id: '2',
    title: 'bhumesh2',
    content: 'vuejs like it',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0
    }
  }
];
const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    //reducer with reducer and data structure
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(10),
            title: title,
            content: content,
            date: new Date().toISOString(),
            userId: userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0
            }
          }
        };
      }
    },

    //reducer
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find(post => post.id === postId);
      if (existingPost) {
        console.log(existingPost);
        existingPost.reactions[reaction]++;
      }
    }
  }
});
export const getpostSlice = state => state.postSlice;
export const { postAdded, reactionAdded } = postSlice.actions;
export default postSlice.reducer;
