// store/commentsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [
      {
        id: 1,
        author: 'Hamza',
        time: moment().subtract(2,'days'),
        text: 'harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum nobis.',
      },
      {
        id: 2,
        author: 'Mohammed',
        time: moment().subtract(4,'days'),
        text: 'Sure, Thanks',
      },
    ],
  },
  reducers: {
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
  },
});

export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
