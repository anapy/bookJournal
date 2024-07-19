/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { InputLabel, MenuItem, Select } from '@mui/material';
import { Book, Genre } from '@/app/models/book';
import { JsonDataService } from '@/app/services/json-data.service';

export default function BookDialog({openDialog, closeDialog}) {
  const bookService = new JsonDataService;
  const genres = Genre
  const [book, setBook] = React.useState({
    title: '',
    author: '',
    cover: '',
    genre: genres[0],
    dates: {
      startDate: Date,
      endDate: Date,
    },
    review: '',
    read: false,
    score: 0
  })


  const handleChange = (event: any) => {
    setBook({...book, [event.target.name]: event.target.value as string});
  };

  const createBook = (book: Book) => {
    bookService.createBook(book)
  }

  return (
    <React.Fragment>
      <Dialog
        open={openDialog}
        onClose={closeDialog}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            console.log(formJson);
            closeDialog();
            createBook(formJson as Book);

          },
        }}
      >
        <DialogTitle>New Book</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add book information in order to create it
          <img
            srcSet={`${book.cover}`}
            src={`${book.cover}`}
            alt="book cover"
            loading="lazy"
            width={100}
            height={200}
          />
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="title"
            name="title"
            label="Title"
            type="text"
            value={book.title}
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="author"
            name="author"
            label="Author"
            type="author"
            value={book.author}
            fullWidth
            variant="standard"
            onChange={handleChange}

          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="cover"
            name="cover"
            label="Cover"
            type="cover"
            value={book.cover}
            fullWidth
            variant="standard"
            onChange={handleChange}

          />

<InputLabel>Genre</InputLabel>
  <Select
    id="demo-simple-select"
    value={book.genre}
    label="Genre"
    onChange={handleChange}
    name="genre"
  >
      {genres.map((genre) =>
        <MenuItem key={genre}
                  value={genre}>{genre}</MenuItem>
      )}
  </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Cancel</Button>
          <Button type="submit">Create book</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
