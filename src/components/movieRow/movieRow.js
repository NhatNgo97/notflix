import axios from "axios";
import { useEffect, useState } from "react";
import MoviePoster from "../moviePoster/moviePoster";
import './movieRow.css'
import Skeleton from '@mui/material/Skeleton';


function MovieRow({ title, fetchUrl }) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = `https://api.themoviedb.org/3/movie/`;
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
  const [movies, setMovies] = useState({
    loading: true,
    data: [],
  });
  useEffect(() => {
    axios.get(`${BASE_URL}${fetchUrl}?api_key=${API_KEY}`).then((res) => {
      setMovies({ loading: false, data: res.data.results });
    })
  }, []);

  return (<div className="movieRow" >
    <div className="movieRow__title">{title}</div>
    <div className="movieRow__movies">
      {
        !movies.loading ?
          (<div className="movieRow__movies">
            <MoviePoster movieId={movies.data[1].id} />
            <MoviePoster movieId={movies.data[1].id} />
            <MoviePoster movieId={movies.data[1].id} />
          </div>)
          : ([1, 2, 3, 4, 5, 6].map((n) => (
            <Skeleton sx={{ bgcolor: 'grey.900', margin: '0.4em' }} variant="rectangular" animation="wave" width={180} height={270} key={n} />)))}
    </div>
  </div>)




}

export default MovieRow;
