'use client'
import { useState } from "react";
import { JsonDataService } from "../services/json-data.service";
import BookCard from "./book-card";

export default function Books() {
  const bookService = new JsonDataService;
  const [books, setBooks] = useState(bookService.getBooks())

  return (
    <>
      <h1 >The Library</h1>
      <div className="books-wrapper">
        {books.map((book) =>
          <BookCard key={book.title} book={book}></BookCard>
        )}
      </div>
    </>
  )
}