import './App.css'
import Expenses from './components/Expenses/Expenses.jsx'
import NewExpense from './components/Expenses/NewExpense/NewExpense.jsx'
import { useState, useEffect } from 'react'


const DUMMY_EXPENSES = [
  {
    id: 'id1',
    date: new Date(2023, 10, 12),
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
    date: new Date(2025, 5, 22),
    title: 'Prisma Paper Bag',
    price: -1000,
  },
  {
    id: 'id4',
    date: new Date(2024, 3, 10),
    title: 'Otokars laptop',
    price: 2.99,
  },
  {
    id: 'id5',
    date: new Date(2023, 7, 30),
    title: 'Mykhailos phone',
    price: 30,
  }
]


const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const expensesFromLS = JSON.parse(localStorage.getItem('expenses'));
    return expensesFromLS || [];
  })


  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

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
