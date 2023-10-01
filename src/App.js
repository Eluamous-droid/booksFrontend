// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  useEffect(() => {
    // Fetch the list of books from your Go API
    fetch('http://localhost:8080/api/books')
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleAddBook = () => {
    // Add a new book to your Go API
    fetch('http://localhost:8080/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    })
      .then((response) => response.json())
      .then((data) => {
        setBooks((prevBooks) => [...prevBooks, data]);
        setNewBook({ title: '', author: '' });
      })
      .catch((error) => console.error('Error adding book:', error));
  };

  const handleDeleteBook = (id) => {
    // Delete a book from your Go API
    fetch(`http://localhost:8080/api/books/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
      })
      .catch((error) => console.error('Error deleting book:', error));
  };

  return (
    <div className="App">
      <h1>Book Library</h1>
      <BookList books={books} handleDeleteBook={handleDeleteBook} />
      <BookForm newBook={newBook} handleInputChange={handleInputChange} handleAddBook={handleAddBook} />
    </div>
  );
}

export default App;

