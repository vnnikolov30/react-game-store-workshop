import { Link } from "react-router-dom";

function GameItem({
    _id ,title, category, maxLevel, imageUrl, summary
}) {
  return (
    <div>
         <div className="allGames">
          <div className="allGames-info">
            <img src={imageUrl} />
            <h6>{category}</h6>
            <h2>{title}</h2>
            <Link to={`/games/${_id}/details`} className="details-button">
              Details
            </Link>
          </div>
        </div>
    </div>
  )
}

export default GameItem