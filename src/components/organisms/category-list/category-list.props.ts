import { ComponentProps } from "react";
import { ScrollView } from "react-native";

export type Props = ComponentProps<typeof ScrollView> & {
  categories: string[];
};
