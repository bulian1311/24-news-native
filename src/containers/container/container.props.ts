import { ComponentProps } from "react";
import { SafeAreaView } from "react-native";

export type Props = ComponentProps<typeof SafeAreaView> & {
  fullHeight?: boolean;
  safeArea?: boolean;
};
