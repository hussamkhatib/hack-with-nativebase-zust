import { Badge, Flex, Text } from "native-base";
import React, { FC } from "react";

const Stats = () => {
  return (
    <Flex justifyContent="center" direction="row" width="full" py="4">
      <Stat
        primary="$15303.00"
        secondary="Total Invested"
        lightcolor="violet.800"
        darkcolor="violet.500"
      />
      <Stat
        primary="$45303.00"
        secondary="14% Return"
        lightcolor="emerald.800"
        darkcolor="emerald.500"
      />
    </Flex>
  );
};

export default Stats;

interface Props {
  primary: string;
  secondary: string;
  darkcolor: string;
  lightcolor: string;
}

const Stat: FC<Props> = ({ primary, secondary, lightcolor, darkcolor }) => (
  <Badge
    mx="4"
    flex="1"
    variant="outline"
    _dark={{
      borderColor: darkcolor,
    }}
    borderColor={lightcolor}
    borderWidth="1"
    borderRadius="4"
    justifyContent="center"
  >
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      px="4"
      py="3"
    >
      <Text
        fontSize="xl"
        fontWeight={500}
        _dark={{
          color: darkcolor,
        }}
        color={lightcolor}
      >
        {primary}
      </Text>
      <Text
        fontWeight={500}
        _dark={{
          color: darkcolor,
        }}
        fontSize="xs"
        color={lightcolor}
      >
        {secondary}
      </Text>
    </Flex>
  </Badge>
);
