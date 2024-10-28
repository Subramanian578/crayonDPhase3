import { createSlice } from '@reduxjs/toolkit';

const initialExpenses = [
  { name: 'Expense name', date: '04/09/23', amount: '1050', currency: 'AED' },
  { name: 'Note buying', date: '01/09/23', amount: '241', currency: 'AED' },
];

const expenseSlice = createSlice({
  name: 'expenses',
  initialState: initialExpenses,
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
