import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import requests from "../../requests";
import "./poster-background.css";

function PosterBackground({
  movie,
  isMuted,
  isPlaying = false,
  isAutoPlayed = false,
  ...resProps
}) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [trailerUrl, setTrailerUrl] = useState();
  const [backgroundOpacity, setBackgroundOpacity] = useState("1");

  function handleOnEnded() {
    setBackgroundOpacity("1");
  }

  function handleOnPlay() {
    setBackgroundOpacity("0");
  }

  useEffect(() => {
    ///handle API
    if (isPlaying && trailerUrl === undefined) {
      console.log("autoplay");
      const movieDetailUrl = `${movie.id}/videos?api_key=${API_KEY}`;
      axios.get(`${requests.baseUrl}${movieDetailUrl}`).then((res) => {
        const trailerIndex = res.data.results.findIndex(
          (item) => item.type === "Trailer"
        );
        const trailerKey = res.data.results[trailerIndex].key;
        setTrailerUrl(
          "https://www.youtube.com/watch?v=" + trailerKey + "?autoplay=0"
        );
      });
    }
    //handle opacity
    if (isAutoPlayed !== true) {
      const opacity = isPlaying ? 0 : 1;
      setBackgroundOpacity(opacity);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (trailerUrl !== undefined) {
    }
  }, [trailerUrl]);

  return (
    <div className="poster__background" {...resProps}>
      <img
        style={{ opacity: backgroundOpacity }}
        src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path}
        className="poster__img"
        alt="poster-background"
      />
      {trailerUrl && isPlaying && (
        <ReactPlayer
          className="poster__trailer"
          width="100%"
          height="100%"
          url={trailerUrl}
          muted={isMuted}
          playing={isPlaying}
          onEnded={handleOnEnded}
          onPlay={handleOnPlay}
        />
      )}
    </div>
  );
}

export default PosterBackground;
