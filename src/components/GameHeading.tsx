import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../App";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Heading as="h1" fontSize="5xl" marginBottom={30}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
