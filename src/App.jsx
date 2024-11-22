import './App.css'
import Expenses from './components/Expenses/Expenses.jsx'
import NewExpense from './components/Expenses/NewExpense/NewExpense.jsx'


function App() {

  const expenses = [
    {
      date: new Date(2024, 10, 12),
      title: 'How to get 50000 dollars book',
      price: 50000
    },
    {
      date: new Date(2024, 10, 12),
      title: '(Brick) jeans',
      price: 0.99
    }
  ]

  return (
    <div className="App">
        <NewExpense/>
        <Expenses expenses={expenses}/>
    </div>
  )
}

export default App
