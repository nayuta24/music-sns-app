import React from "react";
import "./App.css";
import {
  Box,
  Button,
  ChakraProvider,
  Grid,
  GridItem,
  SimpleGrid,
} from "@chakra-ui/react";

import theme from "./theme/theme";
import { Router } from "./router/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <Router />
        </ChakraProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
