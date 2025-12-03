import { useState } from "react";
import Book from "./Book";
import BookCounter from "./BookCounter";
import BookData from '../data.js'

function BookList() {
  const [books] = useState(BookData);
  const [searchInput, setSearchInput] = useState('')

  return (
    <div className="book-list">
      <div className="">

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
