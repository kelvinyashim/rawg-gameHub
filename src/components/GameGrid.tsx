/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGame } from "@/hooks/useGame";




export const GameGrid = () => {
 const {games, error, setError, setGames} =useGame();

  return (
    <>
    
    {error && <p className="text-danger">{error}</p>}
    
    <div className="mb-3">
      <ul className="list-group">
        {games.map((game) => (
          <li key={game.id} className="list-group-item">
            {game.name}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};
