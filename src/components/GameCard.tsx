import type { GameData } from "@/services/game-service";
import { Badge, Box, Card, Image } from "@chakra-ui/react";
import PlatFormIconList from "./PlatFormIconList";
import { getCroppedImageUrl } from "@/services/image-url";

interface Props {
  game: GameData;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={9}>
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        borderRadius={5}
      />

      <Card.Body>
        <PlatFormIconList platforms={game.platforms} />
        <Card.Title fontSize="2xl" marginTop={3}>
          {game.name}{" "}
          {game.metacritic >= 90 ? "🎯" : game.metacritic >= 70 ? "👍" : "😐"}
        </Card.Title>
        <Box marginTop={3}>
          <Badge variant="subtle" alignContent={"center"} colorPalette="grey">
            {game.metacritic}
          </Badge>
        </Box>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
