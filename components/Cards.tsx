import { Badge, Box, Flex, Heading, ScrollView, VStack } from "native-base";
import React, { FC } from "react";
import { Text } from "native-base";

interface Props {
  data: any[];
}

const Cards: FC<Props> = ({ data }) => {
  return (
    <ScrollView width={["full"]} h="700">
      {data.map((val, i) => (
        <Box
          key={i}
          alignItems="flex-start"
          my="2"
          p="2"
          bg="coolGray.100"
          borderRadius="4"
          _dark={{ bg: "coolGray.700" }}
        >
          <Heading
            size="sm"
            fontWeight={700}
            color="coolGray.800"
            _dark={{ color: "coolGray.50" }}
          >
            {val.companyName}
          </Heading>
          <Badge my="2" bg="emerald.600" _dark={{ bg: "emerald.500" }}>
            <Text color="coolGray.100" _dark={{ color: "coolGray.800" }}>
              SIP x 6
            </Text>
          </Badge>
          <Flex direction="row" width="full" justifyContent="space-between">
            <VStack>
              <Text
                color="coolGray.500"
                _dark={{ color: "coolGray.400" }}
                pb="1"
              >
                Investment
              </Text>
              <Text color="coolGray.800" _dark={{ color: "coolGray.50" }}>
                {val.investment}
              </Text>
            </VStack>
            <VStack>
              <Text
                color="coolGray.500"
                _dark={{ color: "coolGray.400" }}
                pb="1"
              >
                Current Value
              </Text>
              <Text color="coolGray.800" _dark={{ color: "coolGray.50" }}>
                {val.currentValue}
              </Text>
            </VStack>
            <VStack>
              <Text
                color="coolGray.500"
                _dark={{ color: "coolGray.400" }}
                pb="1"
              >
                Returns
              </Text>
              <Text color="emerald.500" _dark={{ color: "emerald.500" }}>
                {val.returns}
              </Text>
            </VStack>
          </Flex>
        </Box>
      ))}
    </ScrollView>
  );
};

export default Cards;
