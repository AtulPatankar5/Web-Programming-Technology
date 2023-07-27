import ExpenseForm from "./ExpenseForm";

const NewExpense=(props)=>{
    
    const AddExpenseHandler=(inputExpense)=>{
        const expenseData={
            ...inputExpense,
            id:Math.random().toString()
        }
        console.log("in newExpense: in add AddExpenseHandler()", expenseData )
        props.onData(expenseData)
    }


    return (
        <div>
            <ExpenseForm onAddExpense={AddExpenseHandler}/>
        </div>
    )
}

export default NewExpense;