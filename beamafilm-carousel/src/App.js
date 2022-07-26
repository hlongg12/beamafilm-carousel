import './App.css';
import React from 'react';
import MovieList from './components/movieList/MovieList';

function App() {
  return (
    <div className="App">
      <img className='logo' src="https://beamafilm.com/static/media/logo_large.b4cb3a4d.png" alt="Beamafilm" />
      <MovieList />
    </div>
  );
}

export default App;
