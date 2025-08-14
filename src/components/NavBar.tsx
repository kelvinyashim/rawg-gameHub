import { Button, HStack, Image, } from "@chakra-ui/react";
import logo from "../assets/download.jpeg";
import { useColorMode } from "@/components/ui/color-mode";

export const NavBar = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <HStack justifyContent='space-between'>
      <Image src={logo} boxSize="60px" />
      <Button variant="outline" onClick={toggleColorMode}>
        Toggle Mode
      </Button>
    </HStack>
  );
};
