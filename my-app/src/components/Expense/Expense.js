import "./Expense.css" 
import ExpenseDate from "./ExpenseDate";

const Expense=(props)=>{

    // const expDate=new Date()
    // const expTitle="new Mousepad"
    // const expAmount=200 

   const btnHandler=()=>{
    // alert("Enter new title");
    const newtitle=prompt("enter new Title");
    alert("new title is "+newtitle)
}
    
    return (
        <div className="expense-item">
            <div>
                {/* {props.date.toString()} */}
               <ExpenseDate date={props.date}/> 
            </div>
            <div >
                <h2>{props.title}</h2>
                <p>{props.amount}</p>
            </div>
            <button onClick={btnHandler}>CLick here to change title</button>
        </div> 
        )
}
// title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      

export default Expense;