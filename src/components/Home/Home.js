import Header from "../Components/Header/Header";
import MainVideo from "../Components/MainVideo/MainVideo";
import InfoBox from "../Components/InfoBox/InfoBox";
import CommentBox from "../Components/CommentBox/CommentBox";
import Comments from "../Components/Comments/Comments";
import SideVideoList from "../Components/SideVideoList/SideVideoList";
import logo from "../../assets/images/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import MainVideoData from "../../data/video-details.json";
import sideVideoData from "../../data/videos.json";
import { useState } from "react";

export default function Home() {
  const [mainVideo, setMainVideo] = useState(MainVideoData[0]);
  const [sideVideos, setSideVideos] = useState(
    sideVideoData.filter((v) => v.id !== mainVideo.id)
  );

  const onClickHandler = (video) => {
    const mainVideoUpdater = MainVideoData.find((v) => v.id === video.id);
    setMainVideo(mainVideoUpdater);

    const updatedSideVideos = sideVideoData.filter((v) => v.id !== video.id);
    setSideVideos(updatedSideVideos);
  };
  return (
    <>
      <Header
        logo={logo}
        avatar={avatar}
        buttonText="UPLOAD"
        placeholder="Search"
      />

      <MainVideo video={mainVideo} />
      <div className="wrapper">
        <div className="flex">
          <InfoBox video={mainVideo} />
          <CommentBox />
          <Comments video={mainVideo.comments} />
        </div>
        <div className="side-video-wrapper">
          <SideVideoList sideVideos={sideVideos} onClick={onClickHandler} />
        </div>
      </div>
    </>
  );
}
