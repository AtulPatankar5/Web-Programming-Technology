import {useState} from 'react'

const StateComponent=()=>{
    //State /State Hook
    
    const [uname,setUname]=  useState('')
    const [sal,setSal]=  useState(0)

    return <h2>This is State Component</h2>
}

export default StateComponent;