import { Box, Flex, Text } from "native-base";
import React, { FC } from "react";

interface Data {
  companyName: string;
  investment: string;
  currentValue: string;
  returns: string;
}
interface Props {
  data: any[];
  columns: {
    header: string;
    key: string;
    flex?: string;
    color?: {
      light: string;
      dark: string;
    };
  }[];
}

const Table: FC<Props> = ({ data, columns }) => {
  return (
    <Box m="6">
      <Flex p="2" borderColor="gray.200" borderWidth="1" direction="row">
        {columns.map((col) => (
          <Text
            key={col.key}
            _dark={{
              color: "coolGray.400",
            }}
            color="coolGray.500"
            flex={col?.flex || "1"}
            fontSize="md"
          >
            {col.header}
          </Text>
        ))}
      </Flex>
      <Flex direction="column">
        {data.map((row, index) => (
          <Flex
            key={index}
            p="2"
            borderColor="gray.200"
            borderWidth="1"
            direction="row"
            py="3"
          >
            {columns.map((cell) => (
              <Text
                key={cell.key}
                fontSize="md"
                color="coolGray.500"
                flex={cell?.flex || "1"}
                _light={{
                  color: `${
                    cell?.color?.light ? cell.color?.light : "coolGray.800"
                  }`,
                }}
                _dark={{
                  color: `${
                    cell?.color?.dark ? cell.color?.dark : "coolGray.50"
                  }`,
                }}
              >
                {/*
                    // @ts-ignore */}
                {row[cell.key]}
              </Text>
            ))}
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default Table;
