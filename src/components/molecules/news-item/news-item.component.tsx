import React from "react";
import { format } from "date-fns";
import { Image, Headline, Paragraph, Spacer, NavLink } from "../../atoms";
import { MenuIcon } from "../../../icons";
import { Props } from "./news-item.props";
import {
  StyledItemWrapper,
  StyledContentWrapper,
  StyledBottomWrapper,
} from "./news-item.styled";

export const NewsItem = ({ newsItem, ...props }: Props) => {
  const title: string =
    newsItem.title.length > 60
      ? `${newsItem.title.substring(0, 60)}...`
      : newsItem.title;

  const date = format(new Date(newsItem.datePublished), "yyyy/MM/dd");

  return (
    <StyledItemWrapper {...props}>
      <NavLink navigateTo="Home">
        <Image src={newsItem.image.url} height={140} width={140} />
      </NavLink>

      <Spacer pos="right" />
      <StyledContentWrapper>
        <NavLink navigateTo="Home">
          <Headline size="h2">{title}</Headline>
        </NavLink>

        <Paragraph color="disabled" weight="bold">
          by {newsItem.provider.name}
        </Paragraph>

        <StyledBottomWrapper>
          <Paragraph color="info" weight="bold">
            World
          </Paragraph>

          <Paragraph color="disabled" weight="bold">
            {date}
          </Paragraph>

          <MenuIcon />
        </StyledBottomWrapper>
      </StyledContentWrapper>
    </StyledItemWrapper>
  );
};
