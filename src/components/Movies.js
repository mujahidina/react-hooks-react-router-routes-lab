import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div className="movies">
      <h1>Movies Page</h1>

      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>Name: {movie.title}</h2>
          <p>Time: {movie.time}</p>
          <ul>
            Genre:
            {movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </div>
        
      ))}
    </div>
  )
}

export default Movies;