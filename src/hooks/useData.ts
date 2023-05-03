import { useEffect, useState } from "react";
import { CanceledError, APIResponse } from "../services/api-client";
import dataService from "../services/data-service";
import { SearchParameters } from "../components/GameList";

const useData = <T>(endpoint: string, searchBy?: SearchParameters) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } =
      dataService(endpoint).getAll<APIResponse<T>>(searchBy);
    request
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => {});
    return cancel;
  }, []);

  return { data, setData, error, setError, isLoading };
};

export default useData;
