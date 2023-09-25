import "../CommentBox/CommentBox.scss";
import avatar from "../../../assets/images/Mohan-muruge.jpg";
export default function () {
  return (
    <>
      <h1 className="comment-heading">3 Comments</h1>
      <div className="comment__flex-wrapper">
        <section className="comment">
          <form className="comment__form">
            <div className="comment__avatar-container">
              <img
                className="comment__avatar"
                src={avatar}
                alt="avatar for adding comment"
              ></img>
            </div>
            <div className="comment__flex-wrapper">
              <div className="comment__text-container">
                <label for="comment" className="comment__name-text">
                  join the conversation
                </label>
                <br></br>
                <input
                  name="comment"
                  className="comment__text"
                  placeholder="Add a new Comment"
                ></input>
              </div>
              <div className="comment__button-container">
                <button type="submit" className="comment__button">
                  comment
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
