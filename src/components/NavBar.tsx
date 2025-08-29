import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/download.jpeg";
import { ColorModeButton, useColorMode } from "@/components/ui/color-mode";
import SearchInput from "./SearchInput";

export const NavBar = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <HStack  p={5}>
        <Image src={logo} boxSize="60px"/>
        <SearchInput/>
        <ColorModeButton variant="outline" onClick={toggleColorMode} margin={5}>
          Toggle Mode
        </ColorModeButton>
      </HStack>
    
    </>
  );
};
