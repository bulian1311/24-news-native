import React from "react";
import { Text, View } from "react-native";
import { Props } from "./settings.props";
import { styles } from "./settings.styles";

export const SettingsScreen = ({ ...props }: Props) => {
  return (
    <View style={styles.wrapper} {...props}>
      <Text>SettingsScreen</Text>
    </View>
  );
};
