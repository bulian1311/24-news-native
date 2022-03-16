import React from "react";
import { Text, View } from "react-native";
import { Props } from "./qq.props";
import { styles } from "./qq.styles";

export const QQ = ({ ...props }: Props) => {
  return (
    <View style={styles.wrapper} {...props}>
      <Text>QQ</Text>
    </View>
  );
};
