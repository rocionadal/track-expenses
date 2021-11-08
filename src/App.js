import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [
  {
    id: 1,
    title: 'Flight to London',
    amount: 24.89,
    date: new Date(2019, 4, 27),
  },
  {
    id: 2,
    title: 'Car Insurance',
    amount: 67.99,
    date: new Date(2020, 3, 2),
  },
  {
    id: 3,
    title: 'Phone',
    amount: 80,
    date: new Date(2020, 11, 18),
  },
  {
    id: 4,
    title: 'GYM',
    amount: 29.99,
    date: new Date(2020, 5, 2),
  },
  {
    id: 5,
    title: 'PCR',
    amount: 45,
    date: new Date(2021, 2, 8),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
