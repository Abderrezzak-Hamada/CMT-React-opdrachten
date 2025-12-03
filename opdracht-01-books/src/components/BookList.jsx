import { useState } from "react";
import Book from "./Book";
import BookCounter from "./BookCounter";
import BookData from '../data.js'

function BookList() {
  const [books, setBooks] = useState(BookData);
  const [searchInput, setSearchInput] = useState('')

  const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);

  const filteredBooks = BookData.filter((book) =>
  book.title.toLowerCase().includes(searchInput.toLowerCase())
   );
   setBooks(filteredBooks);
  }
  

  return (
    <div className="book-list">
      <div className='search'>
        <input 
        type="text" 
        placeholder="zoek een titel op "
        onChange ={handleChange}
        value= {searchInput}
        name='search'
        />
      </div>
      <BookCounter aantal={books.length} />
      {books.map((book, index) => (
        <Book
          key={index}
          title={book.title}
          author={book.author}
          image={book.image}
        />
      ))}
    </div>
  );
}

export default BookList;
