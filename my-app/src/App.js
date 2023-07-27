import logo from './logo.svg';
// import image from '../public/images/'
import './App.css';
import React from 'react';
// import HelloworldComponents from './components/HelloworldComponents';
import Person from './components/Person/Person';
import Expense from './components/Expense/Expense';
import NewsHeader from './components/News/NewsHeader';
import NewsContent from './components/News/NewsContent';
import UserComponent from './components/UserComponent';

function App() {
  // ----------Array of json for person-------
  const Per=[
    {name:"Atul",age:25},
    {name:"Chris",age:15},
    {name:"SAM",age:35}
  ]

// ----------------Array of Expense-------------
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

  return (
    <div className="App">
       {/* <header className="App-header"> */}
        {/* <img src={image} className="App-logo" alt="logo" /> */}
      {/*  <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Welcome to React</h1> {/* JSX */}
      <p>This is react App</p>
      
      
{/*       
      <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
      </ul> */}
      
      {/* --------------- function components ---------- */}
      {/* <HelloworldComponents/>
      <Person/>
      <Person/>
      <Person/>

      <Expense/>

      <NewsHeader/>
      <NewsContent/> */}
      
      <UserComponent/>
      {/* <Person name ="Atul" age="25"/>
      <Person name ="Chris" age="35"/>
      <Person  age="32"/> */}


     
      {/* -----------  calling json array(see above for json array) ------------ */}
      <Person name ={Per[0].name} age={Per[0].age}/>
      <Person name ={Per[1].name} age={Per[1].age}/>
      <Person name={Per[2].name} age={Per[2].age}/>


      {/* ----------- calling json array(see above for json array) ------------ */}
      <Expense title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <Expense title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <Expense title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>


    </div>
  );

  
// ------------------Below is the tedious task which can be overcome by above JSX---------------

//  return React.createElement('div',null,'h2','Hi, welcome to React');

// return React.createElement('div',null,
// React.createElement('h1',{className:'App'},'Hi welcome to React'));
}

export default App;
