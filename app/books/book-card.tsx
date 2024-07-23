/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';
import { Book } from '../models/book';

export default function BookCard({book}: Readonly<{book: Book}>) {

    return (
    <div className="book-card">
      <img className="card-photo" srcSet={book.cover} alt={book.title}></img>
    </div>
  );
}
