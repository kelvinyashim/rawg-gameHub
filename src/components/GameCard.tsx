import type { GameData } from "@/services/game-service";
import { Badge, Card, Image } from "@chakra-ui/react";
import PlatFormIconList from "./PlatFormIconList";

interface Props {
  game: GameData;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root overflow="hidden" maxW="sm">
      <Image
        src={game.background_image}
        alt={game.name}
        width="100%"
        height="200px"
        objectFit="cover"
      />
      <Card.Body>
        <PlatFormIconList platforms={game.platforms} />
        <Card.Title>{game.name}</Card.Title>
        <Badge alignContent={'center'} marginRight={200} colorPalette="gray">{game.metacritic}</Badge>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
