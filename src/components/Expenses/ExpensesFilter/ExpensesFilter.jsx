import './ExpensesFilter.css'

const ExpensesFilter = (props) => {

    const yearChangeHandler = (event) => {
        const selectedYear = event.target.value
        props.onchangeyear(selectedYear)
    }

    return (
        <div className="expenses-filter">
            <label>Filter by Year: </label>
            <select onChange={yearChangeHandler} value={props.enteredyear}>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
            </select>
        </div>
    );
}

export default ExpensesFilter;
