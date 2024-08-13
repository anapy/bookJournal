/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Checkbox, FormControlLabel, InputLabel, MenuItem, Select } from '@mui/material';
import { Book, Genre, initialBook } from '@/app/models/book';
import { DataAccessInterface } from '@/app/services/data-access.interface';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import RatingReview from '../stars.component';
import dayjs from 'dayjs';

export default function BookDialog({openDialog, closeDialog, bookService, givenBook}: Readonly<{openDialog: boolean, closeDialog: Function, bookService: DataAccessInterface, givenBook: Book }>) {
  const genres = Genre
  const [book, setBook] = React.useState(givenBook)

  const handleChange = (event: any) => {
    setBook({...book, [event.target.name]: event.target.value as string});
  };

  const handleCheckboxChange = (event: any) => {
    setBook({...book, [event.target.name]: event.target.checked});
  };

  const createBook = () => {
    bookService.createBook(book)
  }

  const handleStars = (score: number) => {
    setBook({...book, score: score});
  }

  return (
    <React.Fragment>
      <Dialog
        open={openDialog}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            closeDialog();
            createBook();
          },
        }}
      >
        <DialogTitle>New Book</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add book information in order to create it
            {book.cover && <img srcSet={`${book.cover}`} src={`${book.cover}`} alt="book cover" loading="lazy" width={100} height={200}/> }
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
          <TextField autoFocus required margin="dense" id="author" name="author" label="Author" type="author" value={book.author} fullWidth variant="standard"onChange={handleChange}/>
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
                <MenuItem key={genre} value={genre}>{genre}</MenuItem>
              )}
          </Select>

          {/* READ BOOK HAVE OPTION OF LEAVING A REVIEW */}
          <br></br>
          <FormControlLabel control={<Checkbox />} name="read" checked={book.read} onChange={handleCheckboxChange} label="Read"/>
          {book.read && book.dates && <div className='book__read-properties'>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className='book__read-properties__date' label="Reading start date" value={dayjs(book.dates.startDate)} format='DD/MM/YYYY'/>
                <DatePicker label="Reading end date" value={dayjs(book.dates.endDate)} format='DD/MM/YYYY'/>
              </LocalizationProvider>
              <RatingReview rating={book.score} setRating={handleStars}></RatingReview>
              <TextField id="review" name="review" label="Comments" variant="outlined" value={book.review} onChange={handleChange} fullWidth multiline rows={3}/>
          </div> }
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Cancel</Button>
          <Button type="submit">Create book</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
