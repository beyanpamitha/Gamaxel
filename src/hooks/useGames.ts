import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number; // This is the second interface, which describes the structure of each game object.
  name: string;
  background_image: string;
  platforms: { platform: platform }[]; // This is an object array type (Inside this array, we have objects)
  metacritic: number;
}

interface FetchGamesResponse {
  count: number; // This is the first interface, which describes the structure of the response we expect from the API.
  results: Game[]; // Me result kiyana data eke type eka define karanna thamai uda interface eka hadanne.
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    apiClient
      .get<FetchGamesResponse>("/games")
      .then((response) => {
        setGames(response.data.results); //response can't assign to 'result' because the type is not correct.we have to create an interface for the response.
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return { games, error, loading };
};
export default useGames;
