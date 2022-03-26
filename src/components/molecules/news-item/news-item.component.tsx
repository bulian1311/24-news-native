import React from "react";
import { Headline, Paragraph, Spacer, NavLink, Image } from "../../atoms";
import { MenuIcon } from "../../../icons";
import { Props } from "./news-item.props";
import { formatDate } from "../../../utils";
import {
  StyledItemWrapper,
  StyledContentWrapper,
  StyledBottomWrapper,
} from "./news-item.styled";

import qq from "../../../../assets/news.png";

export const NewsItem = ({ newsItem, ...props }: Props) => {
  console.log(qq);

  const title: string =
    newsItem.title.length > 60
      ? `${newsItem.title.substring(0, 60)}...`
      : newsItem.title;

  const date = formatDate(newsItem.datePublished);
  const img = newsItem.image.url;

  return (
    <StyledItemWrapper {...props}>
      <NavLink navigateTo="Details" params={newsItem}>
        <Image src={img} height={140} width={140} />
      </NavLink>

      <Spacer pos="right" />
      <StyledContentWrapper>
        <NavLink navigateTo="Details" params={newsItem}>
          <Headline size="h3">{title}</Headline>
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
