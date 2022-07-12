import { createContext, useState } from "react";

export const GenresContext = createContext();

export default function GenresProvider({ children }) {
  const [genreList, setGenreList] = useState({
    movieGenres: [],
    tvGenres: [],
  });

  return (
    <GenresContext.Provider value={{ genreList, setGenreList }}>
      {children}
    </GenresContext.Provider>
  );
}
