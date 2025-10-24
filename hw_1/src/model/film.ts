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
      "id": 0,
      "title": "Breaking Bad",
      "year": 2008,
      "poster": "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "isFavorite": false
    },
    {
      "id": 1,
      "title": "Better Call Saul",
      "year": 2015,
      "poster": "https://i.ebayimg.com/images/g/iUAAAOSwSxJjDKLb/s-l400.jpg",
      "isFavorite": false
    },
    {
      "id": 2,
      "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
      "year": 2003,
      "poster": "https://www.movieposters.com/cdn/shop/products/4be746027cbb50da8eb643617ae41c19_17535f19-1dc2-47d2-84dd-696c1be66313.jpg?v=1573590409&width=1680",
      "isFavorite": false
    },
    {
      "id": 3,
      "title": "The Princess Diaries",
      "year": 2001,
      "poster": "https://m.media-amazon.com/images/I/51DV7DNASZL.jpg",
      "isFavorite": false
    },
    {
      "id": 4,
      "title": "Inception",
      "year": 2010,
      "poster": "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg",
      "isFavorite": false
    },
    {
      "id": 5,
      "title": "The Matrix",
      "year": 1999,
      "poster": "https://m.media-amazon.com/images/I/613ypTLZHsL._SY679_.jpg",
      "isFavorite": false
    },
    {
      "id": 6,
      "title": "Forrest Gump",
      "year": 1994,
      "poster": "https://m.media-amazon.com/images/I/71Kih9pBDyL._AC_SL1500_.jpg",
      "isFavorite": false
    },
    {
      "id": 7,
      "title": "The Shawshank Redemption",
      "year": 1994,
      "poster": "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_SY679_.jpg",
      "isFavorite": false
    },
    {
      "id": 8,
      "title": "Fight Club",
      "year": 1999,
      "poster": "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_SY679_.jpg",
      "isFavorite": false
    },
    {
      "id": 9,
      "title": "The Godfather",
      "year": 1972,
      "poster": "https://m.media-amazon.com/images/I/41+HJCUl3EL._AC_UF1000,1000_QL80_.jpg",
      "isFavorite": false
    },
    {
      "id": 10,
      "title": "The Godfather: Part II",
      "year": 1974,
      "poster": "https://m.media-amazon.com/images/I/41V2AB34KCL._AC_UF1000,1000_QL80_.jpg",
      "isFavorite": false
    },
    {
      "id": 11,
      "title": "The Dark Knight Rises",
      "year": 2012,
      "poster": "https://m.media-amazon.com/images/I/91HM6470jLL.jpg",
      "isFavorite": false
    },
    {
      "id": 12,
      "title": "Interstellar",
      "year": 2014,
      "poster": "https://m.media-amazon.com/images/I/91EtQnm1J-L._AC_UF894,1000_QL80_.jpg",
      "isFavorite": false
    },
    {
      "id": 13,
      "title": "Gladiator",
      "year": 2000,
      "poster": "https://m.media-amazon.com/images/I/51GA6V6VE1L._AC_UF894,1000_QL80_.jpg",
      "isFavorite": false
    },
    {
      "id": 14,
      "title": "The Lion King",
      "year": 1994,
      "poster": "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_FMjpg_UX1000_.jpg",
      "isFavorite": false
    },
    {
      "id": 15,
      "title": "The Prestige",
      "year": 2006,
      "poster": "https://m.media-amazon.com/images/I/41Jy9NN1UPL._AC_UF894,1000_QL80_.jpg",
      "isFavorite": false
    },
    {
      "id": 16,
      "title": "Memento",
      "year": 2000,
      "poster": "https://m.media-amazon.com/images/I/71DJIt8Q3OL._AC_UF1000,1000_QL80_.jpg",
      "isFavorite": false
    },
    {
      "id": 17,
      "title": "The Departed",
      "year": 2006,
      "poster": "https://m.media-amazon.com/images/I/91gvUbB48eL._AC_UF1000,1000_QL80_.jpg",
      "isFavorite": false
    },
    {
      "id": 18,
      "title": "The Silence of the Lambs",
      "year": 1991,
      "poster": "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/b79674a9-8abe-4da6-b471-b55013501beb/7a074c3c-7a09-42cc-ad28-dc35b96f44d2?host=wbd-images.prod-vod.h264.io&partner=beamcom",
      "isFavorite": false
    },
    {
      "id": 19,
      "title": "Se7en",
      "year": 1995,
      "poster": "https://m.media-amazon.com/images/M/MV5BY2IzNzMxZjctZjUxZi00YzAxLTk3ZjMtODFjODdhMDU5NDM1XkEyXkFqcGc@._V1_.jpg",
      "isFavorite": false
    },
    {
      "id": 20,
      "title": "The Usual Suspects",
      "year": 1995,
      "poster": "https://m.media-amazon.com/images/M/MV5BOTE5MDUxZDUtZWZmZC00NDVmLWFhOGQtNWI2YTc4NzY3MGQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "isFavorite": false
    },
    {
      "id": 21,
      "title": "The Green Mile",
      "year": 1999,
      "poster": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_.jpg",
      "isFavorite": false
    },
    {
      "id": 22,
      "title": "The Dark Knight Returns",
      "year": 2013,
      "poster": "https://upload.wikimedia.org/wikipedia/en/e/e9/Batman_The_Dark_Knight_Returns_%28film%29.jpg",
      "isFavorite": false
    },
    {
      "id": 23,
      "title": "The Revenant",
      "year": 2015,
      "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/The_Revenant_2015_film_poster.jpg/250px-The_Revenant_2015_film_poster.jpg",
      "isFavorite": false
    },
    {
      "id": 24,
      "title": "The Wolf of Wall Street",
      "year": 2013,
      "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH3apVAChDoOdWfhfYpyXV6GLqnRIosZzKvg&s",
      "isFavorite": false
    },
    {
      "id": 25,
      "title": "The Big Lebowski",
      "year": 1998,
      "poster": "https://m.media-amazon.com/images/I/71LW4PxX5xL._AC_UF894,1000_QL80_.jpg",
      "isFavorite": false
    },
    {
      "id": 26,
      "title": "The Princess Bride",
      "year": 1987,
      "poster": "https://m.media-amazon.com/images/I/71-LQVXxzTL._AC_UF1000,1000_QL80_.jpg",
      "isFavorite": false
    },
    {
      "id": 27,
      "title": "The Breakfast Club",
      "year": 1985,
      "poster": "https://m.media-amazon.com/images/M/MV5BZTZiMGU1MWMtNjk0Yi00ZjNjLTljMDEtMDhkNGE2OWY3YzZiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "isFavorite": false
    },
    {
      "id": 28,
      "title": "The Goonies",
      "year": 1985,
      "poster": "https://m.media-amazon.com/images/I/61nx5tbQR7L._AC_UF1000,1000_QL80_.jpg",
      "isFavorite": false
    }
  ]
}