import React from 'react'
import "./home.css"
import Main from '../../components/main/Main';
import Row from '../../components/row/Row';
import requests from '../../Requests';

const Home = () => {
  return (
    <div className='home'>
      <Main />
      
      <Row RowId="1" title="Trending Movies" fetchurl={requests.fetchTrending } />
      <Row RowId="2"  title="Netflix Originals" fetchurl={requests.fetchNetflixOriginals} />
      <Row RowId="3"  title="Top rated" fetchurl={requests.fetchTopRated} />
      <Row RowId="4" title="Action Movies" fetchurl={requests.fetchActionMovies} />
      <Row RowId="5"  title="Comedy Movies" fetchurl={requests.fetchComedyMovies} />
      <Row RowId="6" title="Horror Movies" fetchurl={requests.fetchHorrorMovies} />
      <Row RowId="7" title="Romance Movies" fetchurl={requests.fetchRomanceMovies} />
      <Row RowId="8"  title="Documentaries" fetchurl={requests.fetchDocumentaries} />
  
    </div>
  )
}

export default Home;