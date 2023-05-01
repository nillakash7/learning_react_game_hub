import create from "./http-service";

export interface GamePlatform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: GamePlatform }[];
}

export interface FetchGameResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

export default create("/games");
