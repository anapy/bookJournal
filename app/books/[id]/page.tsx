
'use client'

import RatingReview from "@/app/components/stars.component";
import { Genre } from "@/app/models/book";
import { Button, Checkbox, FormControlLabel, InputLabel, Link, MenuItem, Select, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers-pro";
import dayjs from "dayjs";
import React from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export default function Details({searchParams} : {searchParams: any}) {
  const genres = Genre
  const [book, setFinalBook] = React.useState(JSON.parse(searchParams.msg))

  const handleChange = (event: any) => {
    setFinalBook({...book, [event.target.name]: event.target.value as string});
  };

  const handleCheckboxChange = (event: any) => {
    setFinalBook({...book, [event.target.name]: event.target.checked});
    if(book.dates === undefined && event.target.checked) {
      setFinalBook({...book, dates: {startDate: new Date(), endDate: new Date()}});
    }
  };

  const handleStars = (score: number) => {
    setFinalBook({...book, score: score});
  }

  const save = () => {
    console.log('guardando cambios', book)
  }

  return (
    <>
      <div className="details">
      <Button variant='outlined'><Link href="/books" underline="none">Back</Link></Button>
        <div>
          <h1>{book.title}</h1>
          <p><strong>Author</strong>: {book.author}</p>
          <p><strong>Genre</strong>: {book.genre}</p>
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
            <br></br>
            <Button variant='outlined' onClick={save}>Save</Button>
        </div>
        {book.cover && <img srcSet={`${book.cover}`} src={`${book.cover}`} alt="book cover" loading="lazy" width={100} height={200}/> }
        </div>
      </>
)
  }