import React from "react";
import { SafeAreaView } from "react-native";
import { Props } from "./container.props";
import { styles } from "./container.styles";

export const Container = ({ children, ...props }: Props) => {
  return (
    <SafeAreaView style={styles.container} {...props}>
      {children}
    </SafeAreaView>
  );
};
