import ExpenseItem from './Expenseitem.jsx'
import Card from '../UI/Card.jsx'
import './Expenses.css'


const Expenses = (props) => {
    console.log(props.expenses[1])
    return (
        <Card className="expenses">
            <ExpenseItem expenseData={props.expenses[0]}/>
            <ExpenseItem expenseData={props.expenses[1]}/>
        </Card>
    )
}

export default Expenses;