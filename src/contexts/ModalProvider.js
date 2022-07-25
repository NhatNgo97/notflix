import { createContext, useState } from "react";

export const ModalContext = createContext();

export default function ModalProvider({ children }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [movieModal, setMovieModal] = useState({ loading: true, data: {} });

  return (
    <ModalContext.Provider
      value={{ isModalVisible, movieModal, setIsModalVisible, setMovieModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}
