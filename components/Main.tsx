import { Box } from "native-base";
import React from "react";
import Header from "./Header";
import Stats from "./Stats";

const Main = () => {
  return (
    <Box maxW="1016" width="full" mx="auto">
      <Header />
      <Box
        _light={{
          _web: {
            bg: "white",
          },
        }}
        _dark={{
          _web: {
            bg: "coolGray.800",
          },
        }}
      >
        <Stats />
      </Box>
    </Box>
  );
};

export default Main;
