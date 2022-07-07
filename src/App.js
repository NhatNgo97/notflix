import "./App.css";
import { BrowserView } from "react-device-detect";
import Main from "./components/main.js";
import NavBar from "./components/navBar/navBar";
import AppProvider from "./contexts/AppProvider";
import MovieModal from "./components/MovieModal";

function App() {
  return (
    <AppProvider>
      <BrowserView>
        <NavBar />
        <Main />
      </BrowserView>
      <MovieModal />
    </AppProvider>
  );
}

export default App;
