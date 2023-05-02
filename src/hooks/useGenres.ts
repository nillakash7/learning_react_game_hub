import { useEffect, useState } from "react";
import { CanceledError, APIResponse } from "../services/api-client";
import genresService, { Genres } from "../services/genres-service";

const useGenres = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = genresService.getAll<APIResponse<Genres>>();
    request
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
      })
      .finally(() => {});
    return cancel;
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
