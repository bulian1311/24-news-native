import React from "react";
import { Props } from "./container.props";
import { StyledContainer } from "./container.styled";

export const Container = ({
  children,
  safeArea = true,
  fullHeight = true,
  ...props
}: Props) => {
  return (
    <StyledContainer safeArea={safeArea} fullHeight={fullHeight} {...props}>
      {children}
    </StyledContainer>
  );
};
