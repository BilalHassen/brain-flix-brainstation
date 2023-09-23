import "./SideVideoList.scss";
import "../SideVideo/SideVideo.scss";
import SideVideo from "../SideVideo/SideVideo";
export default function ({ sideVideos, onClick }) {
  console.log(sideVideos);
  return (
    <section className="side-video">
      {sideVideos.map((video) => (
        <SideVideo
          onClick={() => onClick(video)}
          key={video.id}
          channel={video.channel}
          title={video.title}
          image={video.image}
        />
      ))}
    </section>
  );
}
