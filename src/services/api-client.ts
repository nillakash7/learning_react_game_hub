import axios, { CanceledError } from "axios";

export interface APIResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export default axios.create({
  params: {
    key: "cee42f5b981d4c269727c105dc2b82b1",
    platforms: "18,1,7",
  },
  baseURL: "https://api.rawg.io/api",
});

export { CanceledError };
