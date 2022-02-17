import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Routes />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
