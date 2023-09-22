import "./MainVideo.scss";
export default function MainVideo({ video }) {
  return (
    <section className="hero">
      <video className="hero__video" controls poster={video.image}></video>
      <div>
        <h1 className="hero__title">{video.title}</h1>
      </div>
    </section>
  );
}
