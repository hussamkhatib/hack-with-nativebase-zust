import { Box, Heading, Hidden } from "native-base";
import React from "react";
import data from "../data";
import Cards from "./Cards";
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
          <Hidden platform={["android", "ios"]}>
            <Table data={data} columns={columns} />
          </Hidden>
          <Hidden platform={["web"]}>
            <Box mx="4">
              <Heading
                py="2"
                fontWeight={500}
                color="coolGray.800"
                _dark={{ color: "coolGray.50" }}
              >
                Portfolio Details
              </Heading>
              <Cards data={data} />
            </Box>
          </Hidden>
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
