import React from 'react';

const MovieDetails = ({ movie }) => {
  return (
    <div className="movie-details">
      <img src={movie.image} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>Popularity: {movie.popularity}</p>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieDetails;
