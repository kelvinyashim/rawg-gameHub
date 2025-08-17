import { useGenres } from "@/hooks/useGenres";
import type { Genres } from "@/services/genre-service";
import { getCroppedImageUrl } from "@/services/image-url";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";

interface Props {
  onSelectedGenre: (genre: Genres) => void;
}
const GameGenres = ({ onSelectedGenre }: Props) => {
  const { genres, isLoading } = useGenres();

  if (isLoading) return <Spinner color="blue" />;

  return (
    <>

      <List.Root listStyle="none">
        {genres.map((genre) => (
          <ListItem key={genre.id}>
            <HStack marginRight={20}>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="40px"
                borderRadius={8}
                margin={1}
              />
              <Button onClick={() => onSelectedGenre(genre)} variant="ghost">
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};

export default GameGenres;
