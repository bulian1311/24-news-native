import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Props } from "./nav-link.props";

export const NavLink = ({ children, navigateTo, params }: Props) => {
  const navigation: any = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate({ name: navigateTo, params: params })}
    >
      {children}
    </TouchableOpacity>
  );
};
