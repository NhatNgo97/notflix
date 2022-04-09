import { useNavigate } from "react-router";

import './navBar.css'

function NavBar() {
  return (
    <div className="navBar">
        <img
          className="navBar__logo"
          src="https://fontmeme.com/permalink/220212/2b79b3189fcc6673d3153dee728478eb.png"
          alt="logo"
        />
      </div>
  );
}

export default NavBar