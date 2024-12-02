import ExpenseForm from "./ExpenseForm.jsx";
import './NewExpense.css'
import { useState } from 'react';


const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
        console.log(`Form open`)
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
        console.log(`Form not open`)
    };



    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && (
                <ExpenseForm 
                    onSaveExpenseData={saveExpenseDataHandler} 
                    onCancel={stopEditingHandler}
                />
            )}
        </div>
    )
}


export default NewExpense;