import { useNavigate } from "react-router";
import "./userSelect.css";
import logo from "../../logo/netflix_acc.png";

function UserSelectPage() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/home");
  }

  return (
    <div className="userSelect">
      <div className="userSelect__navbar">
        <img
          className="userSelect__navbar__logo"
          src="https://fontmeme.com/permalink/220212/2b79b3189fcc6673d3153dee728478eb.png"
          alt="logo"
        />
      </div>
      <div className="userSelect__content">
        <h3 className="userSelect__welcome">Welcome to Notflix :v</h3>
        <div class="userSelect__account">
          <img className="userSelect__account__img" src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default UserSelectPage;
