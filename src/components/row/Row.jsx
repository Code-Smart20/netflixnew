import React, { useEffect, useState } from 'react'
import "./row.css"
import axios from 'axios';

const Row = ({ title, fetchurl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      axios.get(fetchurl).then((response) => {
        setMovies(response.data.results)
      })
    } catch (error) {
      console.log(error)
    }
  }, [fetchurl])


  
  return (
    <div className="row">
      <div className="row__main">
        <h3>{title}</h3>
        
        <div className="row__contents">
          <div className="row__slider">
            {
              movies.map((movie,id) => (
                <div className='row__movie-wrapper' key={id}>
                   <div className='row__fade'></div>
                  <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
  </div>
  )
}

export default Row