import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/download.jpeg";
import { ColorModeButton, useColorMode } from "@/components/ui/color-mode";

export const NavBar = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <HStack justifyContent="space-between">
        <Image src={logo} boxSize="60px" />
        <ColorModeButton variant="outline" onClick={toggleColorMode} margin={5}>
          Toggle Mode
        </ColorModeButton>
      </HStack>
    
    </>
  );
};
