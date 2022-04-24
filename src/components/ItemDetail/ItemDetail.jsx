import React,{ useState,useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import './style.css';
import API from '../API_Key';

const ItemDetail = () => {

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const {id} = useParams();

  //fetch single movie data
  useEffect(()=>{
    setLoading(true);
    axios.get(`http://www.omdbapi.com/?t=${id}&apikey=${API.API_Key}`)
    .then((data) => {
      console.log(data);
      setMovie(data.data)
    })
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[id])
  
  return (
    <div className="detail-container">
      {loading ? (
        <h1>Loading...</h1>
      ):(
      <>
        <img 
          src={movie.Poster !== "N/A" ? (movie.Poster) : ('https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80')}
          alt="Movie_Poster"
          />
        <div className="info-container">
          <p id="movie-title">{movie.Title}</p>
          <p id='actors'>Actors : {movie.Actors}</p>
          <p>Type : {movie.Type}</p>
          <p>Year : {movie.Year}</p>
          <p>Movie Time : {movie.Runtime}</p>
          <p>Rating : {movie.imdbRating}</p>
          <p>Votes : {movie.imdbVotes}</p>
        </div>
      </>
      )}
    </div>
  )
}

export default ItemDetail