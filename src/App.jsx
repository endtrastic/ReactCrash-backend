import './App.css'
import Expenses from './components/Expenses/Expenses.jsx'
import NewExpense from './components/Expenses/NewExpense/NewExpense.jsx'
import React, { Fragment, useState, useEffect } from 'react'
import Error from "./components/UI/Error.jsx"


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
    const[isFetching, setIsFetching] = useState(false)
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)
    const [showError, setShowError] = useState(false)

    useEffect(() => {

      const getExpenses = async () => {
          setIsFetching(true)
          try {
              const response = await fetch('http://localhost:3008/expensesss')
              const responseData = await response.json()
              if(!response.ok){
                throw new Error('Failed fetching data')
              }
              setExpenses(responseData.expenses)
          } catch (error) {
            setError({
              title: 'An error occured!',
              message: 'Failed fetching expenses data, please try again later'
            })
            setShowError(true)
          }
          setIsFetching(false)
      }
      getExpenses()
      console.log(expenses)
    }, [])
    
  console.log(error)
  const errorHandler = () => {
    setError(null)
    setShowError(false)
  }  

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses]
    })
  }

  return (
    <div className="App">
        { showError && (
          <Error
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
          
          />)
        }
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses 
        expenses={expenses}
        isLoading={isFetching}
        />
    </div>
  )
}

export default App