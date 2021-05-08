import React,{useState} from "react";
import {observer, inject} from "mobx-react";

const App = inject(['bookStore'])(observer(({ bookStore }) => {
    const [newBook, setNewBook] = useState('');
    const addNewBook = () => {
        if (!newBook) return;
        bookStore.addBook(newBook);
        setNewBook("");
    }
    console.log()
    return (
        <div>
            {bookStore.books.map((book, index) => (
                <h1 key={index} onClick={() => bookStore.removeBook(index)}> {book}
                </h1>
            ))}
            <input type="text" value={newBook} onChange={(e) => setNewBook(e.target.value)} />
            <button onClick={addNewBook}>add</button>
        </div>
    )
}));

export default App;


