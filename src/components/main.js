import { Routes, Route } from "react-router-dom";
import UserSelectPage from "../pages/userSelect/userSelect";
import Home from "../pages/home/home";
import { useContext, useEffect } from "react";
import { GenresContext } from "../contexts/GenresProvider";
import genreSevices from "../services/genres";

function Main() {
  const { setGenreList } = useContext(GenresContext);
  useEffect(() => {
    async function fetchGenres() {
      const movieGenres = await genreSevices.getMovieGenres();
      const tvGenres = await genreSevices.getTvGenres();
      setGenreList({
        movieGenres: movieGenres,
        tvGenres: tvGenres,
      });
    }
    fetchGenres();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<UserSelectPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default Main;
