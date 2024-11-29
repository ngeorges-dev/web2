import { ITopMovie } from "../types";

const myTopMovies: ITopMovie[] = [
  {
    id: 1,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    duration: 152,
    link: "https://www.imdb.com/title/tt0468569/",
    budget: 185000000,
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  },
  {
    id: 2,
    title: "The Lord of the Rings: The Return of the King",
    director: "Peter Jackson",
    duration: 201,
    link: "https://www.imdb.com/title/tt0167260/",
    budget: 94000000,
    description:
      "Gandalf and Aragorn lead the World's greatest armies to victory against the Dark Lord Sauron.",
  },
  {
    id: 3,
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    link: "https://www.imdb.com/title/tt1375666/",
    budget: 160000000,
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  },
  {
    id: 4,
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    duration: 136,
    link: "https://www.imdb.com/title/tt0133093/",
    budget: 63000000,
    description:
      "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
  },
  {
    id: 5,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    duration: 142,
    link: "https://www.imdb.com/title/tt0111161/",
    budget: 25000000,
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  },
];

export default myTopMovies;
