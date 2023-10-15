import "./SideVideo.scss";
import { Link } from "react-router-dom";
export default function ({ id, title, channel, image }) {
  return (
    <Link to={`/video/${id}`}>
      <ul className="side-video__list">
        <li className="side-video__container">
          <div className="side-video__image-wrapper">
            <img
              className="side-video__image"
              src={image}
              alt="video thumbnail"
            ></img>
          </div>
          <div className="side-video__text">
            <h4 className="side-video__title">{title}</h4>
            <p className="side-video__channel">{channel}</p>
          </div>
        </li>
      </ul>
    </Link>
  );
}
