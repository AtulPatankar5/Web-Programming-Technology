import logo from './logo.svg';
import './App.css';
import UserComponent from '../src/components/UserComponent';
import HelloworldComponents from './components/HelloworldComponents';
import Expense from './components/Expense/Expense';
import StateComponent from './components/genericComponents/StateComponent';
import CounterComponent from './components/genericComponents/CounterComponent';
import NewExpense from './components/Expense/NewExpense';
import SimpleList from './components/genericComponents/SimpleList';
import {useState} from 'react'
import ListUsers from './components/genericComponents/ListUsers';
import BookInfo from './components/genericComponents/BookInfo';
import HelloWorld from './components/classComponent/HelloWorld';
import Person1 from './components/classComponent/Person1';
import Person2 from './components/classComponent/Person2';
import Person from './components/classComponent/Person';
import ErrorBoundary from './components/classComponent/ErrorBoundary';

// App.js --> NewExpense --> Expense
//GrandParent --> Parent -> Child

// GrandParent

function App() {

  const expenses = [
    {
    id:1,
    title: 'Groceries',
    amount: 900,
    date: new Date(2020, 7, 14),
    },
    { 
    id:2,
    title: 'New TV', 
    amount: 34000, 
    date: new Date(2021, 2, 12) 
    },
    { 
      id:3,
      title: 'SofaSet',
      amount: 25000, 
     date: new Date(2021, 2, 28),
    }
    ];

    const [expArray,setExpArray] =useState(expenses)

    //--------Bringing json object from newExpense to app.js
    const onDataHandler=(data)=>{
      console.log("in app component: ",data)
      setExpArray(prevArr => [data,...prevArr])//array has been modified
    }

  return (

   
   <div>
  {/* <UserComponent/> */}
  {/* <ListUsers/> */}
  {/* <HelloWorld username="Navin"/> */}
  
  <ErrorBoundary>
      <Person/>
  </ErrorBoundary>
  
  {/* <Person1/>
  <Person2/> */}
  
  
  {/* <BookInfo/>
   <NewExpense onData={onDataHandler}/>
  {expArray.map(item=>{
    return  <Expense key={item.id} title={item.title} amount={item.amount} date={item.date}/> 
    })} */}

   </div>

  );
}

export default App;
