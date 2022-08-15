import React from 'react'
import './App.css';
import Row from '../src/Components/Row';
import requests from './requests';
import Banner from '../src/Components/Banner';
import Navbar from '../src/Components/Navbar';

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Banner/>
      <Row title="HelixTv Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
