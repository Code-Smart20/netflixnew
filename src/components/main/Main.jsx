
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import requests from '../../Requests';
import "./main.css";

const Main = () => {

  const [movies, setMovies] = useState([]);
  console.log(movies)

  useEffect(() => {
    try {
      axios.get(requests.fetchComedyMovies).then((response) => {
        setMovies(response.data.results)
      }

      )
    } catch (error) {
       console.log(error)
    }
  
    
  }, [])
  
  const movie = movies[Math.floor(Math.random() * movies.length)]
   
  const truncate = (str,num) => {
    if(str?.length > num) {
      return str.slice(0, num) + "...";
    }
    else
      return str;
  }
 
  return (
    
    <div className='main'>
      <div className="main__container ">
        <div className="main__fade">
        </div>
        <img className='main__bg' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="background" />
        <div className="main__contents">
          <h3>{movie?.title}</h3>
          <div className="main__buttons">
            <button className='btn__general'>play</button>
            <button className='btn __general'>watch later</button>
          </div>
          <p id='faint'> RELEASED : {movie?.release_date }</p>
          
          <p className='main__size'>{truncate(movie?.overview,150)}</p>
        </div>
      
      </div>
        
      </div>
  
  )
}

export default Main