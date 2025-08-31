import { Box, Grid, GridItem, HStack } from '@chakra-ui/react'
import { FilterByPlatform } from '../FilterByPlatform'
import GameGenres from '../GameGenres'
import { GameGrid } from '../GameGrid'
import GameHeading from '../GameHeading'
import SortSelector from '../SortSelector'

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`, //for mobile
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="aside" hideBelow="lg" padding={5}>
        <GameGenres />
      </GridItem>

      <GridItem area="main">
        <Box px={10} py={5}>
          <GameHeading />
          <HStack>
            <FilterByPlatform />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default HomePage
