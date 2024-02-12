import React from "react";
import { actors } from "../data";

function Actors() {
  return (
   <div className="actors">
   <h1>Actors Page</h1>
   {actors.map((actor) => (
    <div key={actor.id}>
      <h2>Name: {actor.name}</h2>
      <ul>  Movies: {actor.movies.map((movie, index) => (
   <li key={index}>{movie}</li>
   ))}

      </ul>

    </div>
   ))}
   </div>
  );
}

export default Actors;
