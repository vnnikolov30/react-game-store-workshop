import { Link } from "react-router-dom";

function GameItemHome({ _id, title, maxLevel, imageUrl }) {
  return (
    <>
      <div className="game">
        <div className="image-wrap">
          <img src={imageUrl} />
        </div>
        <h3>{title}</h3>
        <div className="rating">
        <span>{"☆".repeat(maxLevel)}</span>
          {/* <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span> */}
        </div>
        <div className="data-buttons">
          <Link to={`/games/${_id}/details`} className="btn details-btn">
            Details
          </Link>
        </div>
      </div>
    </>
  );
}

export default GameItemHome;
