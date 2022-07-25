import { useEffect, useState } from "react";
import "./banner.css";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PosterBackground from "../PosterBackground/PosterBackground";
import { getMovieTrailerPath, truncate } from "../../helpers";
import itemService from "../../services/item";
import Button from "../Shared/Button/Button";

function Banner({ isDescriptionIncluded = true }) {
  const [movieBanner, setMovieBanner] = useState({
    loading: true,
    data: {},
  });

  useEffect(() => {
    async function getBannerAPI() {
      try {
        const movie = await itemService.getBanner({ mediaType: "movie" });
        console.log(movie);
        setMovieBanner({
          loading: false,
          data: movie,
        });
      } catch (e) {
        console.log(e);
      }
    }
    getBannerAPI();
  }, []);

  const trailerPath = getMovieTrailerPath(movieBanner.data);

  return (
    <div className="banner-container">
      <div className="banner">
        {movieBanner.loading === false && (
          <PosterBackground
            trailerPath={trailerPath}
            tempBackdrop={movieBanner?.data?.backdrop_path}
            isPlaying={true}
            isAutoPlayed={true}
          />
        )}
        <div className="banner__text">
          <div className="banner__text-left">
            <h1 className="banner__text__title">
              {movieBanner?.data?.original_title}
            </h1>
            {isDescriptionIncluded && (
              <div className="banner__text__desc">
                {truncate(movieBanner?.data?.overview, 150)}
              </div>
            )}
            <div className="banner__text__btns">
              <Button isPlayBtn hasLabel>
                <PlayArrowRoundedIcon />
                &nbsp;
                <span>Play</span>
              </Button>
              <Button isGreyBtn hasLabel>
                <InfoOutlinedIcon />
                &nbsp;
                <span>More Info</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-fade-bottom"></div>
    </div>
  );
}

export default Banner;
