import "./App.css";
import { BrowserView } from "react-device-detect";
import Main from "./components/main.js";
import NavBar from "./components/navBar/navBar";

function App() {
  return (
    <>
      <BrowserView>
        <div className="App">
          <NavBar />
          <Main />
        </div>
      </BrowserView>
    </>
  );
}

export default App;
