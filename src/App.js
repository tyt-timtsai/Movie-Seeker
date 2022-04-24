import React, { useState,useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './App.css';
//import components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/HomePage/Home';
import ItemDetail from './components/ItemDetail/ItemDetail';
import SearchResult from './components/SearchResult/SearchResult';
import API from './components/API_Key';

function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalResult, setTotalResult] = useState(0);
  const OMDb_API = `https://www.omdbapi.com/?apikey=${API.API_Key}&s=${title}&y=${year}&type=${type}&page=${page}`;
  const navigate = useNavigate();

  //handle search inputs
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleYear = (e) => {
    setYear(e.target.value);
  };

  const handleType = (e) => {
    setType(e.target.value);
  };

  //fetch data when submit and navigate to results page
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies();
    setPage(1);
    navigate("/Movie-Seeker/results");
  };

  //fetch data when change page
  const handleChange = async (e,page) => {
    setPage(page);
    console.log(OMDb_API);
    console.log('click');
    console.log(e.target);
    window.scroll(0,0);
  };
  
  //fetch when page change
  useEffect(()=>{
    setLoading(true);
    setError(null);
    axios.get(OMDb_API)
    .then(data => {
      if(data.data.Error){
        setError("Oops, something went wrong...");
      }
      else {
        setError(null);
        setMovies(data.data.Search);
        setTotalResult(Number(data.data.totalResults));
        console.log(data);
      };
    });
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[page,OMDb_API])

  //fetch API from OMDb RESTful API
  function fetchMovies(){
    setLoading(true);
    setError(null);
    axios.get(OMDb_API)
    .then(data => {
      if(data.data.Error){
        setError("Oops, something went wrong...");
      }
      else {
        setError(null);
        setMovies(data.data.Search);
        setTotalResult(Number(data.data.totalResults));
        console.log(data);
      };
    });
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  };
  
  return (
      <div className="App">
        <Header />
        <hr/>
          <Routes>
            <Route path='/Movie-Seeker' exact element={
                <Home
                  handleTitle={handleTitle}
                  handleYear={handleYear}
                  handleType={handleType}
                  handleSubmit={handleSubmit}
                />
              }
            />
            <Route path='/Movie-Seeker/results' element={
                <SearchResult
                  movies={movies}
                  error={error}
                  loading={loading}
                  page={page}
                  title={title}
                  year={year}
                  type={type}
                  totalResult={totalResult}
                  handleChange={handleChange}
                  setPage={setPage}
                  fetchMovies={fetchMovies}
                />
              }
            />
            <Route path='/Movie-Seeker/detail/:id' element={
                <ItemDetail
                  movies={movies}
                  loading={loading}
                  setLoading={setLoading}
                />
              }
            />
          </Routes>
        <hr/>
        <Footer />
      </div>
  );
}

export default App;
