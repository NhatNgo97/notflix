import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import "./poster-background.css";
import Button from "../Shared/Button/Button";

function PosterBackground({
  tempBackdrop,
  trailerPath,
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
          <div className="mute__btn">
            <Button isRoundBtn onClick={handleMuteClick}>
              {isTrailerMuted ? (
                <VolumeOffIcon className="fit-icon" fontSize="large" />
              ) : (
                <VolumeUpIcon className="fit-icon" fontSize="large" />
              )}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default PosterBackground;
