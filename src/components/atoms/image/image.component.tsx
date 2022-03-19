import React from "react";
import { Props } from "./image.props";
import { StyledImageWrapper, StyledImage } from "./image.styled";

export const Image = ({ src, height, width }: Props) => {
  return (
    <StyledImageWrapper>
      <StyledImage
        width={width}
        height={height}
        style={{ resizeMode: "cover" }}
        source={{ uri: src }}
      />
    </StyledImageWrapper>
  );
};
