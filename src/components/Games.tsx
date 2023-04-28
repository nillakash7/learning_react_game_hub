import React, { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import gameService, { Game, FetchGameResponse } from "../services/game-service";

export const Games = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setErrors] = useState("");

  useEffect(() => {
    const { request, cancel } = gameService.getAll<FetchGameResponse>();
    request
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
      })
      .finally(() => {});
  }, []);

  return (
    <div>
      <ul>
        {games.map((game) => (
          <li>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};
