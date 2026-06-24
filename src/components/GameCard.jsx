function GameCard({ game }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 hover:scale-105 transition duration-300">
      
      <h2 className="text-2xl font-bold">
        {game.sport}
      </h2>

      <p className="text-gray-500 mt-2">
        {game.venue}
      </p>

      <p className="mt-2">
        {game.time}
      </p>

      <p className="mt-3 font-medium">
        {game.spotsLeft} spots left
      </p>

      <div className="flex justify-between items-center mt-5">
        
        <span className="text-xl font-bold">
          ₹{game.price}
        </span>

        <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-purple-600 transition">
          Join Game
        </button>

      </div>

    </div>
  );
}

export default GameCard;