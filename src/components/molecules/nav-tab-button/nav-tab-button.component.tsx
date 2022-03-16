import React from "react";
import { TouchableOpacity } from "react-native";
import { HomeIcon, SearchIcon, BookmarkIcon, SettingsIcon } from "../../icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../../hooks";
import { Props } from "./nav-tab-button.props";
import { styles } from "./nav-tab-button.styles";

export const NavTabButton = ({ navigateTo }: Props) => {
  const { navigate, isFocused }: any = useNavigation();
  const theme = useTheme();
  const activeColor = theme.colors.text.dark;

  let navIcon: any;

  switch (navigateTo) {
    case "Home":
      navIcon = <HomeIcon fill={isFocused() ? activeColor : "none"} />;
      break;
    case "Search":
      navIcon = <SearchIcon fill={isFocused() ? activeColor : "none"} />;
      break;
    case "Bookmark":
      navIcon = <BookmarkIcon fill={isFocused() ? activeColor : "none"} />;
      break;
    case "Settings":
      navIcon = <SettingsIcon fill={isFocused() ? activeColor : "none"} />;
      break;
  }

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => navigate(navigateTo)}
    >
      {navIcon}
    </TouchableOpacity>
  );
};
