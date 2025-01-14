import React, { useState } from 'react';
import Card from '../UI/card.js';
import ExpensesFilter from './ExpenseFilter.js';
import './Expenses.css';
import ExpenseList from './ExpenseList.js';
import ExpensesChart from './ExpensesChart.js';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

 

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
       <ExpenseList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;