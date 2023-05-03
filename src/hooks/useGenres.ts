import useData from "./useData";

export interface Genres {
  id: number;
  name: string;
  slug: string;
  games_count: number;
}

const useGenres = () => useData<Genres>("genres");

export default useGenres;
