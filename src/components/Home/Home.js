import Header from "../Components/Header/Header";
import MainVideo from "../Components/MainVideo/MainVideo";
import InfoBox from "../Components/InfoBox/InfoBox";
import CommentBox from "../Components/CommentBox/CommentBox";
import Comments from "../Components/Comments/Comments";
import SideVideoList from "../Components/SideVideoList/SideVideoList";
import logo from "../../assets/images/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const apiKey = "ded52892-43a5-4da4-a30a-b1cde2beee29";
const apiUrl = "https://project-2-api.herokuapp.com";

export default function Home() {
  const [mainVideo, setMainVideo] = useState(null);
  const [sideVideos, setSideVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getDefaultVideo();
  }, []);

  useEffect(() => {
    getAllVideos();
  }, [id]);

  useEffect(() => {
    getSideVideos();
  }, [id]);

  const getDefaultVideo = () => {
    axios.get(`${apiUrl}/videos/?api_key=${apiKey}`).then((response) => {
      let mainVideoId = response.data[0].id;

      axios
        .get(`${apiUrl}/videos/${mainVideoId}?api_key=${apiKey}`)
        .then((response) => {
          let mainVideo = response.data;
          setMainVideo(mainVideo);
        })
        .catch((error) => {
          alert(`${error} failed to retrieve data`);
        });
    });
  };

  const getAllVideos = () => {
    if (id) {
      axios
        .get(`${apiUrl}/videos/${id}?api_key=${apiKey}`)
        .then((response) => {
          let allVideosData = response.data;
          console.log(allVideosData);
          setMainVideo(allVideosData);
        })
        .catch((error) => {
          alert(`${error} failed to retrieve data`);
        });
    }
  };

  const getSideVideos = () => {
    axios
      .get(`${apiUrl}/videos/?api_key=${apiKey}`)
      .then((response) => {
        let sideVideos = response.data;
        console.log(sideVideos);
        let filteredSideVideos = sideVideos.filter((video) => video.id !== id);
        setSideVideos(filteredSideVideos);
      })
      .catch((error) => {
        alert(`${error} failed to retrieve data`);
      });
  };

  return (
    <>
      <Header
        logo={logo}
        avatar={avatar}
        buttonText="UPLOAD"
        placeHolder="Search"
      />

      {/*{mainVideo &&/ is so that the components only render
when the data is made available} */}
      {mainVideo && <MainVideo video={mainVideo} />}
      <div className="wrapper">
        <div className="flex">
          {mainVideo && <InfoBox video={mainVideo} />}
          {mainVideo && <CommentBox video={mainVideo} />}
          {mainVideo && <Comments video={mainVideo.comments} />}
        </div>
        <div className="side-video-wrapper">
          <SideVideoList sideVideos={sideVideos} />
        </div>
      </div>
    </>
  );
}
