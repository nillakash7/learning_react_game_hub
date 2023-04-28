import useGames from "../hooks/useGames";
import { CustomAlert } from "./CustomAlert";

export const Games = () => {
  const { games, error, isLoading, setGames, setLoading, setErrors } =
    useGames();

  return (
    <div>
      {error && (
        <CustomAlert alertType="error" alertMessage={error}></CustomAlert>
      )}
      <ul>
        {games.map((game) => (
          <li>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};
