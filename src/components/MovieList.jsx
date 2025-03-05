import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies, user }) => {
  return (
    <div className="movie-list">
      {user && <p>Logged in as: {user.username}</p>}
      {movies.map(movie => (
        <div key={movie.id} className="movie-item">
          <Link to={`/movies/${movie.id}`}>
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>Popularity: {movie.popularity}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
