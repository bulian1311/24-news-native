import React from "react";
import { Props } from "./search-field.props";
import { StyledView, StyledText } from "./search-field.styled";

export const SearchField = ({ ...props }: Props) => {
  return (
    <StyledView {...props}>
      <StyledText>SearchField</StyledText>
    </StyledView>
  );
};
