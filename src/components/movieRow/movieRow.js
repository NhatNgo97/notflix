import axios from "axios";
import { useEffect, useState } from "react";
import MoviePoster from "../moviePoster/moviePoster";
import "./movieRow.css";
import Skeleton from "@mui/material/Skeleton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useSlider } from "../../hooks/useSlider";

function MovieRow({ title, fetchUrl }) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = `https://api.themoviedb.org/3/movie/`;
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
  const [movies, setMovies] = useState({
    loading: true,
    data: [],
  });
  const { hasNext, hasPrev, distance, handlePaginate } = useSlider(movies);

  useEffect(() => {
    axios.get(`${BASE_URL}${fetchUrl}?api_key=${API_KEY}`).then((res) => {
      setMovies({ loading: false, data: res.data.results });
    });
  }, []);

  return (
    <div className="movieRow">
      <div className="movieRow__title">{title}</div>

      <div className="movieRow__slider slider-container">
        {hasPrev && (
          <span
            onClick={() => handlePaginate(-1)}
            className="handle-prev slider-handle"
          >
            <ArrowBackIosIcon />
          </span>
        )}
        <div className="slider-indicator"></div>
        <div
          style={{ transform: `translateX(${distance})` }}
          className="movieRow__movies slider"
        >
          {!movies.loading ? (
            <>
              {movies.data.map((movie) => {
                return <MoviePoster movieId={movie.id} key={movie.id} />;
              })}
            </>
          ) : (
            [1, 2, 3, 4, 5, 6].map((n) => (
              <Skeleton
                sx={{ bgcolor: "grey.900", margin: "0.4em" }}
                variant="rectangular"
                animation="wave"
                width={180}
                height={270}
                key={n}
              />
            ))
          )}
        </div>
        {hasNext && (
          <span
            onClick={() => handlePaginate(1)}
            className="handle-next slider-handle"
          >
            <ArrowForwardIosIcon />
          </span>
        )}
      </div>
    </div>
  );
}

export default MovieRow;
