import requests from "../../requests";
import "./moviePoster.css"
import { useState, useEffect } from "react";
import axios from "axios";

function MoviePoster({ movie, movieId }) {
  const [isHover, setIsHover] = useState(false);
  const [movieDetail, setMovieDetail] = useState({
    loading: true,
    data: {}
  });
  const API_KEY = process.env.REACT_APP_API_KEY;

  function countRuntime(n) {
    return `${Math.floor(n / 60)}h ${n % 60}m`
  }

  useEffect(() => {
    async function fetchData() {
      const movieDetailUrl = `${movie.id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`;
      var request = await axios.get(`${requests.baseUrl}${movieDetailUrl}`);
      setMovieDetail({
        loading: false,
        data: request.data
      });
    }
    fetchData();
  }, [])

  const handleMouseEnter = () => {
    setIsHover(true);
  }

  const handleMouseLeave = () => {
    setIsHover(false)
  }

  if (movieDetail.loading === true) return <div>sadasd</div>
  return (
    <div
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}

      className="moviePoster"
    >
      <div className="moviePoster__img" style={{
        backgroundImage: `url(${requests.baseUrlImg}${movieDetail.data.backdrop_path})`
      }}>
      </div>
      {isHover && <div className="moviePoster__detail">
        <div className="btns">
          <div className="btns__left"></div>
          <div className="btns__right"></div>
        </div>
        <div className="detail">
          <span className="detail__rate">{movieDetail.data.vote_average}</span>
          <span className="detail__lenght">{countRuntime(movieDetail.data.runtime)}</span>
        </div>
        <div className="genre">
          {/* <ul>
            {movie.genres.map(genres => (
              <li key={genres.id}>{genres.name}</li>
            ))}

          </ul> */}
        </div>

      </div>}
    </div>
  )
}

export default MoviePoster;