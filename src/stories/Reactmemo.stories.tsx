import React, {useMemo, useState} from "react";

export default {
    title: "Usememo stories"
}

/*const NewMessageCounter = (props: { count:number })=> {
    return <div> {props.count} </div>
}*/

type BooksPropsType = {
    addBook: () => void,
    books: Array<string>
}
const BooksSecret = (props:BooksPropsType) => {
    console.log("LIKE USE CALLBACK")
    return <div>
        {props.books.map((book, i) => <div key={i}>
            <button onClick={() => {
                props.addBook()
            }}>add book
            </button>
            {book}</div>)
        }
    </div>
}
const Users = React.memo(BooksSecret)

export const LikeUseCallback = () => {

    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'Redux', 'React-Native', 'Angular'])
    const newArray = useMemo(() => {
        const newArray = books.filter(u => u.toLowerCase().indexOf("a") > -1)
        return newArray
    }, [books])
    const addBook = () => {
        const newCopy = [...books, "Java-Script" + new Date().getTime()];
        setBooks(newCopy)
    }
    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}> Plus
        </button>
        {counter}
        <Users books={newArray} addBook={addBook}/>
    </>
}
