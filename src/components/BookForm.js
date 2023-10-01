// components/BookForm.js
import React from 'react';

function BookForm({ newBook, handleInputChange, handleAddBook }) {
  return (
    <div>
      <h2>Add a New Book</h2>
      <label>Title:</label>
      <input type="text" name="title" value={newBook.title} onChange={handleInputChange} />
      <br />
      <label>Author:</label>
      <input type="text" name="author" value={newBook.author} onChange={handleInputChange} />
      <br />
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
}

export default BookForm;

