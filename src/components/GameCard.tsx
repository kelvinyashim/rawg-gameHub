import type { GameData } from "@/services/game-service";
import { Badge, Card, Image } from "@chakra-ui/react";
import PlatFormIconList from "./PlatFormIconList";
import { getCroppedImageUrl } from "@/services/image-url";

interface Props {
  game: GameData;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root overflow="hidden" maxW="sm" width='300px'>
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        width="100%"
        height="200px"
        objectFit="cover"
      />
      <Card.Body>
        <PlatFormIconList platforms={game.platforms} />
        <Card.Title>{game.name}</Card.Title>
        <Badge alignContent={'center'} marginRight={{
            sm:270,
            lg:215,
            md:220
        }} color="grey">{game.metacritic}</Badge>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
