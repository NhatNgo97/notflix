import "./App.css";
import { BrowserView } from "react-device-detect";
import Main from "./components/main.js";
import NavBar from "./components/navBar/navBar";
import ModalProvider from "./contexts/ModalProvider";
import MovieModal from "./components/MovieModal";
import GenresProvider from "./contexts/GenresProvider";

function App() {
  return (
    <GenresProvider>
      <ModalProvider>
        <BrowserView>
          <NavBar />
          <Main />
        </BrowserView>
        <MovieModal />
      </ModalProvider>
    </GenresProvider>
  );
}

export default App;
