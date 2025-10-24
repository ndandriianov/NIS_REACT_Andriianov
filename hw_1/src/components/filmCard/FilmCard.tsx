import type {Film} from "../../model/film.ts";
import IsFavoriteIcon from "../isFavourite/IsFavoriteIcon.tsx";
import classes from "./FilmCard.module.css";

interface FilmCardProps {
  film: Film
  changeIsFavorite: (id: number) => void
}

function FilmCard({film, changeIsFavorite}: FilmCardProps) {
  const handleClickOnIsFavorite = () => changeIsFavorite(film.id);

  return (
    <div className={classes.filmCard}>
      <img
        src={film.poster}
        alt='Не удалось загрузить изображение'
        className={classes.image}
      />
      <div className={classes.title}>
        {film.title}
      </div>
      <div className={classes.year}>
        {film.year}
      </div>
      <IsFavoriteIcon isFavourite={film.isFavorite} handleClick={handleClickOnIsFavorite} />
    </div>
  );
}

export default FilmCard;