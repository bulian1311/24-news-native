import { ComponentProps } from "react";
import { Text } from "react-native";

export type Props = ComponentProps<typeof Text> & {
  color?: "dark" | "light" | "danger" | "disabled";
  size?: "caption" | "body" | "button" | "title";
  weight?: "regular" | "medium" | "bold";
};
