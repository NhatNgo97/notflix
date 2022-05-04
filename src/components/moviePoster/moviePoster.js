import requests from "../../requests";
import "./moviePoster.css"
import { useState, useEffect } from "react";
import axios from "axios";
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import PlayCircleFilledWhiteRoundedIcon from '@mui/icons-material/PlayCircleFilledWhiteRounded';

function MoviePoster({ movieId }) {
  const [isHover, setIsHover] = useState(false);
  const [movieDetail, setMovieDetail] = useState({
    loading: true,
    data: {}
  });
  const [genres, setGenres] = useState([])
  const API_KEY = process.env.REACT_APP_API_KEY;

  function countRuntime(n) {
    return `${Math.floor(n / 60)}h ${n % 60}m`
  }

  useEffect(() => {
    async function fetchData() {
      const movieDetailUrl = `${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=videos`;
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
          <div className="btns__left">
            <PlayCircleFilledWhiteRoundedIcon className="poster-icon-play" />
            <AddCircleOutlineRoundedIcon className="poster-icon-add" />
            <ThumbUpOutlinedIcon className="poster-icon-like" />
            <ThumbDownAltOutlinedIcon className="poster-icon-like" />
          </div>
          <div className="btns__right"></div>
        </div>
        <div className="detail">
          <span className="detail__rate">{movieDetail.data.vote_average}</span>
          <span className="detail__lenght">{countRuntime(movieDetail.data.runtime)}</span>
        </div>
        <div >
          <ul className="genres">
            {movieDetail.data.genres.map(genres => (
              <li key={genres.id}>{genres.name}</li>
            ))}

          </ul>
        </div>

      </div>}
    </div>
  )
}

export default MoviePoster;