const incomeColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e'];
const expenseColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79'];

export const incomeCategories = [
  { type: 'Business', amount: 0, color: incomeColors[0] },
  { type: 'Investments', amount: 0, color: incomeColors[1] },
  { type: 'Bonus', amount: 0, color: incomeColors[2] },
  { type: 'Gifts', amount: 0, color: incomeColors[3] },
  { type: 'Salary', amount: 0, color: incomeColors[4] },
  { type: 'Rental income', amount: 0, color: incomeColors[5] },
];

export const expenseCategories = [
  { type: 'Transport', amount: 0, color: expenseColors[0] },
  { type: 'Clothes', amount: 0, color: expenseColors[1] },
  { type: 'Food', amount: 0, color: expenseColors[2] },
  { type: 'Shopping', amount: 0, color: expenseColors[3] },
  { type: 'House', amount: 0, color: expenseColors[4] },
  { type: 'Entertainment', amount: 0, color: expenseColors[5] },
  { type: 'Phone', amount: 0, color: expenseColors[6] },
  { type: 'Other', amount: 0, color: expenseColors[7] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};