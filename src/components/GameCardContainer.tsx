import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box overflow="hidden" >
      {children}
    </Box>
  );
};

export default GameCardContainer;
