/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';
import { Book } from '../models/book';
import Link from 'next/link';

export default function BookCard({book, click}: Readonly<{book: Book, click(): void}>) {

    return (
      <Link href={{ pathname:`/books/${(book.id)}`, query:{msg: JSON.stringify(book)}} }>
        <div className="book-card" onClick={click}>
            <img className="card-photo" srcSet={book.cover} alt={book.title}></img>
        </div>
      </Link>
  );
}
