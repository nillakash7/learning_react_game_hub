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

const useGames = (genresId?: number | null) =>
  useData<Game>("games", { params: { genres: genresId } }, [genresId]);

export default useGames;
