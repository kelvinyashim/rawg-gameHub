import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/download.jpeg'

export const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='60px'/>
        <Text>Navbar</Text>

    </HStack>
  )
}
