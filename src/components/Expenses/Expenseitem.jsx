import Card from '../UI/Card.jsx'
import ExpenseDate from './Expensedate.jsx'
import './Expenseitem.css'
import '../UI/Card.css'
import { useState } from 'react'


const ExpenseItem = (props) => {
    const {title, price, date} = props.expenseData

    const [titles, setTitle] = useState(title)

    const clickHandler = () => {
        console.log('Clicked!')
        setTitle(`Updated by click ${titles}`)
        console.log(titles)
    }

    return (
    <li>
        <Card className="expense-item">
            <ExpenseDate date={date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{price}</div> 
            </div>  
            <button onClick={clickHandler}>Click Me</button>
        </Card>
    </li>
    )
}

export default ExpenseItem;