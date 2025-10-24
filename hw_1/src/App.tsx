import {getMockFilms} from "./model/film.ts";
import FilmCardList from "./components/filmCardList/FilmCardList.tsx";
import {useState, useRef} from "react";

function App() {
  const [search, setSearch] = useState<string>("");

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

  return (
    <>
      <div>
        <input ref={inputRef} onKeyDown={onKeyDownInInput}/>
        <button onClick={handleFind}>
          Найти
        </button>
      </div>

      <FilmCardList films={getMockFilms()} search={search} />
    </>
  )
}

export default App
