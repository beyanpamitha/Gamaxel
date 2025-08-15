import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import type { AxiosRequestConfig } from "axios";

interface FetchResponses<T> {
  count: number;
  results: T[];
}

//Meka T type eken denna kiyala generic karala tynne. Can be use any letter instead of T.
//Generic karanne, hama welema e type eken witrai data accept krnne.
// ? is for make this param optional
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController(); //to cancel the request if the component unmounts before the request completes
      setLoading(true);

      apiClient
        .get<FetchResponses<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((response) => {
          setData(response.data.results); //response can't assign to 'result' because the type is not correct.we have to create an interface for the response.
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    },
    deps ? [...deps] : []
  );

  return { data, error, loading };
};
export default useData;
