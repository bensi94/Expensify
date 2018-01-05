import React from 'react';
import { connect } from 'react-redux';
import expensesTotal from '../selectors/expensesTotal';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = (props) => (
    <div>
        <h4>Expenses Summary</h4>
        <p>Total expenses: {props.expenses.length}</p>
        <p>
            Total expenses amount:&nbsp;
            { numeral(expensesTotal(props.expenses) / 100).format('$0,0.00')}
        </p>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};
export default connect(mapStateToProps)(ExpensesSummary);
