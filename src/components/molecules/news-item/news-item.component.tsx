import React from "react";
import { Image, Headline, Paragraph, Spacer, NavLink } from "../../atoms";
import { MenuIcon } from "../../../icons";
import { Props } from "./news-item.props";
import {
  StyledItemWrapper,
  StyledContentWrapper,
  StyledBottomWrapper,
} from "./news-item.styled";

export const NewsItem = ({ ...props }: Props) => {
  return (
    <StyledItemWrapper {...props}>
      <NavLink navigateTo="Home">
        <Image
          src="https://shotkit.com/wp-content/uploads/2020/12/kit-lens.jpg"
          height={140}
          width={140}
        />
      </NavLink>

      <Spacer pos="right" />
      <StyledContentWrapper>
        <NavLink navigateTo="Home">
          <Headline size="h2">
            Test news, Test news, Test news, Test news, Test news, Test news.
          </Headline>
        </NavLink>

        <Paragraph color="disabled" weight="bold">
          By Jane Smith
        </Paragraph>

        <StyledBottomWrapper>
          <Paragraph color="info" weight="bold">
            World
          </Paragraph>

          <Paragraph color="disabled" weight="bold">
            1m ago
          </Paragraph>

          <MenuIcon />
        </StyledBottomWrapper>
      </StyledContentWrapper>
    </StyledItemWrapper>
  );
};
