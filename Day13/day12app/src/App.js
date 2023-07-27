import logo from './logo.svg';
import './App.css';
import UserComponent from '../src/components/UserComponent';
import HelloworldComponents from './components/HelloworldComponents';
import Expense from './components/Expense/Expense';
import StateComponent from './components/genericComponents/StateComponent';
import CounterComponent from './components/genericComponents/CounterComponent';
import NewExpense from './components/Expense/NewExpense';


function App() {

  const expenses = [
    {
    title: 'Groceries',
    amount: 900,
    date: new Date(2020, 7, 14),
    },
    { title: 'New TV', 
    amount: 34000, 
    date: new Date(2021, 2, 12) 
    },
    { title: 'SofaSet',
     amount: 25000, 
     date: new Date(2021, 2, 28),
    }
    ];

    //--------Bringing json object from newExpense to app.js
    const onDataHandler=(data)=>{
      console.log("in app component: ",data)
    }

  return (

   
   <div>
  <UserComponent/>
  {/* <HelloworldComponents/> */}
     {/* <HelloworldComponents username="Atul"/>  
    <CounterComponent/>
    <Expense title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
    <Expense title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
    <Expense title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/> */}
   <NewExpense onData={onDataHandler}/>
   </div>

  );
}

export default App;
