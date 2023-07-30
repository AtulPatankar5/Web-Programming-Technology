import { useState } from 'react';

function ListBooks(props) {

    const [show, setShow] = useState(false)
    const [books, useBooks] = useState(props.books)

    const btnHandler=()=>{
        setShow(!show)
    }

    return (
        <div>
            <h1>Book List</h1>
            <table border="1">
                {/* {show && */}
                {show ?
                    books.map(book =>
                    (
                        <tr>
                            <td>{book.id}</td>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>{book.price}</td>
                        </tr>
                    ) 
                    ): null
                }
            </table>
            <button onClick={btnHandler}>Toggle Book</button>
        </div>
    )

}

export default ListBooks;