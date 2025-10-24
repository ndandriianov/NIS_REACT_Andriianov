import {type Film, getMockFilms} from "./model/film.ts";
import FilmCardList from "./components/filmCardList/FilmCardList.tsx";
import {useState, useRef, useEffect} from "react";
import {getFilmsFromLocalStorage, saveFilmsToLocalStorage} from "./interactionWithLocalstorage.ts";
import classes from './SearchBar.module.css'

function App() {
  const [search, setSearch] = useState<string>("");
  const [films, setFilms] = useState<Film[]>([])

  const inputRef = useRef<HTMLInputElement>(null);
  const handleFind = () => {
    if (inputRef.current) {
      setSearch(inputRef.current.value);
    }
  }

  const onKeyDownInInput = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleFind();
    }
  }

  const handleFavoritesChange = (id: number) => {
    const newFilms = films.map(film => film.id === id ? {...film, isFavorite: !film.isFavorite} : film);
    setFilms(newFilms);
    saveFilmsToLocalStorage(newFilms)
  }

  useEffect(() => {
    const lsFilms = getFilmsFromLocalStorage();
    setFilms(lsFilms.length > 0 ? lsFilms : getMockFilms())
  }, []);

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <div className={classes.container}>
        <input
          ref={inputRef}
          className={classes.input}
          onKeyDown={onKeyDownInInput}
          placeholder="Поиск фильма..."
        />
        <button className={classes.button} onClick={handleFind}>
          Найти
        </button>
      </div>

      <FilmCardList films={films} search={search} handleFavoritesChange={handleFavoritesChange}/>
    </div>
  )
}

export default App
