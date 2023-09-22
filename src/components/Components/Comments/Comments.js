import "./Comments.scss";
export default function Comments({ video }) {
  return (
    <article className="comments">
      {video.map((comment) => {
        const date = new Date(comment.timestamp);
        const formattedDate = date.toLocaleDateString("en-us");
        return (
          <div className="comments__box">
            <div className="comments__avatar"></div>
            <div className="comments__text-box">
              <div className="comments__text-wrapper">
                <div className="comments__name">
                  <p className="comments__name-text">{comment.name}</p>
                </div>
                <div className="comments__date">
                  <p className="comments__date-text">{formattedDate}</p>
                </div>
              </div>
              <div className="comments__text">
                <p className="comments__body">{comment.comment}</p>
              </div>
            </div>
          </div>
        );
      })}
    </article>
  );
}