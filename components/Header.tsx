import { Box, Heading, Flex } from "native-base";
import React from "react";
import { ArrowBackIcon } from "native-base";

const mobileLightBg = { bg: "violet.900" };
const mobileDarkBg = { bg: "coolGray.900" };

const Header = () => {
  return (
    <Box
      p="4"
      _light={{
        _android: mobileLightBg,
        _ios: mobileLightBg,
      }}
      _dark={{
        _android: mobileDarkBg,
        _ios: mobileDarkBg,
      }}
      _web={{
        padding: 2,
      }}
    >
      <Flex direction="row" alignItems="center">
        <ArrowBackIcon
          size="3"
          _light={{
            _web: {
              color: "coolGray.800",
            },
          }}
          color="coolGray.50"
        />
        <Heading
          _light={{
            _web: {
              color: "coolGray.800",
            },
          }}
          _dark={{
            color: "coolGray.50",
          }}
          color="coolGray.50"
          px="4"
          size="sm"
        >
          Mutual Fund Portfolio
        </Heading>
      </Flex>
    </Box>
  );
};

export default Header;
