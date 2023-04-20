import {
  Input,
  InputGroup,
  InputLeftElement,
  useInputGroupStyles,
} from "@chakra-ui/react";

import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />}></InputLeftElement>
      <Input
        borderRadius={20}
        placeholder="Search games..."
        variant={"filled"}
      ></Input>
    </InputGroup>
  );
};

export default SearchInput;