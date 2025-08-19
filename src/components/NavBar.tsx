import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/download.jpeg";
import { ColorModeButton, useColorMode } from "@/components/ui/color-mode";
import SearchInput from "./SearchInput";
interface Props{
    onSearch: (searchText: string)=> void;
}
export const NavBar = ({onSearch}: Props) => {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <HStack  p={5}>
        <Image src={logo} boxSize="60px"/>
        <SearchInput onSearch={onSearch}/>
        <ColorModeButton variant="outline" onClick={toggleColorMode} margin={5}>
          Toggle Mode
        </ColorModeButton>
      </HStack>
    
    </>
  );
};
