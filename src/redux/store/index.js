// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from './ExpenseSlice';
import commentsReducer from './CommentSlice'

const store = configureStore({
  reducer: {
    expenses: expenseReducer,
    comments: commentsReducer,
  },
});

export default store;
