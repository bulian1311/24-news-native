import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme";
import { StackNavigator } from "./src/navigation";
import { StoreContext, defaultStore } from "./src/context";

import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <StoreContext.Provider value={defaultStore}>
        <ThemeProvider theme={theme}>
          <StackNavigator />
        </ThemeProvider>
      </StoreContext.Provider>
    </NavigationContainer>
  );
}
