'use client'
import { useState } from "react";
import { JsonDataService } from "../services/json-data.service";
import BookCard from "./book-card";
import { Book, initialBook } from "../models/book";
import React from "react";

export default function Books() {
  const bookService = new JsonDataService;
  const [books, setBooks] = useState(bookService.getBooks())
  const [openBookDetails, setOpenBookDetails] = useState(false);
  const [selectedBook, setSelectedBook]=  useState(initialBook)

  const openBook = (book: Book) => {
    setSelectedBook(book)
    setOpenBookDetails(true)
  }

  return (
    <>
      <h1 >The Library</h1>
      <div className="books-wrapper">
        {books.map((book) =>
          <BookCard key={book.title} book={book} click={() => openBook(book)}></BookCard>
        )}
      </div>
    </>
  )
}