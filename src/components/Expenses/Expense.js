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
    //const filtered_array= expenseArray.forEach((e)=>console.log(e.date+","+ e.date.getFullYear() === filterYear+","));
    //console.log("hello world" + filtered_array);
    return (
        <div className='expenses'>
          <ExpenseFilter yearFilter={yearHandler}/>
          <h2>Let's get started!</h2>
          {
           expenseArray.filter((exp)=>exp.date.getFullYear() === +filterYear).map((exp)=>{
              return  (<ExpenseItem
              title={exp.title}
              amount={exp.amount}
              date={exp.date}
            />)})
          }
          {/* <ExpenseItem
            title={props.expenses[0].title}
            amount={props.expenses[0].amount}
            date={props.expenses[0].date}
          />
          <ExpenseItem
            title={props.expenses[1].title}
            amount={props.expenses[1].amount}
            date={props.expenses[1].date}
          />
          <ExpenseItem
            title={props.expenses[2].title}
            amount={props.expenses[2].amount}
            date={props.expenses[2].date}
          />
          <ExpenseItem
            title={props.expenses[3].title}
            amount={props.expenses[3].amount}
            date={props.expenses[3].date}
          /> */}
        </div>
      );
};