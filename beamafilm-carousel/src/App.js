import './App.css';
import React from 'react';
import MovieList from './components/movieList/MovieList';

function App() {
  return (
    <div className="App">
      <h1>Beamafilm Movies</h1>
      <MovieList />
    </div>
  );
}

export default App;
