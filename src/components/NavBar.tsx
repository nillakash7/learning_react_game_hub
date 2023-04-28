import {
  Box,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Image,
  Switch,
  Text,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { useState } from "react";
import { ThemeModeSwitch } from "./ThemeModeSwitch";

export const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Image src={logo} boxSize="60px"></Image>
      <ThemeModeSwitch />
    </HStack>
  );
};
