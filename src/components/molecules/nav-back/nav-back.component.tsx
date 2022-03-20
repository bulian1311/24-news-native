import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Headline, Spacer } from "../../atoms";
import { ArrowLeftIcon } from "../../../icons";
import { Props } from "./nav-back.props";
import { StyledTouchableOpacity } from "./nav-back.styled";

export const NavBack = ({ title }: Props) => {
  const navigation = useNavigation();

  return (
    <StyledTouchableOpacity onPress={() => navigation.goBack()}>
      <ArrowLeftIcon />

      <Spacer pos="left" size="l" />

      {title && (
        <Headline size="h2" weight="bold">
          {title}
        </Headline>
      )}
    </StyledTouchableOpacity>
  );
};
