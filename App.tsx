import React from "react";
import {
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  Container,
  Center,
  StatusBar,
  SunIcon,
  MoonIcon,
  Button,
} from "native-base";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}
export default function App() {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <StatusBar />
      </Center>
      <Container
        _dark={{
          _web: {
            bg: "coolGray.700",
          },
          bg: "coolGray.800",
        }}
        _light={{
          _web: {
            bg: "violet.50",
          },
        }}
        maxW="full"
        height="full"
      >
        <NavBar />
        <Main />
      </Container>
      <ToggleDarkMode />
    </NativeBaseProvider>
  );
}

function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      zIndex={10}
      borderWidth="1"
      width="10"
      p="2"
      borderRadius="full"
      position="absolute"
      bottom={10}
      right={10}
      _dark={{
        _pressed: {
          bg: "coolGray.700",
        },
        borderColor: "coolGray.900",
        bg: "coolGray.800",
      }}
      borderColor="violet.900"
      bg="white"
      _pressed={{
        bg: "violet.200",
      }}
      onPress={() => toggleColorMode()}
    >
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}
