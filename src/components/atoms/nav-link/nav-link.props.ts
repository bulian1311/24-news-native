import { ComponentProps } from "react";
import { TouchableOpacity } from "react-native";

export type Props = ComponentProps<typeof TouchableOpacity> & {
  navigateTo: "Tabs" | "Home";
  params?: any;
};
