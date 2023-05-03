import { SearchParameters } from "../components/GameList";
import useData from "./useData";
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
  metacritic: number;
}

const useGames = (searchBy?: SearchParameters | null) =>
  useData<Game>(
    "games",
    {
      params: {
        genres: searchBy?.genres?.id,
        parent_platforms: searchBy?.platform?.id,
      },
    },
    [searchBy?.genres?.id, searchBy?.platform?.id]
  );

export default useGames;
