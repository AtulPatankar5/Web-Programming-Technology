import "./Expense.css" 
import ExpenseDate from "./ExpenseDate";
import {useState} from 'react'

const Expense=(props)=>{

    // let newtitle=props.title;
    // ------------State Component--------------
    const[title, setTitle]=useState(props.title)

    const btnHandler=()=>{
    // alert("Enter new title");
        let newtitle=prompt("enter new title")
        setTitle(newtitle);
    }
    
    return (
        <div className="expense-item">
            <div>
               <ExpenseDate date={props.date}/> 
            </div>
            <div >
                <h2>{title}</h2>
                <p>{props.amount}</p>
            </div>
            <button onClick={btnHandler}>CLick here to change title</button>
        </div> 
        )
}

export default Expense;