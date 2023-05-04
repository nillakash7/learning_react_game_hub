import { HStack, Image, Input } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ThemeModeSwitch } from "./ThemeModeSwitch";
import { SearchInput } from "./SearchInput";

interface Props {
  onInputKeyword: (keyword: string) => void;
}
export const NavBar = ({ onInputKeyword }: Props) => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput onInputKeyword={onInputKeyword}></SearchInput>
      <ThemeModeSwitch />
    </HStack>
  );
};
