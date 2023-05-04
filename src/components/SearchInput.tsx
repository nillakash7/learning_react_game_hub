import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onInputKeyword: (keyword: string) => void;
}
export const SearchInput = ({ onInputKeyword }: Props) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      id="frmGlobalSearch"
      onSubmit={(event) => {
        event.preventDefault();
        if (searchInputRef && searchInputRef.current)
          onInputKeyword(searchInputRef.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />}></InputLeftElement>
        <Input
          ref={searchInputRef}
          placeholder="Keyword"
          variant="filled"
          borderRadius={20}
        />
      </InputGroup>
    </form>
  );
};
