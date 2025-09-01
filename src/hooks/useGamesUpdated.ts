import type { GameQuery } from "../App";
import useData from "./useData";

export interface platform {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

export interface GameUpdated {
  id: number; // This is the second interface, which describes the structure of each game object.
  name: string;
  background_image: string;
  platforms: { platform: platform }[]; // This is an object array type (Inside this array, we have objects)
  metacritic: number;
}

const useGamesUpdated = (gameQuery: GameQuery) =>
  useData<GameUpdated>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGamesUpdated;
