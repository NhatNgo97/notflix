import requests from "../../requests";
import "./moviePoster.css"
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import PlayCircleFilledWhiteRoundedIcon from '@mui/icons-material/PlayCircleFilledWhiteRounded';
import styledEngine from "@mui/styled-engine";
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function MoviePoster({ movieId }) {
  const positionRef = useRef();

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

  const getPosition = () => {

  };

  useEffect(() => {
    getPosition();
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
      id={movieId}
      ref={positionRef}
    >
      <div className="moviePoster__img" style={{
        backgroundImage: `url(${requests.baseUrlImg}${movieDetail.data.backdrop_path})`
      }}>
      </div>
      {
        isHover && <div className="moviePoster__detail">
          <div className="btns">
            <div className="btns__left">
              <PlayArrowIcon className="poster-icon-play btnMoviePoster" />
              <AddIcon className="poster-icon-add btnMoviePoster" />
              <ThumbUpOutlinedIcon className="poster-icon-like btnMoviePoster" />
              <ThumbDownAltOutlinedIcon className="poster-icon-like btnMoviePoster" />
            </div>
            <div className="btns__right">
              <KeyboardArrowDownIcon className="poster-icon-dropdown btnMoviePoster" />
            </div>
          </div>
          <div className="detail">
            <span className="detail__rate">{movieDetail.data.vote_average} rate</span>
            <span className="detail__lenght">{countRuntime(movieDetail.data.runtime)}</span>
          </div>
          <div >
            <ul className="genres">
              {movieDetail.data.genres.slice(0, 3).map(genres => (
                <li key={genres.id}>{genres.name}</li>
              ))}

            </ul>
          </div>
        </div>
      }
    </div >
  )
}

export default MoviePoster;