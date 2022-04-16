import axios from "axios";
import { useEffect, useState } from "react";
import MoviePoster from "../moviePoster/moviePoster";

function MovieRow({ title, fetchUrl }) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = `https://api.themoviedb.org/3/movie/`;
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
  const [movies, setMovies] = useState([{}]);
  useEffect(() => {
    axios.get(`${BASE_URL}${fetchUrl}?api_key=${API_KEY}`).then((res) => {
      console.log(res.data.results);
      setMovies(res.data.results);
  })}, []);

  if (movies === undefined) return <div>LOADING</div>
  return (<div>
    <MoviePoster movie={movies[0]} />
  </div>);
}

export default MovieRow;
