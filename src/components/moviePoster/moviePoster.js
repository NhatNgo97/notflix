import requests from "../../requests";
import "./moviePoster.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useWidthPartition } from "../../hooks/useWidthPartition";
import PosterBackground from "../PosterBackground/PosterBackground";
import { ModalContext } from "../../contexts/ModalProvider";

function MoviePoster({ movieId, tempBackdrop }) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [isHover, setIsHover] = useState(false);
  const [delayHandler, setDelayHandler] = useState();
  const [movieDetail, setMovieDetail] = useState({
    loading: true,
    data: {},
  });

  const { setIsModalVisible, setMovieModal } = useContext(ModalContext);

  function countRuntime(n) {
    return `${Math.floor(n / 60)}h ${n % 60}m`;
  }
  const { posterWidth } = useWidthPartition();

  useEffect(() => {
    if (isHover) {
      async function fetchData() {
        const movieDetailUrl = `${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=videos`;
        var request = await axios.get(`${requests.baseUrl}${movieDetailUrl}`);
        setMovieDetail({
          loading: false,
          data: request.data,
        });
      }
      fetchData();
    }
  }, [isHover]);

  const handleMouseEnter = () => {
    setDelayHandler(
      setTimeout(() => {
        setIsHover(true);
      }, 1000)
    );
  };

  const handleMouseLeave = () => {
    clearTimeout(delayHandler);
    setIsHover(false);
  };

  const handleOpenModal = () => {
    setIsHover(false);
    setMovieModal(movieDetail.data);
    setIsModalVisible(true);
  };
  console.log(tempBackdrop);

  return (
    <div
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
      className="moviePoster"
      id={movieId}
      style={{
        width: posterWidth,
        transform: isHover ? "scale(1.4)" : "scale(1.0)",
      }}
    >
      <div className="background-container">
        <PosterBackground
          tempBackdrop={tempBackdrop}
          movie={movieDetail}
          isMuted={true}
          isPlaying={isHover}
          style={{
            position: "relative",
          }}
        />
      </div>
      {movieDetail.loading === false && isHover && (
        <div className="moviePoster__detail">
          <div className="detail-container">
            <div className="btns">
              <div className="btns__left">
                <PlayArrowIcon className="poster-icon-play btnMoviePoster" />
                <AddIcon className="poster-icon-add btnMoviePoster" />
                <ThumbUpOutlinedIcon className="poster-icon-like btnMoviePoster" />
                <ThumbDownAltOutlinedIcon className="poster-icon-like btnMoviePoster" />
              </div>
              <div onClick={handleOpenModal} className="btns__right">
                <KeyboardArrowDownIcon className="poster-icon-dropdown btnMoviePoster" />
              </div>
            </div>
            <div className="detail">
              <span className="detail__rate">
                {movieDetail.data.vote_average} rate
              </span>
              <span className="detail__lenght">
                {countRuntime(movieDetail.data.runtime)}
              </span>
            </div>
            <div>
              <ul className="genres">
                {movieDetail.data.genres.slice(0, 3).map((genres) => (
                  <li key={genres.id}>{genres.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MoviePoster;
