/* useGames and useGenre are similar Hooks. So, there is 'duplication' on this project. To avoid duplication, I created useData 
hook that can be used for both useGames and useGenre. So these two hooks can be replaced by useData hook, but I didn'd deleted 
these hooks cause, this project is only for educational purposes.*/

import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponses {
  count: number;
  results: Genre[];
}

const useGenre = () => {
  const [genre, setGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    apiClient
      .get<FetchGenresResponses>("/genres")
      .then((response) => {
        setGenre(response.data.results); //response can't assign to 'result' because the type is not correct.we have to create an interface for the response.
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return { genre, error, loading };
};
//export default useGenre;
