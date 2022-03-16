import React from "react";
import { Text, View } from "react-native";
import { Props } from "./home.props";
import { styles } from "./home.styles";

export const HomeScreen = ({ ...props }: Props) => {
  return (
    <View style={styles.wrapper} {...props}>
      <Text>HomeScreen</Text>
    </View>
  );
};
