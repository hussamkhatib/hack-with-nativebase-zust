import React from "react";
import {
  Text,
  HStack,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  Container,
} from "native-base";
import NavBar from "./components/NavBar";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}
export default function App() {
  return (
    <NativeBaseProvider>
      <Container
        _dark={{
          _web: {
            bg: "coolGray.700",
          },
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
        <ToggleDarkMode />
      </Container>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
