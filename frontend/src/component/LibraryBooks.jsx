import React from 'react';
import LibraryCards from './LibraryCards';
import LibraryHeader from './LibraryHeader';

function LibraryBooks() {
  const books = [
    { code: 'BIO234', title: 'Biology', price: 200 },
    { code: 'CHEM234', title: 'Chemistry', price: 300 },
    { code: 'MATH234', title: 'Mathematics', price: 400 },
  ];

  const totalBooks = books.length;
  const totalPrice = books.reduce((sum, book) => sum + book.price, 0);

  return (
    <div>
      <h2>List of Books</h2>
      <LibraryHeader/>
      <ul>
        {books.map((book) => <LibraryCards BookInfo={book} />)}
      </ul>
      {/* <p>The total price for {totalBooks} books is {totalPrice}</p> */}
    </div>
  );
}

export default LibraryBooks;
