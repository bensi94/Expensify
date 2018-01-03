import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const text = 'hallo';
    wrapper.find('input').simulate('change', { target: { value: text }});
    expect(setTextFilter).toHaveBeenLastCalledWith(text);
});

test('should sort by date', () => {
    wrapper.setProps({
        filters: altFilters
    });
    const option = 'date';
    wrapper.find('select').simulate('change', { target: { value: option }});
    expect(sortByDate).toHaveBeenLastCalledWith();
});

test('should sort by amount', () => {
    const option = 'amount';
    wrapper.find('select').simulate('change', { target: { value: option }});
    expect(sortByAmount).toHaveBeenLastCalledWith();
});

test('should handle date change', () => {
    const startAndEndDate = { startDate: moment(0), endDate: moment(0).add(3, 'days') };
    wrapper.find('DateRangePicker').prop('onDatesChange')(startAndEndDate);
    expect(setStartDate).toHaveBeenLastCalledWith(startAndEndDate.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(startAndEndDate.endDate);
});

test('should handle date focus changes', () => {
    const calanderFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calanderFocused);
    expect(wrapper.state('calanderFocused')).toBe(calanderFocused);
});
