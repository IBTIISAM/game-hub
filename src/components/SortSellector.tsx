import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSellectOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSellector = ({ onSellectOrder, sortOrder }: Props) => {
  const SortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Releace Data" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Avarage rating" },
  ];

  const currentSortOrder = SortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    //rightIcon={<BsChevronDown />}
    <Menu>
      <MenuButton as={Button}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {SortOrders.map((order) => (
          <MenuItem
            onClick={() => onSellectOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSellector;
