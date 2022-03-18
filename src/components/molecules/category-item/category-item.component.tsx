import React from "react";
import { Props } from "./category-item.props";
import { Headline } from "../../atoms";
import { StyledView } from "./category-item.styled";

export const CategoryItem = ({ title, active, ...props }: Props) => {
  return (
    <StyledView active={active} {...props}>
      <Headline color={active ? "light" : "dark"} size="h3">
        {title}
      </Headline>
    </StyledView>
  );
};
