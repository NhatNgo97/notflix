import './App.css';
import { BrowserView } from 'react-device-detect';
import Main from './components/main.js';

function App() {
  return (
    <>
      <BrowserView>
        <Main/>
      </BrowserView>
    </>
  );
}

export default App;
