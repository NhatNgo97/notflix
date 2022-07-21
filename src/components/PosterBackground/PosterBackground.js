import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import "./poster-background.css";

function PosterBackground({
  tempBackdrop,
  trailerPath,
  isPlaying = false,
  isAutoPlayed = false,
  ...resProps
}) {
  const [backgroundOpacity, setBackgroundOpacity] = useState("1");
  const [isTrailerMuted, setIsTrailerMuted] = useState(true);
  console.log(trailerPath);

  function handleOnEnded() {
    setBackgroundOpacity("1");
  }
  function handleOnPlay() {
    setBackgroundOpacity("0");
  }

  function handleMuteClick() {
    setIsTrailerMuted(!isTrailerMuted);
  }

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
      {isPlaying && (
        <>
          <ReactPlayer
            className="poster__trailer"
            width="100%"
            height="100%"
            url={trailerPath}
            muted={isTrailerMuted}
            playing={isPlaying}
            onEnded={handleOnEnded}
            onPlay={handleOnPlay}
          />
          <button className="mute__btn" onClick={handleMuteClick}>
            {isTrailerMuted ? (
              <VolumeOffIcon className="fit-icon" fontSize="large" />
            ) : (
              <VolumeUpIcon className="fit-icon" fontSize="large" />
            )}
          </button>
        </>
      )}
    </div>
  );
}

export default PosterBackground;
