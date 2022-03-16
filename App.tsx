import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeContext } from "./src/context";
import { theme } from "./src/theme";
import { StackNavigator } from "./src/navigation";

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
      <ThemeContext.Provider value={theme}>
        <StatusBar style="auto" />
        <StackNavigator />
      </ThemeContext.Provider>
    </NavigationContainer>
  );
}
