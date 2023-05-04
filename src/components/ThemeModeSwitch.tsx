import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export const ThemeModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack paddingRight="10px">
      <Switch
        colorScheme={"green"}
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
};
