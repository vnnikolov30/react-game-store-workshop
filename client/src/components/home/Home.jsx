import * as gamesAPI from "../../api/gamesApi";
import React, { useEffect, useState } from "react";
import GameItemHome from "./game-item-home/GameItemHome";

function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gamesAPI.getAll().then((result) => setGames(result));
  }, []);

  return (
    <>
      {/*Home Page*/}
      <section id="welcome-world">
        <div className="welcome-message">
          <h2>ALL new games are</h2>
          <h3>Only in GamesPlay</h3>
        </div>
        <img src="./images/four_slider_img01.png" alt="hero" />
        <div id="home-page">
          <h1>Latest Games</h1>
          {/* Display div: with information about every game (if any) */}
          {games.length > 0 ? (
            games.slice(0, 3).reverse().map((game) => <GameItemHome key={game._id} {...game} />)
          ) : (
            <h3 className="no-articles">No games yet</h3>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;
