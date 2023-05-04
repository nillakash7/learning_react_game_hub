import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript, DarkMode } from "@chakra-ui/react";
import theme from "./theme";
import App from "./App";
import "./assets/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript
        initialColorMode={theme.config.initialColorMode}
      ></ColorModeScript>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
