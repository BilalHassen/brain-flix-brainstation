import InfoBox from "../InfoBox/InfoBox";
import "./MainVideo.scss";
export default function MainVideo({ video }) {
  return (
    <section className="hero">
      <div className="hero__video-container">
        <video className="hero__video" controls poster={video.image}></video>
      </div>
    </section>
  );
}
