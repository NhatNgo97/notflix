import { createContext, useState } from "react";

export const GenresContext = createContext();

export default function GenresProvider({ children }) {
  const [mediaType, setMediaType] = useState("movie");
  const [genreList, setGenreList] = useState({
    movieGenres: [],
    tvGenres: [],
  });
  return (
    <GenresContext.Provider
      value={{ genreList, setGenreList, mediaType, setMediaType }}
    >
      {children}
    </GenresContext.Provider>
  );
}
