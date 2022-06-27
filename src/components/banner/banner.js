import { useEffect, useState } from "react";
import axios from "axios";
import "./banner.css";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useWidthPartition } from "../../hooks/useWidthPartition";

function Banner() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setMovie(
          res.data.results[
            Math.floor(Math.random() * (res.data.results.length - 1))
          ]
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (movie === undefined) return <div>Loading...</div>;
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
      }}
    >
      <div className="banner__text">
        <h1 className="banner__text__title">{movie.original_title}</h1>
        <div className="banner__text__desc">
          {truncate(movie?.overview, 150)}
        </div>
        <div className="banner__text__btns">
          <button className="banner__text__btn play__btn">
            <PlayArrowRoundedIcon className="btn__icon" />
            <span>Play</span>
          </button>
          <button className="banner__text__btn info__btn">
            <InfoOutlinedIcon className="btn__icon" />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
}

export default Banner;
