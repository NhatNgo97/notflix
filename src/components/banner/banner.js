import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import "./banner.css";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ReactPlayer from "react-player";
import requests from "../../requests";

function Banner() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
  const [movie, setMovie] = useState();
  const [trailerUrl, setTrailerUrl] = useState();

  function handleVideoReady(e) {
    console.log(e.target);
    e.target.playVideo();
  }
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      origin: "http://localhost:3000/home",
    },
  };

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

  useMemo(async () => {
    if (movie !== undefined) {
      const movieDetailUrl = `${movie.id}/videos?api_key=${API_KEY}`;
      const request = await axios.get(`${requests.baseUrl}${movieDetailUrl}`);
      console.log(request.data.results);
      const trailerIndex = request.data.results.findIndex(
        (item) => item.type === "Trailer"
      );
      const trailerKey = request.data.results[trailerIndex].key;
      setTrailerUrl("https://www.youtube.com/watch?v=" + trailerKey);
    }
  }, [movie]);

  if (movie === undefined) return <div>Loading..</div>;
  return (
    <div className="banner-container">
      <div className="banner">
        <div className="banner__background">
          <img
            src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path}
            className="background__img"
            alt="banner-background"
          />
          {trailerUrl && (
            <ReactPlayer width="100%" height="100%" url={trailerUrl} playing />
          )}
        </div>
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
      <div className="banner-fade-bottom"></div>
    </div>
  );
}

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
}

export default Banner;
