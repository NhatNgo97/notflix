import { useNavigate } from "react-router";
import "./userSelect.css";
import logo from "../../logo/netflix_acc.png";

function UserSelectPage() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/home");
  }

  const baseAPIKEY = process.env.REACT_APP_API_KEY;
  console.log(baseAPIKEY);

  return (
    <div className="userSelect">
      <h3 className="userSelect__welcome">Welcome to Notflix :v</h3>
      <div className="userSelect__account">
        <img
          onClick={handleClick}
          className="userSelect__account__img"
          src={logo}
          alt="logo"
        />
      </div>
    </div>
  );
}

export default UserSelectPage;
