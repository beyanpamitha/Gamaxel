import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import useGamesUpdated, { type platform } from "../hooks/useGamesUpdated";
import type { GenreUpdated } from "../hooks/useGenreUpdated";

interface GameGridProps {
  selectedGenre: GenreUpdated | null;
  selectedPlatform: platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: GameGridProps) => {
  const { data, error, loading } = useGamesUpdated(
    selectedGenre,
    selectedPlatform
  );

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        gap="40px"
        padding="20px"
      >
        {loading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
