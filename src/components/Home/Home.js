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
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const apiKey = "ded52892-43a5-4da4-a30a-b1cde2beee29";
const apiUrl = "https://project-2-api.herokuapp.com";

export default function Home() {
  const [mainVideo, setMainVideo] = useState(null);
  const [sideVideos, setSideVideos] = useState([]);

  return (
    <>
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
          <CommentBox video={mainVideo} />
          <Comments video={mainVideo.comments} />
        </div>
        <div className="side-video-wrapper">
          <SideVideoList sideVideos={sideVideos} />
        </div>
      </div>
    </>
  );
}
