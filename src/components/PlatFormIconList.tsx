import { HStack, Icon } from "@chakra-ui/react";
import type { GameData } from "@/services/game-service";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons";

interface Props {
  platforms: GameData["platforms"];
}

const PlatFormIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
   <HStack   align="center">
  {platforms.map((gp) => {
    const IconComponent = iconMap[gp.platform.slug];
    if (!IconComponent) return null;
    return <Icon key={gp.platform.id} as={IconComponent} color="gray.500" boxSize={5} />;
  })}
</HStack>

  );
};

export default PlatFormIconList;
