export default function Home() {
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
      <button className="main-button" type="button">See Books</button>
      <button type="button">New Book</button>
      <button type="button">Add Review</button>
      <button type="button">Pending Books</button>
    </main>
  );
}
