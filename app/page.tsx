
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Book Journal</h1>
      <button className="main-button" type="button">See Books</button>
      <button type="button">New Book</button>
      <button type="button">Add Review</button>
      <button type="button">Pending Books</button>
    </main>
  );
}
