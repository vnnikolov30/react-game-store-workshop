import { useGetAllGames } from "../../hooks/useGames";
import GameItem from "./GameItem";

function GameCatalogue() {
  const [games] = useGetAllGames();
  return (
    <div>
      {/* Catalogue */}
      <section id="catalog-page">
        <h1>All Games</h1>
        {/* Display div: with information about every game (if any) */}
        {games.length > 0 ? (
          games.map((game) => <GameItem key={game._id} {...game} />)
        ) : (
          <h3 className="no-articles">No games yet</h3>
        )}
      </section>
    </div>
  );
}

export default GameCatalogue;
