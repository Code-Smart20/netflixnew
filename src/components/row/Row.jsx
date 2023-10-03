import React, { useEffect, useState } from 'react'
import "./row.css"
import {FaHeart,FaRegHeart} from "react-icons/fa"
import {MdChevronLeft,MdChevronRight} from "react-icons/md"
import axios from 'axios';

              //destructuring properties from the content arrays
const Row = ({ title, fetchurl }) => {
  const [movies, setMovies] = useState([]);
  const [like, setlike] = useState(false);

  const changeLike = () => {
    setlike(!like)
  }

  useEffect(() => {
    try {
      axios.get(fetchurl).then((response) => {
        setMovies(response.data.results)
      })
    } catch (error) {
      console.log(error)
    }
  }, [fetchurl])


  const slideLeft = () => {
    var slider = document.getElementById("row__slider");

    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
    var row__slider = document.getElementById("row__slider");

    row__slider.scrollLeft = row__slider.scrollLeft - 500;
  }

  return (
    <div className="row">
      <div className="row__main">
        <h3>{title}</h3>
        
        <div className="row__contents">
          <MdChevronLeft onClick={slideLeft} size={50} className='row__slider-icon left'/>
          <div className={`row__slider`} id='row__slider'>
            {
              movies.map((movie,id) => (
                <div className='row__movie-wrapper' key={id}>
                  <div className='row__fade'>

                    <p className="likeWrapper" onClick={changeLike}>{like ? <FaHeart size={15}/> : <FaRegHeart size={15}/>}</p>
                    
                    <p className='movie__title'>{movie?.title}</p>
                   </div>
                  <img classname="movieImg" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
                </div>
              ))
            }
          </div>
          <MdChevronRight onClick={slideRight} size={50} className='row__slider-icon right'/>
        </div>
      </div>
  </div>
  )
}

export default Row