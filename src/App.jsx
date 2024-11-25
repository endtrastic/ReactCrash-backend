import './App.css'
import Expenses from './components/Expenses/Expenses.jsx'
import NewExpense from './components/Expenses/NewExpense/NewExpense.jsx'
import { useState } from 'react'


const DUMMY_EXPENSES = [
  {
    id: 'id1',
    date: new Date(2024, 10, 12),
    title: 'How to get 50000 dollars book',
    price: 50000,
  },
  {
    id: 'id2',
    date: new Date(2024, 10, 12),
    title: '(Brick) jeans',
    price: 0.99,
  },
  {
    id: 'id3',
    date: new Date(2025, 10, 12),
    title: 'Prisma Paper Bag',
    price: -1000,
  }

]


function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)


  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses]
    })
  }

  return (
    <div className="App">
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses expenses={expenses}/>
    </div>
  )
}

export default App
