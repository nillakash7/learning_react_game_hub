import { GamePlatform } from "../services/game-service";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: { platform: GamePlatform }[];
}
export const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    mac: FaApple,
    web: BsGlobe,
  };
  return (
    <HStack marginTop="5">
      {platforms.map(({ platform }) => (
        <Icon as={iconMap[platform.slug]} color="gray.500"></Icon>
      ))}
    </HStack>
  );
};
