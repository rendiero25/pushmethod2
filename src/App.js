import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import MovieForm from './components/MovieForm';

const App = () => {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, { ...movie, id: movies.length + 1 }]);
  };

  const updateMovie = (updatedMovie) => {
    setMovies(movies.map(movie => (movie.id === updatedMovie.id ? updatedMovie : movie)));
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => <MovieList movies={movies} />} />
          <Route path="/movies/new" render={() => <MovieForm onSave={addMovie} />} />
          <Route path="/movies/:id" render={({ match }) => {
            const movie = movies.find(m => m.id === parseInt(match.params.id));
            return movie ? <MovieDetails movie={movie} /> : <p>Movie not found</p>;
          }} />
          <Route path="/movies/:id/edit" render={({ match }) => {
            const movie = movies.find(m => m.id === parseInt(match.params.id));
            return movie ? <MovieForm movie={movie} onSave={updateMovie} /> : <p>Movie not found</p>;
          }} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
