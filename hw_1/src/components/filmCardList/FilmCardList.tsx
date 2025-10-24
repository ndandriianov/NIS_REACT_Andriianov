import FilmCard from "../filmCard/FilmCard.tsx";
import type {Film} from "../../model/film.ts";
import {useState} from "react";

interface FilmCardListProps {
  films: Film[];
  search: string;
  handleFavoritesChange: (id: number) => void;
}

function FilmCardList({films, search, handleFavoritesChange}: FilmCardListProps) {
  if (search.length >= 1) films = films.filter(film => film.title.toLowerCase().includes(search.toLowerCase()));
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const favoriteFilms = films.filter(film => film.isFavorite)


  return (
    <div>
      <button onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}>
        {showOnlyFavorites ? 'Показать все' : 'Показать только избранные'}
      </button>

      {showOnlyFavorites
        ?
        favoriteFilms.length > 0
          ?
          favoriteFilms.map(film => (
            <FilmCard key={film.id} film={film} changeIsFavorite={handleFavoritesChange}/>
          ))
          :
          <div>
            Ничего не удалось найти
          </div>
        :
        films.length > 0
          ?
          films.map((film) => (
            <FilmCard key={film.id} film={film} changeIsFavorite={handleFavoritesChange}/>
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