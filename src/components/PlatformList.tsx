import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatform, { Platform } from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform?: string | null;
}

export const PlatformList = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error, isLoading } = usePlatform();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform : "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((item) => (
          <MenuItem
            onClick={() => onSelectPlatform(item)}
            key={item.id}
            value={item.id}
          >
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
