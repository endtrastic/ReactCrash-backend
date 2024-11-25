import ExpenseItem from './Expenseitem.jsx'
import Card from '../UI/Card.jsx'
import './Expenses.css'


const Expenses = (props) => {
    const expenses = props.expenses
    console.log(expenses)

    
    return (
        <Card className="expenses">
            {expenses.map((expense, index) => (
                <ExpenseItem key={expense.id || index} expenseData={expense} />
            ))}
        </Card>
    )
}

export default Expenses;