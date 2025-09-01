import useData from "./useData";
import type { platform } from "./useGamesUpdated";

const usePlatforms = () => useData<platform>("/platforms/lists/parents");

export default usePlatforms;
