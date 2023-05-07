import { useState } from 'react';
import './App.css';
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';
//import { Component } from 'react';
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expensesArray,setExpensesArray] = useState(expenses);
  const addExpenseHandler = (newExpense) =>{
    console.log(newExpense);
    setExpensesArray([...expensesArray,newExpense]);
    console.log(expensesArray);
  }
  return (
    <div>
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Expense expenses = {expensesArray}/>
    </div>
  );
}

export default App;
