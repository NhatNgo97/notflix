import { useEffect, useState } from "react";
import MoviePoster from "../moviePoster/moviePoster";
import "./movieRow.css";
import Skeleton from "@mui/material/Skeleton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useSlider } from "../../hooks/useSlider";
import itemService from "../../services/item";

function MovieRow({ mediaType, title, genreId }) {
  const [movies, setMovies] = useState({
    loading: true,
    data: [],
  });
  const { hasNext, hasPrev, distance, handlePaginate } = useSlider(movies);

  useEffect(() => {
    async function fetchList() {
      let movieList;
      if (title === "Trending") {
        movieList = await itemService.getTrendingList({
          mediaType: mediaType,
        });
      } else if (title === "Top Rated") {
        movieList = await itemService.getTopRatedList({
          mediaType: mediaType,
        });
      } else {
        movieList = await itemService.getList({
          mediaType: mediaType,
          genreId: genreId,
        });
      }
      setMovies({ loading: false, data: movieList.results });
    }
    fetchList();
  }, []);

  return (
    <div className="movieRow">
      <h3 className="movieRow__title">{title}</h3>

      <div className="movieRow__slider slider-container">
        {hasPrev && (
          <span
            onClick={() => handlePaginate(-1)}
            className="handle-prev slider-handle"
          >
            <ArrowBackIosIcon />
          </span>
        )}
        <div className="slider-indicator"></div>
        <div
          style={{ transform: `translateX(${distance})` }}
          className="movieRow__movies slider"
        >
          {!movies.loading ? (
            <>
              {movies.data.map((movie) => {
                return (
                  <MoviePoster
                    movieId={movie.id}
                    key={movie.id}
                    tempBackdrop={movie.backdrop_path}
                    movieTitle={movie.original_title}
                  />
                );
              })}
            </>
          ) : (
            [1, 2, 3, 4, 5, 6].map((n) => (
              <Skeleton
                sx={{ bgcolor: "grey.900", margin: "0.4em" }}
                variant="rectangular"
                animation="wave"
                width={180}
                height={270}
                key={n}
              />
            ))
          )}
        </div>
        {hasNext && (
          <span
            onClick={() => handlePaginate(1)}
            className="handle-next slider-handle"
          >
            <ArrowForwardIosIcon />
          </span>
        )}
      </div>
    </div>
  );
}

export default MovieRow;
