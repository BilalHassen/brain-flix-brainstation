import Header from "../../components/Components/Header/Header";
import "../../../src/components/Components/Header/Header.scss";
import logo from "../../assets/images/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import "./Page.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const apiKey = "ded52892-43a5-4da4-a30a-b1cde2beee29";

export default function Page() {
  const navigate = useNavigate();
  const formHandler = (event) => {
    event.preventDefault();

    const textInfo = {
      titleInput: event.target.title.value,
      descriptionInput: event.target.description.value,
    };

    if (textInfo.titleInput === "" || textInfo.descriptionInput === "") {
      alert("Please fill in both text fields");
    } else {
      axios
        .post(`http://localhost:8080/videos/?api_key=${apiKey}`, textInfo)
        .then((response) => {
          console.log({ response });
        });
      alert("form submission sucessful");
      navigate("/");
    }
  };
  return (
    <>
      <Header
        logo={logo}
        avatar={avatar}
        buttonText="UPLOAD"
        placeHolder="Search"
      />
      <section className="upload">
        <h1 className="upload__page-title">Upload Video</h1>
        <div className="upload__flex-wrapper">
          <div className="upload__image-container">
            <p className="upload__thumbnail-text">video thumbnail</p>
            <img className="upload__image" src={thumbnail}></img>
          </div>
          <div className="upload__form-container">
            <form className="upload__form" onSubmit={formHandler}>
              <label for="title" className="upload__title-text">
                <p className="upload__placeholder-text">title your video</p>
              </label>
              <input
                className="upload__title-input"
                type="text"
                name="title"
                placeholder="Add a title to your video"
              ></input>
              <label for="title" className="upload__title-text">
                <p className="upload__placeholder-text">
                  add a video description
                </p>
              </label>
              <textarea
                className="upload__description-text"
                type="text"
                name="description"
                placeholder="Add a description to your video"
              ></textarea>

              <div className="upload__button-wrapper">
                <button className="upload__publish-button">PUBLISH</button>
                <Link to="/">
                  <button className="upload__cancel-button">CANCEL</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
