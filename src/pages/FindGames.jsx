import { games } from "../data/games";
import GameCard from "../components/GameCard";

function FindGames() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-orange-100 p-10">

      <h1 className="text-5xl font-black text-center">
        Badminton Games
      </h1>

      <p className="text-center text-gray-600 mt-3">
        Find players and join games near you
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-12">

        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
          />
        ))}

      </div>

    </div>
  );
}

export default FindGames;