import React from "react";
import { Props } from "./image.props";
import { StyledImageWrapper, StyledImage } from "./image.styled";
import newsImage from "../../../../assets/news.png";

export const Image = ({ src, height, width }: Props) => {
  const source = src ? { uri: src } : newsImage;

  return (
    <StyledImageWrapper>
      <StyledImage
        width={width}
        height={height}
        style={{ resizeMode: "cover" }}
        source={source}
      />
    </StyledImageWrapper>
  );
};
