import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import Page from "./pages/Page/Page";
// import Header from "./components/Components/Header/Header";
// import logo from "../src/assets/images/BrainFlix-logo.svg";
// import avatar from "../src/assets/images/Mohan-muruge.jpg";
// import MainVideoData from "../src/data/video-details.json";
// import sideVideoData from "../src/data/videos.json";
// import MainVideo from "./components/Components/MainVideo/MainVideo";
// import CommentBox from "./components/Components/CommentBox/CommentBox";
// import Comments from "./components/Components/Comments/Comments";
// import SideVideoList from "./components/Components/SideVideoList/SideVideoList";
// import InfoBox from "./components/Components/InfoBox/InfoBox";
// import Page from "../src/pages/Page/Page";
function App() {
  // const [mainVideo, setMainVideo] = useState(MainVideoData[0]);
  // const [sideVideos, setSideVideos] = useState(
  //   sideVideoData.filter((v) => v.id !== mainVideo.id)
  // );

  // const onClickHandler = (video) => {
  //   const mainVideoUpdater = MainVideoData.find((v) => v.id === video.id);
  //   setMainVideo(mainVideoUpdater);

  //   const updatedSideVideos = sideVideoData.filter((v) => v.id !== video.id);
  //   setSideVideos(updatedSideVideos);
  // };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Page" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//  <Header
//         logo={logo}
//         avatar={avatar}
//         buttonText="UPLOAD"
//         placeHolder="Search"
//       />

//       <MainVideo video={mainVideo} />
//       <div className="wrapper">
//         <div className="flex">
//           <InfoBox video={mainVideo} />
//           <CommentBox />
//           <Comments video={mainVideo.comments} />
//         </div>
//         <div className="side-video-wrapper">
//           <SideVideoList sideVideos={sideVideos} onClick={onClickHandler} />
//         </div>
//       </div>
