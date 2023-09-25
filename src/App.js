import { useState } from "react";
import "./App.css";
import "./App.scss";
import Header from "./components/Components/Header/Header";
import logo from "../src/assets/images/BrainFlix-logo.svg";
import avatar from "../src/assets/images/Mohan-muruge.jpg";
import MainVideoData from "../src/data/video-details.json";
import sideVideoData from "../src/data/videos.json";
import MainVideo from "./components/Components/MainVideo/MainVideo";
import CommentBox from "./components/Components/CommentBox/CommentBox";
import Comments from "./components/Components/Comments/Comments";
import SideVideoList from "./components/Components/SideVideoList/SideVideoList";
import InfoBox from "./components/Components/InfoBox/InfoBox";
function App() {
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
    <div className="App">
      <Header
        logo={logo}
        avatar={avatar}
        buttonText="UPLOAD"
        placeHolder="Search"
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
    </div>
  );
}

export default App;
