import  "./ExpenseForm.css";
import {useState} from 'react'


// App.js --> NewExpense --> Expense
//GrandParent --> Parent -> Child

// 2 WAY DATA BINDING
//First -- CHILD
const ExpenseForm=(props)=>{
    //-----State Components-------------
    const [inputTitle,setinputTitle ]=useState('');
    const [inputAmount,setinputAmount ]=useState('');
    const [inputDate,setinputDate ]=useState('');


    //---------submit handler ------------
    const submitHandler=(event)=>{
        console.log("in submit handler ")
        event.preventDefault();// to prevent default action of submit (to submit the form to server) 

        //-----------jSON object which contain all the data------------
        const expense={
            title:inputTitle,
            amount:inputAmount,
            date: new Date(inputDate) 
        }
        console.log(expense)
        setinputTitle('')
        setinputAmount('')
        setinputDate('')

        // to return JSON object back to parent
        props.onAddExpense(expense)
    }

    //---------title handler of title to store the default value------------
    const TitleChangeHandler=(event)=>{
        // console.log(event.target.value)
        setinputTitle(event.target.value)
    }

    //---------amount handler of amount to store the default value------------
    const AmountChangeHandler=(event)=>{
        // console.log(event.target.value)
        setinputAmount(event.target.value)

    }

    //--------Date handlerof Date to store the default value------------
    const DateChangeHandler=(event)=>{
        // console.log(event.target.value)
        setinputDate(event.target.value)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="newExpenseCss">
                    <div >
                        <label>Title: </label>
                        <input className="newExpenseCss"  value={inputTitle} onChange={TitleChangeHandler}  />
                    </div>
                    <div >
                        <label>Amount: </label>
                        <input type="number" className="newExpenseCss" value={inputAmount} onChange={AmountChangeHandler}/>
                    </div>
                    <div >
                        <label >Date: </label>
                        <input type="date" className="newExpenseCss" value={inputDate} onChange={DateChangeHandler}/>
                    </div>
                </div>
                <div>
                    <button type="submit" className="submitbutton">Add new Expense</button>
                </div>
            </form>
        </div>    
    )
}
export default ExpenseForm;
