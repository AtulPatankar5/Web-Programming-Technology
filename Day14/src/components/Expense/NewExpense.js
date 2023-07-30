import ExpenseForm from "./ExpenseForm";

// App.js --> NewExpense --> Expense
//GrandParent --> Parent -> Child

// Second-- Parent

const NewExpense=(props)=>{
    
    const AddExpenseHandler=(inputExpense)=>{
        const expenseData={
            ...inputExpense, // Spread Operator
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


