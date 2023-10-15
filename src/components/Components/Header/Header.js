import "./Header.scss";
import { Link } from "react-router-dom";
import Page from "../../../pages/Page/Page";
export default function Header(props) {
  return (
    <header>
      <nav className="nav" id="nav__page">
        <Link to="/">
          <div className="nav__logo-container">
            <img
              className="nav__logo"
              src={props.logo}
              alt="brainflix logo"
            ></img>
          </div>
        </Link>

        <div className="nav__container">
          <input
            className="nav__search-bar"
            type="text"
            placeHolder={props.placeHolder}
          ></input>
          <img className="nav__avatar" src={props.avatar}></img>
        </div>
        <Link to="/Page">
          <div className="nav__button-container">
            <button className="nav__button">{props.buttonText}</button>
          </div>
        </Link>
      </nav>
    </header>
  );
}
