// components/BookList.js
import React from 'react';

function BookList({ books, handleDeleteBook }) {
  return (
    <ul>
      {books.map((book) => (
        <li key={book._id}>
          {book.title} by {book.author}
          <button onClick={() => handleDeleteBook(book._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default BookList;

