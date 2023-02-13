import React, { useState } from "react";
import styles from "./booklist.module.css";

export default function BookList() {
  const [book, setBook] = useState({ bookName: "", bookPrice: "" });
  const { bookName, bookPrice } = book;

  const [bookList, setBookList] = useState([]);

  

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setBook({ ...book, [e.target.name]: e.target.value });
  };



  const addBook = () => {
    console.log(bookList);

    setBookList([
      ...bookList,
      {
        id: bookList.length + 1,
        name: book.bookName,
        price: book.bookPrice,
      },
    ]);
  };

  return (
    <div>
      <h1>Use State Hook In Array:</h1>
      <h2>Book Manager</h2>
      <div>
        <label htmlFor="bookName">Book Name : </label>{" "}
        <input
          type="text"
          id="bookName"
          name="bookName"
          value={bookName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="bookPrice">Book Price : </label>{" "}
        <input
          type="text"
          id="bookPrice"
          name="bookPrice"
          value={bookPrice}
          onChange={handleChange}
        />
      </div>

      <button onClick={addBook} style={{ display: "block" }}>
        Add Book
      </button>

      <ul>
        {bookList.map((book, index) => (
          //   console.log(book)
          <li key={index}>
            {`Id: ${book.id}, Name: ${book.name}, Price: ${book.price}`}
          </li>
        ))}
      </ul>
      
    </div>
  );
}
