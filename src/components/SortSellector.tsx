import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSellector = () => {
  return (
    //rightIcon={<BsChevronDown />}
    <Menu>
      <MenuButton as={Button}>Order by: Relevance</MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Nmae</MenuItem>
        <MenuItem>Releace Data</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Avarage rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSellector;
