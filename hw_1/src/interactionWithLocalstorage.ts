import type { Film } from "./film";

const FILMS_KEY = "films";

export function saveFilmsToLocalStorage(films: Film[]): void {
  try {
    const serialized = JSON.stringify(films);
    localStorage.setItem(FILMS_KEY, serialized);
  } catch (error) {
    console.error("Ошибка при сохранении списка фильмов в localStorage:", error);
  }
}

export function getFilmsFromLocalStorage(): Film[] {
  try {
    const serialized = localStorage.getItem(FILMS_KEY);
    if (!serialized) return [];
    return JSON.parse(serialized) as Film[];
  } catch (error) {
    console.error("Ошибка при чтении списка фильмов из localStorage:", error);
    return [];
  }
}