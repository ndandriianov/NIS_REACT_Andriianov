export type Film = {
  id: number;
  title: string;
  year: number;
  poster: string;
  isFavorite: boolean;
}

export function getMockFilms(): Film[] {
  return [
    {
      id: 0,
      title: 'Breaking Bad',
      year: 2008,
      poster: 'https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      isFavorite: false
    },
    {
      id: 1,
      title: 'Better Call Saul',
      year: 2015,
      poster: 'https://i.ebayimg.com/images/g/iUAAAOSwSxJjDKLb/s-l400.jpg',
      isFavorite: false
    },
    {
      id: 2,
      title: 'Pirates Of The Caribbean: The Curse Of The Black Pearl',
      year: 2003,
      poster: 'https://www.movieposters.com/cdn/shop/products/4be746027cbb50da8eb643617ae41c19_17535f19-1dc2-47d2-84dd-696c1be66313.jpg?v=1573590409&width=1680',
      isFavorite: false
    }
  ]
}