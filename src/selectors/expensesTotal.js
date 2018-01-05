export default (expenses) => (
    expenses.reduce(((accumulator, currentExpense) => accumulator + currentExpense.amount), 0)
);
