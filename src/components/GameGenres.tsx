import { useGenres } from "@/hooks/useGenres";
import type { Genres } from "@/services/genre-service";
import { getCroppedImageUrl } from "@/services/image-url";
import {
  Button,
  Heading,
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
      <Heading fontSize="2xl" marginBottom={4}>
        Genres
      </Heading>
      <List.Root listStyle="none">
        {genres.map((genre) => (
          <ListItem key={genre.id}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="40px"
                borderRadius={8}
                objectFit="cover"
                margin={1}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                onClick={() => onSelectedGenre(genre)}
                variant="ghost"
                overflow='clip'
              >
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
