import React from 'react';
import "./movie.css";

const Movie = ({ movie, index }) => {
  return (
    <div className="movieItem">
      <div className='movieInfo'>
        <img className='movieImage' src={movie.image_url} alt={movie.title} />
        <h3>{movie.title}</h3>
      </div>  
    </div>
  )
}

export default Movie