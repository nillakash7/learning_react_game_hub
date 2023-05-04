import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onInputKeyword: (keyword: string) => void;
}
export const SearchInput = ({ onInputKeyword }: Props) => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />}></InputLeftElement>
      <Input
        placeholder="Keyword"
        onChange={(e) => onInputKeyword(e.target.value)}
        variant="filled"
        borderRadius={20}
      />
    </InputGroup>
  );
};
