import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [movieModal, setMovieModal] = useState({ loading: true, data: {} });

  return (
    <AppContext.Provider
      value={{ isModalVisible, movieModal, setIsModalVisible, setMovieModal }}
    >
      {children}
    </AppContext.Provider>
  );
}
