import { useGameDetails } from "@/hooks/useGameDetails";
import { Heading, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react/box";
import { useParams } from "react-router-dom"

const GameDetailPage = () => {
  const {slug}= useParams();
  const {data,} = useGameDetails(slug!);
  return (
    <Box>
      <Heading size='4xl'>{data?.name}</Heading>
      <Text>{data?.description_raw}</Text>
    </Box>
  )
}

export default GameDetailPage
