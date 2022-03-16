import React from "react";
import { Text, View } from "react-native";
import { Props } from "./bookmark.props";
import { styles } from "./bookmark.styles";

export const BookmarkScreen = ({ ...props }: Props) => {
  return (
    <View style={styles.wrapper} {...props}>
      <Text>BookmarkScreen</Text>
    </View>
  );
};
