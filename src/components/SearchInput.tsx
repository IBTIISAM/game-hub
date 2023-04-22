import {
  Input,
  InputGroup,
  InputLeftElement,
  useInputGroupStyles,
} from "@chakra-ui/react";
import { useRef } from "react";

import { BsSearch } from "../../node_modules/react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  //children={<BsSearch />}
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />}></InputLeftElement>
        <Input
          borderRadius={20}
          placeholder="Search games..."
          variant={"filled"}
          ref={ref}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
