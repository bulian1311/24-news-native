import React, { Fragment } from "react";
import { useRoute } from "@react-navigation/native";
import { Container } from "../../../containers";
import {
  Spacer,
  Headline,
  Paragraph,
  NavBack,
  Image,
} from "../../../components";
import { BookmarkIcon } from "../../../icons";
import { formatDate } from "../../../utils";
import { StyledHeader, StyledScrollView } from "./details.styled";

export const DetailsScreen = () => {
  const { params }: any = useRoute();
  const date = formatDate(params.datePublished);
  let body = params.body;

  return (
    <Fragment>
      <Container fullHeight={false}>
        <Spacer />
        <StyledHeader>
          <NavBack />
          <BookmarkIcon />
        </StyledHeader>
        <Spacer />
      </Container>

      <StyledScrollView showsHorizontalScrollIndicator={false}>
        <Image src={params.image.url} height={230} />

        <Container safeArea={false}>
          <Spacer size="m" />
          <Headline size="h2">{params.title}</Headline>

          <Spacer />
          <StyledHeader>
            <Paragraph size="title" color="disabled" weight="bold">
              by {params.provider.name}
            </Paragraph>
            <Paragraph size="title" color="disabled" weight="bold">
              {date}
            </Paragraph>
          </StyledHeader>

          <Spacer />
          <Paragraph size="button">{body}</Paragraph>

          <Spacer />
        </Container>
      </StyledScrollView>
    </Fragment>
  );
};
