import FilmCard from "../filmCard/FilmCard.tsx";
import type {Film} from "../../model/film.ts";
import {useMemo} from "react";

interface FilmCardListProps {
  films: Film[];
  search: string;
}

function FilmCardList({films, search}: FilmCardListProps) {
  const filmsList = useMemo(() => {
    if (search.length < 1) return films;
    return films.filter(film => film.title.toLowerCase().includes(search.toLowerCase()));
  }, [films, search]);

  return (
    <div>
      {filmsList.length > 0
        ?
        filmsList.map((film) => (
          <FilmCard key={film.id} film={film}/>
        ))
        :
        <div>
          Ничего не удалось найти
        </div>
      }
    </div>
  )
}

export default FilmCardList;