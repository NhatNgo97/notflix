import { useNavigate } from "react-router";
import clx from "classnames";
import { useEffect, useState } from "react";
import Logo from "../../assets/notfliximg.png";

import "./navBar.css";

function NavBar() {
  const [isTopScroll, setIsTopScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setIsTopScroll(false);
      } else {
        setIsTopScroll(true);
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  var classes = clx("navBar", {
    "navBar-trans": !isTopScroll,
    "navBar-black": isTopScroll,
  });
  return (
    <div className={classes}>
      <img className="navBar__logo" src={Logo} alt="logo" />
    </div>
  );
}

export default NavBar;
