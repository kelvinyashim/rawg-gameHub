import { Button, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/download.jpeg";
import { useColorMode } from "@/components/ui/color-mode";

export const NavBar = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>Navbar</Text>
      <Button variant="outline" onClick={toggleColorMode}>
        Toggle Mode
      </Button>
    </HStack>
  );
};
