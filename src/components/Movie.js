import React from "react";
import Protypes from "prop-types";

const Movie = ({ id, title, year, summary, poster, genres }) => {
  return (
    <div className="movie">
      <img src={poster} title={title} alt={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__summary">{summary}</p>
        <ul>
          {genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Movie.prototype = {
  id: Protypes.number.isRequired,
  title: Protypes.string.isRequired,
  year: Protypes.number.isRequired,
  summary: Protypes.string.isRequired,
  poster: Protypes.string.isRequired,
};

export default Movie;
