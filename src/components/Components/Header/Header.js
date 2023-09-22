import "./Header.scss";
export default function Header(props) {
  return (
    <header>
      <nav className="nav">
        <div className="nav__logo-container">
          <img
            className="nav__logo"
            src={props.logo}
            alt="brainflix logo"
          ></img>
        </div>
        <div className="nav__container">
          <input
            className="nav__search-bar"
            type="text"
            placeHolder={props.placeHolder}
          ></input>
          <img className="nav__avatar" src={props.avatar}></img>
        </div>
        <div className="nav__button-conatiner">
          <button className="nav__button">{props.buttonText}</button>
        </div>
      </nav>
    </header>
  );
}
