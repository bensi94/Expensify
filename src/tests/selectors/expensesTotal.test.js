import totalExpenses from '../../selectors/expensesTotal';
import expenses from '../fixtures/expenses';
import singleExpense from '../fixtures/singleExpense';


test('Should return 0 if no expenses', () => {
    const emptyExpenses = [];
    const total = totalExpenses(emptyExpenses);
    expect(total).toBe(0);
});

test('Should correctly add up a singleExpense', () => {
    const total = totalExpenses(singleExpense);
    expect(total).toBe(195);
});

test('Should correctly add up multiple expenses', () => {
    const total = totalExpenses(expenses);
    expect(total).toBe(114195);
});
