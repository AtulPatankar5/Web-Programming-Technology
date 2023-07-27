const Person =(props)=> {


    // return <h3> Hi Person {Math.floor(Math.random()*30)}</h3>
    return <h3>HI {props.name}, age is {props.age}</h3>
}

export default Person;