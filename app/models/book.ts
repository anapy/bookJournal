import dayjs, { Dayjs } from "dayjs"

export type Book = {
  id: string,
  title: string,
  author: string,
  cover: string,
  genre: Genre,
  dates: {
    startDate: Date | null,
    endDate: Date | null,
  },
  review: string,
  read: boolean,
  score: number
}

export const Genre: Array<Genre> = ['ROMANCE', 'FANTASY', 'THRILLER', 'HISTORICAL']

export type Genre = 'ROMANCE'| 'FANTASY'| 'THRILLER'| 'HISTORICAL'

export const initialBook: Book = {
  id: '1',
  title: '',
  author: '',
  cover: '',
  genre: Genre[0],
  dates: {
    startDate: new Date(),
    endDate: new Date(),
  },
  review: '',
  read: false,
  score: 0
}