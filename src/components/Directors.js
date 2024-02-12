import React from "react";
import { directors } from "../data";

function Directors() {
  return (
   <div className="directors">
 <h1>Directors Page</h1>
  {directors.map((director) => (
    <div key={director.id}>
    <h2>Name: {director.name}</h2>
    <ul>
      Movies:
      {director.movies.map((movie, index) => (
       <li key={index}>{movie}</li>
      ))}
    </ul>
    </div>
  ))}

   </div>
  );
}

export default Directors;
