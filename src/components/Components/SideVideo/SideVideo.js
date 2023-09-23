import "./SideVideo.scss";
export default function ({ key, title, channel, image, onClick }) {
  return (
    <ul className="side-video__list">
      <li className="side-video__container" onClick={onClick}>
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
  );
}
