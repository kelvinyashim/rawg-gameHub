import type { GameQuery } from "@/App"
import { Heading } from "@chakra-ui/react"

interface Props{
    gameQuery: GameQuery
}

const GameHeading = ({gameQuery}: Props) => {
    const heading = `${gameQuery.genre?.name ?? ""} ${gameQuery.platform?.name ?? ""} Games`
  return (
    <Heading size='3xl' marginBottom={4}>{heading}</Heading>
  )
}

export default GameHeading
