import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: 1,
      title: 'Rent',
      amount: 1000,
      date: new Date(2020, 12, 2)
    },
  ];
  
  return (
    <div>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
