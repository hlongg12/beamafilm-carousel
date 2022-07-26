import React from 'react';
import "./movie.css";
import _get from "lodash/get";

const Movie = ({ movie }) => {
  return (
    <div className="movieItem">
      <div className='movieInfo'>
        <img className='movieImage' src={_get(movie, "image_url")} alt={_get(movie, "title")} />
        <h3>{_get(movie, "title", "")}</h3>
      </div>  
    </div>
  )
}

export default Movie