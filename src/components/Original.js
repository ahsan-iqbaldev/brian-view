import React from "react";
import { Link } from "react-router-dom";
import data from "../data/data.json";

const Original = () => {
  const originalMovies = Object.values(data.movies)
    .filter((movie) => movie.type === "original")
    .slice(0, 4);

  return (
    <div className="py-26 px-0 mb-10">
      <h4 className="font-semibold text-xl mb-3">Original</h4>
      <div className="recomended-container">
        {originalMovies.map((movie) => (
          <div key={movie.title} className="recomended-card_image">
              <Link to={`/details/${movie.id}`}>
              <img src={movie.cardImg} alt={movie.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Original;
