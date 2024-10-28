import { create } from 'zustand';
import moment from 'moment';

const useCommentStore = create((set) => ({
  comments: [
    {
      id: 1,
      author: 'Hamza',
      time: moment().subtract(2, 'days'),
      text: 'harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum nobis.',
    },
    {
      id: 2,
      author: 'Mohammed',
      time: moment().subtract(4, 'days'),
      text: 'Sure, Thanks',
    },
  ],
  addComment: (comment) =>
    set((state) => ({ comments: [...state.comments, comment] })),
}));

export default useCommentStore;
