import { createSlice, nanoid } from '@reduxjs/toolkit';

const POST_URL = 'https://jsonplaceholder.typicode.com/posts';
const initialState = {
  posts: [],
  status: 'idle',
  error: null
};
const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    //reducer with reducer and data structure
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
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
      const existingPost = state.posts.find(post => post.id === postId);
      if (existingPost) {
        console.log(existingPost);
        existingPost.reactions[reaction]++;
      }
    }
  }
});
export const getpostSlice = state => state.postSlice.posts;
export const { postAdded, reactionAdded } = postSlice.actions;
export default postSlice.reducer;
