import ExpensesFilter from './ExpensesFilter/ExpensesFilter.jsx';
import Card from '../UI/Card.jsx';
import './Expenses.css';
import ExpensesList from './ExpensesList/ExpensesList.jsx';
import { useState } from 'react';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2024');

    const saveYearHandler = (selectedYear) => {
        console.log('Selected Year in Expenses.jsx:', selectedYear);
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter((expense) => {
        return new Date(expense.date).getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onchangeyear={saveYearHandler}/>
            <ExpensesList expenses={filteredExpenses}/>
        </Card>
    );
}

export default Expenses;