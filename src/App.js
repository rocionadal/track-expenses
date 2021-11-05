import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id: 1,
      title: 'Rent',
      amount: 1000,
      date: new Date(2020, 12, 2),
    },
  ];

  function addExpenseHandler(expense) {
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
