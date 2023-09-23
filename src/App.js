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
function App() {
  const [video, setVideo] = useState(MainVideoData[0]);

 
  };

  return (
    <div className="App">
      <Header
        logo={logo}
        avatar={avatar}
        buttonText="UPLOAD"
        placeHolder="Search"
      />
      <MainVideo video={video} />
      <CommentBox />
      <Comments video={video.comments} />
      <SideVideoList sideVideos={sideVideoData} onClick={onClickHandler} />
    </div>
  );
}

export default App;
