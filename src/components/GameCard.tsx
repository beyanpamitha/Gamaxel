import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import type { GameUpdated } from "../hooks/useGamesUpdated";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getOptimizedImageUrl from "../services/image-url";

interface GameCardProps {
  game: GameUpdated;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    //overflow is for the image to not overflow the card
    <Card.Root borderRadius={"2xl"} overflow={"hidden"}>
      <Image src={getOptimizedImageUrl(game.background_image)} />
      <CardBody>
        <Heading>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList platforms={game.platforms.map((p) => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
