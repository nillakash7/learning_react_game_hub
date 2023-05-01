import React, { useEffect, useState } from "react";
import gameService, { FetchGameResponse, Game } from "../services/game-service";
import { CanceledError } from "../services/api-client";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = gameService.getAll<FetchGameResponse>();
    request
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
      })
      .finally(() => {});
    return cancel;
  }, []);

  return { games, error, isLoading };
};

export default useGames;
