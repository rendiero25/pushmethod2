import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import MovieForm from './components/MovieForm';
import LoginForm from './components/LoginForm';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(null);

  const addMovie = (movie) => {
    setMovies([...movies, { ...movie, id: movies.length + 1 }]);
  };

  const updateMovie = (updatedMovie) => {
    setMovies(movies.map(movie => (movie.id === updatedMovie.id ? updatedMovie : movie)));
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  const handleLogin = (userData) => {
    // Simulate login
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="app">
        {user ? (
          <div>
            <p>Welcome, {user.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <Switch>
          <Route exact path="/" render={() => <MovieList movies={movies} user={user} />} />
          <Route path="/login" render={() => <LoginForm onLogin={handleLogin} />} />
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
