import React from "react";
import { observer } from "mobx-react-lite";
import { Container } from "../../../containers";
import {
  Spacer,
  Headline,
  NavLink,
  CategoryList,
  NewsList,
} from "../../../components";
import { LogoIcon, BellIcon } from "../../../icons";
import { StyledHeader, StyledIconWrapper } from "./home.styled";

export const HomeScreen = () => {
  return (
    <Container>
      <Spacer />
      <StyledHeader>
        <LogoIcon />
        <Spacer pos="left" size="s" />
        <Headline size="h2" weight="bold">
          News 24
        </Headline>
        <StyledIconWrapper>
          <NavLink navigateTo="Home">
            <BellIcon />
          </NavLink>
        </StyledIconWrapper>
      </StyledHeader>

      <Spacer size="xl" />
      <CategoryList
        categories={[
          "Trending",
          "Busines",
          "Sport",
          "Politics",
          "Science",
          "Technology",
          "Games",
        ]}
      />

      <Spacer size="xl" />
      <NewsList />
    </Container>
  );
};
