import {useState} from 'react'
import ExpenseItem from './ExpenseItem';
import './Expense.css'
import ExpenseFilter from './ExpenseFilter'
export default function Expense(props){
    const expenseArray = props.expenses;
    const [filterYear,setFilterYear] = useState(2022);
    console.log(expenseArray + "this is expense array");
    const yearHandler = (event) =>{
        setFilterYear(event.target.value);
    }
    return (
        <div className='expenses'>
          <ExpenseFilter yearFilter={yearHandler}/>
          <h2>Let's get started!</h2>
          {
           expenseArray.filter((exp)=>exp.date.getFullYear() === +filterYear).map((exp)=>{
              return  (<ExpenseItem
              key = {expenseArray.id}
              title={exp.title}
              amount={exp.amount}
              date={exp.date}
            />)})
          }
        </div>
      );
};