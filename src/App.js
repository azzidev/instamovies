import Header from "./components/Header";
import Banner from "./components/Banner";
import Container from "./components/Container";
import Card from "./components/Card";
import movies from "./json/db.json";

function App() {
  return (
    <>
      <Header />
      <Banner image_movie="0001" />
      <Container>
        <h1>Children</h1>
        <section className="cards">
          { movies.map((movie) => <Card id={movie.id} key={movie.id}/>) }
        </section>
      </Container>
    </>
  );
}

export default App;
