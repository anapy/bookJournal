'use client'
import Button from '@mui/material/Button';
import BookDialog from './components/dialogs/book.dialog';
import React from 'react';
import { JsonDataService } from './services/json-data.service';
import Link from 'next/link';

export default function Home() {
  const [openNewBook, setOpenNewBook] = React.useState(false);
  const bookService = new JsonDataService;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        <span className="letter">B</span>
        <span className="letter">O</span>
        <span className="letter">O</span>
        <span className="letter">K</span>
        <span className="letter">J</span>
        <span className="letter">O</span>
        <span className="letter">U</span>
        <span className="letter">R</span>
        <span className="letter">N</span>
        <span className="letter">A</span>
        <span className="letter">L</span>
      </h1>
      <Button variant='outlined'><Link href="/books">See Books</Link></Button>
      <Button variant='outlined' onClick={() => setOpenNewBook(true)}>New Book</Button>
      <Button variant='outlined'>Add Review</Button>
      <Button variant='outlined'>Pending Books</Button>
      <BookDialog openDialog={openNewBook} closeDialog={() => {setOpenNewBook(false)}} bookService={bookService}></BookDialog>
    </main>
  );
}
