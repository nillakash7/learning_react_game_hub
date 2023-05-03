import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export interface SortByItem {
  name: string;
  tag: string;
}

interface Props {
  onSelectSortBy: (sortby: SortByItem) => void;
  selectedSortBy?: string | null;
}

export const GameSorting = ({ onSelectSortBy, selectedSortBy }: Props) => {
  const data: SortByItem[] = [
    { name: "Relevance", tag: "" },
    { name: "Date Added", tag: "-added" },
    { name: "Name", tag: "name" },
    { name: "Release Date", tag: "-released" },
    { name: "Popularity", tag: "-metacritic" },
    { name: "Average Rating", tag: "-rating" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By : {selectedSortBy ? selectedSortBy : "Relevance"}
      </MenuButton>
      <MenuList>
        {data.map((item) => (
          <MenuItem
            onClick={() => onSelectSortBy(item)}
            key={item.tag}
            value={item.tag}
          >
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
