import './App.css'
import Expenses from './components/Expenses/Expenses.jsx'
import NewExpense from './components/Expenses/NewExpense/NewExpense.jsx'


function App() {

  const expenses = [
    {
      date: new Date(2024, 10, 12),
      title: 'How to get 50000 dollars book',
      price: 50000,
      id: 1
    },
    {
      date: new Date(2024, 10, 12),
      title: '(Brick) jeans',
      price: 0.99,
      id: 2
    }
  ]

  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
  }

  return (
    <div className="App">
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses expenses={expenses}/>
    </div>
  )
}

export default App
