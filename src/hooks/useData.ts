import { useEffect, useState } from "react";
import { CanceledError, APIResponse } from "../services/api-client";
import dataService from "../services/data-service";

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = dataService(endpoint).getAll<APIResponse<T>>();
    request
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
      })
      .finally(() => {});
    return cancel;
  }, []);

  return { data, error, isLoading };
};

export default useData;
