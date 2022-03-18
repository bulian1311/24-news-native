import { ComponentProps } from "react";
import { View } from "react-native";

export type Props = ComponentProps<typeof View> & {
  pos?: "top" | "right" | "bottom" | "left";
  size?: "xs" | "s" | "m" | "l" | "xl" | "xxl";
};
