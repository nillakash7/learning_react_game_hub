import create from "./http-service";

export interface Genres {
  id: number;
  name: string;
  slug: string;
  games_count: number;
}

export default create("/genres");
