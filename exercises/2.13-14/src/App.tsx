import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

interface Joke {
  joke: string;
  category: string;
}

function App() {
  const [joke, setJoke] = useState<Joke | null>(null);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch joke");
        }
        return response.json();
      })
      .then((data) => setJoke(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>{joke ? `category : ${joke.category}` : "Loading joke category..."}</p>
      <h1>{joke ? joke.joke : "Loading joke..."}</h1>
      <button onClick={() => window.location.reload()}>Get another joke</button>
    </>
  );
}

export default App;