import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatform";

interface Props {
  onSellectedPlatform: (platform: Platform) => void;
  sellectedPlatform: Platform | null;
}

const PlatformSellector = ({
  onSellectedPlatform,
  sellectedPlatform,
}: Props) => {
  //rightIcon={<BsChevronDown />}
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button}>
        {sellectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSellectedPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSellector;
