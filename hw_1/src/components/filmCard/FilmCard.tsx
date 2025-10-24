import type {Film} from "../../model/film.ts";
import IsFavoriteIcon from "../isFavourite/IsFavoriteIcon.tsx";
import classes from "./FilmCard.module.css";

interface FilmCardProps {
  film: Film
}

function FilmCard({film}: FilmCardProps) {
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
      <IsFavoriteIcon isFavourite={film.isFavorite}/>
    </div>
  );
}

export default FilmCard;