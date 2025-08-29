import { useGenres } from "@/hooks/useGenres";
import { useGameQueryStore } from "@/services/constants/store";
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


const GameGenres = () => {
  const { data: genres, isLoading } = useGenres();
  const setGenre = useGameQueryStore(s=>s.setGenreId)

  if (isLoading) return <Spinner color="blue" />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={4}>
        Genres
      </Heading>
      <List.Root listStyle="none">
        {genres?.results.map((genre) => (
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
                onClick={() => setGenre(genre.id)}
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
