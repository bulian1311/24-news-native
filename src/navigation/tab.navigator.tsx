import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  SearchScreen,
  BookmarkScreen,
  //SettingsScreen,
} from "../screens";
import { NavTabButton } from "../components";
import { useTheme } from "../hooks";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          flexDirection: "row",
          alignItems: "center",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarButton: () => <NavTabButton navigateTo="Home" />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarButton: () => <NavTabButton navigateTo="Search" />,
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{
          tabBarButton: () => <NavTabButton navigateTo="Bookmark" />,
        }}
      />
      {/* <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarButton: () => <NavTabButton navigateTo="Settings" />,
        }}
      /> */}
    </Tab.Navigator>
  );
};
