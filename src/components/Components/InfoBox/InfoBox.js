import "../InfoBox/InfoBox.scss";
import ViewsIcon from "../../../assets/images/views.svg";
import likesIcon from "../../../assets/images/likes.svg";

export default function InfoBox({ video }) {
  const date = new Date(video.timestamp);
  const formattedDate = date.toLocaleDateString("en-us");
  console.log(date);
  console.log(video);

  return (
    <>
      <section className="video">
        <div className="video__text">
          <p className="video__author">By {video.channel}</p>
          <div className="video__views-container">
            <img src={ViewsIcon}></img>
            <p className="video__para">{video.views}</p>
          </div>
        </div>

        <div className="video__text-2">
          <p className="video__date">{formattedDate}</p>
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
