import {useState} from 'react'

const CounterComponent=()=>{
    
    //State Hook
    const[arr, setArr]=useState([])
    const [count, setCount]=  useState(0)

    const btnHandler=()=>{
        // setCounter(counter+1)
        setCount(prevState=> prevState+1)// Alternate Option
        setArr(prevState=>[...prevState,count])
    }

    return (
    <div>
        Array: {arr} &nbsp;&nbsp;
        <h2><button onClick={btnHandler}> Resize Array</button></h2>
    
        {/* <h2>count : {count}</h2> */}
        {/* <h2><button onClick={btnHandler}> Increment counter</button></h2> */}
    </div>
        )

}

export default CounterComponent;