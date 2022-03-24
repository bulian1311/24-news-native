import React from "react";
import { Spacer } from "../../atoms";
import { NewsLoadingItem } from "../../molecules";
import { StyledView } from "./news-loading-list.styled";

export const NewsLoadingList = () => {
  return (
    <StyledView>
      <NewsLoadingItem />
      <Spacer />
      <NewsLoadingItem />
      <Spacer />
      <NewsLoadingItem />
      <Spacer />
      <NewsLoadingItem />
      <Spacer />
      <NewsLoadingItem />
    </StyledView>
  );
};
