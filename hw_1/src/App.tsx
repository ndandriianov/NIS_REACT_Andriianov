import FilmCard from "./components/filmCard/FilmCard.tsx";
import {getMockFilms} from "./model/film.ts";

function App() {
  return (
    <>
      <FilmCard film={getMockFilms()[0]}/>
    </>
  )
}

export default App
