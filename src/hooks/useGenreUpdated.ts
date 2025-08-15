import useData from "./useData";

export interface GenreUpdated {
  id: number;
  name: string;
  image_background: string;
}

const useGenreUpdated = () => useData<GenreUpdated>("/genres");

export default useGenreUpdated;
