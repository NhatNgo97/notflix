import { useEffect, useState } from "react";
import axios from "axios";
import "./banner.css";

function Banner() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setMovie(res.data.results[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
      }}
    >
      <div className="banner__text">
        <h1 className="banner__text__title">Black Crab</h1>
        <div className="banner__text__desc">
          asdjasdbjkasdhjaskdhjaskdhjasdh sdh asdh lasdhlkasdhjklasdjklas
        </div>
        <div className="banner__text__btn">
          <button>Play</button>
          <button>More Info</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
