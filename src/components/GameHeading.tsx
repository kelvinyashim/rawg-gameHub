import type { GameQuery } from "@/App"
import { useGenres } from "@/hooks/useGenres"
import { usePlatforms } from "@/hooks/usePlatform"
import { Heading } from "@chakra-ui/react"

interface Props{
    gameQuery: GameQuery
}

const GameHeading = ({gameQuery}: Props) => {
  const {data: genres} = useGenres();
  const genre = genres.results.find(genre=> genre.id === gameQuery.genreId);
    const {data: platform } = usePlatforms();
    const selectedPlat = platform.results.find(plat=> plat.id === gameQuery.platformId);
    const heading = `${genre?.name ?? ""} ${selectedPlat?.name ?? ""} Games`
  return (
    <Heading size='3xl' marginBottom={4}>{heading}</Heading>
  )
}

export default GameHeading
