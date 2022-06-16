import { Box } from "native-base";
import React from "react";
import data from "../data";
import Header from "./Header";
import Stats from "./Stats";
import Table from "./Table";

const Main = () => {
  return (
    <Box
      maxW="1016"
      width="full"
      _web={{
        py: 4,
      }}
      mx="auto"
    >
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
        <Box maxW="734" width="full" mx="auto">
          <Stats />
          <Table data={data} columns={columns} />
        </Box>
      </Box>
    </Box>
  );
};

export default Main;

const columns = [
  {
    header: "Company Name",
    key: "companyName",
    flex: "2",
  },
  {
    header: "Investment",
    key: "investment",
  },
  {
    header: "Current Value",
    key: "currentValue",
  },
  {
    header: "Returns",
    key: "returns",
    color: {
      light: "emerald.600",
      dark: "emerald.500",
    },
  },
];
