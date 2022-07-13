import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import "./poster-background.css";

function PosterBackground({
  tempBackdrop,
  isMuted,
  movie,
  isPlaying = false,
  isAutoPlayed = false,
  ...resProps
}) {
  const [backgroundOpacity, setBackgroundOpacity] = useState("1");
  const [isTrailerMuted, setIsTrailerMuted] = useState(true);

  function handleOnEnded() {
    setBackgroundOpacity("1");
  }
  function handleOnPlay() {
    setBackgroundOpacity("0");
  }

  function handleMuteClick() {
    console.log(isTrailerMuted);
  }

  const trailerPath = movie.data?.videos?.results.find(
    (item) => item.type === "Trailer"
  )?.key;
  const TrailerUrl =
    "https://www.youtube.com/watch?v=" + trailerPath + "?autoplay=0";

  useEffect(() => {
    if (isAutoPlayed !== true) {
      const opacity = isPlaying ? 0 : 1;
      setBackgroundOpacity(opacity);
    }
  }, [isPlaying]);

  return (
    <div className="poster__background" {...resProps}>
      <img
        style={{ opacity: backgroundOpacity }}
        src={"https://image.tmdb.org/t/p/original/" + tempBackdrop}
        className="poster__img"
        alt="poster-background"
      />
      {movie.loading === false && isPlaying && (
        <>
          <ReactPlayer
            className="poster__trailer"
            width="100%"
            height="100%"
            url={TrailerUrl}
            muted={isTrailerMuted}
            playing={isPlaying}
            onEnded={handleOnEnded}
            onPlay={handleOnPlay}
          />
          <button className="mute__btn" onClick={handleMuteClick}>
            <VolumeOffIcon className="fit-icon" fontSize="large" />
          </button>
        </>
      )}
    </div>
  );
}

export default PosterBackground;
