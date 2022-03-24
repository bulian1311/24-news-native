import React from "react";
import {
  StyledWrapper,
  StyledViewImage,
  StyledViewText,
  StyledView,
} from "./news-loading-item.styled";

export const NewsLoadingItem = () => {
  return (
    <StyledWrapper>
      <StyledViewImage />
      <StyledView>
        <StyledViewText />
        <StyledViewText />
        <StyledViewText />
        <StyledViewText />
      </StyledView>
    </StyledWrapper>
  );
};
