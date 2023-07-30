import ListBooks from './ListBooks'

const BookInfo=()=>{
    const books=[
        {id: 101,name: "Core Java",author:"author1", price:400},
        {id: 102,name: "Adv Java",author:"author2", price:500},
        {id: 103,name: "SQL",author:"author3", price:700}
    ]
    return (
        <div>
            <ListBooks books={books}/>      
        </div>
    )
}
export default BookInfo;