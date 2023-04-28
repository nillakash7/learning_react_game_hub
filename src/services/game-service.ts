import create from "./http-service";
export interface Game {
  id: number;
  name: string;
}

export interface FetchGameResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

export default create("/games");
