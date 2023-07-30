const SimpleList=()=>{

    const arr=[1,2,3,4,5];
    const newArray=arr.map(ele=> {
       return <li>{ele*ele}</li>
        })

    const username=[{name:"Somay"},{name:"Sistty"},{name:"Ramou"}]
    const newUsername=username.map(ele=>{
        return <p>{ele.name}</p>
    })

    const Person=[{pid:"1",name:"Somay"},{pid:"2",name:"Sistty"},{pid:"3",name:"Ramou"}]
    const newperson=Person.map(ele=>{
        return (<tr> <td>{ele.pid}</td><td>{ele.name}</td> </tr> )
    })

    return (
        <div>
            Array: {newArray}
            NameArray: {newUsername}    
            {<table border="1">{newperson} </table>}
        </div>
    )
}

export default SimpleList