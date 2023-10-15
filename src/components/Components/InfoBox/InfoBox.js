import "../InfoBox/InfoBox.scss";
import ViewsIcon from "../../../assets/images/views.svg";
import likesIcon from "../../../assets/images/likes.svg";

export default function InfoBox({ video }) {
  const date = new Date(video.timestamp);
  const year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = "0" + day;
  }

  const formattedDate = `${month}/${day}/${year}`;

  return (
    <>
      <h1 className="title">{video.title}</h1>
      <section className="video">
        <div className="video__text">
          <p className="video__author">By {video.channel}</p>
          <div className="video__views-container">
            <img src={ViewsIcon}></img>
            <p className="video__para">{video.views}</p>
          </div>
        </div>

        <div className="video__text-2">
          <div className="video__date-wrapper">
            <p className="video__date">{formattedDate}</p>
          </div>
          <div className="video__likes-container">
            <img src={likesIcon}></img>
            <p className="video__para">{video.likes}</p>
          </div>
        </div>
      </section>

      <article className="video__description">
        <p className="video__description-text">{video.description}</p>
      </article>
    </>
  );
}
