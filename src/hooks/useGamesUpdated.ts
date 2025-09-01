import useData from "./useData";
import type { GenreUpdated } from "./useGenreUpdated";

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

const useGamesUpdated = (
  selectedGenre: GenreUpdated | null,
  selectedPlatform: platform | null
) =>
  useData<GameUpdated>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform]
  );

export default useGamesUpdated;
