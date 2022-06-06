import {Routes, Route} from 'react-router-dom';
import UserSelectPage from '../pages/userSelect/userSelect';
import Home from '../pages/home/home';


function Main() {
    return (
        <Routes>
        <Route path="/" element={<UserSelectPage />} />
        <Route path="/home" element={<Home />} />
        </Routes>
    );
}

export default Main;
