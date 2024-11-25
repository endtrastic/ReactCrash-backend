import ExpenseItem from './Expenseitem.jsx';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter.jsx'
import Card from '../UI/Card.jsx';
import './Expenses.css';


const Expenses = (props) => {
    const expenses = props.expenses
    console.log(expenses)

    const saveYearHandler = (selectedYear) => {
        console.log('Selected Year in Expenses.jsx:', selectedYear)
    }

    
    return (
        <Card className="expenses">
            <ExpensesFilter onchangeyear={saveYearHandler}/>
            {expenses.map((expense, index) => (
                <ExpenseItem key={expense.id || index} expenseData={expense} />
            ))}
        </Card>
    )
}

export default Expenses;