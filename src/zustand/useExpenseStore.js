import { create } from 'zustand';

const useExpenseStore = create((set) => ({
  expenses: [
    { name: 'Expense name', date: '04/09/23', amount: '1050', currency: 'AED' },
    { name: 'Note buying', date: '01/09/23', amount: '241', currency: 'AED' },
  ],
  addExpense: (expense) => set((state) => ({
    expenses: [...state.expenses, expense],
  })),
}));

export default useExpenseStore;
