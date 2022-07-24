import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import _map from 'lodash/map';
import axios from 'axios';
import "./movieList.css";
import Movie from '../movie/Movie';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const movieListRef = useRef();

  const handleDirectionClick = (direction) => {
    setIsMoved(true);
    let distance = movieListRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      movieListRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      movieListRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const response = await axios.get('http://staging-beamafilm.com/api/dev/mock-films');
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieData();
  }, [movies]);

  return (
    <div className='list'>
      <div className='wrapper'>
        <ArrowBackIosOutlined
            className="sliderArrow left"
            onClick={() => handleDirectionClick("left")}
            style={{ display: !isMoved && "none" }}
        />
        <div className='container' ref={movieListRef}>
          {_map(movies, (movie, index) => (
            <Movie movie={movie} index={index}/>
          ))}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleDirectionClick("right")}
        />
      </div>
    </div>
  )
}

export default MovieList