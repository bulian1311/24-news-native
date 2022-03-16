import React from "react";
import { Text, View } from "react-native";
import { Props } from "./search.props";
import { styles } from "./search.styles";

export const SearchScreen = ({ ...props }: Props) => {
  return (
    <View style={styles.wrapper} {...props}>
      <Text>SearchScreen</Text>
    </View>
  );
};
