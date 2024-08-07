/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';
import { Book } from '../models/book';

export default function BookCard({book, click}: Readonly<{book: Book, click(): void}>) {

    return (
      <div className="book-card" onClick={click}>
        <img className="card-photo" srcSet={book.cover} alt={book.title}></img>
      </div>
  );
}
