import {
  Avatar,
  Box,
  HamburgerIcon,
  Heading,
  Hidden,
  HStack,
  Text,
} from "native-base";
import React from "react";

const NavBar = () => {
  return (
    <Hidden platform={["android", "ios"]}>
      <Box
        py="3"
        px="8"
        _dark={{ bg: "coolGray.900" }}
        _light={{ bg: "white" }}
        width="full"
      >
        <HStack
          px="1"
          justifyContent="space-between"
          alignItems="center"
          w="100%"
        >
          <HStack alignItems="center" space={2}>
            <HamburgerIcon
              _light={{ color: "coolGray.800" }}
              _dark={{ color: "coolGray.50" }}
              size="4"
            />
            <Heading fontWeight={700} size="md">
              <Text color="violet.500">HackWith</Text>
              <Text _light={{ color: "black" }} _dark={{ color: "white" }}>
                NativeBase
              </Text>
            </Heading>
          </HStack>
          <Avatar
            size="sm"
            bg="violet.500"
            source={{
              uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            }}
          >
            AJ
          </Avatar>
        </HStack>
      </Box>
    </Hidden>
  );
};

export default NavBar;
