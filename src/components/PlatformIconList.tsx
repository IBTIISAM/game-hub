import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaLinux,
  FaApple,
  FaAndroid,
  FaXbox,
  FaPlaystation,
} from "../../node_modules/react-icons/fa";
import { MdPhoneIphone } from "../../node_modules/react-icons/md";
import { SiNintendo } from "../../node_modules/react-icons/si";
import { BsGlobe } from "../../node_modules/react-icons/bs";
import { IconType } from "../../node_modules/react-icons";

import { Platform } from "../hooks/useGames";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          color="gray.500"
        ></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
