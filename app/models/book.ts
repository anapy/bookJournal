export type Book = {
  id: string,
  title: string,
  author: string,
  cover: string,
  genre: Genre,
  dates: {
    startDate: Date,
    endDate: Date,
  },
  review: string,
  read: boolean,
  score: number
}

export const Genre = ['ROMANCE', 'FANTASY', 'THRILLER', 'HISTORICAL']

export type Genre = ['ROMANCE', 'FANTASY', 'THRILLER', 'HISTORICAL']